// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View></View>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
//--------------------------------
import React from "react";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import Home from "./Home";
import Profile from "./Profile";

export type RootStackParamList = {
  Home: undefined;
  Profile: {
    age: number;
  };
  Details: {
    name: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type DetailProps = NativeStackScreenProps<RootStackParamList, "Details">;

const Details = ({ route }: DetailProps) => {
  console.log("--------------", route);
  return (
    <View>
      <Text>Details {route.params.name}</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
