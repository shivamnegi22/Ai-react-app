import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const CameraGallery = () => {

    const [selectedImageURI, setSelectedImageURI] = useState("")

    const openGallery = async() => {
        try {
            const result = await launchImageLibrary({mediaType: "photo"});
            console.log(result)
            setSelectedImageURI(result.assets[0]?.uri)

        } catch (error) {
            console.log("Error happen opening Gallery ", error)
        }
    }

    const openCamera = async() => {
        try {
            const result = await launchCamera({mediaType: "photo"});
            console.log(result)
            setSelectedImageURI(result.assets[0]?.uri)

        } catch (error) {
            console.log("Error happen opening Camera ", error)
        }
    }


  return (
    <View style={{flex: 1, justifyContent:"center", alignItems:"center", backgroundColor:"black"}}>
      <Text style={{fontSize: 30, color:"white"}} onPress={openGallery}>Open Gallery</Text>

      <Text style={{fontSize: 30, color:"white"}} onPress={openCamera}>Open Camera</Text>
      <Image source={{uri: selectedImageURI}} style={{height: 250, width: 250, borderRadius: 8}}/>
    </View>
  )
}

export default CameraGallery

const styles = StyleSheet.create({})