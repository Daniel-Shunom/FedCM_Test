/*
Daniel SJ
Feb 12 2024

Description: Application entry point with login screen.
*/

import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { WelcomePage } from '@/components/ui/Pages/WelcomePage';

export default function LandingScreen() {
  return (
    <ThemedView style={styles.container}>
      <WelcomePage />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});