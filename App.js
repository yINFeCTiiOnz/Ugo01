import React from 'react';
import {StatusBar, Platform} from 'react-native';
import Routes from './src/routes';
import {NavigationContainer} from '@react-navigation/native';

// import { Container } from './styles';

export default function ugo() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        backgroundColor="#7030a0"
      />
      <Routes />
    </NavigationContainer>
  );
}
