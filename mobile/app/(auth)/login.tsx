import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
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
import Divider from '@/components/auth/Divider';
import SocialButton from '@/components/auth/SocialButton';
import { Mail, Lock } from 'lucide-react-native';

export default function LoginScreen() {
  const { signIn, authError, clearAuthError } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!email) {
      newErrors.email = 'Email est requis';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email invalide';
    }
    
    if (!password) {
      newErrors.password = 'Mot de passe est requis';
    } else if (password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères';
    }
    
    setErrors(newErrors);
    setTouched({
      email: true,
      password: true,
    });
    
    return Object.keys(newErrors).length === 0;
  };
  
  const handleLogin = async () => {
    clearAuthError();
    
    if (!validate()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      await signIn(email, password);
      // router.replace('/(app)');
    } catch (error) {
      console.error('Login failed:', error);
      // Error is handled by the auth context
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleGoogleLogin = () => {
    Alert.alert('Google Login', 'Google login would be implemented here');
  };
  
  const handleFacebookLogin = () => {
    Alert.alert('Facebook Login', 'Facebook login would be implemented here');
  };
  
  const handleFieldTouch = (field: string) => {
    setTouched({ ...touched, [field]: true });
  };
  
  const goToRegister = () => {
    router.push('/register');
  };
  
  const goToForgotPassword = () => {
    // Would navigate to forgot password screen
    Alert.alert('Mot de passe oublié', 'Fonctionnalité à venir');
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
              entering={FadeInDown.delay(200).duration(1000)} 
              style={styles.header}
            >
              <Image
                source={{ uri: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg' }}
                style={styles.headerImage}
              />
            </Animated.View>

            <Animated.View 
              entering={FadeInDown.delay(400).duration(1000)} 
              style={styles.titleContainer}
            >
              <Text style={styles.title}>Se connecter</Text>
              {authError && (
                <Text style={styles.errorText}>{authError}</Text>
              )}
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(600).duration(1000)}>
              <FormInput
                label="Email"
                placeholder="Entrez votre email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                icon={<Mail size={20} color="#94A3B8" />}
                error={errors.email}
                touched={touched.email}
                onBlur={() => handleFieldTouch('email')}
              />
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(700).duration(1000)}>
              <FormInput
                label="Mot de passe"
                placeholder="Entrez votre mot de passe"
                value={password}
                onChangeText={setPassword}
                isPassword
                icon={<Lock size={20} color="#94A3B8" />}
                error={errors.password}
                touched={touched.password}
                onBlur={() => handleFieldTouch('password')}
              />
            </Animated.View>

            <Animated.View 
              entering={FadeInDown.delay(800).duration(1000)}
              style={styles.forgotPasswordContainer}
            >
              <TouchableOpacity onPress={goToForgotPassword}>
                <Text style={styles.forgotPasswordText}>Mot de passe oublié?</Text>
              </TouchableOpacity>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(900).duration(1000)}>
              <Button
                title="Se connecter"
                onPress={handleLogin}
                isLoading={isLoading}
                style={styles.loginButton}
              />
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(1000).duration(1000)}>
              <Divider text="Ou se connecter avec" />
            </Animated.View>

            <Animated.View 
              entering={FadeInDown.delay(1100).duration(1000)}
              style={styles.socialButtonsContainer}
            >
              <SocialButton
                icon={
                  <Text style={{ fontWeight: 'bold', color: '#2563EB', fontSize: 18 }}>G</Text>
                }
                onPress={handleGoogleLogin}
                style={styles.socialButton}
              />
              <SocialButton
                icon={
                  <Text style={{ fontWeight: 'bold', color: '#2563EB', fontSize: 18 }}>f</Text>
                }
                onPress={handleFacebookLogin}
                style={styles.socialButton}
              />
            </Animated.View>

            <Animated.View 
              entering={FadeInDown.delay(1200).duration(1000)}
              style={styles.registerContainer}
            >
              <Text style={styles.registerText}>Pas de compte? </Text>
              <TouchableOpacity onPress={goToRegister}>
                <Text style={styles.registerLinkText}>S'inscrire</Text>
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
    alignItems: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  titleContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 8,
  },
  errorText: {
    color: '#EF4444',
    marginTop: 8,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: '#2563EB',
    fontSize: 14,
  },
  loginButton: {
    marginBottom: 16,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  socialButton: {
    marginHorizontal: 12,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  registerText: {
    color: '#64748B',
    fontSize: 14,
  },
  registerLinkText: {
    color: '#2563EB',
    fontSize: 14,
    fontWeight: '600',
  },
});