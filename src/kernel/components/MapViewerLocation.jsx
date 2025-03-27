import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import MapView, { Marker, Polyline } from "react-native-maps";
import { StyleSheet, View } from "react-native";

export default function MapViewerLocation() {
  const [location, setLocation] = useState(null);
  const [path, setPath] = useState([]);
  const [subscription, setSubscription] = useState(null);

  const startTracking = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permiso de ubicación denegado");
      return;
    }

    const sub = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (loc) => {
        setLocation(loc.coords);
        setLocation(newCoord);
        setPath((prevPath) => [...prevPath, newCoord]);
        console.log("loc.coords -> ", loc.coords);
      }
    );

    setSubscription(sub);
  };

  useEffect(() => {
    startTracking();

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, []);

  const handleMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    const newCoord = { latitude, longitude };
    setLocation(newCoord);
    setPath((prevPath) => [...prevPath, newCoord]);
  };

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.002,
            longitudeDelta: 0.002,
          }}
          zoomEnabled={true}
          scrollEnabled={true}
          zoomControlEnabled={true}
          style={{
            width: "95%",
            height: 384,
          }}
          onPress={handleMapPress}
        >
          {path.map((coord, index) => (
            <Marker
              key={index}
              coordinate={coord}
              title={`Punto ${index + 1 }`}
            />
          ))}

          {path.length > 1 && (
            <Polyline
              coordinates={path}
              strokeWidth={3}
              strokeColor="blue"
            />
          )}
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
