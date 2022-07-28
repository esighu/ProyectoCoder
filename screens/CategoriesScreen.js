import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

export const CategoriesScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>Esta la pantalla de Detalles</Text>
            <Button title='Vamos a Detalles' onPress={() => {navigation.navigate('Detalles')}} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})