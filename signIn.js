import {
  TextInput,
  StyleSheet,
  SafeAreaView,
  Text,
  Alert,
  View,
  Pressable,
  TouchableHighlight,
  FlatList,
  Image,
} from 'react-native';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Entry} from './entrypage';

export function SignIn({navigation}) {
  const [mobile, setMobile] = useState('');
  const [Password, setPassword] = useState('');

  const ui = (
    <SafeAreaView style={styles.Main}>
      <Image
        source={{
          uri: 'http://192.168.43.75/HACK_TF/kali.png',
        }}
        style={styles.signInImage}
      />
      <View style={styles.SafeAreaView}>
        <View style={styles.signInView1}>
          <Icon name="mobile" style={{color: 'gray', fontSize: 17}} />
          <View style={styles.signInInputBox}>
            <TextInput
              style={styles.signInInput1}
              keyboardType="numeric"
              maxLength={10}
              placeholder={'Mobile'}
              onChangeText={setMobile}
              placeholderTextColor={'gray'}
            />
          </View>
          <Icon name="check" style={mobile.length==10 ? styles.check1 :styles.check2} />
        </View>
        <View style={styles.signInView1}>
          <Icon name="lock" style={{color: 'gray', fontSize: 17}} />
          <View style={styles.signInInputBox}>
            <TextInput
              style={styles.signInInput1}
              secureTextEntry={true}
              placeholder={'Password'}
              onChangeText={setPassword}
              placeholderTextColor={'gray'}
            />
          </View>
          <Icon name={ Password == '' ? name='eye' : name='eye-slash'} style={{color: 'gray', fontSize: 15}} />
        </View>
        <Pressable style={styles.forgotButton}>
          <Text style={styles.forgot}>Forgot password?</Text>
        </Pressable>

        <Pressable style={styles.signInButton1} onPress={signInprocess}>
          <Text style={styles.loginText}>Sign In</Text>
        </Pressable>
        <Text
          style={{
            color: '#e3e5e8',
            marginTop: 10,
            fontSize: 20,
            marginBottom: -10,
          }}>
          or
        </Text>
        <Pressable style={styles.signInButton2} onPress={signUpPage}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
  return ui;

  function signUpPage() {
    navigation.navigate('SignUpMobile');
  }

  async function signInprocess() {
    var jsRequestObject = {mobile: mobile, password: Password}; //check
    var jsonRequestText = JSON.stringify(jsRequestObject);

    var formData = new FormData();
    formData.append('jsonRequestText', jsonRequestText);

    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        var jsonResponseText = request.responseText;
        var jsResponseObject = JSON.parse(jsonResponseText);

        if (jsResponseObject.msg == 'Error') {
          Alert.alert('Message', 'Invalid Details');
        } else {
          var userObject = jsResponseObject.user;
          // Alert.alert('Message', 'Hello' + userObject.name);
          AsyncStorage.setItem('user', JSON.stringify(userObject));
          //Navigate to Home
          navigation.navigate('Home');
        }
      }
    };
    request.open('POST', 'http://192.168.43.75/react_chat/signIn.php', true);
    request.send(formData);
  }
}

const styles = StyleSheet.create({


  check1:{
    color:'gray',
    fontSize:17,
  },
  check2:{
    color:'gray',
    fontSize:17,
    opacity:0,
  },
  signInInputBox: {
    width: '80%',
    height: 45,
    // fontSize: 18,
    margin: 3,
  },
  //     signInInputBox:{
  //       width: '80%',
  //       height: 45,
  //       // fontSize: 18,
  // borderStyle:'solid',
  // borderWidth:1,
  //       borderBottomColor: 'white',
  //       margin:3,
  //     },
  forgot: {
    color: '#e3e5e8',
  },
  forgotButton: {
    marginLeft: 200,
    marginTop: 15,
    marginBottom: -20,
  },
  loginText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  //signIn
  signInButtonText1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
  },
  signUpText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  signInButton1: {
    width: '80%',
    height: 50,
    backgroundColor: 'rgba(242,242,242, 0.9)',
    borderRadius: 8,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Main: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 10,
    backgroundColor: 'black',
  },
  SafeAreaView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 270,
    // flex: 1,
    // backgroundColor:'black',
    // gap: 10,
    // // backgroundColor:"#f7676a",
  },
  signInButton2: {
    width: '80%',
    height: 50,
    backgroundColor: 'black',
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: -50,
  },

  signInView1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 9,
    paddingHorizontal: 20,
    borderRadius: 7,
    backgroundColor: 'rgba(18, 18, 18, 0.9)',
  },

  signInIcon1: {
    fontSize: 20,
    position: 'absolute',
    start: 15,
  },

  signInInput1: {
    width: '100%',
    height: 45,
    fontSize: 18,
    color: 'white',
    // borderColor: 'white',
    margin: 3,
  },

  signInMain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  signInImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
