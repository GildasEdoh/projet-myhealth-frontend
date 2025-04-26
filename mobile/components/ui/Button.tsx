import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, ActivityIndicator } from 'react-native';
import Colors from '@/constants/Colors';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
  textStyle,
}: ButtonProps) {
  
  const getButtonStyle = () => {
    let baseStyle: ViewStyle = {};
    
    switch (variant) {
      case 'primary':
        baseStyle = styles.primaryButton;
        break;
      case 'secondary':
        baseStyle = styles.secondaryButton;
        break;
      case 'outline':
        baseStyle = styles.outlineButton;
        break;
    }
    
    switch (size) {
      case 'small':
        baseStyle = { ...baseStyle, ...styles.smallButton };
        break;
      case 'medium':
        baseStyle = { ...baseStyle, ...styles.mediumButton };
        break;
      case 'large':
        baseStyle = { ...baseStyle, ...styles.largeButton };
        break;
    }
    
    if (disabled) {
      baseStyle = { ...baseStyle, ...styles.disabledButton };
    }
    
    return [baseStyle, style];
  };
  
  const getTextStyle = () => {
    let baseStyle: TextStyle = {};
    
    switch (variant) {
      case 'primary':
        baseStyle = styles.primaryText;
        break;
      case 'secondary':
        baseStyle = styles.secondaryText;
        break;
      case 'outline':
        baseStyle = styles.outlineText;
        break;
    }
    
    switch (size) {
      case 'small':
        baseStyle = { ...baseStyle, ...styles.smallText };
        break;
      case 'medium':
        baseStyle = { ...baseStyle, ...styles.mediumText };
        break;
      case 'large':
        baseStyle = { ...baseStyle, ...styles.largeText };
        break;
    }
    
    if (disabled) {
      baseStyle = { ...baseStyle, ...styles.disabledText };
    }
    
    return [baseStyle, textStyle];
  };
  
  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'outline' ? Colors.primary : 'white'} 
          size="small" 
        />
      ) : (
        <Text style={getTextStyle()}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButton: {
    backgroundColor: Colors.secondary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  mediumButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  largeButton: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  disabledButton: {
    opacity: 0.5,
  },
  primaryText: {
    color: 'white',
    fontWeight: '600',
  },
  secondaryText: {
    color: 'white',
    fontWeight: '600',
  },
  outlineText: {
    color: Colors.primary,
    fontWeight: '600',
  },
  smallText: {
    fontSize: 14,
  },
  mediumText: {
    fontSize: 16,
  },
  largeText: {
    fontSize: 18,
  },
  disabledText: {
    opacity: 0.8,
  },
});