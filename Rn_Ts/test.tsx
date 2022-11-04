import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, View } from "react-native";

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: {
    userId: number;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

<Stack.Navigator initialRouteName="Home">
  <Stack.Screen name="Home" component={() => <View />} />
  <Stack.Screen name="Profile" component={ProfileScreen} />
  <Stack.Screen name="Settings" component={() => <View />} />
</Stack.Navigator>;

type ProfileProps = NativeStackScreenProps<RootStackParamList, "Profile">;

// Every react-navigation screen receives route and navigation props
export default function ProfileScreen({ route, navigation }: ProfileProps) {
  return (
    <View>
      <Button
        title="Go to Settings"
        onPress={() => {
          navigation.navigate("Settings", {
            userId: 4,
          });
        }}
      />
    </View>
  );
}
// export default ProfileScreen;
