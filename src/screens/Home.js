import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Button } from 'react-native-paper';

const Home = () => {
  return (
    <View>
      <Text>
        Home Page  
      </Text>
      <Button mode="contained" onPress={() => console.log('Pressed')} color="red">
        Home
      </Button>
    </View>
  );
}

export default Home;