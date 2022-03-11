import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import bgImage from "../images/BackgroundPhoto.jpg";
import { useFocusEffect } from "@react-navigation/native";

function CharacterDetails({ route, navigation }) {
  const char = route.params;
  // console.log(char);

  const [fav, setFav] = useState(false);
  const [btnText, setBtnText] = useState("Add to favorites");

  function _checkFav() {
    if (!fav) {
      setFav(true);
      setBtnText("Added.");
    } else {
      setFav(false);
      setBtnText("Add to favorites");
    }
  }

  useEffect(() => {});

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
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              _checkFav();
            }}
          >
            <Text style={styles.buttonText}>
              {btnText} {console.log(fav)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    marginVertical: 35,
    opacity: 0.7,
    backgroundColor: "gray",
  },
  dataContainer: {
    flex: 1,
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
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 100,
    marginBottom: 5,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default CharacterDetails;
