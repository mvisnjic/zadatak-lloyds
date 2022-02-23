import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import bgImage from "../images/BackgroundPhoto.jpg";

function CharacterList() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const urls = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const der = async (x) => {
    const f = await fetch(`https://swapi.dev/api/people/?page=${x}`);
    const j = await f.json();
    return j;
  };

  urls.forEach(async (url) => {
    //console.log(await der(url));
  });

  const controller = new AbortController();
  const { signal } = controller;

  Promise.all(
    urls.map((x) =>
      fetch(`https://swapi.dev/api/people/?page=${x}`, { signal }).then(
        (response) => response.json()
      )
    )
  )
    .then((json) => {
      setData(json);
      setLoading(false);
      console.log(json);
    })
    .catch((error) => console.log(error));

  setTimeout(() => controller.abort(), 2500);
  console.log(data);
  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImage}>
      <View style={styles.container}>
        <View style={styles.dataContainer}>
          <View>
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <FlatList
                data={data[0].results}
                //keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                  <View style={styles.detailsContainer}>
                    <Text style={styles.name}>
                      Name: {item.name} {item.height}
                    </Text>
                  </View>
                )}
              />
            )}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
  },
  detailsContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingVertical: 20,
    elevation: 3,
    borderRadius: 4,
    backgroundColor: "gray",
    marginTop: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    opacity: 0.8,
  },
  name: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});
export default CharacterList;
