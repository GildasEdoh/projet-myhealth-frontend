import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/ui/DonationHeader';
import Button from '@/components/ui/Button';
import MapLegendItem from '@/components/ui/MapLegendItem';

// Only import MapView components when not on web
let MapView: any;
let Marker: any;
let PROVIDER_GOOGLE: any;

// Conditionally import map components to avoid web errors
if (Platform.OS !== 'web') {
  const MapImport = require('react-native-maps');
  MapView = MapImport.default;
  Marker = MapImport.Marker;
  PROVIDER_GOOGLE = MapImport.PROVIDER_GOOGLE;
}

function MapScreen() {
  const hospitals = [
    {
      id: '1',
      coordinate: { latitude: 48.864716, longitude: 2.349014 },
      title: 'Hôpital Central',
      type: 'urgent',
    },
    {
      id: '2',
      coordinate: { latitude: 48.860716, longitude: 2.339014 },
      title: 'Centre de Santé',
      type: 'normal',
    },
    {
      id: '3',
      coordinate: { latitude: 48.867716, longitude: 2.355014 },
      title: 'Clinique Saint-Jean',
      type: 'normal',
    },
  ];

  const handleValidate = () => {
    // Here you would handle the final validation
    // For demo purposes, we'll just go back to the beginning
    router.replace('/bloodDonation');
  };

  const handleBack = () => {
    router.back();
  };

  // Render different map components based on platform
  const renderMap = () => {
    if (Platform.OS !== 'web') {
      // Native platforms - use react-native-maps
      return (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 48.864716,
            longitude: 2.349014,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
        >
          {hospitals.map((hospital) => (
            <Marker
              key={hospital.id}
              coordinate={hospital.coordinate}
              title={hospital.title}
              pinColor={hospital.type === 'urgent' ? '#EB5757' : '#4BB79D'}
            />
          ))}
        </MapView>
      );
    } else {
      // Web platform - show alternative content
      return (
        <View style={styles.webMapPlaceholder}>
          <Text style={styles.webMapText}>
            La carte n'est pas disponible sur cette plateforme.
          </Text>
          <Text style={styles.webMapSubtext}>
            Veuillez utiliser l'application mobile pour visualiser la carte des hôpitaux.
          </Text>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="" showBackButton onBackPress={handleBack} />
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          {renderMap()}
        </View>

        <View style={styles.legendContainer}>
          <MapLegendItem
            color="#EB5757"
            text="Hôpital aux besoins urgents"
          />
          <MapLegendItem
            color="#4BB79D"
            text="Hôpital aux besoins normaux"
          />
        </View>

        <Button title="Valider" onPress={handleValidate} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  mapContainer: {
    height: 240,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  webMapPlaceholder: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  webMapText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 8,
  },
  webMapSubtext: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
  legendContainer: {
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
});

export default MapScreen;