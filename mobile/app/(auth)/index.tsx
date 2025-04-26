import React, { useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  ImageBackground, 
  useWindowDimensions,
  Platform 
} from 'react-native';
import Button from '@/components/auth/Button';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  withDelay,
  FadeIn,
  FadeInDown,
  SlideInDown
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function WelcomeScreen() {
  const { width, height } = useWindowDimensions();
  const logoScale = useSharedValue(0.8);
  const logoOpacity = useSharedValue(0);
  
  useEffect(() => {
    logoScale.value = withDelay(300, withTiming(1, { duration: 600 }));
    logoOpacity.value = withDelay(300, withTiming(1, { duration: 600 }));
  }, []);
  
  const logoStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: logoScale.value }],
      opacity: logoOpacity.value
    };
  });
  
  const handleStart = () => {
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/home-doctor.jpg')}
        style={[styles.backgroundImage, { width, height }]}
      >
        <LinearGradient
          colors={['rgba(37, 99, 235, 0.1)', 'rgba(37, 99, 235, 0.9)']}
          style={styles.gradient}
        >
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.content}>
              <Animated.View style={[styles.logoContainer, logoStyle]}>
                {Platform.OS === 'web' ? (
                  <div dangerouslySetInnerHTML={{ __html: `
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="60" cy="60" r="60" fill="white"/>
                      <path d="M85 65H65V85H55V65H35V55H55V35H65V55H85V65Z" fill="#2563EB"/>
                      <path d="M85 65H65V85H55V65H35V55H55V35H65V55H85V65Z" fill="#10B981" fill-opacity="0.7"/>
                    </svg>
                  `}} />
                ) : (
                  <Image
                    source={require('@/assets/images/logo.svg')}
                    style={styles.logo}
                  />
                )}
              </Animated.View>
              
              <Animated.View 
                entering={FadeInDown.delay(600).springify()} 
                style={styles.textContainer}
              >
                <Text style={styles.title}>MyHealth</Text>
                <Text style={styles.subtitle}>Votre santé, simplifiée</Text>
                <Text style={styles.description}>
                  Accès à vos soins de santé en un seul endroit
                </Text>
              </Animated.View>
              
              <Animated.View entering={SlideInDown.delay(800).springify()}>
                <Button 
                  title="Commencer" 
                  onPress={handleStart} 
                  style={styles.button}
                />
              </Animated.View>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  logoContainer: {
    marginBottom: 32,
  },
  logo: {
    width: 120,
    height: 120,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    opacity: 0.8,
  },
  button: {
    minWidth: 200,
  },
});