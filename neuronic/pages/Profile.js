import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import  { useState } from 'react';

const Splash = ({navigation}) => {

  const handleSplash = () => {
    navigation.navigate('Login')
  }



  return (
    <View style = {styles.container}>
      <Text>Splash Screen</Text>
      <TouchableOpacity style = {styles.container} onPress={handleSplash}>
        <Text>To Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;


const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
})