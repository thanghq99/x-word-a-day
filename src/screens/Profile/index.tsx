import useThemeContext from "@/hooks/useThemeContext";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Switch } from "react-native-paper";

export default function Profile() {
  const { theme, isThemeDark, toggleTheme } = useThemeContext();

  return (
    <ScrollView>
      <Text>Profile</Text>
      <Text>{JSON.stringify(theme.dark)}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>Dark mode</Text>
        <Switch value={isThemeDark} onValueChange={toggleTheme} />
      </View>
    </ScrollView>
  );
}
