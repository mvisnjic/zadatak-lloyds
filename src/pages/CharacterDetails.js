import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import bgImage from "../images/BackgroundPhoto.jpg";

function CharacterDetails({ navigation }) {
  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.text}>Ime</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    opacity: 0.85,
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default CharacterDetails;
