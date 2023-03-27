import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignUp} from './signUp';
import {Home} from './home';
import {SignIn} from './signIn';
import {Chat} from './chat';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Entry} from './entrypage';
import {SignUpName} from './signUpName';
import {SignUpMobile} from './signUpMobile';
import {User} from './user';
import {Globe} from './globe';
import {Heart} from './heart';
import {AccountDeatails} from './accountDeatails';
import {AccountDEdit} from './accountDEdit';
import {Preference} from './preference';
import { ChatSettings } from './chatSettings';
import { AboutUs } from './aboutUs';
import { LogOut } from './logOutComponent';
import { Help } from './help';
import { AuthenticationPassword } from './authenticationPassword';



const Stack = createNativeStackNavigator();

function App() {

  async function checkUser() {
    const user = await AsyncStorage.getItem('user');
    return user;
  }
  // function start(){
  //   checkUser();

  // }
  
  // useEffect(start,[]);

  // checkUser != null ? 'Sign In' : 'Entry'
  const ui = (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={checkUser != null ? 'Home' : 'Entry'}>
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="AuthenticationPassword" component={AuthenticationPassword} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Preference" component={Preference} />
        <Stack.Screen name="logOut" component={LogOut} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="ChatSettings" component={ChatSettings} />
        <Stack.Screen name="AccountDEdit" component={AccountDEdit} />
        <Stack.Screen name="AccountDeatails" component={AccountDeatails} />
        <Stack.Screen name="Globe" component={Globe} />
        <Stack.Screen name="Heart" component={Heart} />
        <Stack.Screen name="Sign In" component={SignIn} />
        <Stack.Screen name="SignUpMobile" component={SignUpMobile} />
        <Stack.Screen name="SignUpName" component={SignUpName} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Entry" component={Entry} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  return ui;
}
export default App;
