import React, {useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import BootUp from '../components/bootUp'; // Ensure correct path

const Splash = ({ navigation }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 1500); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, [navigation]); // Dependency array to ensure effect is run once


  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
          <BootUp />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent', // Ensure no default background color is applied
  },
  container: {
    flex: 1, // Ensure it fills the screen
    backgroundColor: 'transparent', // Ensure no default background color is applied
  },
});

export default Splash;
