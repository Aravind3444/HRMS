import { SetMetadata } from '@nestjs/common';

export const REQUIRED_FEATURE_FLAG_KEY = 'requiredFeatureFlag';

export const FeatureFlag = (flagCode: string) => SetMetadata(REQUIRED_FEATURE_FLAG_KEY, flagCode);