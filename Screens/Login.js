import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground,TextInput } from "react-native";
import ZZ from '../Src/images/ZZ.png'
import Button from "../components/customeButton";
//import { useNavigation } from '@react-navigation/native';


const Date =()=>{
    //const Navigation = useNavigation();
   
   return(

    <View style={Styless.body}>
       <ImageBackground source={ZZ} style={Styless.background}>
       <Text style={Styless.text}>Welcom back !!</Text>

       <View style={Styless.container}>
      <TextInput
        style={Styless.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        //onChangeText={handleEmailChange}
        //value={email}
      />
      <TextInput
        style={Styless.input}
        placeholder="Password"
        secureTextEntry={true}
        //onChangeText={handlePasswordChange}
       // value={password}
      />
      
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
},text : {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop : 300,
    marginBottom :50
},
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom : 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 150,
    marginBottom: 20,
    
  },



})


export default Date;
