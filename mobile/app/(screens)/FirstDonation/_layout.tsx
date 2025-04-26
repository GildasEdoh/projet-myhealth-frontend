import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

export default function DonationLayout() {
  useFrameworkReady();
  
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: styles.content,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="warning" />
      <Stack.Screen name="map" />
    </Stack>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#f9f9f9',
  },
});