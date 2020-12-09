import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Title = ({title,customStyle}) => {
    const {container, bookTitle} = styles
    return(
        <View style={container}>
        <Text style={[bookTitle,customStyle]}> {title} </Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    bookTitle:{
        color:"white",
        fontFamily:"Montserrat-Black",
        fontSize:30,
        fontWeight:'400',
        lineHeight:30,
        marginTop:40
    }
})

export default Title;