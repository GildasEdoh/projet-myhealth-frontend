import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Check } from 'lucide-react-native';

interface ChecklistItemProps {
  text: string;
  completed: boolean;
}

export default function ChecklistItem({ text, completed }: ChecklistItemProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.iconContainer, completed && styles.completedIconContainer]}>
        {completed && <Check color="#fff" size={16} />}
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  iconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  completedIconContainer: {
    backgroundColor: '#4BB79D',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});