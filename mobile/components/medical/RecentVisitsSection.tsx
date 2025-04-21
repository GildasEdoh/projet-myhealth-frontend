import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import { recentVisits } from '@/constants/medical';
import VisitCard from './VisitCard';

export default function RecentVisitsSection() {
  return (
    <View style={styles.container}>
      {recentVisits.map((visit) => (
        <VisitCard key={visit.id} visit={visit} />
      ))}
      
      <TouchableOpacity style={styles.appointmentButton}>
        <Text style={styles.appointmentButtonText}>Prendre un rendez-vous</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  appointmentButton: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  appointmentButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});