import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";

import icons from "../utils/icons";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#e6ba40",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.home}
              resizeMode="contain"
              style={{
                width: focused ? 40 : 30,
                height: focused ? 40 : 30,
                tintColor: focused ? "#4d00db" : "#fff",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.search}
              resizeMode="contain"
              style={{
                width: focused ? 35 : 30,
                height: focused ? 35 : 30,
                tintColor: focused ? "#4d00db" : "#fff",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.camera}
              resizeMode="contain"
              style={{
                width: focused ? 40 : 30,
                height: focused ? 40 : 30,
                tintColor: focused ? "#4d00db" : "#fff",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.bag}
              resizeMode="contain"
              style={{
                width: focused ? 40 : 30,
                height: focused ? 40 : 30,
                tintColor: focused ? "#4d00db" : "#fff",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.user}
              resizeMode="contain"
              style={{
                width: focused ? 40 : 30,
                height: focused ? 40 : 30,
                tintColor: focused ? "#4d00db" : "#fff",
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
