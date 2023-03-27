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
  KeyboardAvoidingView,
} from 'react-native';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

export function SignUpMobile({navigation}) {
  const [Mobile, setMobile] = useState('');
  const [Password, setPassword] = useState('');
  const [VerifyPassword, setVerifyPassword] = useState('');

  const ui = (
    <SafeAreaView style={styles.Main}>
      <Image
        source={{
          uri: 'http://192.168.43.75/HACK_TF/kali.png',
        }}
        style={styles.signInImage}
      />
      <KeyboardAvoidingView style={styles.SafeAreaView}>
        <View style={styles.signInView1}>
          <Icon name="mobile" style={{color: 'gray', fontSize: 20}} />
          <View style={styles.signInInputBox}>
            <TextInput
              style={styles.signInInput1}
              keyboardType={'numeric'}
              autoCorrect={false}
              maxLength={10}
              placeholder={'Mobile Number'}
              onChangeText={setMobile}
              placeholderTextColor={'gray'}
            />
          </View>
          <Icon
            name="check"
            style={Mobile.length == 10 ? styles.check1 : styles.check2}
          />
        </View>
        <View style={styles.signInView1}>
          <Icon name="lock" style={{color: 'gray', fontSize: 17}} />
          <View style={styles.signInInputBox}>
            <TextInput
              style={styles.signInInput1}
              autoCorrect={false}
              secureTextEntry={true}
              placeholder={'Password'}
              onChangeText={setPassword}
              placeholderTextColor={'gray'}
            />
          </View>
          <Icon
            name={Password == '' ? (name = 'eye') : (name = 'eye-slash')}
            style={{color: 'gray', fontSize: 15}}
          />
        </View>
        <View style={styles.signInView1}>
          <Icon name="lock" style={{color: 'gray', fontSize: 17}} />
          <View style={styles.signInInputBox}>
            <TextInput
              className="check"
              style={styles.signInInput1}
              secureTextEntry={true}
              placeholder={'Retype Password'}
              onChangeText={setVerifyPassword}
              placeholderTextColor={'gray'}
            />
          </View>
          <Pressable>
            <Icon
              name={
                VerifyPassword == '' ? (name = 'eye') : (name = 'eye-slash')
              }
              style={{color: 'gray', fontSize: 15}}
            />
          </Pressable>
        </View>

        <Pressable style={styles.signInButton1} onPress={next}>
          <Text style={styles.loginText}>Next</Text>
        </Pressable>
        <Text
          style={{
            color: '#e3e5e8',
            marginTop: 5,
            fontSize: 20,
            marginBottom: -10,
          }}>
          or
        </Text>
        <Pressable style={styles.signInButton2} onPress={signInPage}>
          <Text style={styles.signUpText}>Sign In</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
  return ui;
  function next() {


var reg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{5,32}$/;

    if (!Mobile | Mobile.length!==10) {
      Alert.alert('Please Input a Valid Mobile');

    } else if ((Password !== VerifyPassword)) {
        Alert.alert('Password Not Matched');
      } else if(!Password | !reg.test(Password)){
        Alert.alert('Password must contain Capital/simple Letters and Numbers');

      }
     else {
      const obj = {Mobile: Mobile, Password: Password};
      navigation.navigate('SignUpName', obj);
    }
  }

  function signInPage() {
    navigation.navigate('Sign In');
  }
}

const styles = StyleSheet.create({
  check1: {
    color: 'gray',
    fontSize: 17,
  },
  check2: {
    color: 'gray',
    fontSize: 17,
    opacity: 0,
  },
  signInInputBox: {
    width: '80%',
    height: 45,
    // fontSize: 18,
    margin: 3,
  },
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
    backgroundColor: 'rgba(242, 242, 242, 0.9)',
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Main: {
    alignItems: 'center',
    //   justifyContent:'center',
    flex: 1,
    gap: 10,
    backgroundColor: 'black',
  },
  SafeAreaView: {
    // position:'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
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
    // marginBottom: -50,
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
    marginTop: -110,
    width: '150%',
    height: '130%',
    position: 'absolute',
  },
});
