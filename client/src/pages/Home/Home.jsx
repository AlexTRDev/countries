import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Card } from "../../components";
import { getAllCountries } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const { countries = [] } = useSelector(({ countryStore }) => countryStore);

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  return (
    <>
      <div>
        <input type="search" name="search" placeholder="Buscar un país" />
        <button>Buscar</button>
      </div>
      <FilterContainerStyle>
        <fieldset>
          <legend>Filtrar</legend>
          <div>
            <input
              type="radio"
              id="contactChoice1"
              name="contact"
              value="email"
              defaultChecked
            />
            <label htmlFor="contactChoice1">Continente</label>
            <input
              type="radio"
              id="contactChoice2"
              name="contact"
              value="phone"
            />
            <label htmlFor="contactChoice2">Poblacion</label>
          </div>
        </fieldset>
      </FilterContainerStyle>

      <CardContainerStyle>
        {countries
          .map((c) => <Card key={crypto.randomUUID()} {...c} />)
          .slice(0, 9)}
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
