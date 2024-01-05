import {
  FC,
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";

export const PreferencesContext = createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});

export const PreferencesContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [isThemeDark, setIsThemeDark] = useState(true);

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      {children}
    </PreferencesContext.Provider>
  );
};
