import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import {MainStackParamList} from '../types/navigation';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Profile" component={Profile} />
    </MainStack.Navigator>
  );
};

export default Main;
