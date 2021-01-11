import { createGlobalStyle } from "styled-components"
import equipSlab from "./EquipSlab-Light.woff";
import gilroyReg from "./Gilroy-Regular.woff";
import gilroyReg2 from "./Gilroy-Regular.woff2";
import gilroyBold from "./Gilroy-Bold.woff";
import gilroyBold2 from "./Gilroy-Bold.woff2";

export const GlobalStyles = createGlobalStyle`
    @font-face {
    font-family: Equipslab;
    src: url(${equipSlab});
    font-weight: 300;
  }
  @font-face {
    font-family: "Gilroy";
    src: url(${gilroyReg2}) format("woff2"),
    url(${gilroyReg}) format("woff");
    font-style: normal;
    font-weight: normal;
  }
  
  @font-face {
    font-family: "Gilroy";
    src: url(${gilroyBold2}) format("woff2"),
    url(${gilroyBold}) format("woff");
    font-style: normal;
    font-weight: 700;
  }
`;