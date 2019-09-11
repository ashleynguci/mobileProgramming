import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList
} from "react-native";

export default function App() {
  const [input, setInput] = useState("");
  // const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const onAdd = () => {
    const text = input;
    setData([{ key: text }, ...data]);
    setInput("");
  };
  const onClear = () => {
    setData([]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.grid1}>
        <TextInput
          style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => setInput(text)}
          value={input}
        />

        <View style={styles.grid3}>
          <Button onPress={onAdd} title="Add" color="black" />
          <Button onPress={onClear} title="Clear" color="black" />
        </View>
      </View>
      <View style={styles.grid4}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  grid1: {
    flexDirection: "column",

    alignItems: "center",
    justifyContent: "center"
  },

  grid3: {
    backgroundColor: "#def",
    alignItems: "center",
    flexDirection: "row"
  },
  grid4: {
    backgroundColor: "#def",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start"
  }
});
