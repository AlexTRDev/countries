import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Card, Order, Search } from "../../components";
import { Continent } from "../../components/Filters";
import { getAllActivities } from "../../redux/actions/activity.action";
import { setActivity } from "../../redux/reducers/country.reducer";

// North America, Europe, Oceania, Africa, Antarctica, Asia, South America

const Home = () => {
  const { filtrados } = useSelector(({ countryStore }) => countryStore);
  const [sel, setSel] = useState("");
  const { activities } = useSelector(({ activityStore }) => activityStore);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllActivities());
  }, []);

  const handleActivity = (e) => {
    e.preventDefault();
    if (e.target.value !== "") {
      setSel(e.target.value);
      dispatch(setActivity(e.target.value));
    }
  };

  return (
    <>
      <FilterContainerStyle>
        <Continent />
        <select name="activities" id="activities" onChange={handleActivity}>
          <option value="">--Actividades--</option>

          {activities.map(({ name }) => {
            if (name === sel) {
              return (
                <option key={crypto.randomUUID()} selected>
                  {name}
                </option>
              );
            } else {
              return <option key={crypto.randomUUID()}>{name}</option>;
            }
          })}
        </select>
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
