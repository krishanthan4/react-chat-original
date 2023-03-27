import React from 'react'
import {Pressable, Text,Image,SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';



export function AboutUs({navigation}) {
  return (
  <SafeAreaView style={{justifyContent:'center',alignItems:"center",flex:1,
  }}>
  
    <Image source={{uri:'https://img.freepik.com/free-vector/abstract-black-texture-background-hexagon_206725-413.jpg'}} style={{width:'100%',height:'100%',position:'absolute'}}/>
   <Pressable style={{alignSelf:'flex-start',marginLeft:20,}} onPress={goback}>
   <Icon name='arrow-left' style={{fontSize:20,color:'black',backgroundColor:'gray',opacity:0.8,padding:10,borderRadius:50,}}/>
   </Pressable>
<Image source={{uri:'http://192.168.43.75/HACK_TF/icon14.png'}} style={{width:'80%' ,height:"70%",}}/>
<Text style={{color:'white',fontSize:20,}}>
HACK TF Team
</Text>
<Text style={{color:'white',fontSize:15,}}>
@2023 SprintSec solutions
</Text>
<Pressable style={{width:'30%',height:40,borderRadius:30,marginTop:20,justifyContent:'center',alignItems:'center',backgroundColor:'#2b2b2b',}}>
    <Text style={{color:'white',fontSize:15,}}>
        Licenses
    </Text>
</Pressable>
  </SafeAreaView>
  )
  
  function goback(){
    navigation.navigate('User');
  } 



}

