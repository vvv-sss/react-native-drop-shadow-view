import type { ViewProps, ViewStyle } from 'react-native';

/**
 * Available shadow sizes
 */
export type DropShadowSize = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * iOS-specific shadow style properties
 */
export interface IOSShadowStyle {
  shadowColor?: ViewStyle['shadowColor'];
  shadowOffset?: ViewStyle['shadowOffset'];
  shadowOpacity?: ViewStyle['shadowOpacity'];
  shadowRadius?: ViewStyle['shadowRadius'];
}

/**
 * Android-specific shadow style properties
 */
export interface AndroidShadowStyle {
  shadowColor?: ViewStyle['shadowColor'];
  elevation?: ViewStyle['elevation'];
}

/**
 * Props for the DropShadowView component
 * extends ViewProps for platform-specific shadow properties
 */
export interface DropShadowViewProps extends ViewProps {
  /**
   * The children to be wrapped with the drop shadow
   */
  children?: React.ReactNode;

  /**
   * Class name for the component (NativeWind support)
   */
  className?: string;

  /**
   * Shadow size preset
   * @default 'md'
   */
  shadowSize?: DropShadowSize;

  /**
   * Shadow color
   * @default 'black'
   */
  shadowColor?: string;

  /**
   * iOS-specific shadow style overrides
   * Allows customization of shadowColor, shadowOffset, shadowOpacity, and shadowRadius
   */
  iosShadowStyle?: IOSShadowStyle;

  /**
   * Android-specific shadow style overrides
   * Allows customization of shadowColor and elevation
   */
  androidShadowStyle?: AndroidShadowStyle;
}
