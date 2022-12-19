import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setOrden } from "../../redux/reducers/country.reducer";

const Order = () => {
  const dispatch = useDispatch();
  const handleOrden = (e) => {
    e.preventDefault();
    const orden = {
      value: e.target.value.split("-")[0],
      dir: e.target.value.split("-")[1],
    };
    dispatch(setOrden(orden));
  };
  return (
    <OrderStyle>
      <label htmlFor="orden">Ordenamiento</label>
      <select name="ordenamiento" id="orden" onChange={handleOrden}>
        <option value=""> --Selecionar-- </option>
        <option value="name-asc">Nombre, ASC</option>
        <option value="name-desc">Nombre, DESC</option>
        <option value="population-asc">Población, ASC</option>
        <option value="population-desc">Población, DESC</option>
      </select>
    </OrderStyle>
  );
};

export const OrderStyle = styled.div``;

export default Order;
