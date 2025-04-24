import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MapLegendItemProps {
  color: string;
  text: string;
}

export default function MapLegendItem({ color, text }: MapLegendItemProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.colorDot, { backgroundColor: color }]} />
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
  colorDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 12,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});