import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import Button from '@/components/ui/Button';

// Time slot types
type TimeSlot = {
  id: string;
  time: string;
  isAvailable: boolean;
};

export default function TimeSelectionScreen() {
  const { doctor, specialty, hospital, fullName, firstName, date } = useLocalSearchParams<{
    doctor: string;
    specialty: string;
    hospital: string;
    fullName: string;
    firstName: string;
    date: string;
  }>();

  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Format date for display
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

  // Generate time slots (in a real app, these would come from an API)
  const generateTimeSlots = (): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    const morningSlots = ['08:00', '08:45', '09:00', '09:40', '10:30', '11:00', '11:30'];
    const afternoonSlots = ['14:00', '14:40', '15:00', '15:30', '16:45', '17:30'];
    
    morningSlots.forEach((time, index) => {
      slots.push({
        id: `morning-${index}`,
        time,
        isAvailable: Math.random() > 0.3 // Randomly available for demo
      });
    });
    
    afternoonSlots.forEach((time, index) => {
      slots.push({
        id: `afternoon-${index}`,
        time,
        isAvailable: Math.random() > 0.3 // Randomly available for demo
      });
    });
    
    return slots;
  };

  const timeSlots = generateTimeSlots();
  
  // Group time slots by morning and afternoon
  const morningSlots = timeSlots.filter(slot => {
    const hour = parseInt(slot.time.split(':')[0]);
    return hour < 12;
  });
  
  const afternoonSlots = timeSlots.filter(slot => {
    const hour = parseInt(slot.time.split(':')[0]);
    return hour >= 12;
  });

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleContinue = () => {
    if (selectedTime) {
      router.push({
        pathname: '/NewApointement/confirmation',
        params: {
          doctor,
          specialty,
          hospital,
          fullName,
          firstName,
          date,
          time: selectedTime
        }
      });
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.instruction}>
            Choisissez un horaire pour votre rendez-vous avec {doctor} le {formatDate(date || '')}.
          </Text>
          
          <View style={styles.timeSection}>
            <Text style={styles.sectionTitle}>Matin</Text>
            <View style={styles.timeSlotsContainer}>
              {morningSlots.map((slot) => (
                <TouchableOpacity
                  key={slot.id}
                  style={[
                    styles.timeSlot,
                    !slot.isAvailable && styles.unavailableSlot,
                    selectedTime === slot.time && styles.selectedSlot,
                  ]}
                  onPress={() => handleTimeSelect(slot.time)}
                  disabled={!slot.isAvailable}
                >
                  <Text
                    style={[
                      styles.timeText,
                      !slot.isAvailable && styles.unavailableTimeText,
                      selectedTime === slot.time && styles.selectedTimeText,
                    ]}
                  >
                    {slot.time}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          
          <View style={styles.timeSection}>
            <Text style={styles.sectionTitle}>Après-midi</Text>
            <View style={styles.timeSlotsContainer}>
              {afternoonSlots.map((slot) => (
                <TouchableOpacity
                  key={slot.id}
                  style={[
                    styles.timeSlot,
                    !slot.isAvailable && styles.unavailableSlot,
                    selectedTime === slot.time && styles.selectedSlot,
                  ]}
                  onPress={() => handleTimeSelect(slot.time)}
                  disabled={!slot.isAvailable}
                >
                  <Text
                    style={[
                      styles.timeText,
                      !slot.isAvailable && styles.unavailableTimeText,
                      selectedTime === slot.time && styles.selectedTimeText,
                    ]}
                  >
                    {slot.time}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          
          <View style={styles.legend}>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: Colors.primary }]} />
              <Text style={styles.legendText}>Disponible</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#E0E0E0' }]} />
              <Text style={styles.legendText}>Indisponible</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <Button
          title="Continuer"
          onPress={handleContinue}
          disabled={!selectedTime}
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
  timeSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 16,
  },
  timeSlotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -4,
  },
  timeSlot: {
    backgroundColor: Colors.primary + '20',
    borderRadius: 8,
    padding: 12,
    margin: 4,
    minWidth: 80,
    alignItems: 'center',
  },
  unavailableSlot: {
    backgroundColor: '#E0E0E0',
  },
  selectedSlot: {
    backgroundColor: Colors.primary,
  },
  timeText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.primary,
  },
  unavailableTimeText: {
    color: Colors.textMuted,
  },
  selectedTimeText: {
    color: 'white',
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  legendText: {
    fontSize: 14,
    color: Colors.textLight,
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