import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { useEffect } from 'react';
/**
 * 
 * @returns the page with contains the steps to register for a donation or the donation informations
 */


export default function BloodDonationScreen() {
  const isEligible = null

  if (isEligible === null) {
    // Redirige vers eligibility si pas encore complété
    useEffect(() => {
      router.replace('/FirstDonation');
    }, []);
  }
  
  if (isEligible === null) {
    return null; // Évite l'affichage du contenu si la redirection est en cours
  } else {

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Don de Sang</Text>
        </View>
        
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/8550854/pexels-photo-8550854.jpeg' }} 
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Votre prochain don</Text>
            <Text style={styles.infoText}>
              Vous pouvez donner du sang à partir du: <Text style={styles.highlight}>15 Septembre 2025</Text>
            </Text>
            
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>A+</Text>
                <Text style={styles.statLabel}>Groupe sanguin</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statValue}>3</Text>
                <Text style={styles.statLabel}>Dons effectués</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  headerContainer: {
    padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.textDark,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  imageContainer: {
    marginTop: 16,
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    marginTop: 24,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.textDark,
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    color: Colors.textMedium,
    lineHeight: 24,
  },
  highlight: {
    color: Colors.primary,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.accent,
  },
  statLabel: {
    fontSize: 14,
    color: Colors.textLight,
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#EEEEEE',
    marginHorizontal: 8,
  },
});