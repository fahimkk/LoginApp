import * as React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Button, Text, Title } from 'react-native-paper';
import {AuthContext, UserContext} from '../components/Contexts';
import {globalStyles } from '../components/Components';

const Home = () => {
  const {signOut} = React.useContext(AuthContext);
  const {user} = React.useContext(UserContext);
  return (
    <View style={globalStyles.mainContainer}>
      <View style={globalStyles.formContainer}>
      <Title style={{textAlign:"center", fontSize:30, paddingTop:20,}}>
        Welcome
      </Title>
      <Text style={{textAlign:"center", fontSize:20, color:"green", padding:20,}}>
        {user}  
      </Text>
      </View>
      <Button style={globalStyles.btn} mode="contained" onPress={() => signOut()} >
       Sign Out 
      </Button>
    </View>
  );
}

export default Home;