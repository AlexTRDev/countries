import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarStyle>
      <div>
        <h1>Navbar</h1>
      </div>
      <div>
        <h1>LOS HIJOS</h1>
        <Outlet />
      </div>
    </NavbarStyle>
  );
};

export const NavbarStyle = styled.div``;

export default Navbar;
