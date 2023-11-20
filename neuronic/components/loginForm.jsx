import React from "react";
import { View, StyleSheet, Image, ImageBackground, TouchableOpacity, Text } from 'react-native';
import Logo from '../images/logo.png';
import SplashImage from '../images/splashScreen.png';

export default function LoginForm({navigation}) {

    const handleEmail = () => {
        console.log('Attempting to navigate to Home');
        navigation.navigate('Home');
    }
    

    return (
        <View style={styles.container}>
            <ImageBackground source={SplashImage} style={styles.background}>
                
                <Text style = {styles.title}>Login</Text>

                <Image source={Logo} style={styles.logo} />

                <TouchableOpacity style={styles.button}>
                    <ImageBackground
                        source={require('../images/facebookBTN.png')} // Ensure this path is correct
                        style={styles.buttonBackground}
                        imageStyle={styles.buttonImage} // Use this to apply styles directly to the image
                    >
                        {/* If the text is part of the image, you can remove the Text component */}
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <ImageBackground
                        source={require('../images/appleBTN.png')} // Ensure this path is correct
                        style={styles.buttonBackground}
                        imageStyle={styles.buttonImage} // Use this to apply styles directly to the image
                    >
                        {/* If the text is part of the image, you can remove the Text component */}
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <ImageBackground
                        source={require('../images/googleBTN.png')} // Ensure this path is correct
                        style={styles.buttonBackground}
                        imageStyle={styles.buttonImage} // Use this to apply styles directly to the image
                    >
                        {/* If the text is part of the image, you can remove the Text component */}
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleEmail}>
                    <Text style = {styles.email}>Sign up with Email</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        height: '100%',
    },
    logo: {
        width: 200,
        height: 200,
        marginVertical: 20, // Add some spacing below the logo
    },
    button: {
        width: 346, // Match the image width
        height: 100, // Match the image height
        marginVertical: 5, // Space between buttons
    },
    buttonBackground: {
        flex: 1, // Will fill the TouchableOpacity
        resizeMode: 'cover', // 'cover' will fill the space without resizing the image
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonImage: {
        borderRadius: 20, // Assuming this is the border radius from the image, adjust as necessary
    },
    email: {
        marginVertical: 10,
        color: 'white',
        textDecorationLine: 'underline'
    },
    title: {
        fontSize: 30,
        fontWeight :'500',
        color: 'white'
    }
});
