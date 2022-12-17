import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setFiltrados } from "../../redux/reducers/country.reducer";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const { countries } = useSelector(({ countryStore }) => countryStore);

  useEffect(() => {
    let filtrados = [];
    if (search === "") {
      filtrados = countries;
    } else {
      filtrados = countries.filter((c) =>
        c.name.toUpperCase().includes(search.toUpperCase())
      );
    }
    dispatch(setFiltrados(filtrados));
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
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
