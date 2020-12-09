
import React,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {Ionicons} from '@expo/vector-icons';

import Header from '../components/Header';
import {prefix} from '../utils/constant';

const BookScreen =(props)=>{
    return(
        <View style={styles.container}>

            <Header />          
            
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        backgroundColor:"black",
        marginTop:Constants.statusBarHeight,
        
    }
});


export default BookScreen;