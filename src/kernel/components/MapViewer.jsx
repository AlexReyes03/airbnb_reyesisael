import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function MapViewer(props) {
  const {direction, latitudeDelta, longitudeDelta, width, height, name, description} = props
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
        latitude: direction.latitude || 18.850364609549384,
        longitude: direction.longitude || -99.20073550540779,
        latitudeDelta: latitudeDelta || 0.005,
        longitudeDelta: longitudeDelta || 0.005,
      }}
      zoomEnabled={true}
      scrollEnabled={true}
      zoomControlEnabled={true}
      style={{width: width || "80%", height: height || 256, alignSelf: 'center'}}
      >
        <Marker 
          key={direction.latitude}
          coordinate={{latitude: direction.latitude, longitude: direction.longitude}}
          title={name}
          description={description}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
