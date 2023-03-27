import React from 'react'
import {StyleSheet,View,Text, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


 export function Preference({navigation}) {
  return (
    <SafeAreaView style={styles.home}>
          <View style={styles.otherSettings}>
        <View style={styles.otherSettings2}>
        <Icon name='bell' style={styles.otherSettingsIcon} />
          <Text style={styles.accountName}>Notifications</Text>
        </View>
          <Icon name='chevron-right' style={styles.rightArrow}/>

        </View>
        <View style={styles.otherSettings}>
        <View style={styles.otherSettings2}>
        <Icon name='cog' style={styles.otherSettingsIcon} />
          <Text style={styles.accountName}>Preferrence</Text>
        </View>
          <Icon name='chevron-right' style={styles.rightArrow}/>

        </View>
        <View style={styles.otherSettings}>
        <View style={styles.otherSettings2}>
        <Icon name='info-circle' style={styles.otherSettingsIcon} />
          <Text style={styles.accountName}>About Us</Text>
        </View>
          <Icon name='chevron-right' style={styles.rightArrow}/>

        </View>
    
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        // justifyContent:'center',
      },


    accountName:{
        color:'white',
        fontSize:19,
      },
    otherSettingsIcon:{
        padding:15,
        fontSize:20,
        marginRight:20,
        borderRadius:50,
        backgroundColor:'blue',
        color:'white',
      },
        otherSettings:{
          flexDirection:'row',
          alignItems:'center',
      marginVertical:10,
      justifyContent:'space-between',
        },
        otherSettings2:{
            width:'80%',
          flexDirection:'row',
          alignItems:'center',
        },
      rightArrow:{
        color:'white',
       fontSize:20,
      },
});