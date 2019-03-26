import React from "react";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
} from 'react-native-chart-kit'



//import { BleManager } from 'react-native-ble-plx';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableOpacity,
    Image,
    Button,
    Dimensions
} from "react-native";

export default class Analytics extends React.Component {















    render() {


        return (

            <View  >

                <Text />

            </View >

        );

    }
}

const screenWidth = Dimensions.get('window').width

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` // optional
    }]
}
const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
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
    }
});