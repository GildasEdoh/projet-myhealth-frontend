import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import { appointments } from '@/constants/medical';
import AppointmentCard from '@/components/medical/AppointmentCard';
import { StatusBar } from 'expo-status-bar';
import Separator from '@/components/ui/Separator';
import { Calendar, Filter } from 'lucide-react-native';
import { Plus } from 'lucide-react-native';
import { router } from 'expo-router';

export default function AppointmentsScreen() {
  const [selectedFilter, setSelectedFilter] = useState('upcoming');
  const handleNewAppointment = () => {
    router.push('/NewApointement')
  };
  
  const filteredAppointments = appointments.filter(appointment => {
    return selectedFilter === 'upcoming' 
      ? new Date(appointment.date) >= new Date() 
      : new Date(appointment.date) < new Date();
  });

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Mes Rendez-vous</Text>
      <View style={styles.filterContainer}>
        <View style={styles.calendarIcon}>
          <Calendar size={20} color={Colors.primary} />
        </View>
        <View style={styles.filterIcon}>
          <Filter size={20} color={Colors.textDark} />
        </View>
      </View>
    </View>
  );

  const renderFilterOptions = () => (
    <View style={styles.tabsContainer}>
      <Text
        style={[
          styles.tabText,
          selectedFilter === 'upcoming' && styles.activeTabText,
        ]}
        onPress={() => setSelectedFilter('upcoming')}
      >
        À venir
      </Text>
      <Text
        style={[
          styles.tabText,
          selectedFilter === 'past' && styles.activeTabText,
        ]}
        onPress={() => setSelectedFilter('past')}
      >
        Passés
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {renderHeader()}
      {renderFilterOptions()}
      <FlatList
        data={filteredAppointments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AppointmentCard appointment={item} />
        )}
        ItemSeparatorComponent={() => <Separator />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity 
        style={styles.fab} 
        activeOpacity={0.8}
        onPress={handleNewAppointment}>
        <Plus color="white" size={24} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.textDark,
  },
  filterContainer: {
    flexDirection: 'row',
  },
  calendarIcon: {
    marginRight: 16,
  },
  filterIcon: {},
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  tabText: {
    fontSize: 16,
    marginRight: 24,
    paddingVertical: 8,
    color: Colors.textLight,
  },
  activeTabText: {
    color: Colors.primary,
    fontWeight: '600',
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4B7BFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 10,
  },
});