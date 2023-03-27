import {useState,React }from 'react';
import {
  Image,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  TouchableHighlight,
  StyleSheet,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AboutUs } from './aboutUs';
// import Icon from 'react-native-ionicons'


export function User({navigation}) {

  const [name,SetName]=useState('');
  const [ProfileImage,setProfileImage]=useState('');

  async function checkUser() {
    const user = await AsyncStorage.getItem('user');
    const userObj= JSON.parse(user);
     SetName(userObj.name);
     setProfileImage(userObj.profile_url);

    return user;
   
  }
  checkUser();
  
  const ui = (
    <SafeAreaView style={styles.home}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={globeIcon}>
          <Icon name="globe" style={styles.otherIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={chatIcon}>
          <Icon name="comments" style={styles.otherIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={heartIcon}>
          <Icon name="heart" style={styles.otherIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={userIcon}>
          <Icon name="user" style={styles.mainIcon} />
        </TouchableOpacity>
      </View>

      <View style={{width:'95%'}}>
        <Text style={styles.mainHeader}>Settings</Text>
        <Text style={styles.subHeader}>Account</Text>
        
    <TouchableOpacity onPress={accountDeatails} activeOpacity={0.5}>
    <View style={styles.accountRow}>
        <View style={styles.accountRow2}>
        <Image
            source={{uri: "http://192.168.43.75/react_chat/"+ProfileImage}}
            style={styles.accountImage}
          />
          <Text style={styles.accountName}>{name}</Text>
        </View>
          <Icon name="chevron-right" style={styles.rightArrow} />
        </View>
    </TouchableOpacity>

        <Text style={styles.subHeader}>Settings</Text>
        <TouchableOpacity onPress={ChatSettings} >
        <View style={styles.otherSettings}>
        <View style={styles.otherSettings2}>
        <Icon name='commenting'  style={styles.otherSettingsIcon} />
          <Text style={styles.accountName}>Chats</Text>
        </View>
          <Icon name='chevron-right' style={styles.rightArrow}/>

        </View>
        </TouchableOpacity>

      
        <TouchableOpacity onPress={help}>
        <View style={styles.otherSettings}>
        <View style={styles.otherSettings2}>
        <Icon name='question-circle' style={styles.otherSettingsIcon} />
          <Text style={styles.accountName}>Help</Text>
        </View>
          <Icon name='chevron-right' style={styles.rightArrow}/>

        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={AboutUs}>
        <View style={styles.otherSettings}>
        <View style={styles.otherSettings2}>
        <Icon name='empire' style={styles.otherSettingsIcon} />
          <Text style={styles.accountName}>About Us</Text>
        </View>
          <Icon name='chevron-right' style={styles.rightArrow}/>

        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Invite}>
        <View style={styles.otherSettings}>
        <View style={styles.otherSettings2}>
        <Icon name='linux' style={styles.otherSettingsIcon} />
          <Text style={styles.accountName}>Invite a Friend</Text>
        </View>
          {/* <Icon name='chevron-right' style={styles.rightArrow}/> */}

        </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
  return ui;

  function globeIcon() {
    navigation.navigate('Globe');
  }
  function chatIcon() {
    navigation.navigate('Home');
  }
  function heartIcon() {
    navigation.navigate('Heart');
  }
  function userIcon() {
    navigation.navigate('User');
  }


function ChatSettings(){
navigation.navigate('ChatSettings');
}

function AboutUs(){
  navigation.navigate('AboutUs');

}

function Invite(){
  
}
function help(){
navigation.navigate('Help');
}

  function accountDeatails(){
navigation.navigate('AccountDeatails');
}
}
const styles = StyleSheet.create({
otherSettingsIcon:{
  padding:15,
  fontSize:20,
  marginRight:20,
  borderRadius:50,
  backgroundColor:'#262626',
  color:'white',
},
  otherSettings:{
    flexDirection:'row',
    alignItems:'center',
marginVertical:10,
justifyContent:'space-between',
  },
  otherSettings2:{
    flexDirection:'row',
    alignItems:'center',
  },
rightArrow:{
  color:'white',
 fontSize:20,
},
  accountName:{
    color:'white',
    fontSize:19,
  },
  accountImage:{
    width:70,
    borderRadius:50,
    borderWidth:1,
    borderColor:'white',
    height:70,
    marginRight:20,
    marginVertical:15,
  },
accountRow:{
  flexDirection:'row',
  alignItems:'center',
borderWidth:0.5,
borderColor:'#121212',
borderBottomColor:'white',
justifyContent:'space-between',
},
accountRow2:{
  flexDirection:'row',
  alignItems:'center',
},
mainHeader:{
  color:'white',
  fontSize:30,
  alignSelf:'flex-start',
},
subHeader:{
  marginTop:40,
  marginBottom:10,
  color:'white',
  fontSize:20,
  alignSelf:'flex-start',
},

  home: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#121212',
    // justifyContent:'center',
  },

  navbar: {
    columnGap: 60,
    width: '100%',
    backgroundColor: '#2d2e2e',
    height: 50,
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  otherIcon: {
    fontSize: 30,
    color: '#bfbfbf',
  },
  mainIcon: {
    fontSize: 30,
    color: '#1355bf',
  },
});
