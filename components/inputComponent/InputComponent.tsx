import React from 'react';
import { StyleSheet, Image, TextInput, Alert } from 'react-native';
import { Text, View } from '../Themed';

const InputComponent = (props: any) => {      
    return(
        <View style={{
        width: props.setWidthInput || "70%",
        marginTop: props.setMarginTop || 0,
        marginBottom: props.setMarginBottom || 0,
        borderWidth: props.setBorderInput,
        borderBottomWidth: 1,
        borderBottomLeftRadius: props.setBorderBottomLeftRadius || 0,
        borderTopLeftRadius: props.setBorderTopLeftRadius || 0,
        borderColor: darkPurple,
        borderRadius: props.setBorderRadiusInput,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', }}>
        <Image
          source={props.inputIcon} //Change your icon image here
          style={styles.iconInput}
        />
        <TextInput
          style={styles.inputComponent}
          onChangeText={props.onChange}
          placeholder ={props.inputType}
          secureTextEntry = {props.secureInput}
        />
      </View>
    )
}


const mediumPurple: string = '#5B259F'
const darkPurple: string = '#2F1155'



const styles = StyleSheet.create({
  SectionStyle: {
    width: "70%",
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: darkPurple,
    // borderBottomWidth: 1,
    // borderColor: darkPurple,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',  
  },
  inputComponent: {
      flex: 1,
      width: '100%',
      height: 50,
      borderRadius: 0,
      padding: 10,
    },
  iconInput: {
      height: 24,
      width: 24,
      resizeMode: 'stretch',
      alignItems: 'center',
    },
  });

export { InputComponent };