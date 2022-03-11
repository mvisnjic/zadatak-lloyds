import * as React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Flatlist,
} from "react-native";
import bgImage from "../images/BackgroundPhoto.jpg";

function Favorite(route) {
  const test = route.params;
  console.log(test);
  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text></Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    opacity: 0.75,
  },
});

export default Favorite;
