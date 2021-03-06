import * as React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Button } from 'react-native-paper';

const SignInScreen = ({navigation}) => {
  return (
    <View>
      <Text>
          Sign In page
      </Text>
      <Button mode="contained" onPress={() => navigation.navigate('SignUp')} color="red">
        Sign In
      </Button>
    </View>
  );
}

export default SignInScreen;