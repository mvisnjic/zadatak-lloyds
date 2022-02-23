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
  const urls = [
    /* "https://swapi.dev/api/people/",
    "https://swapi.dev/api/people/?page=2",
    "https://swapi.dev/api/people/?page=3",
    "https://swapi.dev/api/people/?page=4",
    "https://swapi.dev/api/people/?page=5",
    "https://swapi.dev/api/people/?page=6",
    "https://swapi.dev/api/people/?page=7",
    "https://swapi.dev/api/people/?page=8",
    "https://swapi.dev/api/people/?page=9", */
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ];
  //console.log(data);

  /* useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []); */

  /* Promise.all(
    urls.map((url) => {
      fetch(url)
        .then((response) => response.text())
        .then((json) => setData(json))
        .catch((error) => console.log(error))
        .finally(() => {setLoading(false))
    })
  ); */

  const der = async (x) => {
    const f = await fetch(`https://swapi.dev/api/people/?page=${x}`);
    const j = await f.json();
    return j;
  };

  urls.forEach(async (url) => {
    console.log(await der(url));
  });

  Promise.all(
    urls.map((x) =>
      fetch(`https://swapi.dev/api/people/?page=${x}`).then((response) =>
        response.json()
      )
    )
  ).then((json) => {
    console.log(json);
    // setData(json);
    // console.log(data);
  });

  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImage}>
      <View style={styles.container}>
        <View style={styles.dataContainer}>
          <View>
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <FlatList
                data={data.results}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                  <View style={styles.detailsContainer}>
                    <Text style={styles.name}>Name: {item.name}</Text>
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
