import React from "react";
import Expo from "expo";
import { StyleSheet, Text, View } from "react-native";
import { StyleProvider } from "native-base";
import EventsPage from "./src/EventsPage.js";
import MainStackRouter from "./src/MainStackRouter.js";
import * as firebase from "firebase";
import MainStore from "./src/Store/MainStore";
import LoginScreen from "./src/LoginScreen";

var firebaseConfig = {
  apiKey: "AIzaSyAgxIEmgg-WomWOFMaKZH0k38ouGeZMdx4",
  authDomain: "rnblrapp.firebaseapp.com",
  databaseURL: "https://rnblrapp.firebaseio.com",
  projectId: "rnblrapp",
  storageBucket: "rnblrapp.appspot.com",
  messagingSenderId: "269780639340"
};

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  componentDidMount() {
    // Firebase
    firebase.database().ref("Events/").on("value", data => {
      MainStore.events = data;
      console.log(MainStore.events, "9090909090");
    });
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <MainStackRouter />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
