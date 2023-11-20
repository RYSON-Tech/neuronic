import React, {useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import Main from '../components/main'; // Ensure correct path

const Splash = ({ navigation }) => {



  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
          <Main navigation = {navigation} />
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
