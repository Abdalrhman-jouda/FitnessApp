import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import Button from "../components/customeButton";
import RR from '../Src/images/RR.png'
//import { useNavigation } from '@react-navigation/native';


const Times =()=>{
    //const Navigation = useNavigation();
   return(

    <View style={Styless.body}>
       <ImageBackground source={RR} style={Styless.background}>
        <Text style={Styless.text}>Your workouts start from 21-Dec-2023 for 3 times a week</Text>

        <Button />

       </ImageBackground>
    </View>
   );

};
const Styless = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    background: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
},

text : {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop : 550,
    marginBottom :50
},


})


export default Times;
