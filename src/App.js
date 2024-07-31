import React, { useState } from "react";
import { NavBar } from "./components/NavBar";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Repositorio } from "./components/Repositorio";
import { HeatMap } from "./components/HeatMap";
import { Monitoreo } from "./components/Monitoreo";
import { Mesa } from "./components/Mesa";
import { Inventarios } from "./components/Inventarios";
import { Login } from "./components/Login";
import './App.css';


export default function App() {

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
        <div>
          {opcionSeleccionada === 'repositorio' && <Repositorio />}
          {opcionSeleccionada === 'heatmap' && <HeatMap />}
          {opcionSeleccionada === 'default' && <About />}
          {opcionSeleccionada === 'monitoreo' && <Monitoreo />}
          {opcionSeleccionada === 'inventarios' && <Inventarios />}
          {opcionSeleccionada === 'mesa' && <Mesa />}
          {/* Agrega más condiciones según las opciones disponibles */}
        </div></div>) : (
        <Login handleLogueado={handleLogueado}></Login>
      )}


      <Projects />
      {/* <Skills/>
      <Contact/> */}
    </main>
  )
}
