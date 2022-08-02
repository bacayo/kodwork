// import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Colors from './constants/Colors';

import HomeScreen from './screens/HomeScreen';
import JobDetailScreen from './screens/JobDetailScreen/';
import FavoritesScreen from './screens/FavoritesScreen/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = () => {
  return (
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
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="HomeScreen"
          component={StackNavigator}
          options={{headerShown: false, drawerLabel: 'Jobs'}}
        />
        <Drawer.Screen
          name="FavoritesScreen"
          component={FavoritesScreen}
          options={{headerTitle: 'Favorites', drawerLabel: 'Favorites'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Router;
