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
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");
  // const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const onPlus = () => {
    const sum = Number(input1) + Number(input2);
    setResult(sum);
    const text = `${input1} + ${input2} = ${sum}`;
    setData([{ key: text }, ...data]);
  };
  const onMinus = () => {
    const minus = Number(input1) - Number(input2);
    setResult(minus);
    const text = `${input1} - ${input2} = ${minus}`;
    setData([{ key: text }, ...data]);
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
      <View style={styles.grid4}>
        <Text>History:</Text>
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
