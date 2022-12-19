import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Card = ({
  id,
  name,
  image,
  continent,
  capital,
  population,
  area,
  sub_region,
  language,
}) => {
  return (
    <NavLink to={`/detail/${id}`}>
      <CardStyle>
        <AquaStile>{id}</AquaStile>
        <ImgStyle src={image} alt={name} />
        <TitleStyle>
          <h2>{name}</h2>
          {/* <p>{language}</p> */}
          {/* <p>{continent}</p> */}
        </TitleStyle>
      </CardStyle>
    </NavLink>
  );
};

export const CardStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 30px;
  width: 350px;
  height: 250px;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
    -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  transition: 0.4s;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
    box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
      -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
  }
`;

export const ImgStyle = styled.img`
  width: 100%;
  height: 170px;
`;

export const TitleStyle = styled.div`
  text-align: center;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 24px;
  width: 100%;
  height: 80px;
  background: rgba(0, 0, 0, 0.9);
  color: white;
`;

const AquaStile = styled.p`
  position: absolute;
  top: -36px;
  right: 15px;
  font-size: 64px;
  color: rgba(255, 255, 255, 0.3);
`;

export default Card;
