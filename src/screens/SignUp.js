import * as React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Button } from 'react-native-paper';

const SignUpScreen = ({navigation}) => {
  return (
    <View>
      <Text>
          Sign Up page
      </Text>
      <Button mode="contained" onPress={() => navigation.navigate('SignIn')} color="red">
        Sign Up
      </Button>
    </View>
  );
}

export default SignUpScreen;