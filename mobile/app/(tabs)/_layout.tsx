import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import { House as Home, Calendar, Pill, Droplets, Settings } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#4B7BFF',
        tabBarInactiveTintColor: Colors.inactive,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: true,
        tabBarLabelStyle: styles.tabBarLabel,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color, size, focused }) => <Home size={size} color={ focused ? '#4B7BFF': '#000000'} />,
        }}
      />
      <Tabs.Screen
        name="appointments"
        options={{
          title: 'Rendez-vous',
          tabBarIcon: ({ color, size, focused }) => <Calendar size={size} color={ focused ? '#4B7BFF': '#000000'} />,
        }}
      />
      <Tabs.Screen
        name="medications"
        options={{
          title: 'Rappels',
          tabBarIcon: ({ color, size }) => <Pill size={size} color="#ff0921" />,
        }}
      />
      <Tabs.Screen
        name="bloodDonation"
        options={{
          title: 'Don de sang',
          tabBarIcon: ({ color, size }) => <Droplets size={size} color="#ff0921" />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Paramètre',
          tabBarIcon: ({ color, size, focused }) => <Settings size={size} color={ focused? '#4B7BFF': '#000000'} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    elevation: 8,
    shadowColor: '#000',
    borderRadius: 40,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderTopWidth: 0.5,
    borderTopColor: '#E0E0E0',
    height: 60,
  },
  tabBarLabel: {
    fontSize: 10,
    fontWeight: '500',
    marginBottom: 5,
  },
});