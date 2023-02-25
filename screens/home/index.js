import { Image, Pressable, Text, TextInput, View } from "react-native";
import styles from "./style";
import commonStyle from "../../src/assets/styles/commonStyle";
export default function HomePage() {
  return (
    <View style={styles.container}>
      <View style={[commonStyle.px20, styles.navbar]}>
        <View>
          <Image
            source={require("../../src/assets/images/hamburger-menu.png")}
          />
        </View>
        <View style={styles.navbarRight}>
          <Image
            style={commonStyle.mr20}
            source={require("../../src/assets/images/chat.png")}
          />
          <Image
            style={commonStyle.mr20}
            source={require("../../src/assets/images/shopping-cart.png")}
          />
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

      <View style={[commonStyle.px20, commonStyle.mt40]}>
        <Text style={styles.title}>A good coffee is{"\n"}a good day</Text>
      </View>

      <View style={commonStyle.px20}>
        <View style={[styles.searchBox]}>
          <Image
            style={styles.searchIcon}
            source={require("../../src/assets/images/search.png")}
          />
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>
      </View>
    </View>
  );
}
