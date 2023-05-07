import React from "react";
import { View } from "react-native/types";
import Date from "./Screens/Date";
import Times from "./Screens/Times";
import Workouts from './Screens/Workouts'
import Initial from './Screens/Initial'
import Signup from './Screens/Signup'
import Login from './Screens/Login'
import Name from './Screens/Name'
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack'




const app =()=>{
  //const Stack = createStackNavigator();
  return(
//<View style={{flex:1}}>
//<NavigationContainer>
        //<Stack.Navigator screenOptions={{headerShown: false}}>
        // <Stack.Screen name="Initial" component={Initial} />
         //<Stack.Screen name="Signup" component={Signup} />
        // <Stack.Screen name="Login" component={Login}/>
        // <Stack.Screen name="Name" component={Name}/>
        // <Stack.Screen name="Date" component={Date}/>
        // <Stack.Screen name="Workouts" component={Workouts}/>
        // <Stack.Screen name="Times" component={Times}/>
       /// </Stack.Navigator>
   //// </NavigationContainer>
//</View>
<Login/>
);
}

export default app;