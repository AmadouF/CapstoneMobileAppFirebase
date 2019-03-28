import React from "react";
import BackgroundTimer from 'react-native-background-timer';
import { View, Text } from 'react-native'


// Cancel the timer when you are done with it
BackgroundTimer.clearInterval(intervalId);

const intervalId = BackgroundTimer.setInterval(() => {
    // this will be executed every 200 ms
    // even when app is the the background

}, 1000000);



export default class MyApp extends React.Component {
    state = {
        Test: 0
    };





    render() {

        return <View />
    }
}