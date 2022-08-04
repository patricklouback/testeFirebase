import React from 'react';

import { app } from './firebase';

import {Routes} from './src/routes'
import {TelaCamera} from './src/screens/telaCamera'
import {Tela1} from './src/screens/tela1'
import {Tela2} from './src/screens/tela2'

export default function App() {
  app;
  return (
    <Tela2/>
  );
}