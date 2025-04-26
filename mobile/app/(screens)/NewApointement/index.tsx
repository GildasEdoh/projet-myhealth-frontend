import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import FormInput from '@/components/ui/FormInput';
import Button from '@/components/ui/Button';
import { hospitals, specialties } from '@/constants/medical';

export default function SearchSpecialistScreen() {
    const [selectedHospital, setSelectedHospital] = useState('');
    const [selectedSpecialty, setSelectedSpecialty] = useState('');
    const [hospitalError, setHospitalError] = useState('');
    const [specialtyError, setSpecialtyError] = useState('');
  
    const handleSearch = () => {
      let isValid = true;
      
      if (!selectedHospital) {
        setHospitalError('Veuillez sélectionner un hôpital');
        isValid = false;
      } else {
        setHospitalError('');
      }
      
      if (!selectedSpecialty) {
        setSpecialtyError('Veuillez sélectionner une spécialité');
        isValid = false;
      } else {
        setSpecialtyError('');
      }
      
      if (isValid) {
        router.push({
          pathname: "/NewApointement/doctorSelection",
          params: {
            hospital: selectedHospital,
            specialty: selectedSpecialty
          }
        });
      }
    };
  
    return (
      <SafeAreaView style={styles.container} edges={['bottom']}>
        
        <ScrollView style={styles.scrollView}>
          <View style={styles.content}>
            <Text style={styles.instruction}>
              Veuillez sélectionner un hôpital et une spécialité médicale pour trouver le médecin qui correspond à vos besoins.
            </Text>
            
            <View style={styles.formSection}>
              <Text style={styles.sectionLabel}>Choisir un hôpital</Text>
              <View style={styles.optionsContainer}>
                {hospitals.map((hospital) => (
                  <Button
                    key={hospital.id}
                    title={hospital.name}
                    variant={selectedHospital === hospital.name ? 'primary' : 'outline'}
                    size="small"
                    style={styles.optionButton}
                    onPress={() => setSelectedHospital(hospital.name)}
                  />
                ))}
              </View>
              {hospitalError ? <Text style={styles.errorText}>{hospitalError}</Text> : null}
            </View>
            
            <View style={styles.formSection}>
              <Text style={styles.sectionLabel}>Choisir une spécialité</Text>
              <View style={styles.optionsContainer}>
                {specialties.map((specialty) => (
                  <Button
                    key={specialty.id}
                    title={specialty.name}
                    variant={selectedSpecialty === specialty.name ? 'primary' : 'outline'}
                    size="small"
                    style={styles.optionButton}
                    onPress={() => setSelectedSpecialty(specialty.name)}
                  />
                ))}
              </View>
              {specialtyError ? <Text style={styles.errorText}>{specialtyError}</Text> : null}
            </View>
          </View>
        </ScrollView>
        
        <View style={styles.footer}>
          <Button
            title="Rechercher"
            onPress={handleSearch}
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
    scrollView: {
      flex: 1,
    },
    content: {
      padding: 16,
    },
    instruction: {
      fontSize: 16,
      color: Colors.textDark,
      marginBottom: 24,
      lineHeight: 24,
    },
    formSection: {
      marginBottom: 24,
    },
    sectionLabel: {
      fontSize: 16,
      fontWeight: '600',
      color: Colors.textDark,
      marginBottom: 12,
    },
    optionsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginHorizontal: -4,
    },
    optionButton: {
      marginHorizontal: 4,
      marginBottom: 8,
    },
    errorText: {
      color: Colors.error,
      fontSize: 14,
      marginTop: 8,
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