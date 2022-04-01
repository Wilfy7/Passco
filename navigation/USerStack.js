import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/Subjects
import Subjects from '../screen/Subjects';


const Stack = createNativeStackNavigator();

const USerStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Subjects" component={Subjects} />
    </Stack.Navigator>
  )
}

export default USerStack