/*
Daniel SJ
Feb 12 2024

Description: Google signin generated component from 
Note: Actual email and password section does not load in yet.
*/

import React, { useEffect } from "react";
import { View, Platform, TouchableOpacity, Text, StyleSheet, Image } from "react-native"; // Import Platform
import { initializeGoogleSignIn } from "@/protected/auth/auth";

interface GoogleSignInButtonProps {
  onPress: () => void;
  text?: string;
}

const GoogleSignInButton: React.FC = () => {
    useEffect(() => {
        if (Platform.OS === 'web') { // Only run on web
            const script = document.createElement("script");
            script.src = "https://accounts.google.com/gsi/client";
            script.async = true;
            script.onload = initializeGoogleSignIn;
            document.body.appendChild(script);
        }
    }, []);

  return Platform.OS === 'web' ? <View id="buttonDiv" /> : null;
};

const NativeGoogleSignIn: React.FC<GoogleSignInButtonProps> = ({ onPress, text = "Sign in with Google" }) => {
  if (Platform.OS === 'web') {
    return null;
  }

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        //source={require('../../assets/images/google.png')} // Path to your Google icon
        style={styles.icon}
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const GoogleSignUpButton: React.FC = () => {
    useEffect(() => {
        if (Platform.OS === 'web') { // Only run on web
            const script = document.createElement("script");
            script.src = "https://accounts.google.com/gsi/client";
            script.async = true;
            script.onload = initializeGoogleSignIn;
            document.body.appendChild(script);
        }
    }, []);

  return Platform.OS === 'web' ? <View id="buttonDiv" /> : null;
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    gap: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    fontWeight: '500',
    color: '#777',
  },
});

export { GoogleSignUpButton, NativeGoogleSignIn };
export default GoogleSignInButton;
