import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { router } from 'expo-router';
import Header from '@/components/ui/DonationHeader';
import ChecklistItem from '@/components/ui/ChecklistItem';
import Button from '@/components/ui/Button';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EligibilityScreen() {
  const eligibilityItems = [
    { id: '1', text: 'Poids ≥ 50 kg', completed: true },
    { id: '2', text: 'Âge entre 18 et 65 ans', completed: true },
    { id: '3', text: 'Bonne santé, non fumeur', completed: true },
    { id: '4', text: "Carte d'identité obligatoire", completed: true },
  ];

  const handleNext = () => {
    router.push('/FirstDonation/warning');
  };

  const handleBack = () => {
    router.push('/(tabs)')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="" showBackButton={true} onBackPress={handleBack}/>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={styles.profileSection}>
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
              }}
              style={styles.profileImage}
            />
            <View style={styles.welcomeTextContainer}>
              <Text style={styles.welcomeTitle}>Bonjour Nom,</Text>
              <Text style={styles.welcomeSubtitle}>prête pour votre enregistrement ?</Text>
            </View>
          </View>

          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>Conditions d'éligibilité</Text>
            <View style={styles.checklistContainer}>
              {eligibilityItems.map((item) => (
                <ChecklistItem key={item.id} text={item.text} completed={item.completed} />
              ))}
            </View>
          </View>

          <Button title="Suivant" onPress={handleNext} />
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
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal: 8,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  welcomeTextContainer: {
    flex: 1,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  welcomeSubtitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  checklistContainer: {
    marginTop: 8,
  },
});