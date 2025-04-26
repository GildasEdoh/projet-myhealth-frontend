import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { TriangleAlert as AlertTriangle } from 'lucide-react-native';
import Header from '@/components/ui/DonationHeader';
import Button from '@/components/ui/Button';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WarningScreen() {
  const handleNext = () => {
    router.push('/FirstDonation/map');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="" showBackButton onBackPress={handleBack} />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={styles.warningCard}>
            <View style={styles.warningIconContainer}>
              <AlertTriangle color="#F2994A" size={48} strokeWidth={1.5} />
            </View>
            <Text style={styles.warningTitle}>
              Des questions sont susceptible de vous être posées lors de la prise de sang
            </Text>
          </View>

          <Button title="Suivant" onPress={handleNext}  />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 24,
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  warningCard: {
    backgroundColor: '#FFF9F0',
    borderRadius: 12,
    padding: 24,
    marginVertical: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  warningIconContainer: {
    marginBottom: 24,
  },
  warningTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    lineHeight: 26,
  },
});