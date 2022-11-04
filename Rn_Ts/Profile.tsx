import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { RootStackParamList } from "./App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

type ProfileProps = NativeStackScreenProps<RootStackParamList, "Profile">;

function MainScreen() {
  return (
    <View>
      <Text>Main Screen !</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View>
      <Text>Settings Screen !</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
export default function Profile({ navigation, route }: ProfileProps) {
  return (
    <>
      <View>
        <Text>Profile, {route.params.age}</Text>
        <Button title="Details" onPress={() => navigation.navigate("Details", { name: "hyhghjkjjhggfgfg" })} />
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={MainScreen} />
        <Tab.Screen name="Setting" component={SettingsScreen} />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({});
