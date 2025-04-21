import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import { Calendar, Clock } from 'lucide-react-native';

export default function UpcomingAppointment() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>Dr. mario</Text>
          <Text style={styles.specialty}>Orthopdesite Consultation(Pieds et Genoux)</Text>
        </View>
        
        <View style={styles.appointmentTime}>
          <View style={styles.dateContainer}>
            <Calendar size={18} color="black" style={styles.icon} />
            <Text style={styles.dateText}>Mercredi 7Septembre 2024</Text>
          </View>
          <View style={styles.timeContainer}>
            <Clock size={18} color="black" style={styles.icon} />
            <Text style={styles.timeText}>10h30</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryLight,
    borderRadius: 16,
    overflow: 'hidden',
  },
  content: {
    padding: 20,
  },
  doctorInfo: {
    marginBottom: 20,
  },
  doctorName: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
    marginBottom: 4,
  },
  specialty: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
  },
  appointmentTime: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  icon: {
    marginRight: 8,
  },
  dateText: {
    fontSize: 14,
    color: Colors.textDark,
    fontWeight: '500',
  },
  timeText: {
    fontSize: 14,
    color: Colors.textDark,
    fontWeight: '500',
  },
});