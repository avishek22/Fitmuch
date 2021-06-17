import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {View,Text} from 'react-native'
import { DAY,EXERCISE_DETAIL,EXERCISE } from '../constants/routeNames'

import ExerciseDetail from '../screens/ExerciseDetail'
import Exercise from '../screens/Exercise'
import Day from '../screens/Day'





function HomeNavigator() {
    const HomeStack=createStackNavigator()
    return (
        <HomeStack.Navigator initialRouteName={DAY}>
            <HomeStack.Screen name={DAY} component={Day} 
                
            ></HomeStack.Screen>
            <HomeStack.Screen name={EXERCISE_DETAIL} component={ExerciseDetail}></HomeStack.Screen>
            <HomeStack.Screen name={EXERCISE} component={Exercise}></HomeStack.Screen>
            
        </HomeStack.Navigator>
    )
}

export default HomeNavigator
