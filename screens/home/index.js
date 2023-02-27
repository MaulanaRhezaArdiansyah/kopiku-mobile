import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import styles from "./style";
import commonStyle from "../../src/assets/styles/commonStyle";
import DisplayProduct from "./DisplayProduct";
export default function HomePage({ navigation }) {
  return (
    <SafeAreaView style={[commonStyle.bgBase, styles.container]}>
      <View style={[commonStyle.px40, styles.navbar]}>
        <View>
          <Pressable>
            <Image
              source={require("../../src/assets/images/hamburger-menu.png")}
            />
          </Pressable>
        </View>
        <View style={styles.navbarRight}>
          <Pressable>
            <Image
              style={commonStyle.mr20}
              source={require("../../src/assets/images/chat.png")}
            />
          </Pressable>
          <Pressable>
            <Image
              style={commonStyle.mr20}
              source={require("../../src/assets/images/shopping-cart.png")}
            />
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Profile Page")}>
            <View style={[styles.profilePic]}>
              <Image
                style={commonStyle.imageCircle}
                source={require("../../src/assets/images/rheza-profile-pic-2.png")}
              />
            </View>
          </Pressable>
        </View>
      </View>

      <View style={[commonStyle.px40, commonStyle.mt40]}>
        <Text style={styles.title}>A good coffee is{"\n"}a good day</Text>
      </View>

      <View style={commonStyle.px40}>
        <View style={[styles.searchBox]}>
          <Image
            style={styles.searchIcon}
            source={require("../../src/assets/images/search.png")}
          />
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>
      </View>

      <View style={styles.scrollTabCategory}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Pressable>
            <View style={[styles.tabTextBox1, commonStyle.pl40]}>
              <Text style={styles.tabText}>All You Need</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={[styles.tabTextBox]}>
              <Text style={styles.tabText}>Favorite</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.tabTextBox}>
              <Text style={styles.tabText}>Promo</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.tabTextBox}>
              <Text style={styles.tabText}>Coffee</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.tabTextBox}>
              <Text style={styles.tabText}>Non-coffee</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.tabTextBox}>
              <Text style={styles.tabText}>Foods</Text>
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.tabTextBox}>
              <Text style={styles.tabText}>Add-on</Text>
            </View>
          </Pressable>
        </ScrollView>
      </View>

      <View style={[commonStyle.px40, styles.categoryTitle]}>
        <Text style={[commonStyle.textBrown, styles.textCategoryTitle]}>
          Coffee
        </Text>
        <Pressable onPress={() => navigation.navigate("See More Page")}>
          <Text style={[commonStyle.textBrown, styles.seeMore]}>See more</Text>
        </Pressable>
      </View>

      <DisplayProduct />
    </SafeAreaView>
  );
}
