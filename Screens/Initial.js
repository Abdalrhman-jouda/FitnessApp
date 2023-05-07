import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import Button from "../components/customeButton";
import RR from '../Src/images/RR.png'
import EEEE from '../Src/images/EEEE.png'
import DD from '../Src/images/DD.png'
//import { useNavigation } from '@react-navigation/native';
import { RFValue } from "react-native-responsive-fontsize";




const Times =()=>{
    //const Navigation = useNavigation();

    //const onInitialPress = () => {
     //   Navigation.navigate('Signup');

   // }
   return(

    <View style={Styless.body}>
       <ImageBackground source={DD} style={Styless.background}>
       <Image source={EEEE}
                        style={Styless.logo}/>
        <Text style={Styless.text}>Make  yourself  Stronger </Text>
        <Text style={Styless.text2}> than your excuses</Text>
       <Button
       // onPress={onInitialPress}
        />
       <Text style={Styless.text3}>Or login</Text>
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
    marginTop : -10

},
text2 : {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop : 5,
    marginBottom : 350
},
text3 : {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom : 70
    
},
logo :{
    width: RFValue(130),
    height: RFValue(130),
    marginTop: RFValue(50),
    marginBottom: RFValue(20),
}


})


export default Times;
