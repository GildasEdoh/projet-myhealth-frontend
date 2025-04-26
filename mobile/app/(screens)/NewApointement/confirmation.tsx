import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';
import { Check, Download } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import Button from '@/components/ui/Button';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring,
  withSequence,
  withDelay,
  Easing,
  withTiming
} from 'react-native-reanimated';

export default function ConfirmationScreen() {
  const params = useLocalSearchParams<{
    doctor: string;
    specialty: string;
    hospital: string;
    fullName: string;
    firstName: string;
    date: string;
    time: string;
  }>();

  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);

  useEffect(() => {
    // Trigger animation when component mounts
    scale.value = withSequence(
      withTiming(1.2, { duration: 300, easing: Easing.out(Easing.ease) }),
      withTiming(1, { duration: 200, easing: Easing.inOut(Easing.ease) })
    );
    
    opacity.value = withDelay(500, withTiming(1, { duration: 800 }));
    
    // Trigger haptic feedback on iOS/Android
    if (Platform.OS !== 'web') {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
  }, []);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const checkmarkAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }]
    };
  });

  const contentAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value
    };
  });

  const handleReturnToAppointments = () => {
    router.replace('/(tabs)/appointments');
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.successContainer}>
            <Animated.View style={[styles.checkmarkCircle, checkmarkAnimatedStyle]}>
              <Check size={36} color="white" />
            </Animated.View>
            <Text style={styles.successTitle}>Votre rendez-vous est confirmé !</Text>
          </View>
          
          <Animated.View style={[styles.detailsCard, contentAnimatedStyle]}>
            <Text style={styles.detailsTitle}>Détails du rendez-vous</Text>
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Médecin:</Text>
              <Text style={styles.detailValue}>{params.doctor}</Text>
            </View>
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Spécialité:</Text>
              <Text style={styles.detailValue}>{params.specialty}</Text>
            </View>
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Date:</Text>
              <Text style={styles.detailValue}>{formatDate(params.date || '')}</Text>
            </View>
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Heure:</Text>
              <Text style={styles.detailValue}>{params.time}</Text>
            </View>
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Lieu:</Text>
              <Text style={styles.detailValue}>{params.hospital}</Text>
            </View>
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Numéro de dossier:</Text>
              <Text style={styles.detailValue}>RDV-2025-04-10</Text>
            </View>
          </Animated.View>
          
          <Animated.View style={contentAnimatedStyle}>
            <Button
              title="Télécharger la confirmation"
              variant="outline"
              onPress={() => {}}
              style={styles.downloadButton}
              textStyle={styles.downloadButtonText}
            //   icon={<Download size={18} color={Colors.primary} style={{ marginRight: 8 }} />}
            />
            
            <Text style={styles.reminderText}>
              Un rappel vous sera envoyé 24 heures avant votre rendez-vous. Vous pouvez annuler ou reporter votre rendez-vous jusqu'à 48 heures avant la date prévue.
            </Text>
          </Animated.View>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <Button
          title="Retour aux rendez-vous"
          onPress={handleReturnToAppointments}
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
    alignItems: 'center',
  },
  successContainer: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 32,
  },
  checkmarkCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: Colors.success,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  successTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.textDark,
    textAlign: 'center',
  },
  detailsCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    marginBottom: 24,
    shadowColor: Colors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 16,
    textAlign: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
  },
  detailLabel: {
    fontSize: 14,
    color: Colors.textLight,
    flex: 1,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.textDark,
    flex: 2,
    textAlign: 'right',
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    width: '100%',
  },
  downloadButtonText: {
    fontSize: 16,
  },
  reminderText: {
    fontSize: 14,
    color: Colors.textLight,
    textAlign: 'center',
    lineHeight: 20,
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