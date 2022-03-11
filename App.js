// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import WelcomeScreen from "./src/pages/WelcomeScreen";
import CharacterList from "./src/pages/CharacterList";
import Favorite from "./src/pages/Favorite";
import CharacterDetails from "./src/pages/CharacterDetails";
const Stack = createNativeStackNavigator();

function App(route) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StarWarsCharacters"
          component={CharacterList}
          options={{
            title: "Star Wars Characters",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="MyStarWarsFavorites"
          component={Favorite}
          options={{
            title: "My Star Wars Favorites",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="CharacterDetails"
          component={CharacterDetails}
          options={({ route }) => ({
            title: route.params.name,
            headerTitleAlign: "center",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
