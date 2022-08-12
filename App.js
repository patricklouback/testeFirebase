import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './src/components/SplashScreen';


export default function App() {

  return (
    <SafeAreaProvider>
      <SplashScreen/>
    </SafeAreaProvider>
  );
}