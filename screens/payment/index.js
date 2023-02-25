import { Image, Pressable, Text, View } from "react-native";
import commonStyle from "../../src/assets/styles/commonStyle";

import styles from "./style";
export default function Payment({ navigation }) {
  return (
    <View style={[commonStyle.px40, styles.container]}>
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../src/assets/images/go-back-2.png")} />
        </Pressable>
        <Text style={styles.headerText}>Payment</Text>
        <Text>{""}</Text>
      </View>
      <Pressable
        style={[commonStyle.brownButton]}
        onPress={() => navigation.navigate("Home Page")}
      >
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
          Pay Now
        </Text>
      </Pressable>
    </View>
  );
}
