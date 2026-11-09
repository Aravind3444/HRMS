import { Injectable, Logger, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class LocationService {
  private readonly logger = new Logger(LocationService.name);

  constructor(private readonly prisma: PrismaService) {}

  async create(tenantId: string, dto: any) {
    const { legalEntityId, name, code, address, state, pincode, timezone, latitude, longitude, geofenceRadius } = dto;

    // Verify legal entity exists
    const legalEntity = await this.prisma.legalEntity.findFirst({
      where: { id: legalEntityId, tenantId },
    });
    if (!legalEntity) throw new NotFoundException('Legal entity not found');

    // Check if code already exists
    const existing = await this.prisma.location.findUnique({
      where: { tenantId_code: { tenantId, code } },
    });
    if (existing) throw new ConflictException('Location code already exists');

    const location = await this.prisma.location.create({
      data: {
        tenantId,
        legalEntityId,
        name,
        code,
        address,
        state,
        pincode,
        timezone: timezone || 'Asia/Kolkata',
        latitude,
        longitude,
        geofenceRadius,
      },
    });

    this.logger.log(`Location created: ${code} in tenant ${tenantId}`);
    return { success: true, data: location };
  }

  async list(tenantId: string) {
    const locations = await this.prisma.location.findMany({
      where: { tenantId },
      orderBy: { createdAt: 'desc' },
      include: {
        legalEntity: { select: { id: true, name: true, code: true } },
      },
    });
    return { success: true, data: locations };
  }

  async getById(tenantId: string, id: string) {
    const location = await this.prisma.location.findFirst({
      where: { id, tenantId },
      include: {
        legalEntity: { select: { id: true, name: true, code: true } },
      },
    });
    if (!location) throw new NotFoundException('Location not found');
    return { success: true, data: location };
  }

  async update(tenantId: string, id: string, dto: any) {
    const location = await this.prisma.location.findFirst({
      where: { id, tenantId },
    });
    if (!location) throw new NotFoundException('Location not found');

    if (dto.code && dto.code !== location.code) {
      const existing = await this.prisma.location.findUnique({
        where: { tenantId_code: { tenantId, code: dto.code } },
      });
      if (existing) throw new ConflictException('Location code already exists');
    }

    const updated = await this.prisma.location.update({
      where: { id },
      data: {
        ...(dto.name && { name: dto.name }),
        ...(dto.code && { code: dto.code }),
        ...(dto.address !== undefined && { address: dto.address }),
        ...(dto.state !== undefined && { state: dto.state }),
        ...(dto.pincode !== undefined && { pincode: dto.pincode }),
        ...(dto.timezone !== undefined && { timezone: dto.timezone }),
        ...(dto.latitude !== undefined && { latitude: dto.latitude }),
        ...(dto.longitude !== undefined && { longitude: dto.longitude }),
        ...(dto.geofenceRadius !== undefined && { geofenceRadius: dto.geofenceRadius }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
      },
    });
    return { success: true, data: updated };
  }

  async delete(tenantId: string, id: string) {
    const location = await this.prisma.location.findFirst({
      where: { id, tenantId },
    });
    if (!location) throw new NotFoundException('Location not found');

    await this.prisma.location.delete({ where: { id } });
    return { success: true, message: 'Location deleted' };
  }
}
