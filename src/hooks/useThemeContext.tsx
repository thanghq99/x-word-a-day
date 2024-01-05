import { PreferencesContext } from "@/contexts/themeContext";
import { useContext } from "react";

import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";

import { adaptNavigationTheme } from "react-native-paper";

import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";

import merge from "deepmerge";

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme);
const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme);

export const themes = {
  CombinedDefaultTheme,
  CombinedDarkTheme,
};

const useTheme = () => {
  const { isThemeDark, toggleTheme } = useContext(PreferencesContext);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  return { isThemeDark, toggleTheme, theme };
};

export default useTheme;
