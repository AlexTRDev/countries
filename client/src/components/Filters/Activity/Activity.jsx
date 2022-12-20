import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setActivity } from "../../../redux/reducers/country.reducer";
import { getAllActivities } from "../../../redux/actions/activity.action";

const Activity = () => {
  const [sel, setSel] = useState("");
  const { activities } = useSelector(({ activityStore }) => activityStore);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllActivities());
  }, []);

  const handleActivity = (e) => {
    e.preventDefault();
    setSel(e.target.value);
    dispatch(setActivity(e.target.value));
  };

  return (
    <ActivityStyle>
      <label htmlFor="activities">Activities</label>
      <select
        name="activities"
        id="activities"
        onChange={handleActivity}
        value={sel}
      >
        <option value="all">--Actividades--</option>

        {activities.map(({ name }) => (
          <option key={crypto.randomUUID()} value={name}>
            {name}
          </option>
        ))}
      </select>
    </ActivityStyle>
  );
};

export const ActivityStyle = styled.div``;

export default Activity;
