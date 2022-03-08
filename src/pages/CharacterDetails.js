import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Button } from "react-native";
import { IconButton, Colors } from "react-native-paper";
import bgImage from "../images/BackgroundPhoto.jpg";

function CharacterDetails({ route, navigation }) {
  const char = route.params;

  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.dataContainer}>
          <Text style={styles.text}>Name: {char.name}</Text>
          <Text style={styles.text}>Height: {char.height}</Text>
          <Text style={styles.text}>Mass: {char.mass}</Text>
          <Text style={styles.text}>Hair color: {char.hair_color}</Text>
          <Text style={styles.text}>Skin color: {char.skin_color}</Text>
          <Text style={styles.text}>Eye Color: {char.eye_color}</Text>
          <Text style={styles.text}>Birth year: {char.birth_year}</Text>
          <Text style={styles.text}>Gender: {char.gender}</Text>
        </View>
        <View style={styles.favIconContainer}>
          <IconButton
            icon="star"
            color={Colors.white}
            size={40}
            onPress={() => console.log("Pressed")}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "flex-start",
    backgroundColor: "black",
    marginVertical: 35,
    opacity: 0.7,
    backgroundColor: "gray",
    flexDirection: "row",
  },
  dataContainer: {
    flex: 1,
    // backgroundColor: "white",
    marginLeft: 15,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  favIconContainer: {
    padding: 10,
  },
});

export default CharacterDetails;
