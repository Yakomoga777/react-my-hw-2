import React from "react";
import { LayoutStyled } from "./layout.styled";

const Layout = ({ children }) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};
export default Layout;
