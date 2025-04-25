
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import { StatusBar } from 'expo-status-bar';
import { Bell} from 'lucide-react-native';
import renderDocumentsContent from "../../../components/settings/documents"
import renderPersonalContent from "../../../components/settings/personnal"
import renderMedicalContent from "../../../components/settings/medical"
import styles from "../../styles/settings"
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native'; // ou autre icône de flèche

function ProfilScreen() {
  const [activeTab, setActiveTab] = useState('medical');
  const navigation = useNavigation();
  const renderTabs = () => (
    <View style={styles.tabsContainer}>
      <TouchableOpacity 
        style={[styles.tab, activeTab === 'medical' && styles.activeTab]}
        onPress={() => setActiveTab('medical')}
      >
        <Text style={[styles.tabText, activeTab === 'medical' && styles.activeTabText]}>
          Médical
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.tab, activeTab === 'personal' && styles.activeTab]}
        onPress={() => setActiveTab('personal')}
      >
        <Text style={[styles.tabText, activeTab === 'personal' && styles.activeTabText]}>
          Personnel
        </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.tab, activeTab === 'documents' && styles.activeTab]}
        onPress={() => setActiveTab('documents')}
      >
        <Text style={[styles.tabText, activeTab === 'documents' && styles.activeTabText]}>
          Documents
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'medical':
        return renderMedicalContent();
      case 'personal':
        return renderPersonalContent();
      case 'documents':
        return renderDocumentsContent();
      default:
        return renderMedicalContent();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ArrowLeft size={24} color={Colors.textDark} />
        </TouchableOpacity>

        <View style={styles.profileSection}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Nom Prénom</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Bell size={24} color={Colors.textDark} />
        </TouchableOpacity>
      </View>

      {renderTabs()}
      
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}>
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfilScreen