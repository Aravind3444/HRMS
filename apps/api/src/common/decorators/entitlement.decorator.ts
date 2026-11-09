import { SetMetadata } from '@nestjs/common';

export const REQUIRED_ENTITLEMENT_KEY = 'requiredEntitlement';

/**
 * Decorator to enforce plan module entitlement on endpoints (TEN-011)
 * e.g., @RequireEntitlement('M13') // Requires Payroll module included in plan
 */
export const RequireEntitlement = (moduleCode: string) =>
  SetMetadata(REQUIRED_ENTITLEMENT_KEY, moduleCode);

// Alias Entitlement for backward compatibility
export const Entitlement = RequireEntitlement;

