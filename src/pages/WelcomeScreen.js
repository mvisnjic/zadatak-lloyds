import { View, Text, Button, StyleSheet } from "react-native";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text>Home Screen</Text>
      </View>

      <View style={styles.button}>
        <Button
          title="Go to Character list"
          onPress={() => navigation.navigate("StarWars Characters")}
        />
        <Button
          title="Go to favorites"
          onPress={() => navigation.navigate("My StarWars Favorites")}
          color="#000"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  welcome: {
    top: 90,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default WelcomeScreen;
