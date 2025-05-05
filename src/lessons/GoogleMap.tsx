import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

const GoogleMap = () => {
    // 52.52670335517797, 13.2545529942644

  return (
    <MapView
        style={styles.mapView}
        provider={PROVIDER_GOOGLE}
        region={{
            latitude: 52.52670335517797, // North-South position
            longitude: 13.2545529942644, // East-West position
            latitudeDelta: .5, // Vertical Zoom
            longitudeDelta: .5 // Horizontal Zoom
        }}
    >
        <Marker 
            coordinate={{
                // lat 
                latitude: 52.52670335517797, // North-South position
                // lng
                longitude: 13.2545529942644, // East-West position
            }}
            title='My City'
            description='Here I Live'
        />

    <Marker 
            coordinate={{
                latitude: 52.5, // North-South position
                longitude: 13.3, // East-West position
            }}
            title='My Friend City'
            description='Here My Friend Lives'
        />
    </MapView>
  )
}

export default GoogleMap

const styles = StyleSheet.create({
    mapView:{
        flex:1
    }
})