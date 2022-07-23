import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading'
import GameScreen from './pages/GameScreen';
import Header from './components/Header';
import StartGameScreen from './pages/StartGameScreen';
import { useFonts } from 'expo-font'
import { useState } from 'react';

export default function App() {
  const [loaded] = useFonts({ EduBold: require('./assets/fonts/Edu-Bold.ttf') , EduRegular: require('./assets/fonts/Edu-Regular.ttf'), EduMedium: require('./assets/fonts/Edu-Medium.ttf'), EduSemiBold: require('./assets/fonts/Edu-SemiBold.ttf')})
  const [userNumber, setUserNumber] = useState()

  const handlerStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={handlerStartGame} />

  if (userNumber) {
    content = <GameScreen userOption={userNumber} />
  }

  if(!loaded) return <AppLoading />

  return (
    <View style={styles.container}>
      <Header title={'Adivina el numero'} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

