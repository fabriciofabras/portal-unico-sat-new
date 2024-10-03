import { Route, Routes } from "react-router-dom"
import { NavBar } from "../components/panelUnico/NavBar";
import { Dashboard } from "../components/controlInventarios/Dashboard";
import { About } from "../components/panelUnico/About";
import { Repositorio } from "../components/panelUnico/Repositorio";
import { HeatMap } from "../components/panelUnico/HeatMap";
import { Monitoreo } from "../components/panelUnico/Monitoreo";
import { Inventarios } from "../components/panelUnico/Inventarios";
import { CMDB } from "../components/panelUnico/CMDB";
import { Mesa } from "../components/panelUnico/Mesa";
import { useEffect, useState } from "react";

export const PanelUnicoRoutes = () => {

    const [userInfo, setUserInfo] = useState(null);

    // Función para extraer el access_token de la URL
    const getAccessTokenFromUrl = () => {
        const params = new URLSearchParams(window.location.hash.substring(1));
        return params.get('access_token');
    };

    // Función para obtener la información del usuario con el access_token
    const getUserInfo = async (accessToken) => {
        try {
            const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`);
            const data = await response.json();
            setUserInfo(data); // Guardar la info del usuario en el estado
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
    };

    // useEffect se ejecuta cuando el componente se monta (equivalente a window.onload)
    useEffect(() => {
        const accessToken = getAccessTokenFromUrl();
        if (accessToken) {
            console.log('Access Token:', accessToken);
            getUserInfo(accessToken); // Obtener la información del usuario
        }
    }, []); // El array vacío significa que se ejecuta una vez cuando el componente se monta

    return(
        <>
        <NavBar userInfo={userInfo}/>

        {userInfo === null ? <div></div> : (
            <div className="container">
            <Routes>
            <Route path="/inicio" element={<About/>}></Route>
            <Route path="/repositorio" element={<Repositorio/>}></Route>
            <Route path="/heatmap" element={<HeatMap/>}></Route>
            <Route path="/monitoreo" element={<Monitoreo/>}></Route>
            <Route path="/stockdepartes" element={<Inventarios/>}></Route>
            <Route path="/cmdb" element={<CMDB/>}></Route>
            <Route path="/mesa" element={<Mesa/>}></Route>
            </Routes>
        </div>
        )}
        
        </>
    )
}