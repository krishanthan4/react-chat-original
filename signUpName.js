import {
  TextInput,
  StyleSheet,
  SafeAreaView,
  Text,
  Alert,
  View,
  Pressable,
  FlatList,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export function SignUpName({route, navigation}) {
  const [name, setName] = useState('');
  const [ProfileImage, setProfileImage] = useState('');

  const ui = (
    <SafeAreaView style={styles.Main}>
      <Image
        source={{
          uri: 'http://192.168.43.75/HACK_TF/kali.png',
        }}
        style={styles.signInImage}
      />
      <KeyboardAvoidingView style={styles.SafeAreaView}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.profileImg}
          onPress={selectProfilePicture}>
          <Image
            source={{uri: 'http://192.168.43.75/HACK_TF/icon (13).png'}}
            style={{width: '100%', height: '100%', position: 'absolute'}}
          />
          <Text style={styles.profileImageText}>Upload Your Photo</Text>
        </TouchableOpacity>

        <View style={styles.signInView1}>
          <Icon name="user-circle" style={{color: 'gray', fontSize: 17}} />
          <View style={styles.signInInputBox}>
            <TextInput
              style={styles.signInInput1}
              placeholder={'Name'}
              onChangeText={setName}
              placeholderTextColor={'gray'}
            />
          </View>
        </View>

        <Pressable style={styles.signInButton1} onPress={signUpRequest}>
          <Text style={styles.loginText}>Sign Up</Text>
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

  async function signInPage() {
    navigation.navigate('Sign In');
  }

  async function selectProfilePicture() {
    const options = {
      mediaType: 'photo',
    };

    const result = await launchImageLibrary(options);

    if (result.didCancel) {
      Alert.alert('Message', 'No Image');
    } else {
      const imageObject = {
        uri: result.assets[0].uri,
        name: 'profile.png',
        type: 'image/png',
      };

      setProfileImage(imageObject);
    }
  }

  function signUpRequest() {
    // Alert.alert("message",profileImage.uri);

    var formData = new FormData();
    formData.append('mobileNumber', route.params.Mobile);
    formData.append('profile_picture', ProfileImage);
    formData.append('name', name);
    formData.append('password', route.params.Password);
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        var response = JSON.parse(request.responseText);
        if (response.errorM == 'Same') {
          Alert.alert('Mobile Number Allready used');
        } else {
          hello();
        }
      }
    };
    request.open('POST', 'http://192.168.43.75/react_chat/signUp2.php', true);
    request.send(formData);
  }

  function hello() {
    navigation.navigate('Sign In');
  }
}
const styles = StyleSheet.create({
  rowStyle: {
    backgroundColor: '#0a82c2',
  },
  dropDown: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'blue',
  },
  profileImageText: {
    color: 'white',
    fontSize: 15,
    marginTop: 50,
  },
  profileImg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    overflow: 'hidden',
    height: 150,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'rgba(242, 242, 242, 0.5)',
    marginBottom: 25,
    marginTop: 30,
    // marginVertical: 30
  },
  signInInputBox: {
    width: '80%',
    height: 45,
    justifyContent: 'center',
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
    marginTop: 35,
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
    justifyContent: 'center',
    width: '100%',
    paddingTop: 200,
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
    marginTop: -110,
    width: '150%',
    height: '130%',
    position: 'absolute',
  },
});
