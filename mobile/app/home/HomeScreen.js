import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleNavigation = () => {
    if (navigation) {
      navigation.navigate('Signup');
    } else {
      console.warn('Navigation prop is undefined');
    }
  };

  return (
    <View style={styles.container}>
      /* Logo */
      <Image 
        source={require('./assets/logo.png')} 
        style={styles.logo} 
        accessibilityLabel="App Logo"
      />
      
      /* Title */
      <Text style={styles.title}>MyHealth</Text>
      
      /* Subtitle */
      <Text style={styles.subtitle}>Votre santé, simplifiée</Text>
      
      /* Button */
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleNavigation}
        accessible={true}
        accessibilityLabel="Commencer Button"
      >
        <Text style={styles.buttonText}>Commencer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    color: '#007AFF',
    fontWeight: '600',
  },
});
