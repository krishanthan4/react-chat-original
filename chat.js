import {TextInput,StyleSheet, SafeAreaView,Text,Alert,View,Pressable,TouchableOpacity,FlatList,Image} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

export function Chat({route,navigation}) {

  // Alert.alert("Message","Chat");
    const [chatText,setChatText]=useState('');
    const [chatHistory, setChatHistory] = useState('');
  
    async function sendRequest() {
      var userJsonText = await AsyncStorage.getItem('user');
      var userJSObject = JSON.parse(userJsonText);
    const formData = new FormData();
    formData.append("id1",userJSObject.id);
    formData.append("id2",route.params.id);


    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        var responseText = request.responseText;
        var responseArray = JSON.parse(responseText);
        setChatHistory(responseArray);
      }
    };
    request.open('POST', 'http://192.168.43.75/react_chat/load_chat.php', true);
    request.send(formData);
}

    const ui = (
      <SafeAreaView style={styles.chat}>
        <View style={{flexDirection:'row',alignItems:'center',paddingVertical:6,columnGap:10,marginBottom:50,backgroundColor:'rgba(18,18,18, 0.9)',width:'100%',paddingLeft:'5%'}}>
         <TouchableOpacity activeOpacity={0.6} onPress={goBack}>
         <Icon name='arrow-left' style={{padding:7,fontSize:20,color:'rgba(242,242,242, 0.6)',}}/>
         </TouchableOpacity>
        <Image
          source={{
            uri: route.params.img,
          }}
          style={styles.chatImage1}
        />
        <View>
        <Text style={styles.chatText1}>{route.params.name}</Text>
        <Text style={{color:'rgba(242,242,242, 0.8)',marginLeft:1,}}>online</Text>
        </View>
        {/* Sahan Perera */}</View>
        <FlatList
          data={chatHistory}
          renderItem={chatItem}
          style={styles.chatList}
        />     
  
        <View style={styles.chatSendView}>
          <TextInput
            style={styles.chatInput1}
            autoCorrect={false}
            placeholder="Enter Your Massege..."
            onChangeText={setChatText}
            placeholderTextColor={'gray'}
          />
          <TouchableOpacity onPress={saveChat}>
          <Icon name="send" style={styles.chatIcon1} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
    function goBack(){
      navigation.navigate('Home');
    }
    function start(){
      setInterval(sendRequest,1000);
    }

    useEffect(start,[]);

    return ui;
  
  async function saveChat(){
  
    var userJsonText= await AsyncStorage.getItem('user');
    var fromUserObject = JSON.parse(userJsonText);
  // Alert.alert("msg",fromUserObject.id);
    var requestObject={
      "from_user_id":fromUserObject.id,
  "to_user_id":route.params.id,
  "message":chatText,
  
    };
    const formData= new FormData();
    formData.append("requestJSON",JSON.stringify(requestObject));
  
    var request= new XMLHttpRequest();
    request.onreadystatechange=function (){
      if(request.readyState==4&&request.status==200){
      }
    };
    request.open('POST','http://192.168.43.75/react_chat/save_chat.php');
    request.send(formData);
  }
  }
  function chatItem({item}) {
    const itemUI = (
      <View
        style={item.side == 'right' ? styles.chatViewRight : styles.chatViewLeft}>
        <Text style={{fontSize:17,color:'white'}}>{item.msg}</Text>
        <View style={styles.chatView1}>
          <Text style={{color:'#c9c9c9'}}>{item.time}</Text>
  
          {item.side == 'right' ? (
            <Icon
              size={14}
              name="check"
              style={
                item.status == 'seen' ? styles.chatIconSeen : styles.chatIconSent
              }
            />
          ) : null}
          {/* {item.side=="left"?} */}
        </View>
      </View>
    );
    return itemUI;
  }
  const styles = StyleSheet.create({

    //Chat Section
    chatSendView: {
      flexDirection: 'row',
      width: '90%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 10,
      marginTop:30,
    },
    chatInput1: {
      width: '95%',
      height: 50,
      color:'white',
      borderStyle: 'solid',
      backgroundColor:'rgba(242,242,242, 0.1)',
      borderWidth: 2,
      borderRadius: 10,
      paddingHorizontal: 15,
    },
    chatIcon1: {
      paddingHorizontal: 10,
      color: 'rgba(37, 102, 207, 0.6)',
      fontSize: 24,
    },
    chatIconSeen: {
      paddingLeft: 10,
      color: 'green',
    },
    chatIconSent: {
      paddingLeft: 10,
      color: 'red',
    },
  
    chatList: {
      width: '100%',
      paddingHorizontal: 10,
    },
  
    chatView1: {
      alignItems: 'flex-end',
      flexDirection: 'row',
    },
    chatViewLeft: {
      backgroundColor: 'rgba(38, 38, 37,0.9)',
      paddingVertical: 5,
      paddingHorizontal: 15,
      borderRadius: 10,
      marginTop:10,
      alignSelf: 'flex-start',
    },
    chatViewRight: {
      backgroundColor: '#2765a3',
      paddingVertical: 5,
      paddingHorizontal: 15,
      borderRadius: 10,
      marginTop:10,
      alignSelf: 'flex-end',
    },
    chat: {
      flex: 1,
      alignItems: 'center',
      backgroundColor:'black',
      // flexDirection:'row',
    },
    chatText1: {
      fontFamily: 'PlayfairDisplay-SemiBold',
      color: 'white',
      fontSize: 23,
      // paddingVertical: 15,
      // fontWeight: 'bold',
    },
    chatText2: {
      // fontFamily:'DncingScript',
      color: '#3f3f3f',
      fontSize: 22,
      paddingVertical: 15,
    },
    chatImage1: {
      width: 50,
      // paddingHorizontal:10,
      height: 50,
      borderRadius: 50,
    },
    // end of home
  
  });  

