import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CustomButton</Text>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'green',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5
    },
    text:{
        fontWeight: 'bold',
        color: 'white'
    }

})