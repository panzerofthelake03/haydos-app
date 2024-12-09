import React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
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


const Stack = createNativeStackNavigator<RootStackParamList>();


const Index = () => {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="PawList" component={PawList} />
          <Stack.Screen name="Details" component={PawInformationDetailed}/> 
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
};

export default Index;
