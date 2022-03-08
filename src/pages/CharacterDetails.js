import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("MyStarWarsFavorites")}
          >
            <Text style={styles.buttonText}>Add to favorites</Text>
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
