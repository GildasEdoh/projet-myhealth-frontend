import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

interface SocialButtonProps {
  icon: React.ReactNode;
  onPress: () => void;
  style?: ViewStyle;
  testID?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  onPress,
  style,
  testID,
}) => {
  const scale = useSharedValue(1);
  
  const handlePressIn = () => {
    scale.value = withTiming(0.95, { duration: 100 });
  };
  
  const handlePressOut = () => {
    scale.value = withTiming(1, { duration: 100 });
  };
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }]
    };
  });

  return (
    <Animated.View style={[animatedStyle]}>
      <TouchableOpacity
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[styles.button, style]}
        activeOpacity={0.8}
        testID={testID}
      >
        {icon}
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
});

export default SocialButton;