import React from "react";
import { Provider } from "react-redux";
import EquiposSeleccionado from "./components/EquipoSeleccionado";
import Jugadores from "./components/Jugadores";
import "./styles/styles.scss";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <main>
        <h1>Football manager</h1>
        <Jugadores />
        <EquiposSeleccionado />
      </main>
    </Provider>
  );
};

export default App;
