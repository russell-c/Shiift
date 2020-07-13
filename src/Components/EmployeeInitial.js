import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    headerContainer: {
        backgroundColor: "#28BCB5",
        height: Dimensions.get('window').height*0.18,
        display: "flex",
        flexDirection: "column-reverse",
        paddingHorizontal: 16,
        paddingBottom: 8
    },
    headerText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 24
    },
    formContainer: {
        padding: 24
    },
    buttonContainer: {
        width: Dimensions.get('window').height*0.15,
        backgroundColor: "#28BCB5",
        elevation: 8,
        borderRadius: Dimensions.get('window').height*0.06 / 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: Dimensions.get('window').height*0.06,
        marginBottom: 16
    }, 
    buttonText: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
    }, 
    divider: {
        width: "100%",
        height: 1,
        backgroundColor: "black",
        marginBottom: 16
    }
})

export default class EmployeeInitial extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Let's set up your profile</Text>
                </View>
                <View style={styles.formContainer}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                    <View style={styles.divider}></View>
                    <Text>Photos</Text>
                    <View style={styles.divider}></View>
                    <Text>Experience</Text>
                    <View style={styles.divider}></View>
                    <Text>Location</Text>
                    <View style={styles.divider}></View>
                    <Text>Review</Text>
                    <View style={styles.divider}></View>
                </View>
            </View>
        )
    }
}