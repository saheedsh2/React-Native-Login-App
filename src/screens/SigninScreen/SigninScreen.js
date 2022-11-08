import { View, Image, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import Logo from "../../../assets/images/fmcklogo.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const SigninScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("Sign In Press");
  };

  const onSignUpPressed = () => {
    console.warn("signUp Pressed");
  };

  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password Pressed");
  };

  const onSignInFacebookPressed = () => {
    console.warn("Sign In With Facebook");
  };

  const onSignInGooglePressed = () => {
    console.warn("Sign In With Google");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <CustomInput
        placeholder="Enter Email"
        value={username}
        setValue={setUsername}
        secureTextEntry={false}
      />
      <CustomInput
        placeholder="Enter Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />
      <CustomButton
        text="Sign In"
        onPress={onSignInPressed}
        type="TERTIARY"
      />
      <CustomButton
        text="Sign Up"
        onPress={onSignUpPressed}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Forgot Password"
        onPress={onForgotPasswordPressed}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
      <CustomButton
        text="Sign In With Facebook"
        onPress={onSignInFacebookPressed}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />

      <CustomButton
        text="Sign In With Google"
        onPress={onSignInGooglePressed}
        bgColor="#61b897"
        fgColor="#0e5c3e"
      />
    </View>
    </ScrollView>
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
});

export default SigninScreen;
