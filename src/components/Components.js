import * as React from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  Alert,
} from 'react-native';
import { TextInput, Button, Portal, Dialog, Paragraph } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;

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
      onChangeText={args.onChange}
    />
  );
}

const ErrorText = (value)=>{
    if (value.errMsg == "incorrect"){
        return(
            <Text style={styles.pswdErr}> Incorrect Password !!</Text>
        );
    } else if (value.errMsg == "dbError"){
        return(
            <Text style={styles.dbErr}> Server Problem ! Try again later.</Text>
        );  
    } else if (value.errMsg == "networkError"){
        return(
            <Text style={styles.dbErr}> Network Error ! </Text>
        );  
    } else if (value.errMsg == "exists"){
        return(
            <Text style={styles.dbErr}> Email already exists. </Text>
        );  
    } else return (
            <Text>  </Text>
    );
}

const AlertBox = () =>
  Alert.alert(
    "Invalid",
    "You have entered an invalid input. Please try again.",
    [
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );





const styles = StyleSheet.create({
  inputBox:{
    height:50,
    padding:5,
  },
  pswdErr: {
    color: "red",
    fontSize: 20,
    textAlign: "center",
    paddingTop:10,
  },
  dbErr: {
    color: "#757575",
    fontSize: 20,
    textAlign: "center",
    paddingTop:10,
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
  btn:{
    padding:3,
    margin:5,
    marginTop:20,
    borderWidth:1,
    borderColor:"#455745"
  },
  
})

export {InputBox, ErrorText, AlertBox,};