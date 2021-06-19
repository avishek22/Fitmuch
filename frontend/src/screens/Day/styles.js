import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    
dayContainer:{
    
    paddingHorizontal:40,
    paddingVertical:50,
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-end',
    alignContent:'center',
    
    

},
total:{
    borderColor:'#F0A160',
    borderWidth:5,
    margin:5,
    borderRadius:10,
    zIndex:1000,
    
        elevation: 5,
        // backgroundColor:'#e8f4f8'
    backgroundColor:'#100c08'
},
dayText:{
    fontSize:30,
    paddingLeft:50,
    position:'relative',
    alignItems:'center',
    marginTop:-60,
    paddingBottom:30,
    color:'#F0A160',
    fontFamily:'DancingScript-Bold'
    

}
})