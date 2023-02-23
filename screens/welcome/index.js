import { Text, View } from "react-native";

import styling from "./style";
const styles = styling;
export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.textWelcome}>Coffee for Everyone</Text>
      <View style={styles.getStartButton}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Get started</Text>
      </View>
    </View>
  );
}
