import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TelaJavaScript from "./components/TelaJavaScript";
import TelaReact from "./components/TelaReact";
import TelaNode from "./components/TelaNode";

const MenuNav = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MenuNav.Navigator>
        <MenuNav.Screen name="Java Script" component={TelaJavaScript} />
        <MenuNav.Screen name="Node" component={TelaNode} />
        <MenuNav.Screen name="React" component={TelaReact} />
      </MenuNav.Navigator>
    </NavigationContainer>
  );
}

