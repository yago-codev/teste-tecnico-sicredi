import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      black: string;
      white: string;
      greenPrimary: string;
      greenSecondary: string;
      redPrimary: string;
      redSecondary: string;
    };
  }
}
