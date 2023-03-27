import React from "react";
import {View, Text,TouchableOpacity, StyleSheet } from "react-native";

export function SignUpCommonButton({navigation}){
const ui=(
    <View style={styles.buttonView}>
    <TouchableOpacity activeOpacity={0.8} style={styles.login}>
        <Text style={styles.loginText}>
            Back
        </Text>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.8} style={styles.signUp}>
        <Text style={styles.signUpText}>
            Next
        </Text>
    </TouchableOpacity>
    </View>
);
return ui;
}

const styles= StyleSheet.create({
    buttonView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        columnGap:20,
        marginTop:10,
    },
 
    login:{
        width:'30%',
        height:50,
        backgroundColor:'white',
        borderRadius:8,
alignItems:'center',
justifyContent:'center',
    },
    signUp:{
        width:'30%',
        height:50,
        backgroundColor:'black',
        borderRadius:8,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'white',
        alignItems:'center',
        justifyContent:'center',
    },
signUpText:{
    fontSize:20,
    color:'white',
    fontWeight:'bold',
},
loginText:{
    fontSize:20,
    color:'black',
    fontWeight:'bold',
},
});
