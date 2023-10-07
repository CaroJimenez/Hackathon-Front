import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import HomeScreen from '../screens/Home/HomeScreen';



const Stack =  createStackNavigator();

export default class AppNavigation extends Component {
  render() {
    return (
      <View>
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
        </NavigationContainer>
      </View>
    )
  }
}
