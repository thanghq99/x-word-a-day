import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { PaperProvider } from "react-native-paper";

import Feed from "@screen/Feed";
import Profile from "@/screens/Profile";
import Progress from "@/screens/Progress";
import CustomAppBar from "@/components/CustomAppBar";
import useThemeContext, { themes } from "@/hooks/useThemeContext";
import { PreferencesContextProvider } from "@/contexts/themeContext";

const Stack = createStackNavigator();

export default function App() {
  // const { theme } = useThemeContext();

  return (
    <PreferencesContextProvider>
      <PaperProvider theme={themes.CombinedDarkTheme}>
        <NavigationContainer theme={themes.CombinedDarkTheme}>
          <Stack.Navigator
            initialRouteName="Feed"
            screenOptions={{
              // headerShown: false,
              header: (props) => <CustomAppBar {...props} />,
            }}
          >
            <Stack.Screen name="Progress" component={Progress}></Stack.Screen>
            <Stack.Screen name="Feed" component={Feed}></Stack.Screen>
            <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContextProvider>
  );
}
