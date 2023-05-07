import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import Button from "../components/customeButton";
import SS from '../Src/images/SS.png'
//import { useNavigation } from '@react-navigation/native';


const Times =()=>{
  //const Navigation = useNavigation();
   return(

    <View style={Styless.body}>
       <ImageBackground source={SS} style={Styless.background}>
        <Text style={Styless.text}>how many times a week do you wnat to be active?</Text>

        <View style={Styless.container}>
        <Text style={Styless.text1}>3 times a week</Text>
        </View>
        <Button/>

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
    marginTop : 500,

},
container: {
    backgroundColor: '#d3d3d3',
    padding: 10,
    borderRadius: 5,
    marginTop : 20,
    marginBottom : 20
  },
  text1: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})


export default Times;
