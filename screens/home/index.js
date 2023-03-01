import { SafeAreaView, Text, View } from "react-native";
import styles from "./style";
import commonStyle from "../../src/assets/styles/commonStyle";
import DisplayProduct from "./DisplayProduct";
import { useNavigation } from "@react-navigation/native";
import NavbarHome from "./NavbarHome";
import { useState } from "react";
import SearchBox from "./SearchBox";
import ScrollTabCategory from "./ScrollTabCategory";
export default function HomePage() {
  const navigation = useNavigation();
  const [keyword, setKeyword] = useState("");
  const [refetch, setRefetch] = useState(false);
  const [category, setCategory] = useState("");
  return (
    <SafeAreaView style={[commonStyle.bgBase, styles.container]}>
      <NavbarHome />
      <View style={[commonStyle.px40, commonStyle.mt40]}>
        <Text style={styles.title}>A good coffee is{"\n"}a good day</Text>
      </View>
      <SearchBox setKeyword={setKeyword} />
      <ScrollTabCategory setCategory={setCategory} setRefetch={setRefetch} />
      {/* <View style={[commonStyle.px40, styles.categoryTitle]}>
        <Text style={[commonStyle.textBrown, styles.textCategoryTitle]}>
          Coffee
        </Text>
        <Pressable onPress={() => navigation.navigate("See More Page")}>
          <Text style={[commonStyle.textBrown, styles.seeMore]}>See more</Text>
        </Pressable>
      </View> */}

      <DisplayProduct keyword={keyword} category={category} />
    </SafeAreaView>
  );
}
