

import { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Plus } from 'lucide-react-native';
import Header from '@/components/ui/Homeheader';
import MedicationCard from '@/components/medical/MedicationCard';
import AddMedicationModal from '@/components/medical/AddMedicationModel'


interface Medication {
  id: string;
  name: string;
  dosage: string;
  time: string;
}

export default function RemindersScreen() {
  const [medications, setMedications] = useState<Medication[]>([
    {
      id: '1',
      name: 'Paracétamol',
      dosage: '2 comprimés, 3X chaque jour',
      time: '12:00',
    },
    {
      id: '2',
      name: 'Paracétamol',
      dosage: '2 comprimés, 3X chaque 1 jour',
      time: '12:00',
    },
    {
      id: '3',
      name: 'Vitamine C',
      dosage: '2 comprimés, 1X par jour',
      time: '12:00',
    },
    {
      id: '4',
      name: 'Paracétamol',
      dosage: '2 comprimés, 3X par jour',
      time: '12:00',
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  const handleAddMedication = (medication: {
    name: string;
    dosage: string;
    frequency: string;
    time: string;
    schedule: string[];
    interval: string;
  }) => {
    const newMedication = {
      id: Date.now().toString(),
      name: medication.name,
      dosage: `${medication.dosage}, ${medication.frequency}`,
      time: medication.schedule.join(', '),
    };

    setMedications([...medications, newMedication]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Rappel de medicament" />
      
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {medications.map((medication) => (
          <MedicationCard
            key={medication.id}
            name={medication.name}
            dosage={medication.dosage}
            time={medication.time}
          />
        ))}
      </ScrollView>

      <TouchableOpacity 
        style={styles.fab} 
        activeOpacity={0.8}
        onPress={() => setModalVisible(true)}
      >
        <Plus color="white" size={24} />
      </TouchableOpacity>

      <AddMedicationModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleAddMedication}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
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