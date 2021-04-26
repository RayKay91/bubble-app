import React from 'react';
//nav
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
//screens
import Login from './screens/Login'
import Dashboard from './screens/Dashboard'
import UserProfile from './screens/UserProfile'
import Bookings from './screens/Bookings'
import BookingDetails from './screens/BookingDetails'
import LocalSitters from './screens/LocalSitters'
import SitterProfile from './screens/SitterProfile'
import appColors from './appColors';

const Stack = createNativeStackNavigator();

export default function App() {
  const defaultHeaderOptions = {
    headerStyle: { backgroundColor: appColors.lightPurple }, headerTitleStyle: { color: appColors.purple, fontSize: 24, fontWeight: 'bold' }
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={ Login } options={ { headerShown: false } } />
        <Stack.Screen name="Dashboard" component={ Dashboard } options={ { headerShown: false } } />
        <Stack.Screen name="User Profile" component={ UserProfile } options={ { headerTitle: 'My Profile', headerStyle: { backgroundColor: appColors.lightPurple }, headerTitleStyle: { color: appColors.purple, fontSize: 24, fontWeight: 'bold' } } } />
        <Stack.Screen name="My Bookings" component={ Bookings } options={ { ...defaultHeaderOptions } } />
        <Stack.Screen name="Booking Details" component={ BookingDetails } options={ { ...defaultHeaderOptions } } />
        <Stack.Screen name="Local Sitters" component={ LocalSitters } options={ { ...defaultHeaderOptions } } />
        <Stack.Screen name="Sitter Profile" component={ SitterProfile } options={ { ...defaultHeaderOptions } } />

      </Stack.Navigator>
    </NavigationContainer>
  );

}
