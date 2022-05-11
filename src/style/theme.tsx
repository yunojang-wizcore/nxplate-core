export { ThemeProvider, defaultTheme as makeTheme } from "@wizrnd/nx-ui";

import {
  useTheme as useThemeBasic,
  defaultTheme,
  IThemeCommonOption,
} from "@wizrnd/nx-ui";
import colors from "./color";

export const useTheme = () => {
  const theme = useThemeBasic();
  // in the case there is no theme, useTheme returns an empty object
  if (Object.keys(theme).length === 0 && theme.constructor === Object) {
    throw new Error(
      "useTheme() could not find a ThemeContext. The <ThemeProvider/> component is likely missing from the app."
    );
  }
  return theme;
};

const themeOptions: Partial<IThemeCommonOption> = {
  // set theme
  palette: {
    common: {
      ...colors,
    },
    primary: {
      main: colors.primary.base,
      text: colors.text.label,
    },
  },
};

export const theme = {
  ...defaultTheme(themeOptions),
};

export type Theme = typeof theme;
