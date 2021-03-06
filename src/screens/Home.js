import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Button } from 'react-native-paper';
import {AuthContext, UserContext} from '../components/Contexts';

const Home = () => {
  const {signOut} = React.useContext(AuthContext);
  const {user} = React.useContext(UserContext);
  return (
    <View>
      <Text>
        {user}  
      </Text>
      <Button mode="contained" onPress={() => signOut()} color="red">
       Sign Out 
      </Button>
    </View>
  );
}

export default Home;