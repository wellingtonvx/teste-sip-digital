import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigator } from "../navigation/tabs";

import { Description } from "../screens/Description";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="TabNavigator" component={TabNavigator} />
      <Screen name="Description" component={Description} />
    </Navigator>
  );
}
