import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useAuth } from '@/context/AuthProvider';

import FormInput from '@/components/auth/FormInput';
import Button from '@/components/auth/Button';
import { User, CalendarDays, Heart, CircleAlert as AlertCircle, FileText, User as User2, Phone } from 'lucide-react-native';

export default function RegisterStep2Screen() {
  const { setRegistrationData, registrationData, signUp, authError } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: registrationData.step2?.firstName || '',
    age: registrationData.step2?.age || '',
    bloodType: registrationData.step2?.bloodType || '',
    allergies: registrationData.step2?.allergies || '',
    medicalHistory: registrationData.step2?.medicalHistory || '',
    emergencyContact: registrationData.step2?.emergencyContact || '',
    emergencyPhone: registrationData.step2?.emergencyPhone || '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!form.firstName) {
      newErrors.firstName = 'Prénom est requis';
    }
    
    if (!form.age) {
      newErrors.age = 'Âge est requis';
    } else if (isNaN(Number(form.age))) {
      newErrors.age = 'Âge doit être un nombre';
    }
    
    if (!form.bloodType) {
      newErrors.bloodType = 'Groupe sanguin est requis';
    }
    
    if (!form.emergencyContact) {
      newErrors.emergencyContact = 'Contact d\'urgence est requis';
    }
    
    if (!form.emergencyPhone) {
      newErrors.emergencyPhone = 'Téléphone d\'urgence est requis';
    }
    
    setErrors(newErrors);
    setTouched({
      firstName: true,
      age: true,
      bloodType: true,
      allergies: true,
      medicalHistory: true,
      emergencyContact: true,
      emergencyPhone: true,
    });
    
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };
  
  const handleFieldTouch = (field: string) => {
    setTouched({ ...touched, [field]: true });
  };
  
  const handleSubmit = async () => {
    if (!validate()) {
      return;
    }
    
    setRegistrationData(prev => ({
      ...prev,
      step2: { ...form },
    }));
    
    setIsLoading(true);
    
    try {
      await signUp({
        step1: registrationData.step1,
        step2: form,
      });
      
      // router.replace('/(app)');
    } catch (error) {
      console.error('Registration failed:', error);
      // Error is handled by auth context
    } finally {
      setIsLoading(false);
    }
  };
  
  const goBack = () => {
    // Save current form state before going back
    setRegistrationData(prev => ({
      ...prev,
      step2: { ...form },
    }));
    
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.container}>
            <Animated.View 
              entering={FadeInDown.delay(200).duration(800)} 
              style={styles.header}
            >
              <Text style={styles.title}>Informations de santé</Text>
              <Text style={styles.subtitle}>Complétez votre profil médical</Text>
              
              {authError && (
                <Text style={styles.errorText}>{authError}</Text>
              )}
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(300).duration(800)}>
              <FormInput
                label="Prénom"
                placeholder="Entrez votre prénom"
                value={form.firstName}
                onChangeText={(value) => handleChange('firstName', value)}
                icon={<User size={20} color="#94A3B8" />}
                error={errors.firstName}
                touched={touched.firstName}
                onBlur={() => handleFieldTouch('firstName')}
              />
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(400).duration(800)}>
              <FormInput
                label="Âge"
                placeholder="Entrez votre âge"
                value={form.age}
                onChangeText={(value) => handleChange('age', value)}
                keyboardType="number-pad"
                icon={<CalendarDays size={20} color="#94A3B8" />}
                error={errors.age}
                touched={touched.age}
                onBlur={() => handleFieldTouch('age')}
              />
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(500).duration(800)}>
              <FormInput
                label="Groupe sanguin"
                placeholder="A+, A-, B+, B-, AB+, AB-, O+, O-"
                value={form.bloodType}
                onChangeText={(value) => handleChange('bloodType', value)}
                icon={<Heart size={20} color="#94A3B8" />}
                error={errors.bloodType}
                touched={touched.bloodType}
                onBlur={() => handleFieldTouch('bloodType')}
              />
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(600).duration(800)}>
              <FormInput
                label="Allergies"
                placeholder="Aspirin, Pollen..."
                value={form.allergies}
                onChangeText={(value) => handleChange('allergies', value)}
                icon={<AlertCircle size={20} color="#94A3B8" />}
                error={errors.allergies}
                touched={touched.allergies}
                onBlur={() => handleFieldTouch('allergies')}
              />
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(700).duration(800)}>
              <FormInput
                label="Antécédents médicaux"
                placeholder="Diabète, hypertension..."
                value={form.medicalHistory}
                onChangeText={(value) => handleChange('medicalHistory', value)}
                icon={<FileText size={20} color="#94A3B8" />}
                error={errors.medicalHistory}
                touched={touched.medicalHistory}
                onBlur={() => handleFieldTouch('medicalHistory')}
              />
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(800).duration(800)}>
              <FormInput
                label="Nom du contact d'urgence"
                placeholder="Personne à contacter en cas d'urgence"
                value={form.emergencyContact}
                onChangeText={(value) => handleChange('emergencyContact', value)}
                icon={<User2 size={20} color="#94A3B8" />}
                error={errors.emergencyContact}
                touched={touched.emergencyContact}
                onBlur={() => handleFieldTouch('emergencyContact')}
              />
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(900).duration(800)}>
              <FormInput
                label="Contact d'urgence"
                placeholder="+33 6 XX XX XX XX"
                value={form.emergencyPhone}
                onChangeText={(value) => handleChange('emergencyPhone', value)}
                keyboardType="phone-pad"
                icon={<Phone size={20} color="#94A3B8" />}
                error={errors.emergencyPhone}
                touched={touched.emergencyPhone}
                onBlur={() => handleFieldTouch('emergencyPhone')}
              />
            </Animated.View>

            <Animated.View 
              entering={FadeInDown.delay(1000).duration(800)}
              style={styles.buttonContainer}
            >
              <View style={styles.buttonRow}>
                <Button
                  title="Retour"
                  onPress={goBack}
                  variant="outline"
                  style={styles.backButton}
                />
                <Button
                  title="S'inscrire"
                  onPress={handleSubmit}
                  isLoading={isLoading}
                  style={styles.submitButton}
                />
              </View>
            </Animated.View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748B',
  },
  errorText: {
    color: '#EF4444',
    marginTop: 8,
  },
  buttonContainer: {
    marginTop: 24,
    marginBottom: 40,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backButton: {
    flex: 1,
    marginRight: 8,
  },
  submitButton: {
    flex: 1,
    marginLeft: 8,
  },
});