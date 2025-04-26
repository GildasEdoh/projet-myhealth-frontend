import { Stack } from 'expo-router';
import React from 'react';
import Colors from '@/constants/Colors';

export default function NewAppointmentLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.backgroundColor,
        },
        headerTintColor: Colors.textDark,
        headerTitleStyle: {
          fontWeight: '600',
        },
        headerShadowVisible: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Recherche d\'un spécialiste',
          presentation: 'card',
        }}
      />
      <Stack.Screen 
        name="doctorSelection" 
        options={{ 
          title: 'Choisir un médecin',
        }} 
      />
      <Stack.Screen 
        name="patientInfo" 
        options={{ 
          title: 'Vos informations',
        }} 
      />
      <Stack.Screen 
        name="dateSelection" 
        options={{ 
          title: 'Choix du rendez-vous',
        }} 
      />
      <Stack.Screen 
        name="timeSelection" 
        options={{ 
          title: 'Choix d horaire',
        }} 
      />
      <Stack.Screen 
        name="confirmation" 
        options={{ 
          title: 'Confirmation',
          headerBackVisible: false,
        }} 
      />
    </Stack>
  );
}