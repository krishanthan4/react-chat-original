import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export function Help({navigation}) {
  return (
    <SafeAreaView style={styles.home}>
      <View style={{backgroundColor:'rgba(33, 33, 33,0.9)',width:'100%',height:'8%',alignItems:'center',justifyContent:'flex-start',flexDirection:'row',marginBottom:20,}}> 
<View style={{flexDirection:'row',height:'100%',alignItems:'center',justifyContent:'space-between',width:'50%',marginLeft:10,}}>
  <Pressable onPress={goback}>
  <Icon name='arrow-left' style={{fontSize:20,color:'white',}}/>

  </Pressable>
<Text style={{fontSize:27,fontWeight:'bold',color:'white'}}>
  Help
</Text>
</View>
      </View>
      <View style={styles.otherSettings}>
        <View style={styles.otherSettings2}>
          <Icon name="question-circle" style={styles.otherSettingsIcon} />
          <Text style={styles.accountName}>Help Center</Text>
        </View>
      </View>
      <View style={styles.otherSettings}>
        <View style={styles.otherSettings2}>
          <Icon name="user-md" style={styles.otherSettingsIcon} />
         <View>
         <Text style={styles.accountName}>Contact us</Text>
         <Text style={{color:'gray'}}>Questions? Need help?</Text>
         </View>
        </View>
      </View>
      <View style={styles.otherSettings}>
        <View style={styles.otherSettings2}>
          <Icon name="file-text-o" style={styles.otherSettingsIcon} />
          <Text style={styles.accountName}>Terms and Privacy Policy</Text>
        </View>
      </View>
      <View style={styles.otherSettings}>
        <View style={styles.otherSettings2}>
          <Icon name="info-circle" style={styles.otherSettingsIcon} />
        <View>
        <Text style={styles.accountName}>Version</Text>
          <Text style={{color:'gray'}}>20.1.4.3</Text>
        </View>
        </View>
      </View>
    </SafeAreaView>
  );

  function goback(){
    navigation.navigate('User');
  }

}

const styles = StyleSheet.create({
  accountName: {
    color: 'white',
    fontSize: 19,
  },

  home: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#121212',
    // justifyContent:'center',
  },
  otherSettingsIcon: {
    padding: 15,
    fontSize: 20,
    marginRight: 20,
    borderRadius: 50,
    // backgroundColor: 'blue',
    color: 'gray',
  },
  otherSettings: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,

    justifyContent: 'space-between',
  },
  otherSettings2: {
    width: '80%',

    flexDirection: 'row',
    alignItems: 'center',
  },
  rightArrow: {
    color: 'white',
    fontSize: 20,
  },
});
