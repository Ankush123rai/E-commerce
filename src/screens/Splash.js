import { View,Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {

    const navigation=useNavigation()

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Login')
        },1000)
    },[])

    const getData = async () => {
        const Semail = await AsyncStorage.getItem('email');
        if(Semail==null || Semail==''){
            navigation.navigate('Login')
        }else{
            navigation.navigate('Home')
        }
    }
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
        <Image source={require('../Images/playstore.png')} 
            style={{width:100,height:100, borderRadius:50}}
        />
    
    </View>
  )
}


export default Splash