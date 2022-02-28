import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground, Button } from "react-native";
import { IconButton, Colors } from "react-native-paper";
import bgImage from "../images/BackgroundPhoto.jpg";

function CharacterDetails({ route, navigation }) {
  const { item } = route.params.data;

  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.favIcon}>
          <IconButton
            icon="star"
            style={styles.favIcon}
            color={Colors.white}
            size={40}
            onPress={() => console.log("Pressed")}
          />
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.text}>{console.log(item.name)}</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "black",
    marginVertical: 35,
    opacity: 0.8,
  },
  dataContainer: {
    flex: 1,
    // backgroundColor: "white",
    marginLeft: 15,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
  favIcon: {
    alignItems: "flex-end",
  },
});

export default CharacterDetails;
