import { DropShadowView } from 'react-native-drop-shadow-view';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.sectionTitle}>Shadow Sizes</Text>

      <View style={styles.section}>
        <DropShadowView style={styles.card} shadowSize="none">
          <Text style={styles.cardTitle}>No Shadow</Text>
          <Text style={styles.cardSubtitle}>shadowSize="none"</Text>
        </DropShadowView>

        <DropShadowView style={styles.card} shadowSize="xs">
          <Text style={styles.cardTitle}>Extra Small</Text>
          <Text style={styles.cardSubtitle}>shadowSize="xs"</Text>
        </DropShadowView>

        <DropShadowView style={styles.card} shadowSize="sm">
          <Text style={styles.cardTitle}>Small</Text>
          <Text style={styles.cardSubtitle}>shadowSize="sm"</Text>
        </DropShadowView>

        <DropShadowView style={styles.card} shadowSize="md">
          <Text style={styles.cardTitle}>Medium (Default)</Text>
          <Text style={styles.cardSubtitle}>shadowSize="md"</Text>
        </DropShadowView>

        <DropShadowView style={styles.card} shadowSize="lg">
          <Text style={styles.cardTitle}>Large</Text>
          <Text style={styles.cardSubtitle}>shadowSize="lg"</Text>
        </DropShadowView>

        <DropShadowView style={styles.card} shadowSize="xl">
          <Text style={styles.cardTitle}>Extra Large</Text>
          <Text style={styles.cardSubtitle}>shadowSize="xl"</Text>
        </DropShadowView>
      </View>

      <Text style={styles.sectionTitle}>Custom Colors</Text>

      <View style={styles.section}>
        <DropShadowView
          style={styles.blueCard}
          shadowSize="md"
          shadowColor="#3b82f6"
        >
          <Text style={styles.blueTitleText}>Blue Shadow</Text>
          <Text style={styles.blueSubtitleText}>shadowColor="#3b82f6"</Text>
        </DropShadowView>

        <DropShadowView
          style={styles.greenCard}
          shadowSize="md"
          shadowColor="#10b981"
        >
          <Text style={styles.greenTitleText}>Green Shadow</Text>
          <Text style={styles.greenSubtitleText}>shadowColor="#10b981"</Text>
        </DropShadowView>

        <DropShadowView
          style={styles.purpleCard}
          shadowSize="md"
          shadowColor="#8b5cf6"
        >
          <Text style={styles.purpleTitleText}>Purple Shadow</Text>
          <Text style={styles.purpleSubtitleText}>shadowColor="#8b5cf6"</Text>
        </DropShadowView>

        <DropShadowView
          style={styles.redCard}
          shadowSize="md"
          shadowColor="#ef4444"
        >
          <Text style={styles.redTitleText}>Red Shadow</Text>
          <Text style={styles.redSubtitleText}>shadowColor="#ef4444"</Text>
        </DropShadowView>
      </View>

      <Text style={styles.sectionTitle}>Layout Examples</Text>

      <View style={styles.section}>
        <View style={styles.row}>
          <DropShadowView style={[styles.card, styles.flex1]} shadowSize="sm">
            <Text style={styles.centeredText}>Left</Text>
          </DropShadowView>
          <DropShadowView
            style={[styles.cardSecondary, styles.flex1]}
            shadowSize="sm"
          >
            <Text style={styles.centeredText}>Right</Text>
          </DropShadowView>
        </View>

        <DropShadowView style={styles.largeCard} shadowSize="md">
          <Text style={styles.largeCardTitle}>Card Component</Text>
          <Text style={styles.cardDescription}>
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
      </View>

      <Text style={styles.sectionTitle}>Theme-Aware Shadows</Text>

      <View style={styles.section}>
        <DropShadowView style={styles.card} shadowSize="md">
          <Text style={styles.cardTitle}>Default Theme Shadow</Text>
          <Text style={styles.cardSubtitle}>Light theme: rgba(0,0,0,0.3)</Text>
          <Text style={styles.cardSubtitle}>
            Dark theme: rgba(255,255,255,0.3)
          </Text>
        </DropShadowView>
      </View>

      <Text style={styles.sectionTitle}>Platform Notes</Text>

      <View style={styles.section}>
        <DropShadowView style={styles.card} shadowSize="md">
          <Text style={styles.cardTitle}>iOS Shadow Properties</Text>
          <Text style={styles.cardSubtitle}>
            • shadowColor - Full color support
          </Text>
          <Text style={styles.cardSubtitle}>
            • shadowOffset - Direction and distance
          </Text>
          <Text style={styles.cardSubtitle}>
            • shadowOpacity - Transparency control
          </Text>
          <Text style={styles.cardSubtitle}>• shadowRadius - Blur amount</Text>
        </DropShadowView>

        <DropShadowView style={styles.card} shadowSize="md">
          <Text style={styles.cardTitle}>Android Shadow Properties</Text>
          <Text style={styles.cardSubtitle}>
            • shadowColor - Works with elevation
          </Text>
          <Text style={styles.cardSubtitle}>
            • elevation - Material Design shadow depth
          </Text>
          <Text style={styles.cardSubtitle}>
            Note: Other shadow properties are ignored on Android
          </Text>
          <Text style={[styles.cardSubtitle, styles.warningText]}>
            ⚠️ Android requires background color for shadows
          </Text>
        </DropShadowView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 100,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6b7280',
    marginBottom: 16,
  },
  section: {
    width: '100%',
    gap: 16,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 8,
  },
  cardSecondary: {
    backgroundColor: '#f1f5f9',
    padding: 16,
    borderRadius: 8,
  },
  cardTitle: {
    color: '#0f172a',
    fontWeight: '600',
  },
  cardSubtitle: {
    color: '#64748b',
    fontSize: 12,
  },
  largeCard: {
    backgroundColor: '#f8fafc',
    padding: 24,
    borderRadius: 8,
  },
  largeCardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 8,
  },
  cardDescription: {
    color: '#64748b',
    marginBottom: 16,
  },
  blueCard: {
    backgroundColor: '#dbeafe',
    padding: 16,
    borderRadius: 8,
  },
  blueTitleText: {
    color: '#1e3a8a',
    fontWeight: '600',
  },
  blueSubtitleText: {
    color: '#1d4ed8',
    fontSize: 12,
  },
  greenCard: {
    backgroundColor: '#d1fae5',
    padding: 16,
    borderRadius: 8,
  },
  greenTitleText: {
    color: '#064e3b',
    fontWeight: '600',
  },
  greenSubtitleText: {
    color: '#047857',
    fontSize: 12,
  },
  purpleCard: {
    backgroundColor: '#ede9fe',
    padding: 16,
    borderRadius: 8,
  },
  purpleTitleText: {
    color: '#581c87',
    fontWeight: '600',
  },
  purpleSubtitleText: {
    color: '#7c3aed',
    fontSize: 12,
  },
  redCard: {
    backgroundColor: '#fee2e2',
    padding: 16,
    borderRadius: 8,
  },
  redTitleText: {
    color: '#7f1d1d',
    fontWeight: '600',
  },
  redSubtitleText: {
    color: '#dc2626',
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
  },
  flex1: {
    flex: 1,
  },
  centeredText: {
    color: '#0f172a',
    textAlign: 'center',
  },
  actionRow: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    backgroundColor: '#e5e7eb',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
  },
  actionButtonText: {
    color: '#374151',
    fontSize: 12,
  },
  actionButtonSecondary: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
  },
  actionButtonSecondaryText: {
    color: '#6b7280',
    fontSize: 12,
  },
  warningText: {
    fontWeight: '600',
    marginTop: 8,
  },
});
