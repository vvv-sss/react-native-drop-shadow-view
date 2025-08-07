import { forwardRef } from 'react';
import { Platform, View } from 'react-native';
import type { DropShadowViewProps } from './drop-shadow-view.types';
import {
  ANDROID_ELEVATION_MAP,
  DEFAULT_SHADOW_COLOR,
  IOS_SHADOW_MAP,
} from './drop-shadow-view.constants';

const DropShadowView = forwardRef<View, DropShadowViewProps>((props, ref) => {
  const {
    children,
    style,
    shadowSize = 'md',
    shadowColor,
    iosShadowStyle,
    androidShadowStyle,
    ...restProps
  } = props;

  const currentShadowColor = shadowColor || DEFAULT_SHADOW_COLOR;

  const iosShadowConfig = IOS_SHADOW_MAP[shadowSize];
  const androidElevation = ANDROID_ELEVATION_MAP[shadowSize];

  if (Platform.OS === 'android') {
    const androidShadowStyles = {
      shadowColor: currentShadowColor,
      elevation: androidElevation,
      ...androidShadowStyle,
    };

    return (
      <View ref={ref} style={[androidShadowStyles, style]} {...restProps}>
        {children}
      </View>
    );
  }

  const iosShadowStyles = {
    shadowColor: currentShadowColor,
    ...iosShadowConfig,
    ...iosShadowStyle,
  };

  return (
    <View ref={ref} style={[iosShadowStyles, style]} {...restProps}>
      {children}
    </View>
  );
});

// --------------------------------------------------

DropShadowView.displayName = 'DropShadowView';

/**
 * DropShadowView component
 *
 * @component DropShadowView - Container that wraps children with platform-specific drop shadows.
 * Provides optimized shadow rendering with size presets.
 *
 * Platform behavior:
 * - iOS: Uses shadowColor, shadowOffset, shadowOpacity, shadowRadius
 * - Android: Uses shadowColor and elevation only
 *
 * IMPORTANT: The component must have a background color set (not transparent) on both platforms for proper shadow rendering.
 *
 * Size presets: 'none', 'xs', 'sm', 'md', 'lg', 'xl'
 * Custom shadows: Use iosShadowStyle or androidShadowStyle props for platform-specific overrides.
 */

export default DropShadowView;
