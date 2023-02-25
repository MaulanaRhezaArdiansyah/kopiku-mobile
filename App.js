import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/welcome";
import HomePage from "./screens/home";
import WelcomeAuth from "./screens/auth/welcome-auth";
import Signup from "./screens/auth/signup";
import Login from "./screens/auth/login";
import ForgotPassword from "./screens/auth/forgot";
import ProductDetail from "./screens/productDetail";
import Cart from "./screens/cart";
import DeliveryMethod from "./screens/deliveryMethod";
import Payment from "./screens/payment";
import Profile from "./screens/profile";
import EditProfile from "./screens/editProfile";

const Stack = createNativeStackNavigator();
export default function App() {
  // const isLogged = true;
  // const isLogged = false;
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       {isLogged ? (
  //         <>
  //           <Stack.Screen
  //             name="Home Page"
  //             component={HomePage}
  //             options={{ headerShown: false }}
  //           />
  //           <Stack.Screen
  //             name="Product Detail Page"
  //             component={ProductDetail}
  //             options={{ title: "Product Detail Page", headerShown: false }}
  //           />
  //           <Stack.Screen
  //             name="Cart Page"
  //             component={Cart}
  //             options={{ title: "Cart Page", headerShown: false }}
  //           />
  //         </>
  //       ) : (
  //         <>
  //           <Stack.Screen
  //             name="Home Page"
  //             component={HomePage}
  //             options={{ headerShown: false }}
  //           />
  //           <Stack.Screen
  //             name="Product Detail Page"
  //             component={ProductDetail}
  //             options={{ title: "Product Detail Page", headerShown: false }}
  //           />
  //           <Stack.Screen
  //             name="Welcome Page"
  //             component={Welcome}
  //             options={{ title: "Welcome Page", headerShown: false }}
  //           />

  //           <Stack.Screen
  //             name="Welcome Auth"
  //             component={WelcomeAuth}
  //             options={{ title: "Welcome Auth Page", headerShown: false }}
  //           />
  //           <Stack.Screen
  //             name="Signup Page"
  //             component={Signup}
  //             options={{ title: "Signup Page", headerShown: false }}
  //           />
  //           <Stack.Screen
  //             name="Login Page"
  //             component={Login}
  //             options={{ title: "Login Page", headerShown: false }}
  //           />
  //           <Stack.Screen
  //             name="Forgot Password"
  //             component={ForgotPassword}
  //             options={{ title: "Forgot Password", headerShown: false }}
  //           />
  //         </>
  //       )}
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home Page"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Product Detail Page"
          component={ProductDetail}
          options={{ title: "Product Detail Page", headerShown: false }}
        />
        <Stack.Screen
          name="Cart Page"
          component={Cart}
          options={{ title: "Cart Page", headerShown: false }}
        />
        <Stack.Screen
          name="Welcome Page"
          component={Welcome}
          options={{ title: "Welcome Page", headerShown: false }}
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
        <Stack.Screen
          name="Delivery Method Page"
          component={DeliveryMethod}
          options={{ title: "Delivery Method Page", headerShown: false }}
        />
        <Stack.Screen
          name="Payment Page"
          component={Payment}
          options={{ title: "Payment Page", headerShown: false }}
        />
        <Stack.Screen
          name="Profile Page"
          component={Profile}
          options={{ title: "Profile Page", headerShown: false }}
        />
        <Stack.Screen
          name="Edit Profile Page"
          component={EditProfile}
          options={{ title: "Edit Profile Page", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
