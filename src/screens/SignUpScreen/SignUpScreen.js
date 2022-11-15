import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButton from "../../components/SocialSignInButtons/SocialSignInButton";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const { height } = useWindowDimensions();

  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };

  const onSignUpPressed = () => {
    console.warn("signUp Pressed");
    navigation.navigate("ConfirmEmail");
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
        <Text style={styles.title}>Create An Account</Text>

        <CustomInput
          placeholder="Enter Username"
          value={username}
          setValue={setUsername}
          secureTextEntry={false}
          style={{height: height * 0.3}}
        />

        <CustomInput
          placeholder="Enter Email"
          value={email}
          setValue={setEmail}
          secureTextEntry={false}
        />
        <CustomInput
          placeholder="Enter Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />

        <CustomButton
          text="Have an Account? Sign In"
          onPress={onSignInPressed}
          type="TERTIARY"
          fgColor="#ffff"
        />
        <CustomButton
          text="Register"
          onPress={onSignUpPressed}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
   
        <Text style={styles.text}>
          By Registering, You Confirm That You Accept Our{" "}
          <Text style={styles.link} onPress={onTermsofUse}>Terms of Use </Text>and{" "}
          <Text style={styles.privacy} onPress={onPrivacy}>Privacy Policy</Text>
        </Text>

        <SocialSignInButton />
   
           </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
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
  }
});

export default SignUpScreen;
