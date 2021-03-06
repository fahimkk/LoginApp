import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  View,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import SignInScreen from '../screens/SignIn'
import SignUpScreen from '../screens/SignUp'
import HomeScreen from '../screens/Home'

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();

function CustomNavigationBar({scene, navigation, previous}) {
  // Set title in Navigation Bar
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;
  return (
    <Appbar.Header style={{backgroundColor:"#455745"}}>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title}/>
    </Appbar.Header>
  );
}

const AuthStackContainer = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="SignIn"
      screenOptions={{header: (props) => <CustomNavigationBar {...props}/>,}}>
        <AuthStack.Screen name="SignIn" component={SignInScreen}
        options={{title:'Sign In'}} />
        <AuthStack.Screen name="SignUp" component={SignUpScreen}
        options={{title: 'Sign Up'}}/>
    </AuthStack.Navigator>
  );
}

const HomeStackContainer = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="SignIn"
      screenOptions={{header: (props) => <CustomNavigationBar {...props}/>,}}>
        <HomeStack.Screen name="SignIn" component={HomeScreen}
        options={{title:'Sign In'}} />
    </HomeStack.Navigator>
  );
}

export {AuthStackContainer, HomeStackContainer};