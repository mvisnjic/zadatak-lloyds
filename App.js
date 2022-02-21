// In App.js in a new project

import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./src/pages/WelcomeScreen";
import CharacterList from "./src/pages/CharacterList";
import Favorite from "./src/pages/Favorite";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="StarWarsCharacters" component={CharacterList} />
        <Stack.Screen name="MyStarWarsFavorites" component={Favorite} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
