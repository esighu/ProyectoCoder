import 'react-native-gesture-handler';

import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import ShopNavigator from './navigation/ShopNavigator';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

export default function App() {
  
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if(!loaded) return <AppLoading />

  return (
    <ShopNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
