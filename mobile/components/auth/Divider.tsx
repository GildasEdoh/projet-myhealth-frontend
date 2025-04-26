import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DividerProps {
  text?: string;
}

const Divider: React.FC<DividerProps> = ({ text }) => {
  if (!text) {
    return <View style={styles.simpleDivider} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E2E8F0',
  },
  text: {
    paddingHorizontal: 10,
    fontSize: 14,
    color: '#94A3B8',
  },
  simpleDivider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 20,
  },
});

export default Divider;