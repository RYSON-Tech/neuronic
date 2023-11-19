import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import  { useState } from 'react';

const Login = ({navigation}) => {

  const handleSplash = () => {
    navigation.navigate('Login')
  }



  return (
    <View style = {styles.container}>
      <Text>Login Screen</Text>
      <TouchableOpacity style = {styles.container} onPress={handleSplash}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;


const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
})