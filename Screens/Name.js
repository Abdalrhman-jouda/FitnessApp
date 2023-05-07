import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground,TextInput} from "react-native";
import Button from "../components/customeButton";
import FF from '../Src/images/FF.png'
//import { useNavigation } from '@react-navigation/native';


const Name =()=>{
    //const Navigation = useNavigation();

    const MyComponent = () => {
        const [name, setName] = useState('');};

      
        const handleNameChange = (text) => {
          setName(text);
        };
   return(

    <View style={Styless.body}>
       <ImageBackground source={FF} style={Styless.background}>
        <Text style={Styless.text}>It's a greate you're here ! what do you</Text>
        <Text style={Styless.text1}> want to call you?!</Text>

        <View style={Styless.container1}>
      <TextInput
        style={Styless.input1}
        keyboardType="default"
        value={Name}
        onChangeText={handleNameChange}
        placeholder="Enter your name"
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
    marginTop : 20
  },
  text1: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  text1 : {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom : 30,

    
},
container1: {
    marginVertical: 10,
  },
  label1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input1: {
    borderWidth: 1,
    borderBottomColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 110,
    paddingVertical: 5,
    fontSize: 18,
  },
})


export default Name;
