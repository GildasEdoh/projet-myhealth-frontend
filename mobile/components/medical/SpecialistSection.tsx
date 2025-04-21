import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import { specialists } from '@/constants/medical';

export default function SpecialistSection() {
  return (
    <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {specialists.map((specialist) => (
        <TouchableOpacity 
          key={specialist.id} 
          style={styles.specialistCard}
          activeOpacity={0.7}
        >
          <Image 
            source={{ uri: specialist.imageUrl }} 
            style={styles.specialistImage}
            resizeMode="contain"
          />
          <Text style={styles.specialistName}>{specialist.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingRight: 16,
  },
  specialistCard: {
    alignItems: 'center',
    marginRight: 24,
    width: 100,
  },
  specialistImage: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginBottom: 8,
  },
  specialistName: {
    fontSize: 14,
    color: Colors.textDark,
    fontWeight: '500',
    textAlign: 'center',
  },
});