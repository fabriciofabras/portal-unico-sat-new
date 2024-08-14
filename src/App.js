import React, { createContext, useState } from "react";
import { NavBar } from "./components/panelUnico/NavBar";
import { About } from "./components/panelUnico/About";
import { Projects } from "./components/panelUnico/Projects";
import { Contact } from "./components/panelUnico/Contact";
import { Repositorio } from "./components/panelUnico/Repositorio";
import { HeatMap } from "./components/panelUnico/HeatMap";
import { Monitoreo } from "./components/panelUnico/Monitoreo";
import { Mesa } from "./components/panelUnico/Mesa";
import { Inventarios } from "./components/panelUnico/Inventarios";
import { Login } from "./components/panelUnico/Login";
import './App.css';


export default function App() {

  const UserContext = createContext('sat');

  const [opcionSeleccionada, setOpcionSeleccionada] = useState('default');

  const [logueado, setLogueado] = useState(false);


  const handleLogueado = (conectado) => {
    console.log("conectado",conectado)
    setLogueado(conectado)
  }

  const handleOpcionSeleccionada = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  return (
    <main className="text-gray-400 bg-gray-900 body-font">

      {logueado ? (<div><NavBar onOpcionSeleccionada={handleOpcionSeleccionada} handleLogueado={handleLogueado} />
        <UserContext.Provider value="sat">
          {opcionSeleccionada === 'repositorio' && <Repositorio />}
          {opcionSeleccionada === 'heatmap' && <HeatMap />}
          {opcionSeleccionada === 'default' && <About />}
          {opcionSeleccionada === 'monitoreo' && <Monitoreo />}
          {opcionSeleccionada === 'inventarios' && <Inventarios />}
          {opcionSeleccionada === 'mesa' && <Mesa />}
          {/* Agrega más condiciones según las opciones disponibles */}
        </UserContext.Provider></div>) : (
        <Login handleLogueado={handleLogueado}></Login>
      )}


      <Projects />
      {/* <Skills/>
      <Contact/> */}
    </main>
  )
}
