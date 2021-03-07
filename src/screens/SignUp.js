import * as React from 'react';
import {
  View,
} from 'react-native';
import { Button } from 'react-native-paper';

import {InputBox,ErrorText,AlertBox, globalStyles,} from '../components/Components';
import {AuthContext, UserContext} from '../components/Contexts';

const SignUpScreen = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [incorrectMsg, setIncorrectMsg] = React.useState('');
  const onChangeUsername = (value)=> setUsername(value);
  const onChangeEmail = (value)=> setEmail(value);
  const onChangePassword = (value)=> setPassword(value);

  const {signUp} = React.useContext(AuthContext);
  const {setUser} = React.useContext(UserContext);
 
  const sendData = (username, email, password) =>{
    if (username.trim() == "" || email.trim() == "" || password==""){
      AlertBox();
    } else{
      // 'http://18.191.41.39:8080/signUp'
      console.log(username, email, password);
      fetch( 'http://10.0.2.2:5000/signUp', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        })
      }).then(response => response.json()
      ).then(response => {
        const status = response.status;
        if (status == "success"){
          setUser(username);
          signUp();
        } else {
          // db error
          setIncorrectMsg(status);
        }
      }).catch(error => {
        console.log("Connection Error: ", error)
        setIncorrectMsg("networkError")
      });
    }
  }
  return (
    <View style={globalStyles.mainContainer}>
      <View style={globalStyles.formContainer}>
        <InputBox type="Username" icon="account" onChange={onChangeUsername}/> 
        <InputBox type="Email" icon="email" onChange={onChangeEmail}/> 
        <InputBox type="Password" icon="lock" onChange={onChangePassword}/> 

        <ErrorText errMsg = {incorrectMsg}/>

        <Button style={globalStyles.btn} mode="contained" color="#455745"
            onPress={()=>sendData(username, email, password)}>
          Sign Up 
        </Button>

      </View>
    </View>
  );
}

export default SignUpScreen;