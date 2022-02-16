import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";

const image = { uri: "https://wallpapercave.com/wp/wp6175263.jpg" };

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text style={styles.welcomeMsg}>Welcome to</Text>
          <Text style={styles.welcomeMsg}>StarWars</Text>
          <Text style={styles.welcomeMsg}>Character</Text>
          <Text style={styles.welcomeMsg}>List</Text>
          <Text style={styles.welcomeMsg}>App</Text>
        </View>

        <View style={styles.containerbutton}>
          <Button
            title="Go to Character list"
            onPress={() => navigation.navigate("StarWars Characters")}
            style={styles.button}
          />
          <Button
            title="Go to favorites"
            onPress={() => navigation.navigate("My StarWars Favorites")}
            style={styles.button}
          />
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
  containerbutton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
export default WelcomeScreen;
