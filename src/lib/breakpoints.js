import { extendTheme } from "@chakra-ui/react";

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  sm: "30em", // 480px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
  "1xl": "88em", //1408px
  "2xl": "96em", // 1536px
};

// 3. Extend the theme
export const theme = extendTheme({ breakpoints });
