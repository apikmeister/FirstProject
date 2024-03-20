import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Main from './MainStack';

export default () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};
