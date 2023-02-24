import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/welcome";
import HomeScreen from "./screens/home";
import WelcomeAuth from "./screens/auth/welcome-auth";
import Signup from "./screens/auth/signup";
import Login from "./screens/auth/login";
import ForgotPassword from "./screens/auth/forgot";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: "Welcome Page", headerShown: true }}
          // options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Welcome Auth"
          component={WelcomeAuth}
          options={{ title: "Welcome Auth Page", headerShown: true }}
        />
        <Stack.Screen
          name="Signup Page"
          component={Signup}
          options={{ title: "Signup Page", headerShown: true }}
        />
        <Stack.Screen
          name="Login Page"
          component={Login}
          options={{ title: "Login Page", headerShown: true }}
        />
        <Stack.Screen
          name="Forgot Password"
          component={ForgotPassword}
          options={{ title: "Forgot Password", headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
