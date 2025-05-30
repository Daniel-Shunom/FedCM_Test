import React, { useState, useRef } from 'react';
import { 
  Animated, 
  StyleSheet, 
  TextInput, 
  Text, 
  TouchableOpacity, 
  Platform 
} from 'react-native';
import { ThemedText } from './ThemedText';
import { SignUpForm } from './SignupForm';

import { GoogleWebButton } from './ui/GoogleButtons/GWebAuth'
import { GoogleMobileSignin } from './ui/GoogleButtons/GMobileAuth'
import { useSession } from '@/context/AuthContext';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  
  // Animated value for cross-fade
  const fadeAnim = useRef(new Animated.Value(1)).current;

  // Helper to perform fade-out then fade-in with a callback in between.
  const animateTransition = (callback: () => void) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      callback();
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  const handleSubmit = () => {
    onSubmit(email, password);
  };

  const toggleForm = () => {
    animateTransition(() => setIsLogin(!isLogin));
  };

  // Render the SignUpForm inside an Animated.View as well.
  if (!isLogin) {
    return (
      <Animated.View style={{ opacity: fadeAnim }}>
        <SignUpForm
          onBackToLogin={() => animateTransition(() => setIsLogin(true))}
          onSubmit={onSubmit}
        />
      </Animated.View>
    );
  }

  const { signIn } = useSession()

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ThemedText type="title" style={styles.title}>
        Login
      </ThemedText>
      
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

      <TouchableOpacity 
        style={styles.button}
        onPress={handleSubmit}
      >
        <ThemedText style={styles.buttonText}>Sign In</ThemedText>
      </TouchableOpacity>
      
      <Text style={styles.buttonText1}>or login with google</Text>
      {Platform.OS === 'web' ? (
          <GoogleWebButton 
            scriptSrc= 'https://accounts.google.com/gsi/client'
            onPress={()=> {signIn && signIn()}} 
          />
        ) 
        : (<GoogleMobileSignin onPress={() => {}} />)
      }
      
      
      <TouchableOpacity onPress={toggleForm}>
        <Text style={[styles.buttonText1, styles.linkText]}>
          Don't have an account? Sign up
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    maxWidth: 300,
    alignSelf: 'center',
    backgroundColor: '#d3d3d3',
    borderRadius: 8,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },
  input: {
    height: 40,
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
  buttonText1: {
    fontSize: 12,
    fontWeight: 'medium',
    color: '#fff',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  linkText: {
    textDecorationLine: 'underline',
  }
});