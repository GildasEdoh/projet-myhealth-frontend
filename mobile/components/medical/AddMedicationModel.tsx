import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Modal, 
  TouchableOpacity, 
  TextInput,
  ScrollView,
  Platform,
  Pressable 
} from 'react-native';
import Animated, { 
  FadeIn, 
  FadeOut, 
  SlideInRight, 
  SlideOutLeft 
} from 'react-native-reanimated';
import { ArrowLeft, ArrowRight, X, Bell } from 'lucide-react-native';

const AnimatedView = Animated.createAnimatedComponent(View);
interface AddMedicationModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (medication: {
    name: string;
    dosage: string;
    frequency: string;
    time: string;
    schedule: string[];
    interval: string;
  }) => void;
}

export default function AddMedicationModal({ 
  visible, 
  onClose, 
  onSave 
}: AddMedicationModalProps) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');
  const [frequency, setFrequency] = useState('');
  const [selectedSchedule, setSelectedSchedule] = useState<string[]>([]);
  const [selectedInterval, setSelectedInterval] = useState('');

  const scheduleOptions = [
    'Matin',
    'Midi',
    'Soir',
    'Avant le repas',
    'Pendant le repas',
    'Après le repas'
  ];

  const intervalOptions = [
    'Chaque jour',
    'Chaque 1 jour',
    'Chaque 2 jour',
    'Chaque 3 jour',
    'Chaque 4 jour',
    'Chaque 5 jour',
    'Chaque 6 jour',
    '1 fois par semaine'
  ];

  const handleSave = () => {
    if (name && dosage && frequency && selectedSchedule.length > 0 && selectedInterval) {
      onSave({
        name,
        dosage,
        frequency,
        time: selectedSchedule.join(', '),
        schedule: selectedSchedule,
        interval: selectedInterval
      });
      resetForm();
      onClose();
    }
  };

  const resetForm = () => {
    setStep(1);
    setName('');
    setDosage('');
    setFrequency('');
    setSelectedSchedule([]);
    setSelectedInterval('');
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else handleSave();
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleSchedule = (schedule: string) => {
    if (selectedSchedule.includes(schedule)) {
      setSelectedSchedule(selectedSchedule.filter(s => s !== schedule));
    } else {
      setSelectedSchedule([...selectedSchedule, schedule]);
    }
  };

  const renderStep1 = () => (
    <AnimatedView 
      entering={SlideInRight} 
      exiting={SlideOutLeft}
      style={styles.stepContainer}>
      <Text style={styles.stepTitle}>Informations du médicament</Text>

      <Text style={styles.inputLabel}>Nom du médicament</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Ex: Paracétamol"
        placeholderTextColor="#9CA3AF"
      />

      <Text style={styles.inputLabel}>Nombre de dose prescrite</Text>
      <TextInput
        style={styles.input}
        value={dosage}
        onChangeText={setDosage}
        placeholder="Ex: 2 comprimés"
        placeholderTextColor="#9CA3AF"
      />

      <Text style={styles.inputLabel}>Nombre de prise par jour</Text>
      <TextInput
        style={styles.input}
        value={frequency}
        onChangeText={setFrequency}
        placeholder="Ex: 3 fois"
        placeholderTextColor="#9CA3AF"
        keyboardType="numeric"/>
    </AnimatedView>
  );

  const renderStep2 = () => (
    <AnimatedView 
      entering={SlideInRight} 
      exiting={SlideOutLeft}
      style={styles.stepContainer}>
      <Text style={styles.stepTitle}>Horaire de prise</Text>
      <Text style={styles.stepSubtitle}>(Choisir une ou plusieurs option(s))</Text>
      
      <View style={styles.checkboxContainer}>
        {scheduleOptions.map((option) => (
          <Pressable
            key={option}
            style={styles.checkboxRow}
            onPress={() => toggleSchedule(option)}>
            <View style={[
              styles.checkbox,
              selectedSchedule.includes(option) && styles.checkboxSelected
            ]} />
            <Text style={styles.checkboxLabel}>{option}</Text>
          </Pressable> 
        ))}
      </View>
      </AnimatedView>
  );

  const renderStep3 = () => (
    <View style={styles.stepContainer}>
      <Text style={styles.stepTitle}>Intervalle de jour</Text>
      <Text style={styles.stepSubtitle}>(Choisir une option)</Text>
      
      <View style={styles.radioContainer}>
        {intervalOptions.map((option) => (
          <Pressable
            key={option}
            style={styles.radioRow}
            onPress={() => setSelectedInterval(option)}
          >
            <View style={styles.radioOuter}>
              {selectedInterval === option && <View style={styles.radioInner} />}
            </View>
            <Text style={styles.radioLabel}>{option}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={step === 1 ? onClose : handleBack} style={styles.headerButton}>
              {step === 1 ? (
                <X size={24} color="#6B7280" />
              ) : (
                <ArrowLeft size={24} color="#6B7280" />
              )}
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Ajout de rappel de médicament</Text>
            <TouchableOpacity style={styles.headerButton}>
              <Bell size={24} color="#6B7280" />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.modalBody}>
            <View style={styles.stepIndicator}>
              {[1, 2, 3].map((i) => (
                <View
                  key={i}
                  style={[
                    styles.stepDot,
                    i === step && styles.stepDotActive,
                    i < step && styles.stepDotCompleted
                  ]}
                />
              ))}
            </View>

            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
          </ScrollView>

          <View style={styles.modalFooter}>
            <TouchableOpacity 
              style={[styles.button, styles.nextButton]}
              onPress={handleNext}>
              <Text style={styles.nextButtonText}>
                {step === 3 ? 'Enregistrer' : 'Suivant'}
              </Text>
              {step !== 3 && <ArrowRight size={20} color="white" style={styles.buttonIcon} />}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    minHeight: '80%',
    paddingBottom: Platform.OS === 'ios' ? 40 : 24,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerButton: {
    padding: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    flex: 1,
    textAlign: 'center',
  },
  modalBody: {
    padding: 24,
  },
  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  stepDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4B7BFF',
    marginHorizontal: 4,
  },
  stepDotActive: {
    backgroundColor: '#4B7BFF',
    width: 24,
  },
  stepDotCompleted: {
    backgroundColor: '#4B7BFF',
  },
  stepContainer: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  stepSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: '#374151',
  },
  input: {
    backgroundColor: '#F9FAFB', 
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    marginBottom: 24,
  },
  checkboxContainer: {
    marginTop: 8,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    marginRight: 12,
  },
  checkboxSelected: {
    backgroundColor: '#4B7BFF',
    borderColor: '#4ADE80',
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#374151',
  },
  radioContainer: {
    marginTop: 8,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4B7BFF',
  },
  radioLabel: {
    fontSize: 16,
    color: '#374151',
  },
  modalFooter: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  button: {
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  nextButton: {
    backgroundColor: '#4B7BFF',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonIcon: {
    marginLeft: 8,
  },
});