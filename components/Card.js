import { StyleSheet, View } from 'react-native'

import React from 'react'

const Card = props => (
    <View style={{...styles.inputCard, ...props.style}}>
        {props.children}
    </View>   
)

const styles = StyleSheet.create({
    inputCard: {
        backgroundColor: 'green',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})

export default Card