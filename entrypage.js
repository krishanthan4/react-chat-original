import React from "react";
import { TouchableOpacity,Pressable,Text,Image, SafeAreaView, StyleSheet, View } from "react-native";




export function Entry({navigation}){
    const ui=(
<SafeAreaView style={styles.main}>
        <Image source={{uri:'http://192.168.43.75/HACK_TF/kali.png'}} style={styles.mainImage}/>
<Text style={styles.mainText}>Hack Chat</Text>
<Text style={styles.subText}>Build Your Network With The Hack Chat</Text>
<TouchableOpacity activeOpacity={0.8} onPress={signInPage} style={styles.login}>
    <Text style={styles.loginText}>
        Sign In
    </Text>
</TouchableOpacity>
<TouchableOpacity onPress={signUpPage} activeOpacity={0.8} style={styles.signUp}>
    <Text style={styles.signUpText}>
        Sign Up
    </Text>
</TouchableOpacity>
</SafeAreaView>
    );
    return ui;


    function signUpPage(){
        navigation.navigate("SignUpMobile");
    } function signInPage(){
        navigation.navigate("Sign In");
    }
}
const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
    },
    mainImage:{

        width:'100%',
height:'80%',
position:'absolute',
    },
    mainText:{
        color:'white',
        marginTop:300,
        fontSize:30,

    },
    subText:{
        color:'white',
        fontSize:15,
        marginTop:5,
    },
    login:{
        width:'80%',
        height:50,
        backgroundColor:'rgba(242,242,242, 0.9)',
        borderRadius:8,
        marginTop:40,
alignItems:'center',
justifyContent:'center',
    },
    signUp:{
        width:'80%',
        height:50,
        backgroundColor:'black',
        borderRadius:8,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'white',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        marginBottom:-50,
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