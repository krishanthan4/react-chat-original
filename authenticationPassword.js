import {
  Pressable,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export function AuthenticationPassword({route, navigation}) {
  const [password, SetPassword] = useState('');

  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <Image
        style={{width: '100%', height: '100%', position: 'absolute'}}
        source={{
          uri: 'https://img.freepik.com/free-vector/abstract-black-texture-background-hexagon_206725-413.jpg',
        }}
      />

      <Pressable style={{alignSelf: 'flex-start', margin: 20}} onPress={goback}>
        <Icon
          name="arrow-left"
          style={{
            fontSize: 20,
            color: 'black',
            backgroundColor: 'gray',
            opacity: 0.8,
            padding: 10,
            borderRadius: 50,
          }}
        />
      </Pressable>
      <KeyboardAvoidingView style={styles.SafeAreaView}>
        <Text style={{color: 'white', fontSize: 20}}>
          Enter Your Password to Edit Details
        </Text>
        <View
          style={{
            backgroundColor: 'rgba(31, 31, 31,0.8)',
            borderWidth: 1,
            overflow: 'hidden',
            width: '80%',
            height: 50,
            marginVertical: 40,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <TextInput
            onChangeText={SetPassword}
            secureTextEntry={true}
            style={{
              width: '90%',
              padding: 20,
              height: 100,
              color: 'white',
              fontSize: 17,
            }}
          />
          <Pressable>
            <Icon name="eye-slash" style={{color: 'white', fontSize: 18}} />
          </Pressable>
        </View>
        <TouchableOpacity
          onPress={conform}
          activeOpacity={0.7}
          style={{
            width: '40%',
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            borderRadius: 10,
          }}>
          <Text style={{color: 'white', fontSize: 20}}>Canform</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );

  function goback() {
    navigation.navigate('AccountDeatails');
  }

  function conform() {
    var reg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{5,32}$/;
    const name = route.params.name;
    const Mobile = route.params.Mobile;
    const ProfileImage = route.params.ProfileImage;

    if (!password | !reg.test(password)) {
      Alert.alert('Wrong Password');
    } else {
      const formdata = new FormData();
      formdata.append('password', password);

      const request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
          const reply = JSON.parse(request.responseText);
          if (reply == 'Done') {
            // Alert.alert('hello');
            const obj = {
              name: name,
              Password:password,
              Mobile: Mobile,
              ProfileImage: ProfileImage,
            };
            navigation.navigate('AccountDEdit', obj);
          } else {
            Alert.alert('Wrong Password');
          }
        }
      };
      request.open(
        'POST',
        'http://192.168.43.75/react_chat/passwordCheck.php',
        true,
      );
      request.send(formdata);
    }
  }
}

const styles = StyleSheet.create({
  SafeAreaView: {
    justifyContent: 'flex-end',
    paddingBottom: 20,
    alignItems: 'center',
    flex: 1,
    // backgroundColor:'black',
  },
});
