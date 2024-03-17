import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Toaster } from 'react-hot-toast';
import BootSplash from 'react-native-bootsplash';
import RootStack from '~navigation/RootStack';
import ReactQuery from '~providers/ReactQuery';

export default function App() {
  return (
    <ReactQuery>
      <NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
        <RootStack />
        <Toaster position="top-center" />
      </NavigationContainer>
    </ReactQuery>
  );
}
