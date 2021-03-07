import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
} from 'react-native';

import {AuthStackContainer, HomeStackContainer} from './src/components/StackComponents'
import {AuthContext, UserContext} from './src/components/Contexts';

const RootStack = createStackNavigator();

const App = () => {
  const [userToken, setUserToken] = React.useState()
  const authContext = React.useMemo(()=>{
    return {
      signIn: () => {
        setUserToken('true');
      },
      signUp: () => {
        setUserToken('true');
      },
      signOut: () => {
        setUserToken();
      },
    };
  },[]);
  // 2nd context is for username
  const [user, setUser] = React.useState('');
  return (
    <AuthContext.Provider  value={authContext}>
    <UserContext.Provider  value={{user, setUser}}>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{headerShown:false,}}>
          {userToken ? (
            <RootStack.Screen name="HomeStacks" component={HomeStackContainer}/>
          ) : (
            <RootStack.Screen name="AuthStacks" component={AuthStackContainer}/>
          )}
        </RootStack.Navigator>  
      </NavigationContainer>
    </UserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
