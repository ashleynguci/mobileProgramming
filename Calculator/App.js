import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";

export default function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");
  const onPlus = () => {
    setResult(Number(input1) + Number(input2));
  };
  const onMinus = () => {
    setResult(Number(input1) - Number(input2));
  };
  return (
    <View style={styles.container}>
      <View style={styles.grid1}>
        <Text>Result:{result}</Text>
        <TextInput
          style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => setInput1(text)}
          value={input1}
        />
        <TextInput
          style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => setInput2(text)}
          value={input2}
        />
        <View style={styles.grid3}>
          <Button onPress={onPlus} title="+" color="black" />
          <Button onPress={onMinus} title="-" color="black" />
        </View>
      </View>
      <View style={styles.grid2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  }
});
