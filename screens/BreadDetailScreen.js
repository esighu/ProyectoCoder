import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

export const BreadDetailScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>BreadDetailScreen</Text>
            <Button title='Go to Category' onPress={() => {navigation.navigate('Bread', { title: 'Parametros'})}} />
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