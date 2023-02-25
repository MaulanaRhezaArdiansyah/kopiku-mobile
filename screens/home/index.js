import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import styles from "./style";
import commonStyle from "../../src/assets/styles/commonStyle";
export default function HomePage({ navigation }) {
  const products = [
    { id: 1, productTitle: "Hazelnut Latte", productPrice: "20000" },
    { id: 2, productTitle: "Creamy Ice Latte", productPrice: "16000" },
    { id: 3, productTitle: "Cappucino", productPrice: "15000" },
    { id: 4, productTitle: "Mbahman Coffee", productPrice: "12000" },
  ];
  return (
    <View style={[commonStyle.bgBase, styles.container]}>
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

          <Pressable>
            <View style={[styles.profilePic]}>
              <Image
                style={commonStyle.imageCircle}
                source={require("../../src/assets/images/profile-pic.png")}
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
        <Pressable>
          <Text style={[commonStyle.textBrown, styles.seeMore]}>See more</Text>
        </Pressable>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={(p) => {
          return (
            <Pressable
              style={styles.cardWrapper}
              onPress={() => {
                navigation.navigate("Product Detail Page");
              }}
            >
              <Image
                source={require("../../src/assets/images/hazelnut-contoh.jpg")}
                style={styles.productImage}
              />
              <View style={styles.card}>
                <Text style={styles.productTitleText}>
                  {p.item.productTitle}
                </Text>
                <Text style={[commonStyle.textBrown, styles.productPriceText]}>
                  IDR. {p.item.productPrice}
                </Text>
              </View>
            </Pressable>
          );
        }}
      />
      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((p) => {
          return (
            <Pressable
              style={styles.cardWrapper}
              onPress={() => {
                navigation.navigate("Product Detail Page");
              }}
            >
              <Image
                source={require("../../src/assets/images/hazelnut-contoh.jpg")}
                style={styles.productImage}
              />
              <View style={styles.card}>
                <Text style={styles.productTitleText}>{p.productTitle}</Text>
                <Text style={[commonStyle.textBrown, styles.productPriceText]}>
                  IDR. {p.productPrice}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView> */}
    </View>
  );
}
