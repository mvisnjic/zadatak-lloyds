import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  BackHandler,
} from "react-native";

import bgImage from "../images/BackgroundPhoto.jpg";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text style={styles.welcomeMsg}>Welcome to</Text>
          <Text style={styles.welcomeMsg}>StarWars</Text>
          <Text style={styles.welcomeMsg}>Character</Text>
          <Text style={styles.welcomeMsg}>List</Text>
          <Text style={styles.welcomeMsg}>App</Text>
        </View>

        <View style={styles.containerButton}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("StarWarsCharacters")}
            //onPress={() => navigation.navigate("My StarWars Favorites")}
          >
            <Text style={styles.text}>Go to Character List</Text>
          </Pressable>

          <View style={styles.space} />

          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("MyStarWarsFavorites")}
            //onPress={() => navigation.navigate("My StarWars Favorites")}
          >
            <Text style={styles.text}>My Starwars Favorites</Text>
          </Pressable>

          <View style={styles.space} />

          <Pressable
            style={styles.button}
            onPress={() => BackHandler.exitApp()}
            //onPress={() => navigation.navigate("My StarWars Favorites")}
          >
            <Text style={styles.text}>Exit</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  welcome: {
    top: 80,
    alignItems: "center",
  },
  welcomeMsg: {
    fontSize: 35,
    color: "#fff",
  },
  containerButton: {
    marginTop: 130,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  space: {
    width: 25,
    height: 25,
  },
});
export default WelcomeScreen;
