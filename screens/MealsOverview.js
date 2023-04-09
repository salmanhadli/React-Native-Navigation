import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummyData";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";
// import { useRoute } from "@react-navigation/native";

export default function MealsOverview({ route, navigation }) {
  const { params } = route;
  const { categoryId } = params;
  //   const route = useRoute();
  //   const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === categoryId);
    navigation.setOptions({
      title: categoryTitle?.title,
    });
  }, [categoryId, navigation]);

  function renderMealItem({ item }) {
    function onPress() {
      navigation.navigate("MealDetails", {
        mealId: item.id,
      });
    }
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      onPress,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
