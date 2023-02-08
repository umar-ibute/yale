import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Friends from '../screens/Friends';
import Create from '../screens/Create';
import Profile from '../screens/Profile';
import Decks from '../screens/Decks';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }} >
      <Tab.Screen name="Home" component={Home} options={{headerShown:false,tabBarIcon:({color, size})=>(<Image source={require('../assets/Icons/icons8-home-48.png')} style={styles.tabIcon}/>)}} />
      <Tab.Screen name="Friends" component={Friends} options={{
        tabBarIcon:({color, size})=>(<Image source={require('../assets/Icons/community.png')} style={styles.tabIcon}/>)
      }} />
      <Tab.Screen name="Create" component={Create} options={{
        tabBarIcon:({color, size})=>(<Image source={require('../assets/Icons/plus.png')} style={styles.tabIcon}/>)
      }} />
      
      <Tab.Screen name="Decks" component={Decks} options={{
        tabBarIcon:({color, size})=>(<Image source={require('../assets/Icons/icons8-folder-48.png')} style={styles.tabIcon}/>)
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon:({color, size})=>(<Image source={require('../assets/Icons/user.png')} style={styles.tabIcon}/>)
      }} />
    </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomNavigator
const styles=StyleSheet.create({
  tabIcon:{resizeMode:'stretch', width:20, height:20}
})