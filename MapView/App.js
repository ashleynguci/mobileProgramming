import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

import MapView, { Marker } from "react-native-maps";
export default function App() {
  const [input, setInput] = useState("");
  const [region, setRegion] = useState({
    latitude: 60.200692,
    longitude: 24.934302,
    latitudeDelta: 0.0322,
    longitudeDelta: 0.0221
  });

  const APP_KEY = "WNT6bPfGBpV5Xp4GBMGJ5dXsiX90rIyG";
  const onShow = () => {
    fetch(
      `http://www.mapquestapi.com/geocoding/v1/batch?key=${APP_KEY}&location=${input}`
    )
      .then(response => response.json())
      .then(data => {
        setRegion({
          latitude: data.results[0].locations[0].displayLatLng.lat,
          longitude: data.results[0].locations[0].displayLatLng.lng,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0221
        });
      })

      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <MapView style={{ flex: 1 }} region={region}>
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude
          }}
          title="GOT YOU"
        />
      </MapView>
      <View>
        <TextInput
          style={{ width: 300, borderColor: "pink", borderWidth: 1 }}
          value={input}
          onChangeText={text => setInput(text)}
        />
      </View>
      <View>
        <Button onPress={onShow} title="SHOW" color="blue" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
