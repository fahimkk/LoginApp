import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  View,
} from 'react-native';
import {AuthStackContainer, HomeStackContainer} from './src/components/StackComponents'

const RootStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown:false,}}>
        <RootStack.Screen name="AuthStacks" component={AuthStackContainer}/>
        <RootStack.Screen name="HomeStacks" component={HomeStackContainer}/>
      </RootStack.Navigator>  
    </NavigationContainer>
  );
}

export default App;
