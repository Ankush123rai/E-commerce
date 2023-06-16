import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const Signup = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [badName, setBadName] = useState(false);
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);

  const validate = () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    setBadName(!nameRegex.test(name));
    setBadEmail(!emailRegex.test(email));
    setBadPassword(password.length === 0);
  
    if (nameRegex.test(name) && emailRegex.test(email) && password.length > 0) {
      storeData();
      setBadName(false);
      setBadEmail(false);
      setBadPassword(false);
    }
  
  };

  const storeData = async () => {
    await AsyncStorage.setItem('name', name);
    await AsyncStorage.setItem('email', email);

    if (email.length > 0 && password.length > 0) {
      await AsyncStorage.setItem('password', password);
      navigation.navigate('Login');
    }
  };

  

  





  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1 }}>
        <Image
          source={require('../Images/playstore.png')}
          style={{
            width: 60,
            height: 60,
            borderRadius: 50,
            alignSelf: 'center',
            marginTop: 80,
          }}
        />
        <Text
          style={{
            marginTop: 50,
            alignSelf: 'center',
            fontSize: 24,
            fontWeight: '600',
          }}
        >
          Create New Account
        </Text>
        <CustomTextInput
          placeholder="Enter Name"
          icon={require('../Images/user.png')}
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
        />
        <Text style={{ color: 'red', marginLeft: 30 }}>{badName && 'Please enter name'}</Text>
        <CustomTextInput
          placeholder="Enter Email Id"
          icon={require('../Images/mail.png')}
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <Text style={{ color: 'red', marginLeft: 30 }}>{badEmail && 'Please enter email'}</Text>
        <CustomTextInput
          placeholder="Enter Password"
          type="password"
          icon={require('../Images/lock.png')}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <Text style={{ color: 'red', marginLeft: 30 }}>
          {badPassword && 'Please enter password'}
        </Text>
        <CommonButton
          title="Signup" 
          bgColor="#000"
          textColor="#fff"
          onPress={() => {
            validate();
          }}
          
        />
        <Text
          style={{
            fontSize: 18,
            alignSelf: 'center',
            marginTop: 20,
            textDecorationLine: 'underline',
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          Already have an account?
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;
