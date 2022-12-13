import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "./redux/actions/country.action";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { countries } = useSelector(({ countriesStore }) => countriesStore);

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  return (
    <div>
      <h1>Hola mundo!!</h1>
      {countries?.length > 0 && JSON.stringify(countries)}
    </div>
  );
}

export default App;
