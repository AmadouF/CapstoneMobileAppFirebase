import React, { Component } from "react";
import {
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
  Button
} from "react-native";
import firebase from "react-native-firebase";

import { Images } from "./Themes";
import Login from "./Login";
import SignUp from "./SignUp";

// Styles
import styles from "./Styles/LaunchScreenStyles";
//import { Button } from "../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-native";

export default class LaunchScreen extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? "Main" : "LaunchScreen");
    });
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <ScrollView>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} />

          <Button
            // style={styles.buttonContainer}
            title="Login"
            onPress={() => this.props.navigation.navigate("Login")}
          />
          <Text />
          <Button
            // style={styles.buttonContainer}
            title="Signup"
            onPress={() => this.props.navigation.navigate("SignUp")}
          />
        </ScrollView>
      </View>
    );
  }
}
