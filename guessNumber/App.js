import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("Guess a number between 1-100");
  const [count, setCount] = useState(0);

  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const onGuess = () => {
    if (Number(input) > randomNumber) {
      setResult(`You guess ${input} is too high.`);
      setCount(count + 1);
    } else if (Number(input) < randomNumber) {
      setResult(`You guess ${input} is too low.`);
      setCount(count + 1);
    } else {
      setResult(`You guess the number in ${count} guesses`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.grid1}>
        <Text>{result}</Text>
        <TextInput
          style={{ width: 100, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => setInput(text)}
          value={input}
        />

        <View style={styles.grid3}>
          <Button onPress={onGuess} title="MAKE GUESS" color="black" />
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
