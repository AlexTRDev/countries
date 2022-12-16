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
}) => {
  return (
    <NavLink to={`/detail/${id}`}>
      <CardStyle>
        <ImgStyle src={image} alt={name} />
        <h3>{name}</h3>
        <div>
          <p>Continente: {continent}</p>
        </div>
      </CardStyle>
    </NavLink>
  );
};

export const CardStyle = styled.div`
  height: 400px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
  padding: 10px;
  margin: 10px;
  cursor: pointer;
`;

export const ImgStyle = styled.img`
  width: 80%;
`;

export default Card;
