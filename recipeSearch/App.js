import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Image
} from "react-native";

export default function App() {
  const [desc, setDesc] = useState("");
  const [recipe, setRecipe] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://www.recipepuppy.com/api/?i=${desc}`);
      const data = await response.json();
      setRecipe(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={{ marginTop: "10%", fontSize: 18, width: 200 }}
        value={desc}
        placeholder="Description"
        onChangeText={desc => setDesc(desc)}
      />

      <Button title="Find" onPress={fetchData} />
      <FlatList
        style={{ marginLeft: "5%" }}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: item.thumbnail }}
            />
          </View>
        )}
        data={recipe}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
