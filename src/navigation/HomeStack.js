import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "../screens/Home/Main";
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Main} />
    </HomeStack.Navigator>
  );
}
export default HomeStackScreen;
