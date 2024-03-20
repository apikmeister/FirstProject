import {View, Text, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigation';

export default function Home({
  navigation,
}: NativeStackScreenProps<MainStackParamList, 'Home'>) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Profile"
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
    </View>
  );
}
