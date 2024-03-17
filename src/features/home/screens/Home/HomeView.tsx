import { StatusBar, Text, View } from 'react-native';

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <StatusBar translucent />
    <Text>Home Screen</Text>
  </View>
);

export default HomeScreen;
