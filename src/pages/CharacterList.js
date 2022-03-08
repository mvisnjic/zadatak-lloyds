import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import bgImage from "../images/BackgroundPhoto.jpg";
const axios = require("axios");
/* function to find all people. founded on github: https://gist.github.com/go-diego/3771c6917d9261a428d80fa6c3d904ff */
function getAllStarwarsPeople() {
  let people = [];
  // first page
  return axios("https://swapi.dev/api/people/")
    .then((response) => {
      // collect people from first page
      people = response.data.results;
      return response.data.count;
    })
    .then((count) => {
      // exclude the first request
      const numberOfPagesLeft = Math.ceil((count - 1) / 10);
      let promises = [];
      // start at 2 as you already queried the first page
      for (let i = 2; i <= numberOfPagesLeft; i++) {
        promises.push(axios(`https://swapi.dev/api/people?page=${i}`));
      }
      return Promise.all(promises);
    })
    .then((response) => {
      //get the rest records - pages 2 through n.
      people = response.reduce(
        (acc, data) => [...acc, ...data.data.results],
        people
      );
      return people;
    })
    .catch((error) => console.log("Properly handle your exception here"));
}

function CharacterList({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    let abortController = new AbortController();

    (async () => {
      setData(await getAllStarwarsPeople());
      setLoading(false);
      abortController.abort();
    })();
  }, []);
  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImage}>
      <View style={styles.container}>
        <View style={styles.container}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={data}
              keyExtractor={(item) => item.name}
              initialNumToRender={1}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.detailsContainer}
                  onPress={() => navigation.navigate("CharacterDetails", item)}
                >
                  <View style={styles.detailsContainer}>
                    <Text style={styles.name}>Name: {item.name}</Text>
                  </View>
                  <View style={styles.space} />
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
  },
  detailsContainer: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 4,
    backgroundColor: "gray",
    marginTop: 5,
    marginHorizontal: 4,
    opacity: 0.8,
  },
  name: {
    fontSize: 24,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  space: {
    marginBottom: 10,
  },
});
export default CharacterList;
