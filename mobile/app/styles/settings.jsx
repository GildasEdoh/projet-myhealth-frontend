import {StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 12,
      marginVertical: 2
    },
    profileSection: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 30
    },
    profileImage: {
      width: 60,
      height: 60,
      borderRadius: 30,
    },
    profileInfo: {
      marginLeft: 12,
    },
    profileName: {
      fontSize: 20,
      fontWeight: '600',
      color: Colors.textDark,
      marginBottom: 4,
    },
    editButton: {
      backgroundColor: Colors.primary,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 20,
    },
    editButtonText: {
      color: 'white',
      fontSize: 14,
      fontWeight: '500',
    },
    notificationButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#F2F4F7',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabsContainer: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      marginTop: 16,
      marginBottom: 24,
    },
    tab: {
      marginRight: 24,
      paddingBottom: 8,
    },
    activeTab: {
      borderBottomWidth: 2,
      borderBottomColor: Colors.primary,
    },
    tabText: {
      fontSize: 16,
      color: Colors.textLight,
    },
    activeTabText: {
      color: Colors.primary,
      fontWeight: '600',
    },
    content: {
      flex: 1,
      paddingHorizontal: 16,
    },
    section: {
      marginBottom: 24,
    },
    sectionTitle: {
      fontSize: 14,
      color: Colors.primary,
      marginBottom: 12,
      letterSpacing: 0.5,
    },
    infoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    infoLabel: {
      fontSize: 16,
      color: Colors.textDark,
      fontWeight: '500',
      marginRight: 8,
    },
    infoValue: {
      fontSize: 16,
      color: Colors.textMedium,
    },
    allergiesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 8,
    },
    allergyTag: {
      backgroundColor: '#E8FFE8',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 16,
      marginRight: 8,
      marginBottom: 8,
    },
    allergyText: {
      color: '#2D8A2D',
      fontSize: 14,
      fontWeight: '500',
    },
    noInfoText: {
      fontSize: 16,
      color: Colors.textLight,
      fontStyle: 'italic',
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 12,
      marginBottom: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    menuIconTitle: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    menuIcon: {
      marginRight: 12,
    },
    menuTitle: {
      fontSize: 16,
      color: Colors.textDark,
    },
    documentItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 12,
      marginBottom: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    documentInfo: {
      marginLeft: 12,
    },
    documentTitle: {
      fontSize: 16,
      color: Colors.textDark,
      fontWeight: '500',
    },
    documentDate: {
      fontSize: 14,
      color: Colors.textLight,
      marginTop: 2,
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 10,
        padding: 8,
      },
      
  });
  export default styles;