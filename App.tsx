import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import BootSplash from 'react-native-bootsplash';
import RootStack from '~navigation/RootStack';

export default function App() {
  return (
    <NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
      <RootStack />
    </NavigationContainer>
  );
}
