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

const Stack = createNativeStackNavigator();
// CARA 1
// export default function App() {
//   // kedepannya, pengondisian ini diambil dari localStorage / asyncStorage
//   const isLogged = true;
//   const loggedCheck = () => {
//     if (isLogged) {
//       return "Home Page";
//     } else {
//       return "Welcome Page";
//     }
//   };

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName={loggedCheck()}>
//         <Stack.Screen
//           name="Welcome Page"
//           component={Welcome}
//           options={{ title: "Welcome Page", headerShown: false }}
//           // options={({ route }) => ({ title: route.params.name })}
//         />
//         <Stack.Screen
//           name="Home Page"
//           component={HomePage}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Welcome Auth"
//           component={WelcomeAuth}
//           options={{ title: "Welcome Auth Page", headerShown: false }}
//         />
//         <Stack.Screen
//           name="Signup Page"
//           component={Signup}
//           options={{ title: "Signup Page", headerShown: false }}
//         />
//         <Stack.Screen
//           name="Login Page"
//           component={Login}
//           options={{ title: "Login Page", headerShown: false }}
//         />
//         <Stack.Screen
//           name="Forgot Password"
//           component={ForgotPassword}
//           options={{ title: "Forgot Password", headerShown: false }}
//         />
//         <Stack.Screen
//           name="Product Detail Page"
//           component={ProductDetail}
//           options={{ title: "Product Detail Page", headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// CARA 2
export default function App() {
  const isLogged = true;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogged ? (
          <>
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
          </>
        ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
