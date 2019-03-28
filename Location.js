import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableOpacity,
    AsyncStorage,
    Button
} from "react-native";
import haversine from "haversine";
import BackgroundTask from 'react-native-background-task'


BackgroundTask.define(async () => {
    console.log('Hello from a background task')

    /*  this.setState = ({
          Test: this.state.Test + 1
      });
      */
    const response = await fetch('http://feeds.bbci.co.uk/news/rss.xml')
    const text = await response.text()

    // Data persisted to AsyncStorage can later be accessed by the foreground app
    await AsyncStorage.setItem('@MyApp:key', text)

    // Remember to call finish()

    BackgroundTask.finish()
})
export default class Location extends Component {
    state = {
        location: null,
        latitude: null,
        longitude: null,
        routeCoordinates: [],
        distanceTravelled: 0,
        prevLatLng: {},
        Test: 0
    };





    findCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const location = JSON.stringify(position);

                this.setState({ location });
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000 }
        );
    };

    componentDidMount() {
        BackgroundTask.schedule({
            period: 1,
        })
        this.checkStatus()

        this.watchID = navigator.geolocation.watchPosition(
            position => {
                const { coordinate, routeCoordinates, distanceTravelled } = this.state;
                const { latitude, longitude } = position.coords;

                const newCoordinate = {
                    latitude,
                    longitude
                };

                this.setState({
                    latitude,
                    longitude,
                    routeCoordinates: routeCoordinates.concat([newCoordinate]),
                    distanceTravelled:
                        distanceTravelled + this.calcDistance(newCoordinate),
                    prevLatLng: newCoordinate
                });
            },
            error => console.log(error),
            { enableHighAccuracy: true, timeout: 20000 }

        );
    }

    async checkStatus() {
        const status = await BackgroundTask.statusAsync()
        console.log(status.available)
    }

    calcDistance = newLatLng => {
        const { prevLatLng } = this.state;
        console.log("Here")
        return haversine(prevLatLng, newLatLng) || 0;
    };


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.findCoordinates}>
                    <Text style={styles.welcome}>Find My Coords?</Text>
                    <Text>Location: {this.state.location}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.bubble, styles.button]}>
                    <Text style={styles.bottomBarContent}>
                        {parseFloat(this.state.distanceTravelled).toFixed(2)} km
    </Text>
                </TouchableOpacity>

                <Button
                    title="Read results from AsyncStorage"
                    onPress={async () => {
                        const result = await AsyncStorage.getItem('@MyApp:key')
                        console.log(result)
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});