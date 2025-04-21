import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import { Medication } from '@/constants/medical';
import { Clock, Pill } from 'lucide-react-native';

interface MedicationCardProps {
  medication: Medication;
}

export default function MedicationCard({ medication }: MedicationCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View style={styles.pillIconContainer}>
          <Pill size={24} color="white" />
        </View>
      </View>
      
      <View style={styles.middleSection}>
        <Text style={styles.medicationName}>{medication.name}</Text>
        <Text style={styles.dosage}>{medication.dosage}</Text>
        <View style={styles.scheduleContainer}>
          <Clock size={14} color={Colors.textLight} style={styles.icon} />
          <Text style={styles.scheduleText}>{medication.schedule}</Text>
        </View>
      </View>
      
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.takeButton}>
          <Text style={styles.takeButtonText}>Pris</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  leftSection: {
    marginRight: 16,
  },
  pillIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleSection: {
    flex: 1,
  },
  medicationName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textDark,
  },
  dosage: {
    fontSize: 14,
    color: Colors.textMedium,
    marginTop: 2,
  },
  scheduleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  icon: {
    marginRight: 4,
  },
  scheduleText: {
    fontSize: 14,
    color: Colors.textLight,
  },
  rightSection: {
    marginLeft: 8,
  },
  takeButton: {
    backgroundColor: Colors.primaryLight,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  takeButtonText: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: '500',
  },
});