import { StyleSheet, Image, TextInput, Alert } from 'react-native';

import { Button, Input, Icon } from '@rneui/themed';
import React from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

// my Component
import { InputComponent } from '../components/inputComponent/InputComponent';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const [text, onChangeText] = React.useState(String);
  const [number, onChangeNumber] = React.useState(String);

  return (
    <View style={styles.container}>
      {text.length >= 1 && text != "Username"
        &&
        <Text style={styles.title}>Welcome {text},</Text>


        ||
        <Text style={styles.title}>Welcome,</Text>
      }


      <Text style={styles.title}>the best IA Chat</Text>
      <Image
        source={require('../assets/images/logo/logo.png')}
        style={{
          width: 100,
          height: 100,
          marginTop: 10
        }}
      />


      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <InputComponent
        inputType="Username"
        inputIcon={require('../assets/images/login/profile.png')}
        onChange={onChangeText}
        value={text}
        secureInput={false}
      />

      <InputComponent
        inputType="Password"
        inputIcon={require('../assets/images/login/key-square.png')}
        onChange={onChangeNumber}
        value={number}
        secureInput={true}
      />

      <Button
        title="Login"
        size="lg"
        onPress={() => {
          if (number.length !== 0 && text.length !== 0 && number !== "Password" && text !== "Username") {
            navigation.navigate("TabTwo")
          }
        }}
        buttonStyle={{
          backgroundColor: mediumPurple,
          borderRadius: 15,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 50,
        }} />

      <Text style={styles.textStyle}>
        N??o tem conta?{''}
        <Text
          style={styles.hyperlinkStyle}
          onPress={() => navigation.navigate("TabTwo")}>Aqui</Text>
      </Text>

      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}


const mediumPurple: string = '#5B259F'
const darkPurple: string = '#2F1155'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',

    marginLeft: 13,
    marginRight: 13
  },
  input: {
    // flex: 1,
    width: '80%',
    height: 50,
    margin: 12,
    // borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: darkPurple,
    borderRadius: 0,
    padding: 10,
    // paddingBottom: 5,
    // paddingLeft: 10
  },
  button: {
    width: '50%',
  },

  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  textStyle: {
    fontSize: 20,
  },
  hyperlinkStyle: {
    color: 'blue',
  },

});
