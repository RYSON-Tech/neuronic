import React from "react";
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import Logo from '../images/logo.png';
import SplashImage from '../images/splashScreen.png'; // Renamed for clarity

export default function BootUp() {
    return (
        <View style={styles.container}>
            <ImageBackground source={SplashImage} style={styles.background}>
                <Image source={Logo} style={styles.logo} />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // Removed justifyContent and alignItems to allow ImageBackground to fill the entire container
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        width: '100%', // Ensure it covers the entire screen width
        height: '100%', // Ensure it covers the entire screen height
    },
    logo: {
        width: 200, // Adjust the size as needed
        height: 200,
    },
});
