import {useState, React} from 'react';
import {
  Image,
  Text,
  Alert,
  View,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function AccountDeatails({navigation}) {
  const [name, SetName] = useState('');
  const [Mobile, SetMobile] = useState('');
  const [ProfileImage, setProfileImage] = useState('');

  async function checkUser() {
    const user = await AsyncStorage.getItem('user');
    const userObj = JSON.parse(user);
    SetName(userObj.name);
    SetMobile(userObj.mobile);
    setProfileImage(userObj.profile_url);
    return user;
  }
  checkUser();

  const ui = (
    <SafeAreaView style={styles.home}>
      <Text style={styles.EditProfile}>Edit Profile</Text>
      <TouchableOpacity activeOpacity={0.8}>
        <Image
          source={{uri: 'http://192.168.43.75/react_chat/' + ProfileImage}}
          style={styles.mainImage}
        />
      </TouchableOpacity>
      <Text style={styles.name}>{name}</Text>

      <View style={{width: '90%'}}>
        <View style={styles.div}>
          <View>
            <Text style={styles.subTitle}>Name</Text>
            <Text style={styles.name2}>{name}</Text>
          </View>
          {/* <Icon name="edit" style={styles.editIcon} /> */}
        </View>
        <View style={styles.div}>
          <View>
            <Text style={styles.subTitle}>Mobile</Text>
            <Text style={styles.name2}>{Mobile}</Text>
          </View>
          {/* <Icon name="edit" style={styles.editIcon} /> */}
        </View>
      
        <View style={styles.div}>
          <View>
            <Text style={styles.subTitle}>Password</Text>
            <Text style={styles.name2}>********</Text>
          </View>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingTop:10,}}>
        <TouchableOpacity onPress={logout}  style={styles.logOutButton}>
    <Icon name='chevron-left' style={{color:'white',fontSize:20,}}/>
     <Text style={styles.logOutButtonText}>Log Out</Text> 
   </TouchableOpacity>
        <TouchableOpacity onPress={edit} activeOpacity={0.7} style={{}}>
        <Icon name="edit" style={styles.editIcon} />
        </TouchableOpacity>
     
      </View>
        
      </View>
    </SafeAreaView>
  );
  return ui;

  // async  function logout(){

  //   await AsyncStorage.removeItem('user');
  //       navigation.navigate('Entry');
  //     }
 
function logout(){
  navigation.navigate('logOut');
}

  function edit(){




    // const obj = {'name':name,"Mobile":Mobile,"ProfileImage":ProfileImage};
    // navigation.navigate("AuthenticationPassword",obj);
  }
  //   async function getIn(){
  //     const user = await AsyncStorage.getItem('user');
  //      object = JSON.stringify(user);
  // }
}
const styles = StyleSheet.create({
   
  logOutButton:{
    width:130,
    flexDirection:'row',
    gap:10,
    // alignSelf:'flex-end',
    padding:2,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    marginLeft:"5%",
    borderWidth:1,
    borderColor:'white',
    height:45,
    backgroundColor:'black',
borderRadius:10,
  },
  logOutButtonText:{
    color:'white',
    fontSize:20,
  },

  div: {
    borderBottomColor: 'white',
    borderWidth: 1,
    borderColor:'#121212',
    paddingBottom: 2,
    marginTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },

  editIcon: {
    color: 'white',
    fontSize: 25,
marginVertical:20,
marginRight:20,
backgroundColor:'blue',
borderRadius:50,
padding:15,
  },

  subTitle: {
    color: 'gray',
    fontSize: 19,
    paddingBottom: 10,
  },
  name: {
    color: 'white',
    fontSize: 25,
  },
  name2: {
    color: 'white',
    fontSize: 20,
  },
  mainImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: 'white',
  },
  EditProfile: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
  home: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#121212',
    // justifyContent:'center',
  },
});
