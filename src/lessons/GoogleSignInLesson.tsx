import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {
    GoogleSignin,
    GoogleSigninButton,
    isErrorWithCode,
    isSuccessResponse,
    statusCodes,
  } from '@react-native-google-signin/google-signin';

const GoogleSignInLesson = () => {

    GoogleSignin.configure({
        webClientId: "988175397402-bhv3p2ioik1hp5q8i3ssqb5kummdr7ch.apps.googleusercontent.com"
    });


    const [userInfo , setUserInfo] = useState(null)

    const googleSignIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const response = await GoogleSignin.signIn();
          if (isSuccessResponse(response)) {
            console.log("Response = ", JSON.stringify(response.data, null, 3))
            setUserInfo(response.data);
          } else {
            // sign in was cancelled by user
          }
        } catch (error) {
          if (isErrorWithCode(error)) {
            switch (error.code) {
              case statusCodes.IN_PROGRESS:
                // operation (eg. sign in) already in progress
                break;
              case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                // Android only, play services not available or outdated
                break;
              default:
              // some other error happened
            }
          } else {
            // an error that's not related to google sign in occurred
          }
        }
      };

  return (
    <View style={{flex:1, backgroundColor:"black", justifyContent:"center", alignItems:"center"}}>
      <Text style={{fontSize: 40, color: "white"}}>Hello World</Text>
      <Button title='Sign in with Google' onPress={googleSignIn}/>
      <Text style={{fontSize: 30, color: "white"}}>{userInfo?.user?.name}</Text>
      <Text style={{fontSize: 30, color: "white"}}>{userInfo?.user?.email}</Text>
      <Image style={{ height: 100, width:100, borderRadius: 50 }} source={{uri: userInfo?.user?.photo}}/>
    </View>
  )
}

export default GoogleSignInLesson

const styles = StyleSheet.create({})