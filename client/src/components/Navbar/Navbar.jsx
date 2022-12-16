import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <>
      <ContainerNavbarStyled>
        <div>
          <img src="logo" alt="..." />
        </div>
        <NavbarStyle>
          <ListStyle to={"/home"}>Home</ListStyle>
          <ListStyle to={"/create"}>Create Activity</ListStyle>
          <ListStyle to={"/about"}>About me</ListStyle>
        </NavbarStyle>
      </ContainerNavbarStyled>
      <Outlet />
    </>
  );
};

export const ContainerNavbarStyled = styled.div`
  width: 100vw;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarStyle = styled.nav`
  height: 100%;
  padding-right: 40px;
  padding-left: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ListStyle = styled(NavLink)`
  padding-left: 10px;
  padding-right: 10px;
`;

export default Navbar;
