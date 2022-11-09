import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

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

  const onTermsofUse = () => {
    console.warn('On Terms of Use Pressed');
  }

  const onPrivacy = () => {
    console.warn('On Privacy Press');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <View style={styles.root}>
        <Text style={styles.title}>Create An Account</Text>

        <CustomInput
          placeholder="Enter Username"
          value={username}
          setValue={setUsername}
          secureTextEntry={false}
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
          text="Sign In"
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
