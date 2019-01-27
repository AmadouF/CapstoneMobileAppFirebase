import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image
} from "react-native";
import firebase from "react-native-firebase";
import { Images } from "./Themes";
import styles from "./Styles/LaunchScreenStyles";

export default class Login extends React.Component {
  state = { email: "", password: "", errorMessage: null };

  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate("Main"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.white_background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <ScrollView style={styles.container}>
          {this.state.errorMessage && (
            <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
          )}
          <TextInput
            style={styles.textInput}
            selectionColor="#2737C7"
            underlineColorAndroid={"#2737C7"}
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <Text />
          <TextInput
            secureTextEntry
            style={styles.textInput}
            selectionColor="#2737C7"
            underlineColorAndroid={"#2737C7"}
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <Text />
          <Text />
          <Button
            title="Login"
            onPress={this.handleLogin}
            buttonStyle={styles.buttonContainer}
            containerStyle={{ marginTop: 20 }}
          />
        </ScrollView>
      </View>
    );
  }
}
