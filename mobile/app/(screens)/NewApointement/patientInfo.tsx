import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import FormInput from '@/components/ui/FormInput';
import Button from '@/components/ui/Button';

export default function PatientInfoScreen() {
  const { doctor, specialty, hospital } = useLocalSearchParams<{ 
    doctor: string; 
    specialty: string;
    hospital: string;
  }>();
  console.log("spe : " + specialty+ " doc : " + doctor + " host: " + hospital )

  const [formData, setFormData] = useState({
    fullName: '',
    firstName: '',
    birthDate: '',
    phone: '',
    email: '',
    reason: '',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    firstName: '',
    birthDate: '',
    phone: '',
    email: '',
    reason: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Le nom de famille est requis';
      isValid = false;
    } else {
      newErrors.fullName = '';
    }

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est requis';
      isValid = false;
    } else {
      newErrors.firstName = '';
    }

    // Birth date validation (simple format check)
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!formData.birthDate.trim()) {
      newErrors.birthDate = 'La date de naissance est requise';
      isValid = false;
    } else if (!dateRegex.test(formData.birthDate)) {
      newErrors.birthDate = 'Format invalide (JJ/MM/AAAA)';
      isValid = false;
    } else {
      newErrors.birthDate = '';
    }

    // Phone validation (simple)
    if (!formData.phone.trim()) {
      newErrors.phone = 'Le numéro de téléphone est requis';
      isValid = false;
    } else {
      newErrors.phone = '';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email invalide';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    // Reason validation
    if (!formData.reason.trim()) {
      newErrors.reason = 'Le motif de consultation est requis';
      isValid = false;
    } else {
      newErrors.reason = '';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    if (validateForm()) {
      router.push({
        pathname: '/NewApointement/dateSelection',
        params: {
          doctor,
          specialty,
          hospital,
          fullName: formData.fullName,
          firstName: formData.firstName
        }
      });
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.instruction}>
            Veuillez renseigner vos informations personnelles pour votre rendez-vous.
          </Text>
          
          <FormInput
            label="Nom de famille"
            value={formData.fullName}
            onChangeText={(text) => handleChange('fullName', text)}
            placeholder="Entrez votre nom de famille"
            error={errors.fullName}
          />
          
          <FormInput
            label="Prénom(s)"
            value={formData.firstName}
            onChangeText={(text) => handleChange('firstName', text)}
            placeholder="Entrez votre prénom"
            error={errors.firstName}
          />
          
          <FormInput
            label="Date de naissance"
            value={formData.birthDate}
            onChangeText={(text) => handleChange('birthDate', text)}
            placeholder="JJ/MM/AAAA"
            // keyboardType="text"
            error={errors.birthDate}
          />
          
          <FormInput
            label="Numéro de téléphone"
            value={formData.phone}
            onChangeText={(text) => handleChange('phone', text)}
            placeholder="Entrez votre numéro de téléphone"
            keyboardType="phone-pad"
            error={errors.phone}
          />
          
          <FormInput
            label="Email"
            value={formData.email}
            onChangeText={(text) => handleChange('email', text)}
            placeholder="Entrez votre email"
            keyboardType="email-address"
            autoCapitalize="none"
            error={errors.email}
          />
          
          <FormInput
            label="Motif de consultation"
            value={formData.reason}
            onChangeText={(text) => handleChange('reason', text)}
            placeholder="Décrivez brièvement la raison de votre consultation"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            style={{ height: 100, paddingTop: 12 }}
            error={errors.reason}
          />
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <Button
          title="Continuer"
          onPress={handleContinue}
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