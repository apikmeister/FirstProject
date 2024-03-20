import {View, Text, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigation';

export default function Profile({
  navigation,
}: NativeStackScreenProps<MainStackParamList, 'Profile'>) {
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
