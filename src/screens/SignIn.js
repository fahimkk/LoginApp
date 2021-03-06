import * as React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-paper';
import {InputBox, SubmitButton, globalStyles } from '../components/Components';

const SignInScreen = ({navigation}) => {
  return (
    <View style={globalStyles.mainContainer}>
      <View style={globalStyles.formContainer}>
        <InputBox type="Email" icon="email" /> 
        <InputBox type="Password" icon="lock" /> 
        <View style={{margin:10,}}/>
        <SubmitButton mode="contained" title="Sign In"/>
        <SubmitButton mode="outlined" title="Sign Out"/>
      </View>
    </View>
  );
}


export default SignInScreen;