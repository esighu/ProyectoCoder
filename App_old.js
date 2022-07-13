import { Button, FlatList, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from 'react';

// import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native-web';

export default function App() {

  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);

  const onHandlerChangeItem = (text) => setTextItem(text)
  const onHandlerAddItem = () => {
      console.log('se agrego item', textItem)
      setItemList (cuerrentItems => [...cuerrentItems, {id: Math.random()*10, value: textItem}])
      setTextItem('')

  }
  
  const onHandlerDeleteItem = id => {
    console.table('se elimino el iem', itemList)
    setItemList(currentItems => currentItems.filter(item => item.id))
    setItemSelected({})
    setModalVisible(!modalVisible)
  } 

  const onHandlerModal = id => {
    setItemSelected(itemList.find(item => item.id === id))
    setModalVisible(!modalVisible)

  }

  // useEffect(() => {
  //   //SE EJECUTA TODO EL TIEMPO, no se usa asi
  // })


  // useEffect(() => {
  //   //SE EJECUTA cuando se carga el camponente
  // }, [])

  // useEffect(() => {
  //   //SE EJECUTA cuanod cambia el estado de ITEMLIST
  //   setTextItem('Cambio')
  // }, [itemList])

  return (
    <View style={ styles.screen }>
      <View style ={styles.inpuntContainer}>
      <TextInput  placeholder='Ingrese aqui' 
                  style={styles.inpunt}
                  value = {textItem}
                  onChangeText={onHandlerChangeItem}
                  />
                  <Button title='Agregar' style={styles.Button} onPress={onHandlerAddItem} />
      <Text>{textItem}</Text>
      </View>
      <FlatList
        data={itemList}
        renderItem={data => (
        <TouchableOpacity onPress={() => {}}  style={styles.item}>
          <Text>{data.item.value}</Text>
        </TouchableOpacity>
        )}
      />
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

