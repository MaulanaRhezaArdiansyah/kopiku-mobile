import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/welcome";
import HomePage from "./screens/home";
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
          options={{ title: "Welcome Page", headerShown: false }}
          // options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="Home Page"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome Auth"
          component={WelcomeAuth}
          options={{ title: "Welcome Auth Page", headerShown: false }}
        />
        <Stack.Screen
          name="Signup Page"
          component={Signup}
          options={{ title: "Signup Page", headerShown: false }}
        />
        <Stack.Screen
          name="Login Page"
          component={Login}
          options={{ title: "Login Page", headerShown: false }}
        />
        <Stack.Screen
          name="Forgot Password"
          component={ForgotPassword}
          options={{ title: "Forgot Password", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
