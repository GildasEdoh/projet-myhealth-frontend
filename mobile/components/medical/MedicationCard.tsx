
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Pill } from 'lucide-react-native';

interface MedicationCardProps {
  name: string;
  dosage: string;
  time: string;
}

export default function MedicationCard({ name, dosage, time }: MedicationCardProps) {

  // Determine pill color based on medication name
  const isPainKiller = name.toLowerCase().includes('paracétamol');
  const isVitamin = name.toLowerCase().includes('vitamine');

  return (
    <View style={styles.card}>
      <View style={styles.leftContainer}>
        <Pill size={24} color="blue" />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.medicationName}>{name}</Text>
        <Text style={styles.dosage}>{dosage}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    marginVertical: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  leftContainer: {
    marginRight: 16,
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
  },
  pillImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  medicationName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  dosage: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
    color: '#6B7280',
  },
});