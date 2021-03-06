import * as React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-paper';
import {InputBox, ErrorText, globalStyles } from '../components/Components';
import {AuthContext, UserContext} from '../components/Contexts';

const SignInScreen = ({navigation}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [incorrectMsg, setIncorrectMsg] = React.useState('');
    const onChangeEmail = (value)=>{
      setEmail(value);
    }
    const onChangePassword = (value)=>{
      setPassword(value);
    }

    // AuthContext from app will return any of signIn Up or Out function
    const {signIn} = React.useContext(AuthContext);
    // useContext will return the object we passed inside the Context Provider, we we passed two items 
    const {setUser} = React.useContext(UserContext);

    const sendData = (email, password) =>{
      console.log(email,password);
      fetch('http://10.0.2.2:5000/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
        })
        // convert response into json format
      }).then(response => response.json()
      ).then(response => {
        const status = response.status
        const username = response.username
        if (status == "nil"){
          navigation.navigate('SignUp')
        }else if (status == "success"){
          // Pass username to Home page
          setUser(username);
          // Change Auth Stack to Account Stack
          signIn();
        }else{
          setIncorrectMsg(response.status);
        }
      });
    }
  return (
    <View style={globalStyles.mainContainer}>
      <View style={globalStyles.formContainer}>
        <InputBox type="Email" icon="user" onChange={onChangeEmail} /> 
        <InputBox type="Password" icon="lock" onChange={onChangePassword} /> 
        <ErrorText errMsg = {incorrectMsg}/>

        <Button style={globalStyles.btn} mode="contained" color="#455745"
            onPress={()=>sendData(email, password)}>
          Sign In
        </Button>
        <Button style={globalStyles.btn} mode="outlined" color="#455745"
            onPress={()=>navigation.navigate("SignUp")}>
          Sign Up 
        </Button>

      </View>
    </View>
  );
}


export default SignInScreen;