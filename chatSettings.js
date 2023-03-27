import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export function ChatSettings({navigation}) {
  return (
    <SafeAreaView style={styles.home}>
      <View
        style={{
          backgroundColor: 'rgba(33, 33, 33,0.8)',
          width: '100%',
          height: '8%',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexDirection: 'row',
          marginBottom: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '50%',
            marginLeft: 10,
          }}>
          <Pressable onPress={goback}>
            <Icon name="arrow-left" style={{fontSize: 20, color: 'white'}} />
          </Pressable>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: 'white'}}>
            Chat
          </Text>
        </View>
      </View>
      <Text
        style={{
          color: 'white',
          alignSelf: 'flex-start',
          marginLeft: '20%',
          fontSize: 15,
          marginBottom: 10,
        }}>
        Themes
      </Text>
      <View style={styles.otherSettings}>
        <View style={styles.otherSettings2}>
          <Icon name="rebel" style={styles.otherSettingsIcon2} />
          <Text style={styles.accountName}>Dark Theme</Text>
        </View>
        {/* <Icon name="chevron-right" style={styles.rightArrow} /> */}
      </View>
      <View style={styles.otherSettings}>
        <View style={styles.otherSettings2}>
          <Icon name="rebel" style={styles.otherSettingsIcon} />
          <Text style={styles.accountName}>White Theme</Text>
        </View>
        {/* <Icon name="chevron-right" style={styles.rightArrow} /> */}
      </View>

      <View style={{borderWidth:0.5,borderColor:'gray',width:'90%'}}></View>
      <View style={{width:'81%',marginTop:20,}}>
        <View style={styles.otherSettings2}>
          <Icon name="image" style={styles.otherSettingsIcon} />
          <Text style={styles.accountName}>Wallpaper</Text>
        </View>
      </View>
      <View style={{marginTop:20,borderWidth:0.5,borderColor:'gray',width:'90%'}}></View>

      <View style={{width:'81%',marginTop:20,}}>
        <View style={styles.otherSettings2}>
          <Icon name="cloud-upload" style={styles.otherSettingsIcon} />
          <Text style={styles.accountName}>Chat Backup</Text>
        </View>
      </View>
      <View style={{width:'81%',marginTop:20,}}>
        <View style={styles.otherSettings2}>
          <Icon name="rotate-left" style={styles.otherSettingsIcon} />
          <Text style={styles.accountName}>Chat History</Text>
        </View>
      </View>
    </SafeAreaView>
  );

  function goback() {
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
    padding: 12,
    fontSize: 20,
    marginRight: 20,
    borderRadius: 50,
    backgroundColor: '#212121',
    color: 'white',
  },
  otherSettingsIcon2: {
    padding: 10,
    fontSize: 20,
    marginRight: 20,
    borderRadius: 50,
    backgroundColor: 'gray',
    color: 'black',
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
