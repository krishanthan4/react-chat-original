import React from 'react';
import {Text,Image,View,SafeAreaView,TouchableOpacity,Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



export function Heart({navigation}) {
  const ui = (
    <SafeAreaView style={styles.home}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={globeIcon} >
          <Icon name="globe" style={styles.otherIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={chatIcon}>
          <Icon name="comments" style={styles.otherIcon} />
        </TouchableOpacity >
        <TouchableOpacity onPress={heartIcon}>
          <Icon name="heart" style={styles.mainIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={userIcon}>
          <Icon name="user" style={styles.otherIcon} />
        </TouchableOpacity>
      </View>

      

<View style={{width:'100%',alignItems:'center',}}>
  
  <Image source={{uri:'https://www.nawpic.com/media/2020/hacker-nawpic-39.jpg'}} style={{width:'100%',height:650,position:'absolute'}}/>
  
  
  <Text style={{color:'white',fontSize:30,marginTop:500,}}>
   This Page Under Construction
  </Text>
  </View>
    </SafeAreaView>
  );
  return ui;





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
