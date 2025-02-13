/*
Daniel SJ
Feb 12 2024

Description: Application entry point with login screen.
*/

import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedView } from '../components/ThemedView';
import { LoginForm } from '../components/LoginForm';
import GoogleSignInButton from '../components/ui/googleSiginButton';

export default function LoginScreen() {
  return (
    <ThemedView style={styles.container}>
      <LoginForm
        onSubmit={(email, password) => {
        }}
      />
      <GoogleSignInButton />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});