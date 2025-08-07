import type { DropShadowSize } from './drop-shadow-view.types';

/**
 * Shadow configurations for iOS platform
 */
export const IOS_SHADOW_MAP: Record<
  DropShadowSize,
  {
    shadowOffset: { width: number; height: number };
    shadowOpacity: number;
    shadowRadius: number;
  }
> = {
  none: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
  },
  xs: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
  },
  sm: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  md: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  lg: {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  xl: {
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
};

/**
 * Elevation values for Android platform
 * Maps to Material Design elevation levels
 */
export const ANDROID_ELEVATION_MAP: Record<DropShadowSize, number> = {
  none: 0,
  xs: 1,
  sm: 2,
  md: 4,
  lg: 8,
  xl: 12,
};

/**
 * Default shadow colors
 */
export const DEFAULT_SHADOW_COLOR = 'black';
