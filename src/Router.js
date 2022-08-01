import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Colors from './constants/Colors';
import Strings from './constants/Strings';

import HomeScreen from './screens/HomeScreen';
import JobDetailScreen from './screens/JobDetailScreen/';

const Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: Colors.secondary_color,
            headerTitle: null,
          }}
        />
        <Stack.Screen
          name="JobDetailScreen"
          component={JobDetailScreen}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: Colors.secondary_color,
            headerTitle: null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
