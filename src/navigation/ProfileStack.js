import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Profile from "../screens/Profile/Profile";
const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
export default ProfileStack;
