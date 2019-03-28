import React from "react";
import { StyleSheet, Platform, Image, Text, View, Button, TouchableOpacity, ScrollView } from "react-native";
import firebase from "react-native-firebase";
import styles from "./Styles/LaunchScreenStyles";
import LaunchScreen from "./LaunchScreen";
import ToggleSwitch from "toggle-switch-react-native";
import BackgroundTimer from 'react-native-background-timer';
import haversine from "haversine";
import { Icon } from 'react-native-elements'


// Cancel the timer when you are done with it





export default class Main extends React.Component {
  state = {
    currentUser: null,

    switchOn1: false,
    switchOn2: false,
    switchOn3: false,
    switchOn4: false,
    switchOn5: false,
    switchOn6: false,
    time: 20,
    distance1: 0,
    distance2: 0,
    distance3: 0,
    location: null,
    latitude: null,
    longitude: null,
    routeCoordinates: [],
    distanceTravelled: 0,
    prevLatLng: {},
    measurementCount: 0,
    SpeedValue: 0,
    distanceTravelledCalculate: 0,

  };

  componentDidMount() {
    this.BackgroundCode()
    const { currentUser } = firebase.auth();

    this.setState({ currentUser });


  }

  BackgroundData(newState) {
    firebase
      .database()
      .ref("headset/123456")
      .set({
        distanceTravelled: this.state.distanceTravelled,
        SpeedValue: this.state.SpeedValue,
        CaloriesBurned: newState.switchOn2,
        DistanceCovered: newState.switchOn3,
        Inclination: newState.switchOn4,
        Speed: newState.switchOn5,
        Time: newState.switchOn6,

      })
      .then(data => {
        //success callback
        console.log("data ", data);
      })
      .catch(error => {
        //error callback
        console.log("error ", error);
      });
  }

  writeUserData(newState) {

    // console.log("2" + this.state)
    firebase
      .database()
      .ref("headset/123456")
      .set({
        CaloriesBurned: newState.switchOn2,
        DistanceCovered: newState.switchOn3,
        Inclination: newState.switchOn4,
        Speed: newState.switchOn5,
        Time: newState.switchOn6,



      })
      .then(data => {
        //success callback
        console.log("data ", data);
      })
      .catch(error => {
        //error callback
        console.log("error ", error);
      });
  }
  BackgroundCode = () => {
    BackgroundTimer.setInterval(() => {
      // this will be executed every 200 ms
      // even when app is the the background


      this.watchID = navigator.geolocation.watchPosition(
        position => {
          const { coordinate, routeCoordinates, distanceTravelled, distanceTravelledCalculate } = this.state;
          const { latitude, longitude } = position.coords;

          const newCoordinate = {
            latitude,
            longitude
          };

          this.setState({
            latitude,
            longitude,
            routeCoordinates: routeCoordinates.concat([newCoordinate]),
            distanceTravelledCalculate:
              distanceTravelledCalculate + this.calcDistance(newCoordinate),
            distanceTravelled:
              distanceTravelled + this.calcDistance(newCoordinate),
            prevLatLng: newCoordinate
          });
        },
        error => console.log(error),
        { enableHighAccuracy: true, timeout: 5000 }

      );


      //from here
      this.setState({
        measurementCount: this.state.measurementCount + 1
      });

      if (this.state.measurementCount >= 2) {
        this.setState({
          SpeedValue: (this.state.distanceTravelledCalculate) / (10 * this.state.measurementCount / 3600)


        });

        newState = this.state
        this.BackgroundData(newState)

        console.log("Speed is: " + this.state.SpeedValue)
      }

      if (this.state.measurementCount === 6) {

        this.setState({
          measurementCount: 0,
          distanceTravelledCalculate: 0
        });

      }

      console.log('tic');
    }, 10000);


  };

  calcDistance = newLatLng => {
    const { prevLatLng } = this.state;
    console.log("Here")
    return haversine(prevLatLng, newLatLng) || 0;
  };

  onPress1 = () => {
    this.setState({ switchOn1: !this.state.switchOn1 });

  };
  onPress2 = () => {
    newState = this.state
    newState.switchOn2 = !newState.switchOn2
    console.log(newState.switchOn2)
    this.setState({ switchOn2: newState.switchOn2 }, this.writeUserData(newState));

  };
  onPress3 = () => {
    newState = this.state
    newState.switchOn3 = !newState.switchOn3
    console.log(newState.switchOn3)
    this.setState({ switchOn3: newState.switchOn3 }, this.writeUserData(newState));
  };
  onPress4 = () => {
    newState = this.state
    newState.switchOn4 = !newState.switchOn4
    console.log(newState.switchOn4)
    this.setState({ switchOn4: newState.switchOn4 }, this.writeUserData(newState));
  };
  onPress5 = () => {
    newState = this.state
    newState.switchOn5 = !newState.switchOn5
    console.log(newState.switchOn5)
    this.setState({ switchOn5: newState.switchOn5 }, this.writeUserData(newState));
  };
  onPress6 = () => {
    newState = this.state
    newState.switchOn6 = !newState.switchOn6
    console.log(newState.switchOn6)
    this.setState({ switchOn6: newState.switchOn6 }, this.writeUserData(newState));
  };
  render() {
    const { currentUser } = this.state;

    return (
      <View style={toggleSyles.container}>
        <Text style={{ position: "absolute", left: 10, top: 80 }}>
          Hi {currentUser && currentUser.firstName}!
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
          label="Calories Burned"
          labelStyle={{
            color: "black",
            fontWeight: "900",
            marginHorizontal: 25
          }}
          size="large"
          onToggle={this.onPress2}
        />
        <Text />
        <ToggleSwitch
          isOn={this.state.switchOn3}
          onColor="green"
          offColor="red"
          label="Distance Covered"
          labelStyle={{
            color: "black",
            fontWeight: "900",
            marginHorizontal: 20
          }}
          size="large"
          onToggle={this.onPress3}
        />
        <Text />
        <ToggleSwitch
          isOn={this.state.switchOn4}
          onColor="green"
          offColor="red"
          label="Inclination"
          labelStyle={{
            color: "black",
            fontWeight: "900",
            marginHorizontal: 45
          }}
          size="large"
          onToggle={this.onPress4}
        />
        <Text />
        <ToggleSwitch
          isOn={this.state.switchOn5}
          onColor="green"
          offColor="red"
          label="Speed"
          labelStyle={{
            color: "black",
            fontWeight: "900",
            marginHorizontal: 57

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
        <Icon
          raised
          name='user'
          type='feather'
          color='#f50'
          onPress={() => {
            this.props.navigation.navigate("Profile");
          }} />

        <TouchableOpacity style={[styles.bubble, styles.button]}>
          <Text style={styles.bottomBarContent}>
            {parseFloat(this.state.distanceTravelled).toFixed(2)} km  Speed: {this.state.SpeedValue} km/h
          </Text>

        </TouchableOpacity>


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
