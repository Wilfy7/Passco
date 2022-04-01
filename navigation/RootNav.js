import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './LoginStack';


const RootNav = () => {
  return (
    <NavigationContainer>
        <LoginStack />
    </NavigationContainer>
  )
}

export default RootNav