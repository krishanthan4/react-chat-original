import {TouchableOpacity,TextInput,StyleSheet, SafeAreaView,Text,Alert,View,Pressable,TouchableHighlight,FlatList,Image} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

export function Home({navigation}) {
    const [items, setItems] = useState([]);
    const [searchText,setSearchText]=useState('');
    const [count,setCount]=useState('');
    
    async function LoadFriendList() {
      var userJSONText = await AsyncStorage.getItem('user');

      var formData = new FormData();
      formData.append('userJSONText', userJSONText);
      formData.append('text', searchText);

      var request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
          var responseObject = JSON.parse(request.responseText);
          setItems(responseObject);
        }
      };
      request.open(
        'POST',
        'http://192.168.43.75/react_chat/load_users.php',
        true,
      );
      request.send(formData);
    }
    

    function start(){
      LoadFriendList();
    }

    useEffect(start,[]);
  
    const ui = (
      <SafeAreaView style={styles.home}>
        <View style={styles.navbar}>
    <TouchableOpacity onPress={globeIcon}><Icon name='globe'style={styles.otherIcon}/></TouchableOpacity>
    <TouchableOpacity onPress={chatIcon}><Icon name='comments'style={styles.mainIcon}/>
</TouchableOpacity>
    <TouchableOpacity onPress={heartIcon}><Icon name='heart'style={styles.otherIcon}/>
</TouchableOpacity>
    <TouchableOpacity onPress={userIcon}><Icon name='user'style={styles.otherIcon}/>
</TouchableOpacity>

  </View>
  
        <View style={styles.homeView1}>
          <TextInput style={styles.homeInput} autoCorrect={false} onChangeText={setSearchText}></TextInput>
          <TouchableOpacity style={{justifyContent:'center',}} onPress={p}>

<Icon
  name="search"
  size={24}
  color="#000000"
  style={styles.homeInput1Image}
/>
</TouchableOpacity>
        </View>
  
        <FlatList data={items}  renderItem={itemUI}/>
        
      </SafeAreaView>
    );
    return ui;

    function p(text){
      setSearchText(text);
      LoadFriendList(text);
      }


    function itemUI({item}) {
    
      const ui = (
       
      <TouchableHighlight onPress={m}>
         <View style={styles.item}>
          <Image source={{uri:"http://192.168.43.75/react_chat/"+item.pic}} style={styles.itemImage} />
    
          <View style={styles.itemView1}>
            <Text style={styles.itemText1}>{item.name}</Text>
            <Text style={styles.itemText2}>{item.msg}</Text>
          </View>
    
          <View style={styles.itemView2}>
            <Text style={styles.itemText3}>{item.time}</Text>
            <View style={item.count==0 ? null :styles.itemShape1}>
              <Text style={styles.itemText4}>{item.count==0 ? null : item.count}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>

    // Alert(item.count);
      
      );
    
      return ui;
      
      
      function m(){
        // Alert.alert(item.id);
       

        const obj={
  "name":item.name,"id":item.id,
"img":"http://192.168.43.75/react_chat/"+item.pic,
};
        navigation.navigate("Chat",obj);
      }
  }
     
  function globeIcon(){
    navigation.navigate('Globe');
  }
  function chatIcon(){
    navigation.navigate('Home');
  
  }
  function heartIcon(){
    navigation.navigate('Heart');
    
  }
  function userIcon(){
    navigation.navigate('User');
  }
  }
  
 

  const styles = StyleSheet.create({
    otherIcon:{
      fontSize:30,
      color:'#bfbfbf',
    },
    mainIcon:{
      fontSize:30,
      color:'#1355bf',
    },

    navbar:{
      columnGap:60,
      width:'100%',
      backgroundColor:'#2d2e2e',
      height:50,
      flexDirection:'row',
marginBottom:20,
justifyContent:'center',
alignItems:'center',
    },
    //Message Section
  
    textText3: {
      alignItems: 'flex-end',
    },
  
    flatstyle: {
      marginTop: 20,
      // marginRight:150,
      width: '100%',
      //  borderColor: '#fffff',
      //  borderWidth: 2,
      // borderStyle: 'solid',
      marginBottom: 10,
    },
    itemImage: {
      width: 50,
      height: 50,
      borderRadius: 50,
      // marginLeft:-20,
      marginHorizontal: 5,
    },
    item: {
      flexDirection: 'row',
      paddingVertical: 17,
      marginHorizontal: 2,
      // marginLeft:-0,
      width: '95%',
    },
    itemText1: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
  
    itemText2: {
      color: 'gray',
      fontSize: 16,
    },
    itemText3: {
      color: 'white',
      fontSize: 14,
      marginBottom:10,
      // justifyContent:'flex-end',
      // alignItems:"flex-end",
    },
    itemText4: {
      color: 'white',
      fontSize: 14,
      fontWeight: 'bold',
      // justifyContent:'flex-start',
      // backgroundColor: '#ff0000',
      borderRadius: 50,
    },
    itemShape1: {
      width: 24,
      height: 24,
      backgroundColor: '#1355bf',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    itemView2: {
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingHorizontal: 10,
      marginLeft: '2%',
      width:"25%",

    },
  
    itemView1: {
      justifyContent: 'center',
      paddingVertical: 2,
      width: '60%',
      paddingHorizontal: 10,
      
    },
    home: {
      flex: 1,
      alignItems: 'center',
      backgroundColor:'#121212',
      // justifyContent:'center',
    },
 
    homeInput: {
      // position:"absolute",
      height: 50,
      backgroundColor:'#2d2e2e',
      borderStyle: 'solid',
      color:'white',
      borderWidth: 1,
      width: '90%',
      // marginTop:-200,
      borderRadius: 15,
      fontSize: 20,
      paddingLeft: 15,
      paddingEnd: 45,
      // borderColor: 'white',
    },
  
    homeView1: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    homeInput1Image: {
      position: 'absolute',
      right: 20,
      color:'gray',
    },
  });