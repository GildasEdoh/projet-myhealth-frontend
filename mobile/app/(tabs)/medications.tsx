import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import { medications } from '@/constants/medical';
import MedicationCard from "../../components/medical/MedicationCard";
import { StatusBar } from 'expo-status-bar';
import Separator from '@/components/ui/Separator';

export default function MedicationsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Mes Médicaments</Text>
      </View>
      
      <FlatList
        data={medications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MedicationCard medication={item} />
        )}
        ItemSeparatorComponent={() => <Separator />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  headerContainer: {
    padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.textDark,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
});