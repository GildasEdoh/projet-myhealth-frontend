import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import { Appointment } from '@/constants/medical';
import { Calendar, Clock, MapPin } from 'lucide-react-native';

interface AppointmentCardProps {
  appointment: Appointment;
}

export default function AppointmentCard({ appointment }: AppointmentCardProps) {
  const appointmentDate = new Date(appointment.date);
  const isPastAppointment = appointmentDate < new Date();
  
  return (
    <TouchableOpacity 
      style={[
        styles.container,
        isPastAppointment && styles.pastContainer
      ]}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <View style={[
          styles.statusIndicator,
          {backgroundColor: isPastAppointment ? Colors.completed : Colors.upcoming}
        ]} />
        <Text style={styles.statusText}>
          {isPastAppointment ? 'Terminé' : 'À venir'}
        </Text>
      </View>

      <Text style={styles.doctorName}>{appointment.doctorName}</Text>
      <Text style={styles.specialty}>{appointment.specialty}</Text>
      
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Calendar size={16} color={Colors.textLight} style={styles.icon} />
          <Text style={styles.detailText}>
            {new Date(appointment.date).toLocaleDateString('fr-FR', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </Text>
        </View>
        
        <View style={styles.detailItem}>
          <Clock size={16} color={Colors.textLight} style={styles.icon} />
          <Text style={styles.detailText}>{appointment.time}</Text>
        </View>
        
        <View style={styles.detailItem}>
          <MapPin size={16} color={Colors.textLight} style={styles.icon} />
          <Text style={styles.detailText}>{appointment.location}</Text>
        </View>
      </View>
      
      <View style={styles.actions}>
        {!isPastAppointment && (
          <>
            <TouchableOpacity style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Annuler</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rescheduleButton}>
              <Text style={styles.rescheduleButtonText}>Reprogrammer</Text>
            </TouchableOpacity>
          </>
        )}
        {isPastAppointment && (
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Prendre un nouveau rendez-vous</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
  },
  pastContainer: {
    opacity: 0.8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  statusText: {
    fontSize: 14,
    color: Colors.textLight,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textDark,
  },
  specialty: {
    fontSize: 14,
    color: Colors.textLight,
    marginTop: 4,
    marginBottom: 16,
  },
  detailsContainer: {
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 10,
  },
  detailText: {
    fontSize: 14,
    color: Colors.textMedium,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.danger,
    padding: 12,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: Colors.danger,
    fontSize: 14,
    fontWeight: '500',
  },
  rescheduleButton: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    padding: 12,
    flex: 1,
    marginLeft: 8,
    alignItems: 'center',
  },
  rescheduleButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  primaryButton: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    padding: 12,
    flex: 1,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});