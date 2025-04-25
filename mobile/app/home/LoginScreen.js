import React, { useState, useContext } from 'react';
import {
  Box,
  VStack,
  Input,
  Button,
  Text,
  Image,
  HStack,
  Pressable,
  useToast,
} from 'native-base';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const toast = useToast();

  const handleLogin = () => {
    if (!email || !password) {
      toast.show({
        title: 'Erreur',
        description: 'Tous les champs sont obligatoires.',
        status: 'error',
        duration: 3000,
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.show({
        title: 'Erreur',
        description: 'Veuillez entrer une adresse email valide.',
        status: 'error',
        duration: 3000,
      });
      return;
    }

    login({ email, password });
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Box safeArea flex={1} p="5" w="100%" mx="auto" bg="#F0F4FF">
          <VStack space={4} alignItems="center">
            {/* Logo */}
            <Image
              source={require('../assets/logo.png')}
              alt="App Logo"
              size="2xl"
              resizeMode="contain"
              accessibilityLabel="App Logo"
            />
            <Text fontSize="2xl" bold color="#007AFF">
              Se connecter
            </Text>

            /* Input Fields */
            <Input
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              accessibilityLabel="Email"
            />
            <Input
              placeholder="Mot de passe"
              type="password"
              value={password}
              onChangeText={setPassword}
              accessibilityLabel="Mot de passe"
            />

            /* Boutton de connexion */
            <Button mt="4" colorScheme="blue" onPress={handleLogin}>
              Connexion
            </Button>

            /* Navigation to Signup */
            <HStack space={2} alignItems="center">
              <Text>Pas encore inscrit ?</Text>
              <Pressable onPress={() => navigation.navigate('Signup')}>
                <Text color="blue.500" bold>
                  S'inscrire
                </Text>
              </Pressable>
            </HStack>
          </VStack>
        </Box>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;