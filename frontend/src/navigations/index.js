import React from 'react'
import { View, Text } from 'react-native'
import HomeNavigator from './HomeNavigator'
import DrawerNavigation from './DrawerNavigation';
import {NavigationContainer} from '@react-navigation/native';

const AppNavContainer = () => {
    return (
        <NavigationContainer><DrawerNavigation></DrawerNavigation></NavigationContainer>
       
    )
}

export default AppNavContainer
