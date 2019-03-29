import React from "react";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
} from 'react-native-chart-kit'
import { Icon } from 'react-native-elements'





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
    Dimensions,
    ScrollView
} from "react-native";



export default class Analytics extends React.Component {


    render() {

        const width = Dimensions.get('window').width
        const height = 220
        const labelStyle = {
            color: chartConfig.color(),
            marginVertical: 10,
            textAlign: 'center',
            fontSize: 16
        }
        return (

            <ScrollView  >

                <Icon
                    raised
                    name='home'
                    type='feather'
                    color='#f50'
                    onPress={() => {
                        this.props.navigation.navigate("Main");
                    }} />

                <Text style={labelStyle}>Distance Covered</Text>
                <LineChart
                    data={data}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                />

                <Text />
                <Text />

                <Text style={labelStyle}>Calories Burnt</Text>
                <BarChart
                    data={caloriesBurntData}
                    width={screenWidth}
                    height={220}
                    yAxisLabel={'Cal '}
                    chartConfig={chartConfig}
                />

                <Text />
                <Text />
                <Text />
            </ScrollView >




        );

    }
}



// Mock data object used for LineChart and BarChart


const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2 // optional, default 3
}

const screenWidth = Dimensions.get('window').width


const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        data: [20, 45, 28, 80, 99, 43],

    }]
}

const caloriesBurntData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        data: [20, 45, 28, 80, 99, 43]
    }]
}