import { Image, Pressable, View } from "react-native";
import styles from "./style";
import commonStyle from "../../src/assets/styles/commonStyle";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import axios from "axios";

export default function NavbarHome() {
  const navigation = useNavigation();
  //   useEffect(() => {
  //     axios
  //       .get(`http://192.168.1.11:3001/api/v1/users`)
  //       .then((result) => {
  //         console.log(result.data.data);
  //       })
  //       .catch((err) => {
  //         console.log(err.response.data.message);
  //       });
  //   }, []);
  return (
    <View style={[commonStyle.px40, styles.navbar]}>
      <View>
        <Pressable onPress={() => navigation.toggleDrawer()}>
          <Image
            source={require("../../src/assets/images/hamburger-menu.png")}
          />
        </Pressable>
      </View>
      <View style={styles.navbarRight}>
        <Pressable onPress={() => navigation.navigate("Chat Page")}>
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
  );
}
