import styles from '@/app/styles/settings';
import { View, Text} from 'react-native';
import React from 'react';

function renderMedicalContent() {
  return (
    <>
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>INFORMATIONS MÉDICALES PRINCIPALES</Text>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Groupe sanguin :</Text>
        <Text style={styles.infoValue}>A+</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Dernière consultation:</Text>
        <Text style={styles.infoValue}>Dr. Koffi, 25/02/2025</Text>
      </View>
    </View>

    <View style={styles.section}>
      <Text style={styles.sectionTitle}>ALLERGIES</Text>
      <View style={styles.allergiesContainer}>
        {['Pénicilline', 'Pénicilline', 'Pénicilline', 'Pénicilline', 'Pénicilline', 'Pénicilline'].map((allergy, index) => (
          <View key={index} style={styles.allergyTag}>
            <Text style={styles.allergyText}>{allergy}</Text>
          </View>
        ))}
      </View>
    </View>

    <View style={styles.section}>
      <Text style={styles.sectionTitle}>ANTÉCÉDENTS MÉDICAUX</Text>
      <Text style={styles.noInfoText}>Aucunes informations disponible</Text>
    </View>

    <View style={styles.section}>
      <Text style={styles.sectionTitle}>VACCINS</Text>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Tétanos:</Text>
        <Text style={styles.infoValue}>Dernier rappel: 03/04/2020</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Tétanos:</Text>
        <Text style={styles.infoValue}>Dernier rappel: 03/04/2020</Text>
      </View>
    </View>
  </>
  )
}

export default renderMedicalContent;