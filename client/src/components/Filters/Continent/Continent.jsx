import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setContinent } from "../../../redux/reducers/country.reducer";

const filterCont = [
  "North America",
  "Europe",
  "Oceania",
  "Africa",
  "Antarctica",
  "Asia",
  "South America",
];
const Continent = () => {
  const dispatch = useDispatch();

  const handleContinent = (e) => {
    e.preventDefault();

    const continent = e.target.value;

    if (continent !== "") {
      dispatch(setContinent(continent));
    }
  };

  return (
    <ContinentStyle>
      <label htmlFor="continents">Continentes</label>
      <select name="continentes" id="continents" onChange={handleContinent}>
        <option value="">--Continentes--</option>
        <option value={"North America"}>North America</option>
        <option value={"Europe"}>Europe</option>
        <option value={"Oceania"}>Oceania</option>
        <option value={"Africa"}>Africa</option>
        <option value={"Antarctica"}>Antarctica</option>
        <option value={"Asia"}>Asia</option>
        <option value={"South America"}>South America</option>
      </select>
    </ContinentStyle>
  );
};

export const ContinentStyle = styled.div``;

export default Continent;
