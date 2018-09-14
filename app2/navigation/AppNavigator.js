import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Bookmarks from "../screens/Bookmarks.js";
import PlaceScreen from "../screens/PlaceScreen.js";

const AppStack = createStackNavigator({
  Bookmarks,
  PlaceScreen
}, { headerMode: 'none' });

export default AppStack;
