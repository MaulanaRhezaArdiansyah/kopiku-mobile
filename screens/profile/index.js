import { Image, Pressable, Text, View } from "react-native";
import commonStyle from "../../src/assets/styles/commonStyle";

import styles from "./style";
export default function Profile({ navigation }) {
  return (
    <View style={[commonStyle.px40, styles.container]}>
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../src/assets/images/go-back-2.png")} />
        </Pressable>
        <Text style={styles.headerText}>My Profile</Text>
        <Text>{""}</Text>
      </View>
      <Pressable onPress={() => navigation.navigate("Edit Profile Page")}>
        <Text style={{ color: "#6A4029", fontSize: 20, fontWeight: "700" }}>
          Edit
        </Text>
      </Pressable>
    </View>
  );
}
