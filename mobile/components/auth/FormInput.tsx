import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming,
  interpolateColor
} from 'react-native-reanimated';

interface FormInputProps extends TextInputProps {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  isPassword?: boolean;
  touched?: boolean;
  style?: any;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  error,
  icon,
  isPassword = false,
  value,
  onFocus,
  onBlur,
  touched,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const focusAnim = useSharedValue(0);
  
  const handleFocus = (e: any) => {
    setIsFocused(true);
    focusAnim.value = withTiming(1, { duration: 200 });
    onFocus && onFocus(e);
  };
  
  const handleBlur = (e: any) => {
    setIsFocused(false);
    focusAnim.value = withTiming(0, { duration: 200 });
    onBlur && onBlur(e);
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const containerStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      focusAnim.value,
      [0, 1],
      ['#E2E8F0', error && touched ? '#EF4444' : '#2563EB']
    );
    
    return {
      borderColor
    };
  });

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      
      <Animated.View style={[styles.inputContainer, containerStyle]}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        
        <TextInput
          {...props}
          style={[
            styles.input,
            icon && styles.inputWithIcon,
            isPassword && styles.inputWithPassword,
          ]}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={isPassword && !showPassword}
          placeholderTextColor="#94A3B8"
        />
        
        {isPassword && (
          <TouchableOpacity 
            onPress={togglePasswordVisibility} 
            style={styles.passwordToggle}
            activeOpacity={0.7}
          >
            {showPassword ? 
              <EyeOff size={20} color="#94A3B8" /> : 
              <Eye size={20} color="#94A3B8" />
            }
          </TouchableOpacity>
        )}
      </Animated.View>
      
      {error && touched && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: '#1E293B',
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#1E293B',
    ...Platform.select({
      web: {
        outlineStyle: 'none',
      },
    }),
  },
  inputWithIcon: {
    paddingLeft: 8,
  },
  inputWithPassword: {
    paddingRight: 40,
  },
  iconContainer: {
    paddingLeft: 12,
  },
  passwordToggle: {
    padding: 10,
    position: 'absolute',
    right: 0,
  },
  errorText: {
    color: '#EF4444',
    fontSize: 12,
    marginTop: 4,
  },
});

export default FormInput;