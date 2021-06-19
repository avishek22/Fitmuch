import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity,Image, ScrollView,ActivityIndicator } from 'react-native'
import { EXERCISE, EXERCISE_DETAIL } from '../../constants/routeNames'
import colors from '../../assets/themes/colors'
import styles from './styles'
const Day = () => {
    const data=[
        {
            day:"Shoulder"
        }
    ]
    
    const {navigate}=useNavigation()
    const[day,setDay]=useState([])
    const[loading,setLoading]=useState(true)
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
            setLoading(false)
            
          }).catch((err)=>{
              console.log(err)
              console.log('errrrror')
          });
      }, []);
    return (
        
        <ScrollView style={{backgroundColor:'white'}}>
        {loading?<View style={{padding:100}}><ActivityIndicator size="large" color={colors.primary}></ActivityIndicator></View>:( <View >
            {/* <Text>Hello from Day</Text>
            <TouchableOpacity onPress={()=>{
                navigate(EXERCISE)
            }}><Text>Exercise</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                navigate(EXERCISE_DETAIL)
            }}
            ><Text>Exercise detail</Text></TouchableOpacity>
            <Text>hi</Text> */}
            <View>
            {day.map(function(item, i){
                const{day,picture,_id}=item
                 return(
                     <TouchableOpacity key={_id} onPress={()=>{
                         console.log(_id)
                         navigate(EXERCISE)
                     }}>
                     <View style={styles.total}>
                <View  style={styles.dayContainer}>
                    
                     <Image style={{width:150,height:110,paddingLeft:20,position:'absolute',borderRadius:6,borderTopLeftRadius:0,borderBottomLeftRadius:0,borderLeftWidth:20,borderColor:'#F0A160'}} source={{uri:picture}}></Image> 
                     
                    </View>
                    <Text style={styles.dayText}>{day}</Text>
                    
    
                    
                </View>
                </TouchableOpacity>
                
                );
        }   )}
    </View>
        </View>)}
       
        </ScrollView>
    )
}

export default Day
