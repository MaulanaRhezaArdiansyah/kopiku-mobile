import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View } from "react-native";
import commonStyle from "../../src/assets/styles/commonStyle";
import styles from "./styles";

export default function Chatroom() {
  const navigation = useNavigation();
  return (
    <View style={[commonStyle.bgBase, styles.container]}>
      <View style={[commonStyle.px40, styles.navbar]}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../src/assets/images/go-back-2.png")} />
        </Pressable>
        <Text style={styles.headerText}>Chatroom</Text>
        <Text>{""}</Text>
      </View>
    </View>
  );
}
