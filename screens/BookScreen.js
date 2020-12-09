
import React,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {Ionicons} from '@expo/vector-icons';

import Header from '../components/Header';
import Title from '../components/Title';
import Cover from '../screens/Cover';
import {prefix} from '../utils/constant';

const Book1 = require('../assets/images/book1.png')

const BookScreen =(props)=>{
    return(
        <View style={styles.container}>

            <Header />   
            <Cover image ={Book1}/> 
            <Title title="The Jungle Book" /> 
            <Title title="Anas Laamiri " customStyle={styles.subTitle} /> 
            
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
        
    },
    subTitle:{
        opacity:0.7,
        fontFamily:"Montserrat-Medium",
        fontSize:20,
        
    }
});


export default BookScreen;