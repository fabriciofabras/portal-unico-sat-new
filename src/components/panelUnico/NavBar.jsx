import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { useState, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { UserProfileContext } from "../../UserProfileContext";

export const NavBar = ({ onOpcionSeleccionada, handleLogueado }) => {

 const { profile } = useContext(UserProfileContext);

  const handleClick = (opcion) => {
    onOpcionSeleccionada(opcion);
  };

  const handleSalir = () => {
    handleLogueado(false)
  }

  const [language, setLanguage] = useState('ES');

  const smoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);

    window.scrollTo({
      behavior: "smooth",
      top: element.offsetTop
    });
  }

  return (
    <header className="md:sticky top-0">
      <div className="flex flex-wrap p-1 flex-col md:flex-row justify-center">
        <div className="w-100 bg-gradient-to-r from-yellow-300 to-green-500 ...">

        <Row>
          <Col xs={1} md={1} lg={1}></Col>
          <Col xs={10} md={10} lg={10}>
            <ul className="menu  justify-center">
              <li>
                <p className="text-3xl font-semibold pt-3 text-white">
                  Panel Único de Administración del Servicio SARI2 Partida 1
                </p>
              </li>
            </ul>
          </Col>
          <Col xs={1} md={1} lg={1}>
          <ul className="menu">
                <li className="menu-item dropdown">
                  <a onClick={handleSalir}
                    href="#"
                    className="hover:text-white text-2x1 p-4">
                    Salir
                  </a>
                  {/*                     <ArrowRightIcon className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0" />
 */}
                </li></ul>
          </Col>
        </Row>
        </div>

        <Row className="w-100 justify-content-center justify-center">
          <Col xs={12} md={12} lg={12}>
            <nav className="md:mr-auto md:ml-2 md:py-1 flex flex-wrap items-center text-base justify-center">
              {/*   <a href="https://atalait.sharepoint.com/:f:/r/sites/panelsari2p1/Otra%20informacin/04%20Monitoreo%20y%20control/Inventarios?csf=1&web=1&e=Db3NPq" target="_blank" className="mr-1 hover:text-white">
            Repositorio de Información
          </a> */}
          <ul className="menu">
                <li className="menu-item dropdown">
                  <a href="#" onClick={() => handleClick('default')} className="mr-1 hover:text-white p-2">
                    Inicio
                  </a>
                </li>
              </ul>
              <ul className="menu">
                <li className="menu-item dropdown">
                  <a href="https://atalait.sharepoint.com/sites/panelsari2p1/Repositorio%20de%20informacin/Forms/AllItems.aspx?viewid=f20b7d40%2D3bd8%2D48bf%2D8488%2D6e183c5e8085" target="_blank">Repositorio de Información</a>
                </li>

                <li className="menu-item dropdown">
                  <a href="#">Monitoreo</a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#monitoreo" onClick={() => handleClick('monitoreo')} className="mr-1 hover:text-white">
                        Infraestructura
                      </a>
                    </li>
                    <li>{profile === "sat" ? (<div></div>) : (<a href="https://201.159.80.2/" target="_blank">Enlace de terceros</a>)}</li>
                    <li>{profile === "sat" ? (<div></div>) : (<a href="https://atalait.sharepoint.com/sites/panelsari2p1/Monitoreo%20y%20Mesa%20de%20Ayuda/Forms/AllItems.aspx?viewid=7eb3a40d%2Ddde6%2D457f%2Dbb30%2D846a18447a53" target="_blank">Monitoreo y Mesa de Ayuda</a>)}</li>              </ul>
                </li>

              </ul>



              {/*  <a href="https://atalait.sharepoint.com/sites/panelsari2p1/Otra%20informacin/Forms/AllItems.aspx?viewid=93c323ea%2D0274%2D4b99%2Db68c%2D5d426003803f" target="_blank" className="mr-1 hover:text-white">
            Otra Información
          </a> */}
              <ul className="menu">
                <li className="menu-item dropdown">
                  <a href="https://tia.atalait.com.mx:5133/tia/login/?next=/" target="_blank" className="hover:text-white text-sm p-3">
                    HeatMap
                  </a>
                </li>
              </ul>
              <ul className="menu">
                <li className="menu-item dropdown">
                  <a href="#stockdepartes" onClick={() => handleClick('inventarios')} className="mr-1 hover:text-white p-2">
                    Stock de Partes
                  </a>
                </li>
              </ul>

              <ul className="menu">
                <li className="menu-item dropdown">
                  <a href="https://msi.sat.gob.mx/" target="_blank" className="hover:text-white text-sm p-3">
                    Mesa de Servicio SAT
                  </a>
                </li>
              </ul>
              <ul className="menu">
                <li className="menu-item dropdown">
                  {profile === "sat" ? (<div></div>) : (<a href="https://atalait.service-now.com/navpage.do" target="_blank" className="hover:text-white text-sm p-3">
                    Mesa de Servicio Atalait
                  </a>)}</li></ul>

             
            </nav>

          </Col>
        </Row>

      </div>
    </header>
  );
}