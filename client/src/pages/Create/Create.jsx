import React from "react";
import styled from "styled-components";

const Create = () => {
  return (
    <div>
      Create
      <FormStyle action="">
        <div>
          <label htmlFor="name">Nombre: </label>
          <input id="name" type="text" placeholder="Sky, maraton" />
        </div>
        <div>
          <label htmlFor="dificulty">Dificultad: </label>
          <div>
            <input
              type="radio"
              id="1"
              name="dificulty"
              value="1"
              defaultChecked
            />
            <label htmlFor="1">1</label>
            <input type="radio" id="2" name="dificulty" value="2" />
            <label htmlFor="2">2</label>
            <input type="radio" id="3" name="dificulty" value="3" />
            <label htmlFor="3">3</label>
            <input type="radio" id="4" name="dificulty" value="4" />
            <label htmlFor="4">4</label>
            <input type="radio" id="5" name="dificulty" value="5" />
            <label htmlFor="5">5</label>
          </div>
        </div>
        <div>
          <label htmlFor="duration">Duración: </label>
          <input id="duration" type="text" placeholder="1 mes" />
        </div>
        <div>
          <label htmlFor="season">Temporada: </label>
          <input id="season" type="text" placeholder="Otoño" />
        </div>
        <div>
          <label htmlFor="paises">Países: </label>
          <select name="paises" id="paises">
            <option value="">--Seleccionar--</option>
            <option value="peru">PERU</option>
            <option value="argentina">ARGENTINA</option>
            <option value="brasil">BRASIL</option>
          </select>
        </div>
        <button>Crear Actividad</button>
      </FormStyle>
    </div>
  );
};

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    margin: 10px;
    padding: 5px;
  }
`;

export default Create;
