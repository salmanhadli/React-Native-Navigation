import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummyData";
import { useLayoutEffect } from "react";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

export default function MealDetailsScreen({ route, navigation }) {
  const { mealId } = route.params;

  const selectedMeal = MEALS.find((m) => m.id === mealId);

  function headerButtonPressHandler() {}

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={{ marginBottom: 20 }}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={{ color: "white" }}
      />
      <View style={{ width: "80%", alignSelf: "center" }}>
        <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal.ingredients} />
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal.steps} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
});
