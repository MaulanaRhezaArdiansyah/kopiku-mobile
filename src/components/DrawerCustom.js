import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Text, View } from "react-native";

export default function DrawerCustom(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ backgroundColor: "brown", height: 300, width: "100%" }}>
        <Text>Halo</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" />
      <DrawerItem label="Settings" />
    </DrawerContentScrollView>
  );
}
