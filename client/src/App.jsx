import { useEffect } from "react";
import "./App.css";
import RoutesApp from "./rutas/RoutesApp";
// estado del componente => react
// const [first, setFirst] = useState(second)
// first => stado local
// setFirst => funcion que modifica el estado local

// estado de toda la app => redux
// useSelector => stado global
// useDispatch => funcion que modifica al estado global
function App() {
  return <RoutesApp />;
}

export default App;
