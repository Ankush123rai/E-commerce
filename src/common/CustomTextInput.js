import { View, Text,Image } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";


const CustomTextInput = ({ value, onChangeText, placeholder, icon, type , keyboardType}) => {

  const [text,setText]=useState(value)

  return (
    <View
      style={{
        width: "80%",
        height: 50,
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 30,
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:20,
        paddingRight:20,
      }}
    >
        <Image source={icon} style={{width:25, height:25}}/>
        <TextInput 
            placeholder={placeholder} 
            secureTextEntry={type? true :false}
            style={{marginLeft:10, outlineStyle:'none', width:'100%'}}
            value={text}
            keyboardType={keyboardType? keyboardType : 'default'}
            onChangeText={(text)=>{
                setText(text)
                onChangeText(text)
            }}
        />
    </View>
  );
};

export default CustomTextInput;
