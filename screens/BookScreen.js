
import React,{useState} from 'react';
import { View, Text, StyleSheet ,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import {Ionicons} from '@expo/vector-icons';

import Header from '../components/Header';
import Title from '../components/Title';
import Rating from '../components/Rating';
import Action from '../components/Action';
import CoverList from '../components/CoverList';
import Cover from '../screens/Cover';
import {prefix} from '../utils/constant';

const Book1 = require('../assets/images/book1.png')
const images = [
    {imagesSrc: require('../assets/images/book1.png'), id:"1"},
    {imagesSrc: require('../assets/images/book2.png'), id:"2"},
    {imagesSrc: require('../assets/images/book3.png'), id:"3"},
    {imagesSrc: require('../assets/images/book4.png'), id:"4"},
    {imagesSrc: require('../assets/images/book5.png'), id:"5"},
    {imagesSrc: require('../assets/images/book6.png'), id:"6"},
    {imagesSrc: require('../assets/images/book4.png'), id:"7"},
    {imagesSrc: require('../assets/images/book3.png'), id:"8"},
    {imagesSrc: require('../assets/images/book2.png'), id:"9"},
    {imagesSrc: require('../assets/images/book1.png'), id:"10"}

]
const BookScreen =(props)=>{
    return(
        <ScrollView >
            <View style={styles.container}>

                <Header />   
                <Cover image ={Book1}/> 
                <Title title="The Jungle Book" /> 
                <Title title="Anas Laamiri " customStyle={styles.subTitle} /> 
                <Rating />
                <Action />
                <CoverList images={images} />
                
            </View>
        </ScrollView>
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