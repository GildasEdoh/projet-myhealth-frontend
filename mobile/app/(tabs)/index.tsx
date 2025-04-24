import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/ui/Homeheader';
import SearchBar from '@/components/ui/SearchBar';
import UpcomingAppointment from '@/components/medical/UpcomingAppointment';
import SpecialistSection from '@/components/medical/SpecialistSection';
import RecentVisitsSection from '@/components/medical/RecentVisitsSection';
import { StatusBar } from 'expo-status-bar';
import Colors from '@/constants/Colors';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <Header />
        <SearchBar />
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Prochain rendez-vous</Text>
          <UpcomingAppointment />
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Spécialiste</Text>
          <SpecialistSection />
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mes recentes visites</Text>
          <RecentVisitsSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContent: {
    paddingBottom: 80,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    color: Colors.textDark,
  },
});



// import { Redirect } from 'expo-router';

// export default function Index() {
//   return <Redirect href="./screens/eligibility" />;
// }