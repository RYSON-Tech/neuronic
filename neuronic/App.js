import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Splash from './pages/Splash'; // Default import
import Login from './pages/Login'; // Default import
import Home from './pages/Home'; // Default import
import Friends from './pages/Friends'; // Default import
import Shop from './pages/Shop'; // Default import
import Settings from './pages/Settings'; // Default import

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: true }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: true }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: true }} />
        <Stack.Screen name="Shop" component={Shop} options={{ headerShown: true }} />
        <Stack.Screen name="Friends" component={Friends} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
