import { Image, Pressable, Text, View } from "react-native";
import commonStyle from "../../src/assets/styles/commonStyle";

import styles from "./style";
export default function EditProfile({ navigation }) {
  return (
    <View style={[commonStyle.px40, styles.container]}>
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../src/assets/images/go-back-2.png")} />
        </Pressable>
        <Text style={styles.headerText}>My Profile</Text>
        <Text>{""}</Text>
      </View>
      <Pressable
        style={[commonStyle.brownButton]}
        onPress={() => navigation.navigate("Profile Page")}
      >
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
          Save and Update
        </Text>
      </Pressable>
    </View>
  );
}
