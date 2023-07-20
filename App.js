import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/Login';
import { Register } from "./src/screens/Register";
import { AddressRegister } from "./src/screens/AddressRegister";
import { ForgetPassword } from "./src/screens/ForgetPassword";
import { MainStore } from "./src/screens/MainStore";
import { OrderDelivery } from "./src/screens/Map/OrderDelivery";


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tracker"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tracker" component={OrderDelivery} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="AddressRegister" component={AddressRegister} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="MainStore" component={MainStore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
