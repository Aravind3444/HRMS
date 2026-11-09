import { IsOptional, IsInt, Min, Max, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CursorPaginationDto {
  @ApiPropertyOptional({ description: 'Cursor for next page (opaque token)' })
  @IsOptional()
  @IsString()
  cursor?: string;

  @ApiPropertyOptional({ default: 20, minimum: 1, maximum: 100 })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  @Type(() => Number)
  limit?: number = 20;
}

export function encodeCursor(value: string): string {
  return Buffer.from(value).toString('base64url');
}

export function decodeCursor(cursor: string): string {
  return Buffer.from(cursor, 'base64url').toString('utf8');
}

export function buildCursorPage<T>(
  items: T[],
  limit: number,
  getId: (item: T) => string,
): { items: T[]; nextCursor: string | null; hasMore: boolean } {
  const hasMore = items.length > limit;
  const pageItems = hasMore ? items.slice(0, limit) : items;
  const nextCursor = hasMore ? encodeCursor(getId(pageItems[pageItems.length - 1])) : null;
  return { items: pageItems, nextCursor, hasMore };
}
