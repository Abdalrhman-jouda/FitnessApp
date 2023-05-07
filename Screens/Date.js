import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import AA from '../Src/images/AA.png'
import Button from "../components/customeButton";
import { useNavigation } from '@react-navigation/native';


const Date =()=>{
  const Navigation = useNavigation();
   
   return(

    <View style={Styless.body}>
       <ImageBackground source={AA} style={Styless.background}>
        <Text style={Styless.text}>When do you want to start ?</Text>

        <View style={Styless.container}>
        <Text style={Styless.text1}>21 Dec 2023</Text>
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
    marginBottom : 100
  },
  text1: {
    fontSize: 16,
    fontWeight: 'bold',
    
  },
})


export default Date;
