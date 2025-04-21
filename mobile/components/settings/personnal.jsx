import { User, Lock } from 'lucide-react-native';
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import styles from '@/app/styles/settings';

function renderPersonalContent () {
  return (
    <>
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>INFORMATIONS PERSONNELLES</Text>
      <TouchableOpacity style={styles.menuItem}>
        <View style={styles.menuIconTitle}>
          <User size={22} color={Colors.primary} style={styles.menuIcon} />
          <Text style={styles.menuTitle}>Modifier le profil</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <View style={styles.menuIconTitle}>
          <Lock size={22} color={Colors.primary} style={styles.menuIcon} />
          <Text style={styles.menuTitle}>Changer le mot de passe</Text>
        </View>
      </TouchableOpacity>
    </View>

    <View style={styles.section}>
      <Text style={styles.sectionTitle}>COORDONNÉES</Text>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoValue}>utilisateur@example.com</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Téléphone:</Text>
        <Text style={styles.infoValue}>+33 6 12 34 56 78</Text>
      </View>
    </View>
  </>
  )
}
export default renderPersonalContent;