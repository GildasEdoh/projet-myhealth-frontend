// import { Tabs } from 'expo-router';
// import { StyleSheet } from 'react-native';
// import Colors from '@/constants/Colors';
// import { House as Home, Calendar, Pill, Droplets, Settings } from 'lucide-react-native';

// export default function TabLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: '#4B7BFF',
//         tabBarInactiveTintColor: Colors.inactive,
//         tabBarStyle: styles.tabBar,
//         tabBarShowLabel: true,
//         tabBarLabelStyle: styles.tabBarLabel,
//         headerShown: false,
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Accueil',
//           tabBarIcon: ({ color, size, focused }) => <Home size={size} color={ focused ? '#4B7BFF': '#000000'} />,
//         }}
//       />
//       <Tabs.Screen
//         name="appointments"
//         options={{
//           title: 'Rendez-vous',
//           tabBarIcon: ({ color, size, focused }) => <Calendar size={size} color={ focused ? '#4B7BFF': '#000000'} />,
//         }}
//       />
//       <Tabs.Screen
//         name="medications"
//         options={{
//           title: 'Rappels',
//           tabBarIcon: ({ color, size }) => <Pill size={size} color="#ff0921" />,
//         }}
//       />
//       <Tabs.Screen
//         name="bloodDonation"
//         options={{
//           title: 'Don de sang',
//           tabBarIcon: ({ color, size }) => <Droplets size={size} color="#ff0921" />,
//         }}
//       />
//       <Tabs.Screen
//         name="settings"
//         options={{
//           title: 'Paramètre',
//           tabBarIcon: ({ color, size, focused }) => <Settings size={size} color={ focused? '#4B7BFF': '#000000'} />,
//         }}
//       />
//     </Tabs>
//   );
// }

// const styles = StyleSheet.create({
//   tabBar: {
//     backgroundColor: 'white',
//     elevation: 8,
//     shadowColor: '#000',
//     borderRadius: 40,
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     borderTopWidth: 0.5,
//     borderTopColor: '#E0E0E0',
//     height: 60,
//   },
//   tabBarLabel: {
//     fontSize: 10,
//     fontWeight: '500',
//     marginBottom: 5,
//   },
// });

import { Tabs } from 'expo-router';
import { StyleSheet, View, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Colors from '@/constants/Colors';
import { House as Home, Calendar, Pill, Droplets, Settings } from 'lucide-react-native';
import Animated, { 
  useAnimatedStyle, 
  withSpring, 
  withTiming,
  interpolate,
  useSharedValue,
  Easing
} from 'react-native-reanimated';
import { useRef } from 'react';

const { width } = Dimensions.get('window');

export default function TabLayout() {
  const tabItems = [
    { name: 'index', title: 'Accueil', icon: Home, color: '#000000' },
    { name: 'appointments', title: 'Rendez-vous', icon: Calendar, color: '#000000' },
    { name: 'medications', title: 'Rappels', icon: Pill, color: '#000000' },
    { name: 'bloodDonation', title: 'Don de sang', icon: Droplets, color: '#dd0e18' },
    { name: 'settings', title: 'Paramètre', icon: Settings, color: '#000000' },
  ];

  const tabWidth = width / tabItems.length;
  const activeIndex = useSharedValue(0);

  const animatedIndicatorStyle = useAnimatedStyle(() => {
    return {
      transform: [{ 
        translateX: withSpring(activeIndex.value * tabWidth, {
          damping: 15,
          stiffness: 120,
        }) 
      }],
      width: tabWidth * 0.6,
    };
  });

  // Style pour l'effet de zoom sur les icônes
  const animatedIconStyle = (index: number) => useAnimatedStyle(() => {
    const isActive = activeIndex.value === index;
    return {
      transform: [{
        scale: withTiming(isActive ? 1.3 : 1, { // Augmentation de 40% quand actif
          duration: 200,
          easing: Easing.out(Easing.ease),
        })
      }],
      opacity: withTiming(isActive ? 1 : 0.7, {
        duration: 150,
      }),
    };
  });


  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#4B7BFF',
          tabBarInactiveTintColor: Colors.inactive,
          tabBarStyle: styles.tabBar,
          tabBarShowLabel: true,
          tabBarLabelStyle: styles.tabBarLabel,
          headerShown: false,
        }}
        screenListeners={{
          state: (e) => {
            activeIndex.value = e.data.state.index;
          },
        }}
      >
        {tabItems.map((item, index) => (
          <Tabs.Screen
            key={item.name}
            name={item.name}
            options={{
              title: item.title,
              tabBarIcon: ({ color, size, focused }) => (
                <Animated.View style={[
                  animatedIconStyle(index),
                  styles.iconContainer
                ]}>
                  <item.icon 
                    size={size} 
                    color={focused ? '#4B7BFF' : item.color} 
                  />
                </Animated.View>
              ),
            }}
          />
        ))}
      </Tabs>

      {/* Floating Bubble Indicator */}
      <Animated.View style={[styles.floatingIndicator, animatedIndicatorStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    elevation: 8,
    shadowColor: '#000',
    borderRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderTopWidth: 0.5,
    borderTopColor: '#E0E0E0',
    height: 70,
    paddingBottom: 5,
  },
  tabBarLabel: {
    fontSize: 10,
    fontWeight: '500',
    marginBottom: 5,
  },
  floatingIndicator: {
    position: 'absolute',
    bottom: 15,
    left: width / 14 * 0.7,
    height: 5,
    backgroundColor: '#4B7BFF',
    borderRadius: 3,
  },
  iconContainer: {
    marginBottom: 4, // Espace supplémentaire pour l'animation
  },
});
