import React from 'react';
import { Button } from '@rneui/themed';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { InputComponent } from '../components/inputComponent/InputComponent';
import { Text, View } from '../components/Themed';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import axios, { AxiosError } from 'axios';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Content-Type, Authorization, Content-Length, X-Requested-With';


// import $ from "jquery"



export default function TabTwoScreen() {

  const [textChat, onChangeTextChat] = React.useState(String);

  const SendText = (pdataForm: string) => {

    try {
      axios({
        method: 'POST', // verbo http
        baseURL: 'http://localhost:80/apiChatApp/mvc/model/user-message.php', // url    
        data: pdataForm
      })
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    } catch(error: any) {
      throw Error(error);
    }
  }


  return (
    <View style={styles.container}>
      <Text>the best IA Chat</Text>
      {textChat !== "" && <Text>You to Type: {textChat} </Text>}


      <View style={styles.flexLine}>

        <InputComponent
          inputType="Type something"
          onChange={onChangeTextChat}
          // value={textChat}
          // inputIcon={require('../assets/images/login/profile.png
          secureInput={false}
          setBorderInput={1}
          setBorderRadiusInput={0}
          setBorderTopLeftRadius={15}
          setBorderBottomLeftRadius={15}
          setWidthInput={"70%"}
          setMarginBottom={10}
        // setJustifyContent = {"flex-end"}
        />
        <Button
          title="Send"
          size="lg"
          iconRight={true}
          icon={<MaterialCommunityIcons name="cube-send" size={24} color="white" />}
          onPress={() => {
            if (textChat.length !== 0 && textChat !== "") {
              // alert(setShowText(textChat))
              // setShowText(textChat

              const dataForm: string = JSON.stringify({
                messageUser: textChat
              })
              SendText( textChat )
            }
          }}

          buttonStyle={{
            backgroundColor: mediumPurple,
            borderRadius: 0,
            borderBottomRightRadius: 15,
            borderTopRightRadius: 15,
            marginBottom: 10,
            padding: 13.5,
            justifyContent: 'space-around'

          }}
          containerStyle={{
            width: "30%",
          }} />
      </View>


    </View>
  );
}

const mediumPurple: string = '#5B259F'
const darkPurple: string = '#2F1155'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexLine: {
    width: "90%",

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
