import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setContinent } from "../../../redux/reducers/country.reducer";

const continents = [
  "North America",
  "Europe",
  "Oceania",
  "Africa",
  "Antarctica",
  "Asia",
  "South America",
];
const Continent = () => {
  const [selected, setSelected] = useState("");

  const dispatch = useDispatch();

  const handleContinent = (e) => {
    e.preventDefault();
    setSelected(e.target.value);
    dispatch(setContinent(e.target.value));
  };

  return (
    <ContinentStyle>
      <label htmlFor="continents">Continentes</label>
      <select
        name="continentes"
        id="continents"
        value={selected}
        onChange={handleContinent}
      >
        <option value="all">--Continentes--</option>
        {continents.map((c) => (
          <option key={crypto.randomUUID()} value={c}>
            {c}
          </option>
        ))}
      </select>
    </ContinentStyle>
  );
};

export const ContinentStyle = styled.div``;

export default Continent;
