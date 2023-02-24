import { Image, ImageBackground, Pressable, Text, View } from "react-native";

import styling from "./style";
const styles = styling;
export default function Welcome({ navigation }) {
  return (
    <View style={styling.container}>
      <Text style={styles.textWelcome}>Coffee for Everyone</Text>
      <View>
        <Image source={require("../../src/assets/images/welcome-bg-2.png")} />
      </View>
      <Pressable onPress={() => navigation.navigate("Welcome Auth")}>
        <View style={styles.getStartButton}>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>
            Get started
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
