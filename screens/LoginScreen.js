import React ,{useEffect} from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';

const LoginScreen = (props)=> {
    const goTo = () => {
        props.navigation.navigate("Root",{
            params:{
                celibataire:true,
                frameworks:["React","Angular","Meteor"]
            },
            screen:"Profile"
        })
    };
    return(
        <View style={styles.container}>
            <Text> Login Screen  </Text>
                <TouchableOpacity onPress={goTo}>
                    <View style={styles.button}>
                        <Text> Aller à Profile</Text>
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

export default LoginScreen