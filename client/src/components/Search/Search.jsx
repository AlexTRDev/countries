import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllCountries } from "../../redux/actions/country.action";
import { setFiltrados, setSearch } from "../../redux/reducers/country.reducer";

const Search = () => {
  // const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  // const { countries } = useSelector(({ countryStore }) => countryStore);

  // useEffect(() => {}, []);

  // useEffect(() => {
  //   if (search === "") {
  //     dispatch(getAllCountries());
  //   } else {
  //     const filtrados = countries.filter((c) =>
  //       c.name.toUpperCase().includes(search.toUpperCase())
  //     );
  //     dispatch(setFiltrados(filtrados));
  //   }
  // }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearch(e.target.value));
  };

  return (
    <SearchStyle>
      <input
        type="search"
        name="search"
        placeholder="Buscar un país"
        onChange={handleSearch}
      />
    </SearchStyle>
  );
};

export const SearchStyle = styled.div``;

export default Search;
