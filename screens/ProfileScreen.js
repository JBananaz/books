import React,{useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProfileScreen = (props)=> {
    
    useEffect(()=>{
        console.log("nom =",props.route.params.celibataire),
        console.log("framework =",props.route.params.frameworks)
    },[]);
    return(
        <View style={styles.container}>
            <Text> Profile Screen  </Text>
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

export default ProfileScreen