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

  const getPeople = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people/");
      const json = await response.json();
      setData(json.people);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImage}>
      <View style={styles.container}>
        <View style={styles.dataContainer}>
          <Text style={styles.name}>First</Text>
          <Text style={styles.surname}>Last:</Text>

          <View>
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => <Text>{item.name}</Text>}
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
    marginTop: 20,
    marginBottom: 20,
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    opacity: 0.75,
  },
  dataContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingVertical: 20,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
    opacity: 0.77,
  },
  name: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  surname: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});
export default CharacterList;
