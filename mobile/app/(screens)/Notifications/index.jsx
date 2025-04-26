import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, StatusBar } from 'react-native';
import notifications from '@/constants/notifications';
import styles from "../../styles/notifications"


const NotificationsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <Text style={styles.title}>Notifications-vides</Text>
        
        {notifications.length > 0 ? (
          <>
            <Text style={styles.sectionTitle}>Notifications</Text>
            <FlatList
              data={notifications}
              renderItem={({ item }) => (
                <View style={styles.notificationItem}>
                  <Text style={styles.notificationType}>{item.type}</Text>
                  <Text style={styles.notificationMessage}>{item.message}</Text>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </>
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.zzIcon}>Z Z</Text>
            <Text style={styles.emptyText}>Aucune notification, revenez plus tard</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default NotificationsScreen;