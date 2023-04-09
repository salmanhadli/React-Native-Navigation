import { FlatList, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummyData";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem({ item }) {
    function onPressCategory() {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
      });
    }
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={onPressCategory}
      />
    );
  }
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}
