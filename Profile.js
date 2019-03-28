import React from "react";
import {
  StyleSheet,
  Platform,
  Image,
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity
} from "react-native";
import firebase from "react-native-firebase";
import LaunchScreen from "./LaunchScreen";
import ToggleSwitch from "toggle-switch-react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from "react-native-chart-kit";
//import styles from "./Styles/LaunchScreenStyles";

export default class Profile extends React.Component {
  state = {};

  handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
      this.props.navigation.navigate("LaunchScreen");
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <Image
          style={styles.avatar}
          source={{
            uri:
              "https://avatars0.githubusercontent.com/u/25256114?s=400&u=32f7656b94c4be27b0445cf3b2ad5b41a57334ed&v=4"
          }}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>Amadou Fall</Text>
            <Text style={styles.info}>
              Ask team if I can add a description field
            </Text>
            <Text style={styles.description}>I will diplay the info here</Text>

            <TouchableOpacity style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate("UserInformation")}
            >
              <Text style={{ color: "white" }}>Edit Information</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={{ color: "white" }}>Show Analytics</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.handleSignOut}
            >
              <Text style={{ color: "white" }}>Signout</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate("Location")}
            >
              <Text style={{ color: "white" }}>Location</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 200
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600"
  },
  body: {
    marginTop: 40
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center"
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF"
  }
});
