import React, { Component } from "react";
import EventsPage from "./EventsPage.js";
import IdeasPage from "./IdeasPage.js";
import ProfilePage from "./ProfilePage.js";
import { TabNavigator } from "react-navigation";
import TabComponent from "./TabComponent";
export default (MainScreenNavigator = TabNavigator(
  {
    EventsPage: { screen: EventsPage },
    IdeasPage: { screen: IdeasPage },
    ProfilePage: { screen: ProfilePage }
  },
  {
    tabBarPosition: "top",
    swipeEnabled: false,
    navigationOptions: {
      header: null
    },
    tabBarComponent: props => <TabComponent {...props} />
  }
));
