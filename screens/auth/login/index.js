import { View, Text, Image, TextInput, Pressable } from "react-native";
import styling from "./style";
const styles = styling;
export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.heroLogin}>
        <Image source={require("../../../src/assets/images/login-image.png")} />
        <Text style={styles.textHeroLogin}>Log{"\n"}in</Text>
      </View>
      <View>
        <TextInput style={styles.inputForm}>Enter your email address</TextInput>
        <TextInput style={styles.inputForm}>Enter your password</TextInput>
      </View>
      <Pressable onPress={() => navigation.navigate("Forgot Password")}>
        <View
          style={{ display: "flex", justifyContent: "flex-start", width: 350 }}
        >
          <Text style={styles.textForgotPw}>Forgot password?</Text>
        </View>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Login Page")}>
        <View style={styles.loginButton}>
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>
            Login
          </Text>
        </View>
      </Pressable>
      <View>
        <Text style={{ color: "#9A9A9D", fontSize: 16 }}>or login with</Text>
      </View>
      <Pressable onPress={() => navigation.navigate("Login Page")}>
        <View style={styles.loginWithGoogle}>
          <Image
            style={{ marginRight: 10 }}
            source={require("../../../src/assets/images/google-login.png")}
          />
          <Text style={{ color: "#000", fontSize: 20, fontWeight: "600" }}>
            Login with Google
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
