import React from 'react';
import { StyleSheet, Image, TextInput, Alert } from 'react-native';
import { Text, View } from '../../components/Themed';

const InputLogin = () => {

  const [text, onChangeText] = React.useState('Username');    
    
    return(
        <View style={styles.SectionStyle}>
        <Image
          source={require('../../assets/images/profile.png')} //Change your icon image here
          style={styles.ImageStyle}
        />

        <TextInput
        //   style={{ flex: 1 }}
          style={styles.input1}
          onChangeText={onChangeText}
          placeholder="Username"
        />
      </View>
    )
}

const mediumPurple: string = '#5B259F'
const darkPurple: string = '#2F1155'

const styles = StyleSheet.create({
    input1: {
        flex: 1,
        width: '60%',
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
    SectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    ImageStyle: {
    //   padding: 10,
      marginLeft: 5,
      height: 25,
      width: 25,
      borderBottomWidth: 1,
      borderColor: darkPurple,
      resizeMode: 'stretch',
      alignItems: 'center',
    },
  });

export { InputLogin };