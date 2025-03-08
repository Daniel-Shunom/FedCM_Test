/*
Daniel SJ
Feb 12 2024

Description: Application entry point with login screen.
*/

import React from 'react';
import { Platform, StyleSheet, Image } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { LoginForm } from '@/components/LoginForm';
import { FiboButton } from '@/components/ui/Buttons/buttons';
import LottieView from 'lottie-react-native'

export default function LoginScreen() {
  const img = require('../assets/images/adaptive-icon.png')
  const width = 250
  const content = {
    btn1: 'Hello',
    btn2: 'login'
  }
  return (
    <ThemedView style={styles.container}>
      {/*<LoginForm
        //here just incase we want to use a regular login option
        onSubmit={(email, password) => {
        }}
      />/**/}
      {/*<Image source={img}/>/**/}
      <FiboButton
        Color='#fff'
        BorderRadius={10}
        Width={width}
        Content={content.btn1}
      />
      <FiboButton
        Color='#0ff'
        BorderRadius={10}
        Width={width}
        Content={content.btn2} 
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 80,
  },
});