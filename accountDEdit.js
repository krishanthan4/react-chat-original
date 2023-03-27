import {useState, React, useEffect} from 'react';
import {
  Image,
  Text,
  Alert,
  View,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  TouchableHighlight,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export function AccountDEdit({route, navigation}) {
  const [nameD, SetNameD] = useState(route.params.name);
  const [MobileD, SetMobileD] = useState(route.params.Mobile);
  const [PasswordD, SetPasswordD] = useState(route.params.Password);
  const [ProfileImageD, setProfileImageD] = useState(route.params.ProfileImage);

  const ui = (
    <SafeAreaView style={styles.home}>
      <Text style={styles.EditProfile}>Edit Profile</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.profileImg}
        onPress={selectProfilePicture}>
        <Image
          source={{uri: 'http://192.168.43.75/react_chat/' + ProfileImageD}}
          style={{width: '100%', height: '100%', position: 'absolute'}}
        />
        <Text style={styles.profileImageText}>Upload Your Photo</Text>
      </TouchableOpacity>

      <Text style={styles.name}>{nameD}</Text>

      <View style={{width: '90%'}}>
        <View style={styles.div}>
          {/* <Text style={styles.subTitle}>Name</Text> */}
          <TextInput
            placeholder={'Name'}
            onChangeText={SetNameD}
            style={styles.divInput}
            placeholderTextColor={'gray'}
          />
        </View>
        <View style={styles.div}>
          {/* <Text style={styles.subTitle}>Mobile</Text> */}
          <TextInput
            placeholder={'Mobile'}
            keyboardType={'numeric'}
            onChangeText={SetMobileD}
            maxLength={10}
            style={styles.divInput}
            placeholderTextColor={'gray'}
          />
        </View>
        <View style={styles.div}>
          {/* <Text style={styles.subTitle}>Password</Text> */}
          <TextInput
            secureTextEntry={true}
            placeholder={'******'}
            onChangeText={SetPasswordD}
            style={styles.divInput}
            placeholderTextColor={'gray'}
          />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.discardButton}
            onPress={disc}>
            <Text style={styles.discardButtonText}>Discard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={sav}
            activeOpacity={0.7}
            style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
  return ui;

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

      setProfileImageD(imageObject);
    }
  }

  async function sav() {
    // const userObject = {
    //   name: nameD,
    //   mobile: MobileD,
    //   password: PasswordD,
    //   profile_url: ProfileImageD,
    // };

    // const userJSONText = JSON.stringify(userObject);

    // const formData = new FormData();
    // formData.append('userJSONText', userJSONText);
    // const request = new XMLHttpRequest();
    // request.onreadystatechange = function () {
    //   if (request.readyState == 4 && request.status == 200) {
    //   }
    // };

    // request.open();
    // request.send(formData);

    // await AsyncStorage.setItem('user', JSON.stringify(userObject));
    // Alert.alert(nameD,ProfileImageD);
  }
  function disc() {
    navigation.navigate('AccountDeatails');
  }

}
// useEffect(sav, []);


const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: 100,
    alignItems: 'center',
    columnGap: 20,
  },
  discardButton: {
    width: '40%',
    height: 45,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  discardButtonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  saveButton: {
    width: '40%',
    height: 45,
    backgroundColor: 'black',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    borderRadius: 10,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  div: {
    // borderBottomColor: 'white',
    // borderWidth: 1,
    paddingBottom: 1,
    marginTop: 20,
    // justifyContent: 'space-between',
    // flexDirection: 'row',
    // alignItems: 'center',
    paddingRight: 10,
    // opacity:0.3S,
  },

  divInput: {
    backgroundColor: 'rgba(56, 56, 55, 0.4)',
    width: '100%',
    fontSize: 19,
    borderBottomColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    color: 'white',
  },

  subTitle: {
    color: 'gray',
    fontSize: 19,
    paddingLeft: 10,
    marginBottom: 1,
    // paddingBottom: 10,
  },
  name: {
    color: 'white',
    fontSize: 25,
  },
  name2: {
    color: 'white',
    fontSize: 20,
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
  EditProfile: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
  home: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    // justifyContent:'center',
  },
});
