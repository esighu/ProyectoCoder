import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header = props => {
    const { title } = props

    return (
        <View style ={style.header}>
            <Text> OPEN </Text>
        </View>

    );

}