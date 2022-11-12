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
// import React from "react";
// import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";
// import { View, Text } from "react-native";
// import Home from "./Home";
// import Profile from "./Profile";

// export type RootStackParamList = {
//   Home: undefined;
//   Profile: {
//     age: number;
//   };
//   Details: {
//     name: string;
//   };
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();

// type DetailProps = NativeStackScreenProps<RootStackParamList, "Details">;

// const Details = ({ route }: DetailProps) => {
//   console.log("--------------", route);
//   return (
//     <View>
//       <Text>Details {route.params.name}</Text>
//     </View>
//   );
// };

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Profile" component={Profile} />
//         <Stack.Screen name="Details" component={Details} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

//-----------------------------------------------------
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";



export default function App() {
  const [name, setName] = useState()

  const save = async () => {
    try {
      await AsyncStorage.setItem("MyName", name);
    } catch (err) {
      alert(err)
    }

    // let user = {
    //   name:"Ahliddin",
    //   location:"TJ"
    // };
    // await AsyncStorage.setItem("MyName", JSON.stringify(user));
  };

  const load = async () => {
    try {
      let nameVar = await AsyncStorage.getItem("MyName");

      if(name !== null) {
        setName(nameVar);
      }

      // let jsonValue = await AsyncStorage.getItem("MyName")

      // if(jsonValue != null) {
      //   setName(JSON.parse(jsonValue))
      // }

    } catch (err) {
      alert(err);
    }
  };

  const remove = async () => {
    try {
      await AsyncStorage.removeItem("MyName")
    }catch (err) {
        alert(err)
    }finally {
      setName("")
    }
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <View>

      <Image source={{uri:"https://st.depositphotos.com/1757635/1758/i/450/depositphotos_17588905-stock-photo-welcome.jpg"}} style={{width:"100%", height:200, marginTop:64}} resizeMode="contain" />



      <Text style={styles.name}>What`s your name? </Text>

      <Text style={{height:30}}>{name}</Text>

      <TextInput style={styles.input} onChangeText={(text) => setName(text)} />

      <TouchableOpacity style={styles.button} onPress={() => save()}> 
        <Text style={{color:"white"}}>Save my name!</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.button} onPress={() => remove()}>
        <Text style={{color:"white"}}>Remove my name!</Text>
      </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backroundColor:"#fff",
    alignItems:"center",
  },
  name:{
    fontSize: 24,
    fontWeight:"300"
  },
  input:{
    borderWidth:1,
    borderColor:"#575DD9",
    alignSelf:"stretch",
    margin:32,
    height:64,
    borderRadius:6,
    paddingHorizontal:16,
    fontSize:24,
    fontWeight:"300"
  },
  button:{
      backgroundColor:"#575DD9",
      alignItems:"center",
      justifyContent:"center",
      alignSelf:"stretch",
      paddingVertical:12,
      paddingHorizontal:32,
      marginTop:32,
      marginHorizontal:32,
      borderRadius:6
  }
})