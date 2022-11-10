import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButton from "../../components/SocialSignInButtons/SocialSignInButton";

const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  

  const [newPassword, setNewPassword] = useState("");

  const onSignInPressed = () => {
    console.warn("Sign In Press");
  };

  const onSubmitPressed = () => {
    console.warn("Submitted ");
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
          style={styles.code}
          placeholder="Enter Code"
          value={code}
          setValue={setCode}
        />

        <CustomInput
          placeholder="Enter Your New Password"
          value={newPassword}
          setValue={setNewPassword}
        />

        <CustomButton
          text="Send"
          onPress={onSubmitPressed}
          type="TERTIARY"
          fgColor="#ffff"
        />

        <CustomButton
          text="Back To Sign In"
          onPress={onSignInPressed}
          type="PRIMARY"
          fgColor="#ffff"
        />
   
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

export default NewPasswordScreen;
