import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { InputComponent } from '../components/inputComponent/InputComponent';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {


  return (
    <View style={styles.container}>
      <Text>the best IA Chat</Text>
      

      <InputComponent
        inputType="Type something"
        // inputIcon={require('../assets/images/login/profile.png
        secureInput={false}
        setBorderInput={1}
        setBorderRadiusInput={15}
        setWidthInput={"90%"}
        // setJustifyContent = {"flex-end"}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
