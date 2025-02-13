/*
Daniel SJ
Feb 12 2024

Description: Login form with Google sign in via Federated Credentials Manager API
Note: Actual email and password section does not load in yet.
*/

import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
import GoogleSignUpButton from './ui/googleSiginButton';

interface SignUpFormProps {
    onSubmit: (email: string, password: string) => void;
    onBackToLogin: () => void;
  }
  
  export function SignUpForm({ onSubmit, onBackToLogin }: SignUpFormProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = () => {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      if (password.length < 6) {
        setError('Password must be at least 6 characters');
        return;
      }
      setError('');
      onSubmit(email, password);
    };
  
    return (
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>Sign Up</ThemedText>
        
        <TextInput
          style={styles.input}
          placeholder="Email" 
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
        />
  
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />
  
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          autoCapitalize="none"
        />
  
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
  
        <TouchableOpacity 
          style={styles.button}
          onPress={handleSubmit}
        >
          <ThemedText style={styles.buttonText}>Sign Up</ThemedText>
        </TouchableOpacity>
  
        <Text style={styles.buttonText1}>or signup with google</Text>
        <GoogleSignUpButton />
  
        <TouchableOpacity onPress={onBackToLogin}>
          <Text style={[styles.buttonText1, styles.linkText]}>
            Already have an account? Log in
          </Text>
        </TouchableOpacity>
      </ThemedView>
    );
  }

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#A1CEDC',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 16,
    textAlign: 'center',
  },
  separatorContainer: {
    alignItems: 'center',
  },
  buttonText1: {
    fontSize: 12,
    fontWeight: 'medium',
    color: '#fff',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  linkText: {
    color: '#A1CEDC',
    textDecorationLine: 'underline',
  },
});