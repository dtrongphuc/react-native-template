import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCallback } from 'react';
import { guestGroup, userGroup } from './mapping';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const isLoggedIn = true;

  const renderScreens = useCallback(
    (screens: { [key: string]: React.ComponentType }) =>
      Object.keys(screens).map(name => (
        <Stack.Screen
          key={name}
          name={name}
          component={screens[name as keyof typeof screens]}
        />
      )),
    [],
  );

  return (
    <Stack.Navigator>
      <Stack.Group navigationKey={isLoggedIn ? 'user' : 'guest'}>
        {isLoggedIn ? renderScreens(userGroup) : renderScreens(guestGroup)}
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootStack;
