import React from "react";
import { StyleSheet, Platform, Image, Text, View, Button } from "react-native";
import firebase from "react-native-firebase";
import styles from "./Styles/LaunchScreenStyles";
import LaunchScreen from "./LaunchScreen";
import ToggleSwitch from "toggle-switch-react-native";

export default class Main extends React.Component {
  state = {
    currentUser: null,

    switchOn1: false,
    switchOn2: false,
    switchOn3: false,
    switchOn4: false,
    switchOn5: false,
    switchOn6: false
  };

  componentDidMount() {
    const { currentUser } = firebase.auth();

    this.setState({ currentUser });
  }

  handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
      this.props.navigation.navigate("LaunchScreen");
    } catch (e) {
      console.log(e);
    }
  };

  onPress1 = () => {
    this.setState({ switchOn1: !this.state.switchOn1 });
  };
  onPress2 = () => {
    this.setState({ switchOn2: !this.state.switchOn2 });
  };
  onPress3 = () => {
    this.setState({ switchOn3: !this.state.switchOn3 });
  };
  onPress4 = () => {
    this.setState({ switchOn4: !this.state.switchOn4 });
  };
  onPress5 = () => {
    this.setState({ switchOn5: !this.state.switchOn5 });
  };
  onPress6 = () => {
    this.setState({ switchOn6: !this.state.switchOn6 });
  };
  render() {
    const { currentUser } = this.state;

    return (
      <View style={toggleSyles.container}>
        <Text style={{ position: "absolute", left: 10, top: 80 }}>
          Hi {currentUser && currentUser.email}!
        </Text>
        <ToggleSwitch
          isOn={this.state.switchOn1}
          onColor="blue"
          offColor="gray"
          label="Bluetooth"
          labelStyle={{
            color: "black",
            fontWeight: "900",
            marginHorizontal: 42
          }}
          size="large"
          onToggle={this.onPress1}
        />
        <Text />
        <ToggleSwitch
          isOn={this.state.switchOn2}
          onColor="green"
          offColor="red"
          label="Distance Covered"
          labelStyle={{
            color: "black",
            fontWeight: "900",
            marginHorizontal: 20
          }}
          size="large"
          onToggle={this.onPress2}
        />
        <Text />
        <ToggleSwitch
          isOn={this.state.switchOn3}
          onColor="green"
          offColor="red"
          label="Speed"
          labelStyle={{
            color: "black",
            fontWeight: "900",
            marginHorizontal: 55
          }}
          size="large"
          onToggle={this.onPress3}
        />
        <Text />
        <ToggleSwitch
          isOn={this.state.switchOn4}
          onColor="green"
          offColor="red"
          label="Altitude"
          labelStyle={{
            color: "black",
            fontWeight: "900",
            marginHorizontal: 51
          }}
          size="large"
          onToggle={this.onPress4}
        />
        <Text />
        <ToggleSwitch
          isOn={this.state.switchOn5}
          onColor="green"
          offColor="red"
          label="Caloried Burned"
          labelStyle={{
            color: "black",
            fontWeight: "900",
            marginHorizontal: 27
          }}
          size="large"
          onToggle={this.onPress5}
        />
        <Text />
        <ToggleSwitch
          isOn={this.state.switchOn6}
          onColor="green"
          offColor="red"
          label="Time"
          labelStyle={{
            color: "black",
            fontWeight: "900",
            marginHorizontal: 62
          }}
          size="large"
          onToggle={this.onPress6}
        />
        <Text />
        <Button title="Sign Out" onPress={this.handleSignOut} />
      </View>
    );
  }
}
const toggleSyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
