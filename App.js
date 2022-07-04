import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={ styles.screen }>
      <View style ={styles.inpuntContainer}>
        <TextInput placeholder='Ingrese aqui' style={styles.inpunt} />
        <Button title='Agregar' onPress={() => {}} />
      </View>
      <View>
          <View style ={{padding: 20}}>
            <Text  style={styles.inpunt} >hola </Text>
          </View>
          <View style ={styles.inpuntContainer}>
            <TextInput placeholder='Ingrese aqui' style={styles.inpunt} />
          </View>
          <View style ={styles.inpuntContainer}>
            <TextInput placeholder='Ingrese aqui' style={styles.inpunt} />
          </View>
          <View style ={styles.inpuntContainer}>
            <TextInput placeholder='Ingrese aqui' style={styles.inpunt} />
          </View>
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 30,
  },
  inpuntContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    },
  inpunt: {
    borderBottomColor: 'black',
    borderBottomWidth: 1, 
    width: '80%', 
    height: 50,
  },
  
});

