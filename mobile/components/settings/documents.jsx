import { View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import { FileText } from 'lucide-react-native';
import styles from '@/app/styles/settings';

function renderDocumentsContent () {
  return (
    <>
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>MES DOCUMENTS</Text>
      <TouchableOpacity style={styles.documentItem}>
        <FileText size={22} color={Colors.primary} style={styles.menuIcon} />
        <View style={styles.documentInfo}>
          <Text style={styles.documentTitle}>Ordonnance - Dr. Koffi</Text>
          <Text style={styles.documentDate}>25/02/2025</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.documentItem}>
        <FileText size={22} color={Colors.primary} style={styles.menuIcon} />
        <View style={styles.documentInfo}>
          <Text style={styles.documentTitle}>Résultats analyses</Text>
          <Text style={styles.documentDate}>15/02/2025</Text>
        </View>
      </TouchableOpacity>
    </View>
  </>
  )
}


  export default renderDocumentsContent;