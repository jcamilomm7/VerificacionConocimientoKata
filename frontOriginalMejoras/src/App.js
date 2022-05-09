import "./scss/app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import rutas from "./config/rutas";

function App() {
  return (
    <>
      {/* Gracias a react router dom podemos empaquetar las rutas y asi queda mucho mas profesional */}
      <Router>
        <Routes>
          {rutas.map((ruta, index) => (
            <Route key={index} path={ruta.patch} element={<ruta.component />} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
