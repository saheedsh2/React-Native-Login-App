import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  TextInput,
  Text
} from "react-native";
import React, { useState } from "react";
import Logo from "../../../assets/images/fmcklogo.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButton from "../../components/SocialSignInButtons/SocialSignInButton";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

const SigninScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();

  const onSignInPressed = (data) => {
    console.log(data);
    // validate
    // navigation.navigate("HomeScreen");
  };

  const onSignUpPressed = () => {
    console.warn("sign Up Pressed");
    navigation.navigate("SignUp");
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text>Sign In Screen</Text>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />


      <CustomInput
        placeholder="Username"
        name="username"
        control={control}
      />
      <CustomInput
        placeholder="Enter Password"
        name="password"
        control={control}
        secureTextEntry
      />
        <CustomButton
          text="Sign In"
          onPress={onSignInPressed}
          type="TERTIARY"
          fgColor="#ffff"
        />
        <CustomButton
          text="Sign Up"
          onPress={handleSubmit(onSignUpPressed)}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          text="Forgot Password"
          onPress={onForgotPasswordPressed}
          bgColor="#e3e3e3"
          fgColor="#363636"
        />

        <SocialSignInButton />
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
