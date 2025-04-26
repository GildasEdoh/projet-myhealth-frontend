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

const SignupScreen = ({ navigation }) => {
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);
  const toast = useToast();

  const handleSignup = () => {
    if (!lastName || !birthDate || !phone || !email || !password) {
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

    register({ lastName, birthDate, phone, email, password });
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Box safeArea flex={1} p="5" w="100%" mx="auto" bg="#F0F4FF">
          <VStack space={4} alignItems="center">
            /* Logo */
            <Image
              source={require('../assets/doctor.png')}
              alt="Doctor"
              size="2xl"
              resizeMode="contain"
              accessibilityLabel="Doctor Illustration"
            />
            <Text fontSize="2xl" bold color="#007AFF">
              S'inscrire
            </Text>

            /* Fiche d'inscription */
            <Input
              placeholder="Nom de famille"
              value={lastName}
              onChangeText={setLastName}
              accessibilityLabel="Nom de famille"
            />
            <Input
              placeholder="Date de naissance (JJ/MM/AAAA)"
              value={birthDate}
              onChangeText={setBirthDate}
              accessibilityLabel="Date de naissance"
            />
            <Input
              placeholder="Téléphone"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
              accessibilityLabel="Téléphone"
            />
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

            /* Boutton d'inscription */
            <Button mt="4" colorScheme="blue" onPress={handleSignup}>
              S'inscrire
            </Button>

            /* Connexion */
            <HStack space={2} alignItems="center">
              <Text>Déjà inscrit ?</Text>
              <Pressable onPress={() => navigation.navigate('Login')}>
                <Text color="blue.500" bold>
                  Se connecter
                </Text>
              </Pressable>
            </HStack>
          </VStack>
        </Box>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;