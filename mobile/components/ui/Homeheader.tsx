import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Bell } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import { useRouter } from 'expo-router';

interface HeaderProps {
  title: string;
}
export default function Header({ title }: HeaderProps) {
  
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image 
          source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Nom</Text>
      </View>
      
      <TouchableOpacity style={styles.notificationButton} onPress={() => router.push("/screens/notifications")}>
        <Bell size={22} color={Colors.textDark} />
        <View style={styles.notificationBadge}>
          <Text style={styles.badgeText}>5</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF'
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileName: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textDark,
  },
  notificationButton: {
    position: 'relative',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F2F4F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadge: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: Colors.accent,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
});


// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { Bell } from 'lucide-react-native';

// interface HeaderProps {
//   title: string;
// }

// export default function Header({ title }: HeaderProps) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{title}</Text>
//       <View style={styles.profileContainer}>
//         <View style={styles.profileInfo}>
//           <Image 
//             source={{ uri: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150' }} 
//             style={styles.avatar} 
//           />
//           <Text style={styles.name}>Nom</Text>
//         </View>
//         <TouchableOpacity style={styles.notificationButton}>
//           <Bell color="#000" size={24} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 16,
//     paddingTop: 8,
//     paddingBottom: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: '#4B5563',
//     marginBottom: 16,
//   },
//   profileContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: 'white',
//     borderRadius: 12,
//     padding: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   profileInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 12,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   notificationButton: {
//     padding: 8,
//   },
// });