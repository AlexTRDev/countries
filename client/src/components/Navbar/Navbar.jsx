import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import world from "../../assets/world.png";

const Navbar = () => {
  return (
    <>
      <ContainerNavbarStyled>
        <LogoStyled
          // src="https://static.nationalgeographic.es/files/styles/image_3200/public/940.webp?w=1450&h=816"
          src={world}
          alt="..."
        />
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

export const LogoStyled = styled.img`
  height: 48px;
  cursor: pointer;
`;

export const ContainerNavbarStyled = styled.div`
  width: 100vw;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: black;
`;

export const NavbarStyle = styled.nav`
  height: 100%;
  padding-right: 40px;
  padding-left: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 100;
`;

export const ListStyle = styled(NavLink)`
  padding-left: 10px;
  padding-right: 10px;
  color: white;
`;

export default Navbar;
