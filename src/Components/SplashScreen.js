import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center"
    },
    controls: {
        display: "flex",
        flexDirection: "column",
        width: "70%",
        height: "50%",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    logoView: {
        width: Dimensions.get('window').width*0.44,
        height: Dimensions.get('window').width*0.44,
        borderRadius: Dimensions.get('window').width*0.44 / 2,
        backgroundColor: "rgba(40, 188, 181, 0.5)"
    },
    buttonContainer: {
        width: "100%",
        backgroundColor: "#28BCB5",
        elevation: 8,
        borderRadius: Dimensions.get('window').height*0.06 / 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: Dimensions.get('window').height*0.06
    }, 
    buttonText: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
    }
})

class SplashScreen extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
                <ImageBackground style={styles.bgImage} source={require("../Images/priscilla-du-preez-XkKCui44iM0-unsplash.jpg")}>
                    <View style={styles.controls}>
                        <View style={styles.logoView} ></View>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>I am looking for a job</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('EmployeeInitial')}>
                            <Text style={styles.buttonText}>I am looking for an employee</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

export default SplashScreen;

