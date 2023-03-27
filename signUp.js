import {TextInput,StyleSheet, SafeAreaView,Text,Alert,View,Pressable,TouchableHighlight, } from "react-native";
import { useState } from "react";
import SelectDropdown from 'react-native-select-dropdown';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export function SignUp({navigation}) {
    const [mobileNumber, setMobileNumber] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [VerifyPassword, setVerifyPassword] = useState('');
    const [country, setCountry] = useState('');
    const [profileImage, setProfileImage] = useState(null);

    
    const [countries,setCountries]=useState([]);
    const ui = (
        <SafeAreaView style={signUpStyle.main}>
        <Text style={signUpStyle.mainText}>Welcome To Chat App</Text>
            <TextInput style={signInStyle.signInTextInput} onChangeText={setMobileNumber} keyboardType='numeric' placeholder='Enter Your Mobile Number' maxLength={10} autoCorrect={false}/>
            <TextInput style={signInStyle.signInTextInput}  onChangeText={setName}  placeholder='Ente Your Name' />
            <TextInput style={signInStyle.signInTextInput}  onChangeText={setPassword} secureTextEntry={true} placeholder='Enter Your Password' />
            <TextInput style={signInStyle.signInTextInput}  onChangeText={setVerifyPassword} secureTextEntry={true} placeholder='Verify Password' />
        
        <SelectDropdown 
         data={countries}
        rowStyle={signUpStyle.rowStyle}
         buttonStyle={signUpStyle.dropDown}
         onSelect={setCountry}
         />   
            <Pressable  onPress={selectProfilePicture} >
        <Text style={signInStyle.signInButtonText}>Select Profile Picture</Text>
            </Pressable>
            
            <Pressable style={signInStyle.signInButton} onPress={signUpRequest}>
              <Text style={signInStyle.signInButtonText}>Sign Up</Text>
            </Pressable>
            <TouchableHighlight style={signInStyle.signInButton2}>
              <Text style={signInStyle.signInButtonText}>Sign Up With Google</Text>
            </TouchableHighlight>
        
            </SafeAreaView>
    );



    function loadCountries (){
    
       var request =new  XMLHttpRequest();
       request.onreadystatechange=function(){
     if(request.readyState==4&&request.status==200){
      var countryArray= JSON.parse(request.responseText);
    setCountries(countryArray); 
    }
       };
       request.open('GET','http://192.168.43.75/react_chat/load_countries.php',true);
       request.send();
     
     }  
     
     loadCountries();
    
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
      formData.append('mobileNumber', mobileNumber);
      formData.append('profile_picture', profileImage);
  formData.append("name",name);
  formData.append("password",password);
  formData.append("verifyPassword",VerifyPassword);
  formData.append("country",country);
      var request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
          Alert.alert("Response",request.responseText);
        }
      };
      request.open('POST','http://192.168.43.75/react_chat/signUp.php',true,);
      request.send(formData);
    }

    return ui;

  }
  
  

const signInStyle = StyleSheet.create({
    signInButton:{
      width:'70%',
      height:40,
      backgroundColor:'blue',
      borderRadius:10,
  alignItems:'center',
  justifyContent:'center',
    },
    signInButton2:{
      width:'70%',
      height:40,
      backgroundColor:'green',
      borderRadius:10,
  alignItems:'center',
  justifyContent:'center',
    },
    signInButtonText:{
      fontSize:20,
    },
  signInTextInput:{
    width:'80%',
    height:40,
    borderWidth:1,
    borderRadius:10,
    borderColor:'blue',
    paddingHorizontal:15,
    borderStyle:'solid',
  },
    signInMain:{
      gap:20,
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
  });
  

const signUpStyle = StyleSheet.create({
    rowStyle:{
      backgroundColor:'#0a82c2',
    },
    dropDown:{
      borderStyle:'solid',
      borderWidth:2,
      borderRadius:10,
      borderColor:'blue',
    },
  mainText:{
    fontSize:40,
  },
    main:{
      gap:20,
      flex:1,
      justifyContent:"center",
      alignItems:'center',
    },
  
  
  });
  