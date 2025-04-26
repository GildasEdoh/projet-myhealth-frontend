import { Stack } from 'expo-router';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

export default function DonationLayout() {
  useFrameworkReady();
  
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="FirstDonation" />
      <Stack.Screen name="NewApointement" />
      <Stack.Screen name="Notifications" />
      <Stack.Screen name="Profil" />
    </Stack>
  );
}
