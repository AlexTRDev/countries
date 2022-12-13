import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCountries,
  getCountryById,
} from "./redux/actions/country.action";
import "./App.css";
// estado del componente => react
// const [first, setFirst] = useState(second)
// first => stado local
// setFirst => funcion que modifica el estado local

// estado de toda la app => redux
// useSelector => stado global
// useDispatch => funcion que modifica al estado global
function App() {
  const dispatch = useDispatch();

  const countriesStore = useSelector((store) => store.countriesStore);

  useEffect(() => {
    // ciclo vida del componente
    // dispatch(getAllCountries());
    dispatch(getCountryById(25));
  }, []);

  return (
    <div>
      <h1>Hola mundo!!</h1>
      {JSON.stringify(countriesStore.country)}
    </div>
  );
}

export default App;
