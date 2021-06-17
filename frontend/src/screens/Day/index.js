import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { EXERCISE, EXERCISE_DETAIL } from '../../constants/routeNames'

const Day = () => {
    const {navigate}=useNavigation()
    return (
        <View>
            <Text>Hello from Day</Text>
            <TouchableOpacity onPress={()=>{
                navigate(EXERCISE)
            }}><Text>Exercise</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                navigate(EXERCISE_DETAIL)
            }}
            ><Text>Exercise detail</Text></TouchableOpacity>
        </View>
    )
}

export default Day
