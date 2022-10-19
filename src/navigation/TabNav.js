import { Fragment, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./HomeStack";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    <Fragment>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Главная",
            tabBarLabelStyle: { color: "black" },
            tabBarActiveTintColor: "orange",
            tabBarInactiveTintColor: "gray",
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: "Профиль",
            tabBarLabelStyle: { color: "black" },
            tabBarActiveTintColor: "orange",
            tabBarInactiveTintColor: "gray",
          }}
        />
      </Tab.Navigator>
    </Fragment>
  );
}

export default TabNav;
