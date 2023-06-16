import { View, Text, Image, ActivityIndicator, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../common/CustomTextInput";
import CommonButton from "../common/CommonButton";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (email.length === 0) {
      setBadEmail(true);
    } else {
      setBadEmail(false);
    }

    if (password.length === 0) {
      setBadPassword(true);
    } 
    else {
      setBadPassword(false);
    } 
  
    if (email.length > 0 && password.length > 0) {
      setTimeout(()=>{
        setBadPassword(false);
        setLoading(true);
        getData();
      },2000)
    }
  };

  const getData = async () => {
    const Semail = await AsyncStorage.getItem("email");
    const Spassword = await AsyncStorage.getItem("password");
    setLoading(false);

    if (email === Semail && password === Spassword) {
      navigation.navigate("Home");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../Images/playstore.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Login</Text>
      <Text style={styles.errorText}>{error}</Text>

      <CustomTextInput
        placeholder="Enter Email Id"
        icon={require("../Images/mail.png")}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={styles.errorText}>{badEmail ? "Enter Email Id" : ""}</Text>

      <CustomTextInput
        placeholder="Enter Password"
        type="password"
        icon={require("../Images/lock.png")}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Text style={styles.errorText}>
        {badPassword ? "Enter Password" : ""}
      </Text>

      <CommonButton
        title="Login"
        bgColor="#000"
        textColor="#fff"
        onPress={validate}
      />
      <Text
        style={styles.createAccountText}
        onPress={() => navigation.navigate("Signup")}
      >
        Create new account?
      </Text>

      <Modal
        animationType="fade"
        transparent={true}
        visible={loading}
        onRequestClose={() => {}}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 100,
  },
  title: {
    marginTop: 50,
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "600",
  },
  errorText: {
    color: "red",
    alignSelf: "flex-start",
    marginLeft: 40,
    fontSize: 15,
  },
  createAccountText: {
    fontSize: 18,
    alignSelf: "center",
    marginTop: 20,
    textDecorationLine: "underline",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#000",
    padding: 20,
    borderRadius: 10,
  },
});

export default Login;
