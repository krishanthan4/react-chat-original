import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react'
import {Image,View,SafeAreaView,StyleSheet,TouchableOpacity,Text} from 'react-native';

export function LogOut({navigation}) {
  return (
   <SafeAreaView style={styles.SafeAreaView}>
    <Image source={{uri:'https://img.freepik.com/free-vector/abstract-black-texture-background-hexagon_206725-413.jpg'}} style={{width:'100%',height:'100%',position:'absolute'}}/>
    <Text style={styles.mainText}>
        Are You Sure to Log Out?
    </Text>

<View style={{flexDirection:'row',columnGap:20,marginBottom:-300,marginTop:40,}}>
<TouchableOpacity onPress={dismis} style={styles.dismisButton}>
    <Text style={styles.logOutButtonText}>
        Dismis
    </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={logOut} style={styles.logOutButton}>
    <Text style={styles.logOutButtonText}>
        Log Out
    </Text>
    </TouchableOpacity>
</View>

   </SafeAreaView>
  )

function dismis(){
    navigation.navigate('AccountDeatails');
}

async  function logOut(){
        await AsyncStorage.removeItem('user');
    navigation.navigate('Entry');
    
}

}


const styles=StyleSheet.create({
    logOutButton:{
        backgroundColor:'red',
        width:'40%',
        height:45,
      justifyContent:'center',
      alignItems:'center',

    },
    dismisButton:{
        backgroundColor:'#363535',
        width:'40%',
        height:45,
      justifyContent:'center',
      alignItems:'center',

    },
    logOutButtonText:{
        color:'white',
        fontSize:20,
    },
    mainText:{
        color:'white',
        fontSize:20,
    },
 SafeAreaView:{
justifyContent:'center',
alignItems:'center',
flex:1,
backgroundColor:'black',
 },
});


