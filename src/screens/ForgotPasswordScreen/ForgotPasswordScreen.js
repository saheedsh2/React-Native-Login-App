import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButton from "../../components/SocialSignInButtons/SocialSignInButton";

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState("");
  

  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const onSignInPressed = () => {
    console.warn("Sign In Press");
  };

  const onSendPressed = () => {
    console.warn("Send ");
  };



  const onTermsofUse = () => {
    console.warn('On Terms of Use Pressed');
  }

  const onPrivacy = () => {
    console.warn('On Privacy Press');
  }

  return (
    <>
      <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password</Text>

        <CustomInput
          style={{height:'20%'}}
          placeholder="Enter Username"
          value={username}
          setValue={setUsername}
        />

        <CustomButton
          text="Send"
          onPress={onSendPressed}
          type="TERTIARY"
          fgColor="#ffff"
        />

        <CustomButton
          text="Back To Sign In"
          onPress={onSignInPressed}
          type="PRIMARY"
          fgColor="#ffff"
        />

   
        <Text style={styles.text}>
          By Registering, You Confirm That You Accept Our{" "}
          <Text style={styles.link} onPress={onTermsofUse}>Terms of Use </Text>and{" "}
          <Text style={styles.privacy} onPress={onPrivacy}>Privacy Policy</Text>
        </Text>
   
           </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
    marginTop: 25,
  },
  logo: {
    width: "50%",
    maxWidth: 300,
    maxHeight: 200,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#851C60",
    margin: 10,
  },
  text:{
    color: 'gray',
    marginVertical: 10,

  },
  link:{
    color: '#FDB075'

  },
  privacy:{
    color: 'red'
  }, 

});

export default ForgotPasswordScreen;
