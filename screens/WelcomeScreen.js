import React from 'react';
import {View, Text, StyleSheet ,TouchableOpacity} from 'react-native';

const WelcomeScreen = (props)=> {
    const goTo =()=>{
        props.navigation.push("Login",{
            nom:"Julien",
            age:56
        });
    };
    return(
    <View style={styles.container}>
            <Text> Welcome Screen  </Text>
        <TouchableOpacity onPress={goTo}>
            <View style={styles.button}>
                <Text> Aller à Login</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "lightgrey"
    },
    button:{
        backgroundColor:"lightblue",
        borderColor:"darkblue",
        justifyContent:"center",
        alignItems:"center",
        borderWidth:2
    }
})

export default WelcomeScreen