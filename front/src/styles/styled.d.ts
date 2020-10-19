import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      quinary: string;
      black: string;
      white: string;
      greenPrimary: string;
      greenSecondary: string;
      redPrimary: string;
      redSecondary: string;
      brown: string;
      gray: string;
      graySecondary: string;
      purplePrimary: string;
      purpleSecondary: string;
      ice: string;
    };
  }
}
