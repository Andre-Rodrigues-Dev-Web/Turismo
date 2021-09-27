import { StatusBar } from 'expo-status-bar';
import React from 'react';
//Pages
import Aplication from './pages/aplicacaoweb'

export default function App() {
  return (
    <View>
      <Aplication/>
      <StatusBar style="auto" />
    </View>
  );
}
