import { View, TextInput, StyleSheet } from "react-native";
import React from "react";

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {


  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={setValue}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "10%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    marginVertical: 12,
  },
  input: {},
});

export default CustomInput;
