import React from "react";
import { StyleSheet, Platform, Image, Text, View, Button } from "react-native";
import firebase from "react-native-firebase";
import styles from "./Styles/LaunchScreenStyles";
import LaunchScreen from "./LaunchScreen";

export default class Main extends React.Component {
  state = { currentUser: null };

  componentDidMount() {
    const { currentUser } = firebase.auth();

    this.setState({ currentUser });
  }

  render() {
    const { currentUser } = this.state;

    return (
      <View style={styles.container}>
        <Text>Hi {currentUser && currentUser.first}!</Text>
      </View>
    );
  }
}
