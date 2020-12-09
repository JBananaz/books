import React from 'react';
import {View,StyleSheet,Text} from "react-native";
import Title from './Title';

import {Ionicons} from '@expo/vector-icons';
import {prefix} from '../utils/constant';


const Rating = (props) => {
    const {container,star,rate,vote} = styles
    return(
        <View style={container}>
            <Ionicons style={star} name={`${prefix}-star`}/>
            <Text style={rate}>4.8</Text>
            <Text style={vote}>(2578)</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:148,
        height:27,
        alignItems:"center"
    },
    star:{
        color:"yellow"
    },
    rate:{
        color:"white",
        fontFamily:"Montserrat-Medium",
        fontSize:16,
        fontWeight:"500",
        lineHeight:16
    },
    vote:{
        color:"white",
        opacity:14,
        fontFamily:"Montserrat-Medium",
        fontSize:16,
        fontWeight:"500",
        lineHeight:16

    }
})

export default Rating;