
import React,{useState} from 'react';
import { View, Text, StyleSheet, TextInput, Image , ScrollView , FlatList, TouchableHighlight , TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'

const {Navigator,Screen} = createStackNavigator();

const Root= () =>(
        <Navigator> 
          <Screen name="Home" component={HomeScreen} />
          <Screen name="Profile" component={ProfileScreen}/>
        </Navigator>
)

const App = () =>{
 
  return(
      <NavigationContainer>
        <Navigator screenOptions={options =>{
            return {
              //headerLeft:null,
              title: options.route.name,
              headerStyle:{
                borderColor:"orange",
                borderWidth:3,
                backgroundColor:"orange"
              },
              headerTintColor:"white",
              headerTitleStyle:{
                fontSize:25,
                fontWeight:"bold"
              }
            }
            }}>
          <Screen name="Welcome" component={WelcomeScreen}/>
          <Screen name="Login" component={LoginScreen} />
          <Screen name="Root" component={Root} />
        </Navigator>
        
      </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor: "lightgrey"
  }
})

export default App;