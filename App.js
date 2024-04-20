// No arquivo App.js

import React from 'react';
import { Routes } from './src/routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const sexo = 'feminino'; // ou 'feminino', dependendo do sexo do usuário
  return (    
    <NavigationContainer >      
      <Routes sexo={sexo} />
    </NavigationContainer>    
  );
}
