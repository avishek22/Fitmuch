import React from 'react'
import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';

const DrawerNavigation = () => {

    const Login=()=>{
        return <View>
            <Text>Hi from Login</Text>
        </View>
    }
    const Drawer=createDrawerNavigator()
    return (
        
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeNavigator}></Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default DrawerNavigation
