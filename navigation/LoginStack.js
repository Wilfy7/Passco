import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/Login'



const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
   <Stack.Navigator>
       <Stack.Screen name= "Login" component={Login} />
   </Stack.Navigator>
  )
}

export default LoginStack