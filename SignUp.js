import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Item,
  Label
} from "react-native";

import firebase from "react-native-firebase";
import Form from "react-native-form";
import styles from "./Styles/LaunchScreenStyles";

export default class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    province: "",
    age: "",
    headsetSerialNumber: "",
    errorMessage: null
  };

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate("Main"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };
  /*
  pushToFirebase() {
    let formValues = this.refs.registrationForm.getValues();
    this.itemsRef.push(formValues);
  }
  */

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}
        <Form ref="soulForm" style={styles.form}>
          <TextInput
            style={styles.textInput}
            selectionColor="#2737C7"
            underlineColorAndroid={"#2737C7"}
            placeholder="First Name"
            autoCapitalize="none"
            onChangeText={firstName => this.setState({ firstName })}
            value={this.state.firstName}
          />
          {!!this.state.firstNameError && (
            <Text style={{ color: "red" }}>{this.state.firstNameError}</Text>
          )}

          <TextInput
            style={styles.textInput}
            selectionColor="#2737C7"
            underlineColorAndroid={"#2737C7"}
            placeholder="Last Name"
            autoCapitalize="none"
            onChangeText={lastName => this.setState({ lastName })}
            value={this.state.lastName}
          />

          {!!this.state.lastNameError && (
            <Text style={{ color: "red" }}>{this.state.lastNameError}</Text>
          )}

          <TextInput
            style={styles.textInput}
            selectionColor="#2737C7"
            underlineColorAndroid={"#2737C7"}
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          {!!this.state.emailError && (
            <Text style={{ color: "red" }}>{this.state.emailError}</Text>
          )}
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
          {!!this.state.passwordError && (
            <Text style={{ color: "red" }}>{this.state.passwordError}</Text>
          )}
          <TextInput
            style={styles.textInput}
            selectionColor="#2737C7"
            underlineColorAndroid={"#2737C7"}
            placeholder="Age"
            autoCapitalize="none"
            onChangeText={age => this.setState({ age })}
            value={this.state.age}
          />
          <TextInput
            style={styles.textInput}
            selectionColor="#2737C7"
            underlineColorAndroid={"#2737C7"}
            placeholder="Province"
            autoCapitalize="none"
            onChangeText={province => this.setState({ province })}
            value={this.state.province}
          />
          <TextInput
            style={styles.textInput}
            selectionColor="#2737C7"
            underlineColorAndroid={"#2737C7"}
            placeholder="Headset Serial Number"
            autoCapitalize="none"
            onChangeText={headsetSerialNumber =>
              this.setState({ headsetSerialNumber })
            }
            value={this.state.headsetSerialNumber}
          />

          {!!this.state.headsetSerialNumberError && (
            <Text style={{ color: "red" }}>
              {this.state.headsetSerialNumberError}
            </Text>
          )}
          <Text />
          <Text />

          <Button
            title="Sign Up"
            onPress={() => {
              if (this.state.firstName.trim() === "") {
                this.setState(() => ({
                  firstNameError: "First name required."
                }));
              }
              if (this.state.lastName.trim() === "") {
                this.setState(() => ({
                  lastNameError: "Last name required."
                }));
              }
              if (this.state.email.trim() === "") {
                this.setState(() => ({
                  emailError: "Email required."
                }));
              }
              if (this.state.password.trim() === "") {
                this.setState(() => ({
                  passwordError: "Password required."
                }));
              }
              if (this.state.headsetSerialNumber.trim() === "") {
                this.setState(() => ({
                  headsetSerialNumberError: "Headset Serial Number required."
                }));
              } else {
                this.handleSignUp();
                //  this.props.navigation.navigate("Main");
                this.setState(() => ({ nameError: null }));
              }
            }}
          />
        </Form>
      </View>
    );
  }
}
