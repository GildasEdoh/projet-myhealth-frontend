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
import { ArrowLeft, Bell, Calendar, Clock, MapPin, User } from 'lucide-react-native';
import Animated, { 
  FadeIn, 
  FadeOut, 
  SlideInRight, 
  SlideOutLeft 
} from 'react-native-reanimated';

interface AppointmentModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (appointment: {
    hospital: string;
    specialty: string;
    doctor: string;
    date: string;
    time: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    reason: string;
  }) => void;
}

const AnimatedView = Animated.createAnimatedComponent(View);

export default function AppointmentModal({ 
  visible, 
  onClose, 
  onSave 
}: AppointmentModalProps) {
  const [step, setStep] = useState(1);
  const [hospital, setHospital] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');

  const doctors = [
    {
      id: '1',
      name: 'Dr. Junior Idris',
      specialty: 'Cardiologue',
      availability: 'Prochaine disponibilité',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: '2',
      name: 'Dr. Vincent',
      specialty: 'Généraliste',
      availability: 'Prochaine disponibilité',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const dates = [
    { day: 'Lundi', date: '7', month: 'Avril' },
    { day: 'Mardi', date: '8', month: 'Avril' },
    { day: 'Jeudi', date: '9', month: 'Avril' },
    { day: 'Lundi', date: '14', month: 'Avril' },
    { day: 'Samedi', date: '19', month: 'Avril' },
    { day: 'Vendredi', date: '25', month: 'Avril' },
  ];

  const times = [
    '08:00', '08:45', '09:00', '09:40', 
    '11:00', '11:30', '14:00', '14:40', '15:00'
  ];

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
    else handleSave();
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSave = () => {
    onSave({
      hospital,
      specialty,
      doctor: selectedDoctor,
      date: selectedDate,
      time: selectedTime,
      firstName,
      lastName,
      phone,
      email,
      reason
    });
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setStep(1);
    setHospital('');
    setSpecialty('');
    setSelectedDoctor('');
    setSelectedDate('');
    setSelectedTime('');
    setFirstName('');
    setLastName('');
    setPhone('');
    setEmail('');
    setReason('');
  };

  const renderStep1 = () => (
    <AnimatedView 
      entering={SlideInRight} 
      exiting={SlideOutLeft}
      style={styles.stepContainer}
    >
      <Text style={styles.stepTitle}>Recherche d'un spécialiste</Text>
      <Text style={styles.stepDescription}>
        Veuillez sélectionner un hôpital et une spécialité médicale pour trouver le médecin qui correspond à vos besoins.
      </Text>
      
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Choisir un hôpital</Text>
        <View style={styles.inputWrapper}>
          <MapPin size={20} color="#6B7280" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            value={hospital}
            onChangeText={setHospital}
            placeholder="Sélectionner un hôpital"
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Choisir une spécialité</Text>
        <View style={styles.inputWrapper}>
          <User size={20} color="#6B7280" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            value={specialty}
            onChangeText={setSpecialty}
            placeholder="Sélectionner une spécialité"
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </View>
    </AnimatedView>
  );

  const renderStep2 = () => (
    <AnimatedView 
      entering={SlideInRight} 
      exiting={SlideOutLeft}
      style={styles.stepContainer}
    >
      <Text style={styles.stepTitle}>Choisir un médecin</Text>
      <Text style={styles.stepDescription}>
        Sélectionnez un docteur parmi les spécialistes disponibles.
      </Text>

      <ScrollView style={styles.doctorList}>
        {doctors.map((doctor) => (
          <Pressable
            key={doctor.id}
            style={[
              styles.doctorCard,
              selectedDoctor === doctor.name && styles.doctorCardSelected
            ]}
            onPress={() => setSelectedDoctor(doctor.name)}
          >
            <View style={styles.doctorInfo}>
              <View style={styles.doctorImageContainer}>
                <View style={styles.doctorImage} />
              </View>
              <View>
                <Text style={styles.doctorName}>{doctor.name}</Text>
                <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
                <Text style={styles.doctorAvailability}>{doctor.availability}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </AnimatedView>
  );

  const renderStep3 = () => (
    <AnimatedView 
      entering={SlideInRight} 
      exiting={SlideOutLeft}
      style={styles.stepContainer}
    >
      <Text style={styles.stepTitle}>Vos informations</Text>
      <Text style={styles.stepDescription}>
        Sélectionnez et/ou veuillez renseigner vos informations personnelles pour votre rendez-vous.
      </Text>

      <ScrollView style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Nom de famille</Text>
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
            placeholder="Votre nom"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Prénom(s)</Text>
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
            placeholder="Votre prénom"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Numéro de téléphone</Text>
          <View style={styles.phoneInput}>
            <Text style={styles.phonePrefix}>+228</Text>
            <TextInput
              style={styles.phoneNumber}
              value={phone}
              onChangeText={setPhone}
              placeholder="Votre numéro"
              keyboardType="phone-pad"
              placeholderTextColor="#9CA3AF"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Votre email"
            keyboardType="email-address"
            placeholderTextColor="#9CA3AF"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Motif de consultation</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={reason}
            onChangeText={setReason}
            placeholder="Décrivez brièvement la raison de votre consultation"
            multiline
            numberOfLines={4}
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </ScrollView>
    </AnimatedView>
  );

  const renderStep4 = () => (
    <AnimatedView 
      entering={SlideInRight} 
      exiting={SlideOutLeft}
      style={styles.stepContainer}
    >
      <Text style={styles.stepTitle}>Choix du rendez-vous</Text>
      <Text style={styles.stepDescription}>
        Sélectionnez une date et un horaire pour votre rendez-vous avec {selectedDoctor}.
      </Text>

      <View style={styles.dateSection}>
        <Text style={styles.sectionTitle}>Choisir une date</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.dateList}
        >
          {dates.map((date, index) => (
            <Pressable
              key={index}
              style={[
                styles.dateCard,
                selectedDate === `${date.day} ${date.date} ${date.month}` && styles.dateCardSelected
              ]}
              onPress={() => setSelectedDate(`${date.day} ${date.date} ${date.month}`)}
            >
              <Text style={[
                styles.dateDay,
                selectedDate === `${date.day} ${date.date} ${date.month}` && styles.dateTextSelected
              ]}>{date.day}</Text>
              <Text style={[
                styles.dateNumber,
                selectedDate === `${date.day} ${date.date} ${date.month}` && styles.dateTextSelected
              ]}>{date.date}</Text>
              <Text style={[
                styles.dateMonth,
                selectedDate === `${date.day} ${date.date} ${date.month}` && styles.dateTextSelected
              ]}>{date.month}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <View style={styles.timeSection}>
        <Text style={styles.sectionTitle}>Choisir un horaire</Text>
        <View style={styles.timeGrid}>
          {times.map((time, index) => (
            <Pressable
              key={index}
              style={[
                styles.timeCard,
                selectedTime === time && styles.timeCardSelected
              ]}
              onPress={() => setSelectedTime(time)}
            >
              <Text style={[
                styles.timeText,
                selectedTime === time && styles.timeTextSelected
              ]}>{time}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </AnimatedView>
  );

  const renderStep5 = () => (
    <AnimatedView 
      entering={SlideInRight} 
      exiting={SlideOutLeft}
      style={styles.stepContainer}
    >
      <View style={styles.confirmationContainer}>
        <View style={styles.checkmarkCircle}>
          <Text style={styles.checkmark}>✓</Text>
        </View>
        <Text style={styles.confirmationTitle}>Votre rendez-vous est confirmé !</Text>
        
        <View style={styles.appointmentDetails}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Médecin:</Text>
            <Text style={styles.detailValue}>{selectedDoctor}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Spécialité:</Text>
            <Text style={styles.detailValue}>{specialty}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Date:</Text>
            <Text style={styles.detailValue}>{selectedDate}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Heure:</Text>
            <Text style={styles.detailValue}>{selectedTime}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Lieu:</Text>
            <Text style={styles.detailValue}>{hospital}</Text>
          </View>
        </View>
      </View>
    </AnimatedView>
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
            <TouchableOpacity 
              onPress={step === 1 ? onClose : handleBack} 
              style={styles.headerButton}
            >
              <ArrowLeft size={24} color="#6B7280" />
            </TouchableOpacity>
            <View style={styles.stepIndicator}>
              {[1, 2, 3, 4, 5].map((i) => (
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
            <TouchableOpacity style={styles.headerButton}>
              <Bell size={24} color="#6B7280" />
            </TouchableOpacity>
          </View>

          <View style={styles.modalBody}>
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
            {step === 4 && renderStep4()}
            {step === 5 && renderStep5()}
          </View>

          {step !== 5 && (
            <View style={styles.modalFooter}>
              <TouchableOpacity 
                style={[styles.button, styles.nextButton]}
                onPress={handleNext}
              >
                <Text style={styles.nextButtonText}>
                  {step === 4 ? 'Confirmer le rendez-vous' : 'Suivant'}
                </Text>
              </TouchableOpacity>
            </View>
          )}
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
    height: '90%',
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
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E5E7EB',
    marginHorizontal: 4,
  },
  stepDotActive: {
    backgroundColor: '#3B82F6',
    width: 24,
  },
  stepDotCompleted: {
    backgroundColor: '#3B82F6',
  },
  modalBody: {
    flex: 1,
    padding: 24,
  },
  stepContainer: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  stepDescription: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 24,
    lineHeight: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: '#111827',
  },
  phoneInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    overflow: 'hidden',
  },
  phonePrefix: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#374151',
    fontWeight: '500',
  },
  phoneNumber: {
    flex: 1,
    height: 48,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#111827',
  },
  textArea: {
    height: 100,
    paddingTop: 12,
    textAlignVertical: 'top',
  },
  doctorList: {
    flex: 1,
  },
  doctorCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  doctorCardSelected: {
    borderColor: '#3B82F6',
    backgroundColor: '#EFF6FF',
  },
  doctorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  doctorImageContainer: {
    marginRight: 16,
  },
  doctorImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#E5E7EB',
  },
  doctorName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  doctorAvailability: {
    fontSize: 14,
    color: '#059669',
    fontWeight: '500',
  },
  dateSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  dateList: {
    flexDirection: 'row',
  },
  dateCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    minWidth: 80,
  },
  dateCardSelected: {
    backgroundColor: '#3B82F6',
    borderColor: '#3B82F6',
  },
  dateDay: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  dateNumber: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  dateMonth: {
    fontSize: 14,
    color: '#6B7280',
  },
  dateTextSelected: {
    color: 'white',
  },
  timeSection: {
    flex: 1,
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -6,
  },
  timeCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    margin: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    width: '31%',
  },
  timeCardSelected: {
    backgroundColor: '#3B82F6',
    borderColor: '#3B82F6',
  },
  timeText: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '500',
  },
  timeTextSelected: {
    color: 'white',
  },
  confirmationContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  checkmarkCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#059669',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  checkmark: {
    color: 'white',
    fontSize: 40,
  },
  confirmationTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#059669',
    marginBottom: 32,
    textAlign: 'center',
  },
  appointmentDetails: {
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    padding: 24,
    width: '100%',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  detailLabel: {
    fontSize: 16,
    color: '#6B7280',
  },
  detailValue: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '500',
  },
  modalFooter: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  button: {
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#3B82F6',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  form: {
    flex: 1,
    paddingTop: 8,
  },
});