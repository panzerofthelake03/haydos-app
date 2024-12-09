import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PawInformationDetailed from '../app/pawInformationDetailed';
import PawList from '../app/pawList';
import Welcome from '../app/welcome'; // Import the Welcome component
import { ImageSourcePropType } from 'react-native';
 

export type RootStackParamList = {
  Welcome: undefined; // Add Welcome to the stack param list
  PawList: undefined; // Rename Home to PawList
  Details: { 
    pawName: string; 
    pawImage: ImageSourcePropType; 
    pawGender: string; 
    pawAge: string; 
    pawWhereToFindMe: string; 
    pawFunFact: string; 
  };
};


const Stack = createStackNavigator<RootStackParamList>();


const Index = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="PawList" component={PawList} />
        <Stack.Screen name="Details" component={PawInformationDetailed}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
