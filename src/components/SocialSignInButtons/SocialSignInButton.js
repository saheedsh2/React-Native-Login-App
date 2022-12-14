import { View, Text } from 'react-native'
import React from 'react'

import CustomButton from '../CustomButton'

const SocialSignInButton = () => {

    const onSignInFacebookPressed = () => {
        console.warn("Sign In With Facebook");
      };
    
      const onSignInGooglePressed = () => {
        console.warn("Sign In With Google");
      };


  return (
    <>
      <CustomButton
        text="Sign In With Facebook"
        onPress={onSignInFacebookPressed}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />


    </>
  )
}

export default SocialSignInButton