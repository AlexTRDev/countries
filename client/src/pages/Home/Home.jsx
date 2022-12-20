import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Card, Order, Search } from "../../components";
import { Activity, Continent } from "../../components/Filters";
import { setBuscar } from "../../redux/reducers/country.reducer";

// North America, Europe, Oceania, Africa, Antarctica, Asia, South America

const Home = () => {
  const { filtrados, continent, activity, dir, search } = useSelector(
    ({ countryStore }) => countryStore
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBuscar());
  }, [continent, activity, dir, search]);

  return (
    <>
      <FilterContainerStyle>
        <Continent />
        <Activity />
      </FilterContainerStyle>
      <Order />
      <Search />
      <CardContainerStyle>
        {
          filtrados.map((c) => (
            <Card key={crypto.randomUUID()} {...c} />
          ))
          // .slice(0, 9)
        }
      </CardContainerStyle>

      <PaginateContainerStyle>
        {/* {Array.from({ length: 9 }).map((el, idx) => (
          <button>{idx + 1}</button>
        ))} */}
        <button>Anterior</button>
        <button>Siguiente</button>
      </PaginateContainerStyle>
    </>
  );
};

export const FilterContainerStyle = styled.div``;

export const CardContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const PaginateContainerStyle = styled.div``;

export default Home;
