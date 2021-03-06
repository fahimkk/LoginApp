import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import {
  View,
} from 'react-native';
import SignInScreen from './src/screens/SignIn'
import SignUpScreen from './src/screens/SignUp'
import HomeScreen from './src/screens/Home'
import {CustomNavigationBar} from './src/components/Components'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        header: (props) => <CustomNavigationBar {...props}/>,
      }}>

        <Stack.Screen name="SignIn" component={SignInScreen}
        options={{title:'Sign In'}} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
