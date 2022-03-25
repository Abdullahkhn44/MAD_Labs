import React from "react";
import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View, Image} from 'react-native';


const flex=() =>{
  return(
     <View style={styless.container}>
       <View style={styless.pic}>
       <img  src={"https://raw.githubusercontent.com/KamranCS/ReactNative-MAD-/main/Class-Activities/ScreenDesign/Saly-1intro-image.png"}/>
       </View>
       <Text style={styless.text1}>
         Discover Your <br /> Own Dream House
        </Text>
    
        <Text style={styless.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet ligula ut ligula laoreet tempus. Proin vulputate diam sit amet ornare malesuada. Maecenas efficitur erat porttitor lectus tincidunt.</Text>

        <View style={styless.butn} >
        <View style={styless.sign}>
        <Button  title="Sign IN"></Button>
        </View>
      <View style={styless.reg}>
      <Button  title="Register"></Button>
      </View>
      </View>

    </View>
    
  );
};
const styless= StyleSheet.create({
  text1:{
    color:"black",
    fontWeight:"700",
    fontSize:"1.5rem",
    textAlign:'center'
  },
  container: {
    flex:1,
    padding:20,
    alignItems:"center",
    justifyContent:"center",

  },
  sign:{
    padding:15,
    borderRadius:90,
    backgroundColor:'pink'
  },
  reg:{
    padding:15
  },
  text2:{
    width:"300px",
    margin:20,
    textAlign:'center'
  },
  butn:{
    flexDirection:'row',
  },
  pic:{
    width:270,
    height:350 ,
    backgroundColor:'#D34DD2',
    borderRadius:50,
    
  }
})

export default flex;