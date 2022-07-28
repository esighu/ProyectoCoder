import {BreadDetailScreen} from '../screens/BreadDetailScreen'
import {CategoriesScreen} from '../screens/CategoriesScreen'
import {CategoryBreadScreen} from '../screens/CategoryBreadScreen'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const Logo = () => {
    return (
        <Image source={require('../assets/icon.png')} style={{width: 50, height: 50}}/>
    )
}


const ShopNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Inicio" screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e'
                },
                headerTintColor: '#fef',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
                <Stack.Screen name='Inicio' component={CategoriesScreen} options={{ headerShown: false ,headerTitle: (props) => <Logo {...props} /> }}/>
                <Stack.Screen name='Bread' component={CategoryBreadScreen} options={({route}) => ({ headerTitle: route.params.title})}/>
                <Stack.Screen name='Detalle' component={BreadDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default ShopNavigator;