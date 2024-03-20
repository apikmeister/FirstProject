/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   // StyleSheet,
//   // ScrollView,
//   // StatusBar,
//   Text,
//   // useColorScheme,
//   View,
// } from 'react-native';
// import {styles} from './src/styles/styles';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from './src/pages/Home';
// import Profile from './src/pages/Profile';
import Navigation from './src/navigation';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   return (
//     <View className="mt-8 px-2">
//       <Text className="text-2xl text-black dark:text-white">{title}</Text>
//       <Text className="mt-2 text-lg text-black dark:text-white">
//         {children}
//       </Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = 'bg-neutral-300 dark:bg-slate-900';

  return <Navigation />;
}

export default App;
