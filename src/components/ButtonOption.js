import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function ButtonOption({ name }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setIsSelected(!isSelected)}
    >
      <Text style={isSelected ? styles.selected : styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  text: {
    fontSize: 17,
    color: "#807a7a",
  },

  selected: {
    fontSize: 17,
    color: "#f87b07",
  },
});
