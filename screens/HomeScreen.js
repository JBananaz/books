import { NativeModules } from "react-native";
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const HomeScreen = (props)=> {
    
    return(
        <View style={styles.container}>
            <Text> Home Screen  </Text>
        </View>
        )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "lightgrey"
    }
})

export default HomeScreen