import { createStackNavigator } from "react-navigation";
import React from "react";

import HomeScreen from "../../screen/HomeScreen/HomeScreen";
import SettingsScreen from "../../screen/SettingsScreen/SettingsScreen";
import AboutUsScreen from "../../screen/AboutUsScreen/AboutUsScreen";

const HomeRouter = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: { header: null }
    },
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: { header: null }
    },
    AboutUsScreen: {
      screen: AboutUsScreen,
      navigationOptions: { header: null }
    }
  },
  {
    initialRouteName: "HomeScreen"
  }
);

export const createRootNavigator = (
  signedIn = false,
  screenName = "HomeNavigator"
) => {
  return createStackNavigator(
    {
      HomeNavigator: {
        screen: HomeRouter,
        navigationOptions: { header: null }
      }
    },
    {
      initialRouteName: signedIn ? "HomeNavigator" : screenName
    }
  );
};
