import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/Auth/Register";
import Login from "../screens/Auth/Login";

const AuthStack = createNativeStackNavigator();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
}
export default AuthStackScreen;
