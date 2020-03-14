import { lightTheme, darkTheme } from 'styles';

type DarkThemeInterface = typeof darkTheme;
type LightThemeInterface = typeof lightTheme;

declare module 'styled-components' {
  interface DefaultTheme extends LightThemeInterface, DarkThemeInterface {}
}
