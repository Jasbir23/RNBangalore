import React, { Component } from "react";
import LoginScreen from "./LoginScreen";
import MainTabNavigator from "./MainTabNavigator";
import { StackNavigator } from "react-navigation";
export default (MainStackRouter = StackNavigator({
  Login: { screen: LoginScreen },
  MainTab: { screen: MainTabNavigator }
}));
