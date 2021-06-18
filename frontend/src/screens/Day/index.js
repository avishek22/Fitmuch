import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity,Image } from 'react-native'
import { EXERCISE, EXERCISE_DETAIL } from '../../constants/routeNames'

const Day = () => {
    const data=[
        {
            day:"Shoulder"
        }
    ]
    
    const {navigate}=useNavigation()
    const[day,setDay]=useState([])
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
            console.log(result.days)
            setDay(result.days)
            
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
            <Text>hi</Text>
            <View>
            {day.map(function(item, i){
                const{day,picture}=item
                 return(
                <View key={i}>
                    <Text>{day}</Text>
                    <Image style={{width:45,height:45,borderRadius:100}} source={{uri:picture}}></Image>
                </View>
                );
        }   )}
    </View>
        </View>
    )
}

export default Day
