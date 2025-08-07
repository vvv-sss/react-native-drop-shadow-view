# react-native-drop-shadow-view

A React Native component that renders platform-optimized drop shadows with customizable size presets. Works seamlessly on both iOS and Android with native shadow implementations.

## Features

- 🎯 **Platform Optimized**: Uses native shadow APIs for best performance
- 📏 **Size Presets**: Pre-configured shadow sizes (xs, sm, md, lg, xl)
- 🎨 **Custom Colors**: Full shadow color customization support
- ⚙️ **Platform Overrides**: iOS and Android specific shadow customization
- 🎯 **TypeScript**: Full TypeScript support included

## Installation

```sh
npm install react-native-drop-shadow-view
```

## Basic Usage

```jsx
import { DropShadowView } from 'react-native-drop-shadow-view';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <DropShadowView style={styles.card} shadowSize="md">
      <Text style={styles.cardTitle}>Card with Shadow</Text>
      <Text style={styles.cardText}>This card has a medium drop shadow</Text>
    </DropShadowView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardText: {
    color: '#666',
  },
});
```

## Shadow Sizes

The component comes with predefined shadow size presets:

```jsx
// No shadow
<DropShadowView shadowSize="none">
  <Text>No Shadow</Text>
</DropShadowView>

// Extra small shadow
<DropShadowView shadowSize="xs">
  <Text>Extra Small Shadow</Text>
</DropShadowView>

// Small shadow
<DropShadowView shadowSize="sm">
  <Text>Small Shadow</Text>
</DropShadowView>

// Medium shadow (default)
<DropShadowView shadowSize="md">
  <Text>Medium Shadow</Text>
</DropShadowView>

// Large shadow
<DropShadowView shadowSize="lg">
  <Text>Large Shadow</Text>
</DropShadowView>

// Extra large shadow
<DropShadowView shadowSize="xl">
  <Text>Extra Large Shadow</Text>
</DropShadowView>
```

## Custom Shadow Colors

You can customize shadow colors using the `shadowColor` prop:

```jsx
// Blue shadow
<DropShadowView 
  shadowSize="md" 
  shadowColor="#3b82f6"
  style={styles.blueCard}
>
  <Text>Blue Shadow</Text>
</DropShadowView>

// Green shadow
<DropShadowView 
  shadowSize="md" 
  shadowColor="#10b981"
  style={styles.greenCard}
>
  <Text>Green Shadow</Text>
</DropShadowView>

// Custom RGBA shadow
<DropShadowView 
  shadowSize="lg" 
  shadowColor="rgba(59, 130, 246, 0.5)"
  style={styles.card}
>
  <Text>Semi-transparent Blue Shadow</Text>
</DropShadowView>
```

## Platform-Specific Overrides

For fine-grained control, you can override platform-specific shadow properties:

```jsx
<DropShadowView
  shadowSize="md"
  iosShadowStyle={{
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  }}
  androidShadowStyle={{
    elevation: 10,
  }}
>
  <Text>Custom Platform Shadows</Text>
</DropShadowView>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `shadowSize` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Predefined shadow size preset |
| `shadowColor` | `string` | 'black' | Custom shadow color (hex, rgba, etc.) |
| `iosShadowStyle` | `object` | `undefined` | iOS-specific shadow style overrides |
| `androidShadowStyle` | `object` | `undefined` | Android-specific shadow style overrides |
| `style` | `ViewStyle` | `undefined` | Additional styles for the container |
| `children` | `ReactNode` | `undefined` | Content to render inside the shadow view |

### iOS Shadow Style Properties

When using `iosShadowStyle`, you can override these properties:

```typescript
{
  shadowColor?: string;
  shadowOffset?: { width: number; height: number };
  shadowOpacity?: number;
  shadowRadius?: number;
}
```

### Android Shadow Style Properties

When using `androidShadowStyle`, you can override these properties:

```typescript
{
  elevation?: number;
  shadowColor?: string;
}
```

## Platform Notes

### iOS
- Supports full shadow customization including color, offset, opacity, and blur radius
- Shadows are rendered using Core Graphics
- All shadow properties are supported

### Android
- Uses Material Design elevation system
- Primary shadow control is through `elevation` property
- `shadowColor` works in combination with elevation
- Other shadow properties (offset, opacity, radius) are not supported

## Examples

### Card Layout
```jsx
<View style={styles.row}>
  <DropShadowView style={[styles.card, styles.flex]} shadowSize="sm">
    <Text style={styles.centeredText}>Left Card</Text>
  </DropShadowView>
  <DropShadowView style={[styles.card, styles.flex]} shadowSize="sm">
    <Text style={styles.centeredText}>Right Card</Text>
  </DropShadowView>
</View>
```

### Complex Card Component
```jsx
<DropShadowView style={styles.largeCard} shadowSize="md">
  <Text style={styles.cardTitle}>Card Component</Text>
  <Text style={styles.description}>
    This is a card-like component with a drop shadow that automatically
    adapts to the current theme (light/dark).
  </Text>
  <View style={styles.actionRow}>
    <View style={styles.actionButton}>
      <Text style={styles.actionButtonText}>Action 1</Text>
    </View>
    <View style={styles.actionButtonSecondary}>
      <Text style={styles.actionButtonSecondaryText}>Action 2</Text>
    </View>
  </View>
</DropShadowView>
```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
