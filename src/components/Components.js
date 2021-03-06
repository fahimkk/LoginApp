import * as React from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const InputBox = (args) => {
  var secure = false;
  if (args.type == "Password") {
    var secure = true;
  }
  return (
    <TextInput style={styles.inputBox}
      mode="outlined"
      label={args.type}
      placeholder={args.type}
      secureTextEntry={secure}
      right={<TextInput.Icon name={args.icon} color="#9e9e9e" />}
    />
  );
}

const SubmitButton = (args) => {
  return (
    <Button style={styles.btn} mode={args.mode} color="#455745">
      {args.title} 
    </Button>
  );
}

const styles = StyleSheet.create({
  inputBox:{
    height:50,
    padding:5,
  },
  btn:{
    padding:3,
    margin:5,
    marginTop:20,
    borderWidth:1,
    borderColor:"#455745"
  },

});
 
export const globalStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#637D63",
    flexDirection: 'column',
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
  },
  formContainer:{
    backgroundColor: 'white',
    width: windowWidth * 0.85,
    padding:15,
    paddingTop:25,
    paddingBottom:25,
  },
  
})
export {InputBox, SubmitButton};