import React from "react";


import { View, ScrollView, Text } from 'react-native'
import { Icon } from 'react-native-elements'


export default class Help extends React.Component {
    state = {
        Test: 0
    };





    render() {


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

                <Text> Explain the app here </Text>
            </ScrollView >




        );

    }
}
