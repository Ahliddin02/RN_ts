import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./App";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: HomeProps) {
  return (
    <View>
      <Text>Home Page</Text>
      <Button title="Profile" onPress={() => navigation.navigate("Profile", { age: 20 })} />
      {/* <Button title="Details" onPress={() => navigation.navigate("Details", { name: "hyhghjkjjhggfgfg" })} /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
