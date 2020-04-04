import { lightTheme, darkTheme } from 'styles';

type DarkTheme = typeof darkTheme;
type LightTheme = typeof lightTheme;

declare module 'styled-components' {
  interface DefaultTheme extends LightTheme, DarkTheme {}
}
