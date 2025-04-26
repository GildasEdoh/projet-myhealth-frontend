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
import { User, Calendar, Phone, Mail, Lock } from 'lucide-react-native';

export default function RegisterStep1Screen() {
  const { setRegistrationData, registrationData } = useAuth();
  const [form, setForm] = useState({
    lastName: registrationData.step1?.lastName || '',
    birthDate: registrationData.step1?.birthDate || '',
    phone: registrationData.step1?.phone || '',
    email: registrationData.step1?.email || '',
    password: registrationData.step1?.password || '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!form.lastName) {
      newErrors.lastName = 'Nom de famille est requis';
    }
    
    if (!form.birthDate) {
      newErrors.birthDate = 'Date de naissance est requise';
    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(form.birthDate)) {
      newErrors.birthDate = 'Format invalide (JJ/MM/AAAA)';
    }
    
    if (!form.phone) {
      newErrors.phone = 'Numéro de téléphone est requis';
    }
    
    if (!form.email) {
      newErrors.email = 'Email est requis';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email invalide';
    }
    
    if (!form.password) {
      newErrors.password = 'Mot de passe est requis';
    } else if (form.password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
    }
    
    setErrors(newErrors);
    setTouched({
      lastName: true,
      birthDate: true,
      phone: true,
      email: true,
      password: true,
    });
    
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };
  
  const handleFieldTouch = (field: string) => {
    setTouched({ ...touched, [field]: true });
  };
  
  const handleContinue = () => {
    if (!validate()) {
      return;
    }
    
    setRegistrationData(prev => ({
      ...prev,
      step1: { ...form },
    }));
    
    // router.push('/(auth)/register-step2');
  };
  
  const goToLogin = () => {
    // router.push('/(auth)/login');
  };
  
  const handleGoogleSignUp = () => {
    Alert.alert('Google Sign Up', 'Google sign up would be implemented here');
  };
  
  const handleFacebookSignUp = () => {
    Alert.alert('Facebook Sign Up', 'Facebook sign up would be implemented here');
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
              <Text style={styles.title}>S'inscrire</Text>
              <Text style={styles.subtitle}>Créez votre compte pour commencer</Text>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(300).duration(800)}>
              <FormInput
                label="Nom de famille"
                placeholder="Entrez votre nom"
                value={form.lastName}
                onChangeText={(value) => handleChange('lastName', value)}
                icon={<User size={20} color="#94A3B8" />}
                error={errors.lastName}
                touched={touched.lastName}
                onBlur={() => handleFieldTouch('lastName')}
              />
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(400).duration(800)}>
              <FormInput
                label="Date de naissance"
                placeholder="JJ/MM/AAAA"
                value={form.birthDate}
                onChangeText={(value) => handleChange('birthDate', value)}
                icon={<Calendar size={20} color="#94A3B8" />}
                error={errors.birthDate}
                touched={touched.birthDate}
                onBlur={() => handleFieldTouch('birthDate')}
              />
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(500).duration(800)}>
              <FormInput
                label="Numéro de téléphone"
                placeholder="+33 6 XX XX XX XX"
                value={form.phone}
                onChangeText={(value) => handleChange('phone', value)}
                keyboardType="phone-pad"
                icon={<Phone size={20} color="#94A3B8" />}
                error={errors.phone}
                touched={touched.phone}
                onBlur={() => handleFieldTouch('phone')}
              />
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(600).duration(800)}>
              <FormInput
                label="Email"
                placeholder="Entrez votre email"
                value={form.email}
                onChangeText={(value) => handleChange('email', value)}
                keyboardType="email-address"
                autoCapitalize="none"
                icon={<Mail size={20} color="#94A3B8" />}
                error={errors.email}
                touched={touched.email}
                onBlur={() => handleFieldTouch('email')}
              />
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(700).duration(800)}>
              <FormInput
                label="Mot de passe"
                placeholder="Créez un mot de passe"
                value={form.password}
                onChangeText={(value) => handleChange('password', value)}
                isPassword
                icon={<Lock size={20} color="#94A3B8" />}
                error={errors.password}
                touched={touched.password}
                onBlur={() => handleFieldTouch('password')}
              />
            </Animated.View>

            <Animated.View 
              entering={FadeInDown.delay(800).duration(800)}
              style={styles.buttonContainer}
            >
              <Button
                title="Suivant"
                onPress={handleContinue}
                style={styles.continueButton}
              />
            </Animated.View>

            <Animated.View 
              entering={FadeInDown.delay(900).duration(800)}
              style={styles.loginContainer}
            >
              <Text style={styles.loginText}>Déjà un compte? </Text>
              <TouchableOpacity onPress={goToLogin}>
                <Text style={styles.loginLinkText}>Se connecter</Text>
              </TouchableOpacity>
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
  buttonContainer: {
    marginTop: 24,
  },
  continueButton: {
    marginBottom: 16,
  },
  socialDivider: {
    marginVertical: 24,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  socialButton: {
    marginHorizontal: 12,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  loginText: {
    color: '#64748B',
    fontSize: 14,
  },
  loginLinkText: {
    color: '#2563EB',
    fontSize: 14,
    fontWeight: '600',
  },
  errorText: {
    color: '#EF4444',
    marginTop: 8,
  },
});