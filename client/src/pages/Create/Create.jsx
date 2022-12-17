import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { createActivity, getAllCountries } from "../../redux/actions";

const activityInitial = {
  dificulty: 1,
};

const Create = () => {
  const [countriesIds, setCountriesIds] = useState([]);
  const [activity, setActivity] = useState(activityInitial);

  const dispatch = useDispatch();
  const { countries = [] } = useSelector(({ countryStore }) => countryStore);
  // console.log(countries.map(({name}) => name));

  const formRef = useRef(null);

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  const handleSelect = (e) => {
    e.preventDefault();
    const country = countries.find((c) => c.name === e.target.value);
    const encontre = countriesIds.some((c) => c.name === country.name);
    if (!encontre) {
      setCountriesIds([...countriesIds, country]);
    }
  };

  const handleActivity = (e) => {
    e.preventDefault();

    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const countries = countriesIds.filter((c) => c.name !== e.target.name);
    setCountriesIds(countries);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ids = countriesIds.map((c) => c.id);
    const obj = { ...activity, countriesIds: ids };
    dispatch(createActivity(obj));

    setActivity(activityInitial);
    setCountriesIds([]);
    formRef.current.reset();
    // nameRef.current.value = "";
    // durationRef.current.value = "";
  };

  return (
    <div>
      Create
      <FormStyle>
        <div>
          <label htmlFor="name">Nombre: </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Sky, maraton"
            onChange={handleActivity}
          />
        </div>
        <div>
          <label htmlFor="dificulty">Dificultad: </label>
          <div>
            <input
              type="radio"
              id="1"
              name="dificulty"
              value="1"
              checked={activity["dificulty"] === 1}
              onChange={() => setActivity({ ...activity, dificulty: 1 })}
            />
            <label htmlFor="1">1</label>
            <input
              type="radio"
              id="2"
              name="dificulty"
              value="2"
              checked={activity["dificulty"] === 2}
              onChange={() => setActivity({ ...activity, dificulty: 2 })}
            />
            <label htmlFor="2">2</label>
            <input
              type="radio"
              id="3"
              name="dificulty"
              value="3"
              checked={activity["dificulty"] === 3}
              onChange={() => setActivity({ ...activity, dificulty: 3 })}
            />
            <label htmlFor="3">3</label>
            <input
              type="radio"
              id="4"
              name="dificulty"
              value="4"
              checked={activity["dificulty"] === 4}
              onChange={() => setActivity({ ...activity, dificulty: 4 })}
            />
            <label htmlFor="4">4</label>
            <input
              type="radio"
              id="5"
              name="dificulty"
              value="5"
              checked={activity["dificulty"] === 5}
              onChange={() => setActivity({ ...activity, dificulty: 5 })}
            />
            <label htmlFor="5">5</label>
          </div>
        </div>
        <div>
          <label htmlFor="duration">Duración: </label>
          <input
            id="duration"
            name="duration"
            type="text"
            placeholder="1 mes"
            onChange={handleActivity}
          />
        </div>
        <div>
          <label htmlFor="season">Temporada: </label>
          <select name="season" id="season" onChange={handleActivity}>
            <option value="">--Seleccionar--</option>
            <option value="OTOÑO">OTOÑO</option>
            <option value="VERANO">VERANO</option>
            <option value="INVIERNO">INVIERNO</option>
            <option value="PRIMAVERA">PRIMAVERA</option>
          </select>
        </div>
        <div>
          <label htmlFor="paises">Países: </label>
          <select name="paises" id="paises" onChange={handleSelect}>
            <option value="--Seleccionar--">--Seleccionar--</option>
            {countries.map(({ name }) => (
              <option key={crypto.randomUUID()} value={name}>
                {name}
              </option>
            ))}
          </select>

          <div>
            {countriesIds.map(({ image, name }) => (
              <div key={crypto.randomUUID()}>
                <button name={name} onClick={handleDelete}>
                  x
                </button>
                <img src={image} alt={name} width="25px" />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleSubmit}>Crear Actividad</button>
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
