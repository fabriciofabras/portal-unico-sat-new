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
import { CMDB } from "./components/panelUnico/CMDB";
import { Login } from "./components/panelUnico/Login";
import './App.css';
import { UserProfileProvider } from "./UserProfileContext";
import { PanelUnicoRoutes } from './routes/PanelUnicoRoutes';
import { BrowserRouter } from 'react-router-dom';

export default function App() {

  const [opcionSeleccionada, setOpcionSeleccionada] = useState('default');

  const [logueado, setLogueado] = useState(false);


  const handleLogueado = (conectado) => {
    console.log("conectado", conectado)
    setLogueado(conectado)
  }

  const handleOpcionSeleccionada = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  return (
    <main className="main-container text-gray-400 bg-gray-900 body-font">
      {/* <UserProfileProvider>     {logueado ? (<div><NavBar onOpcionSeleccionada={handleOpcionSeleccionada} handleLogueado={handleLogueado} />
        <div>
          {opcionSeleccionada === 'repositorio' && <Repositorio />}
          {opcionSeleccionada === 'heatmap' && <HeatMap />}
          {opcionSeleccionada === 'default' && <About />}
          {opcionSeleccionada === 'monitoreo' && <Monitoreo />}
          {opcionSeleccionada === 'inventarios' && <Inventarios />}
          {opcionSeleccionada === 'cmdb' && <CMDB />}
          {opcionSeleccionada === 'mesa' && <Mesa />}
        </div></div>) : (
        <Login handleLogueado={handleLogueado}></Login>
      )}

      </UserProfileProvider> */}
      <UserProfileProvider>
        <BrowserRouter>
          <PanelUnicoRoutes />
        </BrowserRouter>
      </UserProfileProvider>

      {/*       <Projects />
 */}      {/* <Skills/>
      <Contact/> */}
    </main>
  )
}
