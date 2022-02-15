import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function CharacterList() {
  return (
    <View style={styles.container}>
      <Text>People</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default CharacterList;
