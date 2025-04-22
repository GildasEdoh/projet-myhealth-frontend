import { StyleSheet } from 'react-native';


// Ajoutez les styles des deux versions précédentes combinées
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
      flex: 1,
      padding: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 30,
      color: '#333',
      textAlign: 'center',
    },
    emptyState: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 100,
    },
    zzIcon: {
      fontSize: 40,
      color: '#ccc',
      marginBottom: 20,
    },
    emptyText: {
      fontSize: 16,
      color: '#666',
      textAlign: 'center',
      paddingHorizontal: 40,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 16,
      color: '#333',
    },
    notificationItem: {
      backgroundColor: '#f9f9f9',
      borderRadius: 8,
      padding: 16,
      marginBottom: 12,
      borderLeftWidth: 4,
      borderLeftColor: '#4a90e2',
    },
    notificationType: {
      fontWeight: 'bold',
      marginBottom: 4,
      color: '#4a90e2',
    },
    notificationMessage: {
      color: '#333',
      lineHeight: 20,
    },
  });

  export default styles
  