import { View, Text } from "react-native";
import { Button } from "react-native-paper";

export default function Progress({ navigation }) {
  return (
    <View>
      <Text>Progress</Text>
      <Button mode="contained" onPress={() => navigation.navigate("Profile")}>
        Go to Profile
      </Button>
    </View>
  );
}
