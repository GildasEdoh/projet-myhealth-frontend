import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import Button from '@/components/ui/Button';
import { doctors } from '@/constants/medical';

export default function DoctorSelectionScreen() {
  const { hospital, specialty } = useLocalSearchParams<{ hospital: string; specialty: string }>();
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);

  const handleContinue = () => {
    if (selectedDoctor !== null) {
      const doctor = doctors.find(d => d.id === selectedDoctor);
      
      console.log("Ma variable :", doctor);
      if (doctor) {
        router.push({
          pathname: '/NewApointement/patientInfo',
          params: {
            doctor: doctor.name + "",
            specialty: doctor.specialty + "",
            hospital: hospital + ""
          }
        });
      }
    }
  };

  const renderDoctorItem = ({ item }: { item: typeof doctors[0] }) => (
    <TouchableOpacity
      style={[
        styles.doctorCard,
        selectedDoctor === item.id && styles.selectedDoctorCard,
      ]}
      onPress={() => setSelectedDoctor(item.id)}
      activeOpacity={0.7}
    >
      <View style={styles.doctorInfo}>
        <Image
          source={{ uri: `https://randomuser.me/api/portraits/${item.id % 2 === 0 ? 'women' : 'men'}/${item.id}.jpg` }}
          style={styles.doctorImage}
        />
        <View style={styles.doctorDetails}>
          <Text style={styles.doctorName}>{item.name}</Text>
          <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
          <Text style={styles.doctorDescription}>{item.description}</Text>
          <Text style={styles.doctorAvailability}>{item.availability}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.content}>
        <Text style={styles.instruction}>
          Sélectionnez un docteur parmi les spécialistes disponibles.
        </Text>
        
        <FlatList
          data={doctors}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderDoctorItem}
          contentContainerStyle={styles.doctorsList}
          showsVerticalScrollIndicator={false}
        />
      </View>
      
      <View style={styles.footer}>
        <Button
          title="Continuer"
          onPress={handleContinue}
          disabled={selectedDoctor === null}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  instruction: {
    fontSize: 16,
    color: Colors.textDark,
    marginBottom: 24,
    lineHeight: 24,
  },
  doctorsList: {
    paddingBottom: 16,
  },
  doctorCard: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },
  selectedDoctorCard: {
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  doctorInfo: {
    flexDirection: 'row',
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  doctorDetails: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 4,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: Colors.textLight,
    marginBottom: 8,
  },
  doctorDescription: {
    fontSize: 14,
    color: Colors.textLight,
    marginBottom: 8,
  },
  doctorAvailability: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '500',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.borderColor,
    backgroundColor: 'white',
  },
  button: {
    width: '100%',
  },
});