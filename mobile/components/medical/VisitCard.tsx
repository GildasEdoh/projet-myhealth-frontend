import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import { Visit } from '@/constants/medical';

interface VisitCardProps {
  visit: Visit;
}

export default function VisitCard({ visit }: VisitCardProps) {
  return (
    <TouchableOpacity 
      style={styles.container}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <Text style={styles.doctorName}>{visit.doctorName}</Text>
        <Text style={styles.specialty}>{visit.specialty}</Text>
      </View>
      
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Prendre un rendez-vous</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    padding: 16,
  },
  content: {
    marginBottom: 12,
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
  },
  actionButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.primary,
    padding: 12,
    alignItems: 'center',
  },
  actionButtonText: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
});