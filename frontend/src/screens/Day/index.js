import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { EXERCISE, EXERCISE_DETAIL } from '../../constants/routeNames'

const Day = () => {
    const {navigate}=useNavigation()
    useEffect(() => {
        fetch("http://10.0.2.2:4000/allday", {
            headers:{
                'Content-Type': 'application/json'
            }
          
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            console.log('ok')
            
          }).catch((err)=>{
              console.log(err)
              console.log('errrrror')
          });
      }, []);
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
