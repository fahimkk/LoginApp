import * as React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-paper';
import {InputBox, globalStyles } from '../components/Components';
import {AuthContext, UserContext} from '../components/Contexts';

const SignUpScreen = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const onChangeUsername = (value)=>{
    setUsername(value);
  }
  const onChangeEmail = (value)=>{
    setEmail(value);
  }
  const onChangePassword = (value)=>{
    setPassword(value);
  }

  const {signUp} = React.useContext(AuthContext);
  const {setUser} = React.useContext(UserContext);
 
  const sendData = (username, email, password) =>{
    if (username == "" || email=="" || password==""){
      console.log('Null value')
    } else{
      console.log(username, email, password);
      fetch('http://10.0.2.2:5000/signUp', {
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
        }
      });
    }
  }
  return (
    <View style={globalStyles.mainContainer}>
      <View style={globalStyles.formContainer}>
        <InputBox type="Username" icon="user" onChange={onChangeUsername}/> 
        <InputBox type="Email" icon="email" onChange={onChangeEmail}/> 
        <InputBox type="Password" icon="lock" onChange={onChangePassword}/> 
        <View style={{margin:10,}}/>

        <Button style={globalStyles.btn} mode="contained" color="#455745"
            onPress={()=>sendData(username, email, password)}>
          Sign Up 
        </Button>

      </View>
    </View>
  );
}

export default SignUpScreen;