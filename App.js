
import React,{useEffect, useState} from 'react';
import { View, Text, StyleSheet,Platform, TextInput, Image , ScrollView , FlatList, TouchableHighlight , TouchableOpacity} from 'react-native';
import * as Font from 'expo-font';
import BookScreen from "./screens/BookScreen";

const App = () =>{
  const[loading,setLoading] = useState(true);
  
  const loadFont = async() => {
    try{
      await Font.loadAsync({
        'Gilroy-Bold': require('./assets/fonts/Gilroy-Bold.ttf'),
        'GT-Sectra-Fine-Regular': require('./assets/fonts/GT-Sectra-Fine-Regular.ttf'),
        'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
        'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf')
      });
      setLoading(false);
    }catch(e){
      console.error("erreur",e);
      
    }
  };
  useEffect(()=> {
        loadFont();
        
      },[])

  if (loading){
    return(
      <View style ={styles.container}>
        <Text> Loading...</Text>
      </View>
    )
  }
  return( 
      <BookScreen />
  );
};

const styles= StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:"lightgrey",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      marginTop:40
  }
});
export default App;