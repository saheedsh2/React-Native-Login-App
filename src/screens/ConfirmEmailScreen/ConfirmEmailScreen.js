import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButton from "../../components/SocialSignInButtons/SocialSignInButton";
import { useNavigation } from "@react-navigation/native";

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const navigation = useNavigation();

  const onSignInPressed = () => {
    console.warn("Sign In Press");
    navigation.navigate('SignIn');
  };

  const onResendCode = () => {
    console.warn("Resend Pressed");
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
        <Text style={styles.title}>Confirm Your Email</Text>

        <CustomInput
          style={styles.code}
          placeholder="Enter Confirmation Code"
          value={code}
          setValue={setCode}
        />

        <CustomButton
          text="Confirm"
          onPress={onSignInPressed}
          type="TERTIARY"
          fgColor="#ffff"
        />

        <CustomButton
          text="Back To Sign In"
          onPress={onSignInPressed}
          type="PRIMARY"
          fgColor="#ffff"
        />


        <CustomButton
          text="Resend Code"
          onPress={onResendCode}
          type="SECONDARY"
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

export default ConfirmEmailScreen;
