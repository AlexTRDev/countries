import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryById } from "../../redux/actions";

const Detail = () => {
  const { idCountry } = useParams();
  const dispatch = useDispatch();
  let { country } = useSelector(({ countryStore }) => countryStore);

  useEffect(() => {
    if (idCountry !== undefined && Number(idCountry)) {
      dispatch(getCountryById(idCountry));
    }
  }, [idCountry]);

  return (
    <>
      {Object.entries(country).length > 0 && (
        <div>
          <img src={country.image} alt={country.name} />
          <h1>Nombre: {country.name.toUpperCase()}</h1>
          <h3>Codigo: {country.name.substr(0, 3).toUpperCase()}</h3>
          <h3>Sub región: {country.sub_region.toUpperCase()} KM</h3>
          <div>
            <h1>Actividades</h1>
            {country.activities.map(({ name, dificulty, duration, season }) => (
              <div key={crypto.randomUUID()}>
                <h3>Nombre: {name}</h3>
                <h3>Dificultad: {dificulty}</h3>
                <h3>Duración: {duration}</h3>
                <h3>Season: {season}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
