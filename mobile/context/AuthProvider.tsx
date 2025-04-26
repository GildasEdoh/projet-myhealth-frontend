import React, { createContext, useState, useContext, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

// Mock API functions - in a real app, these would connect to a backend
const mockSignIn = async (email: string, password: string): Promise<string> => {
  // Simulate API call
//   await new Promise(resolve => setTimeout(resolve, 1000));
  
//   // Simulate validation
//   if (email !== 'test@example.com' && password !== 'password') {
//     throw new Error('Invalid credentials');
//   }
  
  return 'mock-auth-token';
};

const mockSignUp = async (userData: any): Promise<string> => {
  // Simulate API call
//   await new Promise(resolve => setTimeout(resolve, 1000));
  
//   // Simulate success
  return 'mock-auth-token';
};

const mockSignOut = async (): Promise<void> => {
  // Simulate API call
//   await new Promise(resolve => setTimeout(resolve, 500));
};

// Types
export type UserType = {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  age?: number;
  bloodType?: string;
  allergies?: string;
  medicalHistory?: string;
  emergencyContact?: string;
  emergencyPhone?: string;
} | null;

interface RegistrationData {
  step1?: {
    lastName?: string;
    birthDate?: string;
    phone?: string;
    email?: string;
    password?: string;
  };
  step2?: {
    firstName?: string;
    age?: string;
    bloodType?: string;
    allergies?: string;
    medicalHistory?: string;
    emergencyContact?: string;
    emergencyPhone?: string;
  };
}

interface AuthContextType {
  user: UserType;
  isLoading: boolean;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (registrationData: RegistrationData) => Promise<void>;
  signOut: () => Promise<void>;
  registrationData: RegistrationData;
  setRegistrationData: React.Dispatch<React.SetStateAction<RegistrationData>>;
  authError: string | null;
  clearAuthError: () => void;
}

const storeToken = async (token: string) => {
  if (Platform.OS === 'web') {
    localStorage.setItem('authToken', token);
  } else {
    await SecureStore.setItemAsync('authToken', token);
  }
};

const getToken = async (): Promise<string | null> => {
  if (Platform.OS === 'web') {
    return localStorage.getItem('authToken');
  } else {
    return await SecureStore.getItemAsync('authToken');
  }
};

const removeToken = async () => {
  if (Platform.OS === 'web') {
    localStorage.removeItem('authToken');
  } else {
    await SecureStore.deleteItemAsync('authToken');
  }
};

// Create the context
const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: false,
  isAuthenticated: false,
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
  registrationData: {},
  setRegistrationData: () => {},
  authError: null,
  clearAuthError: () => {},
});

// Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [registrationData, setRegistrationData] = useState<RegistrationData>({});
  const [authError, setAuthError] = useState<string | null>(null);

  // Check for existing auth token on mount
  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const token = await getToken();
        
        if (token) {
          // In a real app, validate the token with the backend
          setUser({ id: '1', email: 'user@example.com' });
        }
      } catch (e) {
        console.error('Failed to load authentication token', e);
      } finally {
        setIsLoading(false);
      }
    };

    bootstrapAsync();
  }, []);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    setAuthError(null);
    
    try {
      const token = await mockSignIn(email, password);
      await storeToken(token);
      // In a real app, fetch user profile here
      setUser({ id: '1', email });
    } catch (error: any) {
      setAuthError(error.message || 'Failed to sign in');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (data: RegistrationData) => {
    setIsLoading(true);
    setAuthError(null);
    
    try {
      const userData = {
        ...data.step1,
        ...data.step2,
      };
      
      const token = await mockSignUp(userData);
      await storeToken(token);
      
      // Set user data
      setUser({
        id: '1',
        firstName: data.step2?.firstName,
        lastName: data.step1?.lastName,
        email: data.step1?.email,
        // Convert age to number
        age: data.step2?.age ? parseInt(data.step2.age) : undefined,
        bloodType: data.step2?.bloodType,
        allergies: data.step2?.allergies,
        medicalHistory: data.step2?.medicalHistory,
        emergencyContact: data.step2?.emergencyContact,
        emergencyPhone: data.step2?.emergencyPhone,
      });
      
      // Clear registration data
      setRegistrationData({});
    } catch (error: any) {
      setAuthError(error.message || 'Failed to sign up');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    
    try {
      await mockSignOut();
      await removeToken();
      setUser(null);
    } catch (error) {
      console.error('Error signing out', error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearAuthError = () => {
    setAuthError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        signIn,
        signUp,
        signOut,
        registrationData,
        setRegistrationData,
        authError,
        clearAuthError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);