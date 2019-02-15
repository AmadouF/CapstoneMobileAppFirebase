import React, { Component } from 'react';
import { View, StatusBar, TextInput, Text, Button } from 'react-native';
import styles1 from "./Styles/LaunchScreenStyles";
import firebase from "react-native-firebase";

class FloatingLabelInput extends Component {
    state = {
        isFocused: false,
    };

    handleFocus = () => this.setState({ isFocused: true });
    handleBlur = () => this.setState({ isFocused: false });

    render() {
        const { label, ...props } = this.props;
        const { isFocused } = this.state;
        const labelStyleEmail = {
            position: 'absolute',
            left: 0,
            top: !isFocused ? 0 : 0,
            fontSize: !isFocused ? 20 : 14,
            color: !isFocused ? '#aaa' : '#000',
        };
        return (
            <View style={{ paddingTop: 18 }}>
                <Text style={labelStyleEmail}>
                    {label}
                </Text>
                <TextInput
                    {...props}
                    style={{ height: 40, borderBottomWidth: 1, borderBottomColor: '#555' }}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    blurOnSubmit
                />


            </View>
        );
    }
}


export default class App extends Component {
    state = {

        email: "amadou@gmail.com",
        firstName: "Amadou",
        lastName: "Fall",
        province: "Quebec",
        age: "22",
        headsetSerialNumber: "123456",
        isFocused: false,
        errorMessage: null
    };

    handleSubmit = () => {
        firebase
            .database()
            .ref("Users/" + firebase.auth().currentUser.uid)
            .set({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                age: this.state.age,
                email: this.state.email,
                headsetSerialNumber: this.state.headsetSerialNumber,
                province: this.state.province
            })
            .then(data => {
                //success callback
                console.log("data ", data);
                this.props.navigation.navigate("Profile");
            })
            .catch(error => {
                //error callback
                console.log("error ", error);
            });
    }


    handleEmailChange = (newText) => this.setState({ email: newText });

    render() {
        return (
            <View style={{ flex: 1, padding: 30, backgroundColor: '#f5fcff' }}>
                <StatusBar hidden />
                <FloatingLabelInput
                    label="Email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <Text />

                <FloatingLabelInput
                    label="FirstName"
                    onChangeText={firstName => this.setState({ firstName })}
                    value={this.state.firstName}
                />
                <Text />

                <FloatingLabelInput
                    label="LastName"
                    onChangeText={lastName => this.setState({ lastName })}
                    value={this.state.lastName}
                />

                <Text />

                <FloatingLabelInput
                    label="Province"
                    onChangeText={province => this.setState({ province })}
                    value={this.state.province}
                />
                <Text />

                <FloatingLabelInput
                    label="Age"
                    onChangeText={age => this.setState({ age })}
                    value={this.state.age}
                />

                <Text />

                <FloatingLabelInput
                    label="Headset Serial Number"
                    onChangeText={headsetSerialNumber => this.setState({ headsetSerialNumber })}
                    value={this.state.headsetSerialNumber}
                />
                <Text />
                <Text />
                <Button
                    title="Submit"
                    onPress={this.handleSubmit}
                />
            </View>
        );
    }
}
