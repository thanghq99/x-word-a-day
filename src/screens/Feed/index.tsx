import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function Feed({ navigation }) {
  return (
    <View style={style.container}>
      <Text>Feeded</Text>
      <Button mode="contained" onPress={() => navigation.navigate("Profile")}>
        Go to Profile
      </Button>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
