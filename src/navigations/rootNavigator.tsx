import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '@/screens/home';
import {ModalScreen} from '@/screens/modal';
import {MenuItem} from '@/types/menuItem';
import React from 'react';

export type RootStackParamList = {
  Home: undefined;
  Modal: {item: MenuItem};
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        <RootStack.Group>
          <RootStack.Screen name="Home" component={HomeScreen} />
        </RootStack.Group>
        <RootStack.Group screenOptions={{presentation: 'modal'}}>
          <RootStack.Screen name="Modal" component={ModalScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
