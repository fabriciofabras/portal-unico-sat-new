import { URL_SERVER } from "../../properties";

export const getUsuarios = () => {

    const getUsuarios = async() => {

        const url = `http://${URL_SERVER}/usuarios`;
        const resp = await fetch( url );
        const  results  = await resp.json();
    
        const usuarios = results.map( usuario => ({
            id: usuario._id,
            usuario: usuario.usuario,
            nombre: usuario.nombre,
            telefono: usuario.telefono,
            correo: usuario.correo,
            perfil: usuario.perfil,
            password: usuario.password
        }));
        
        return usuarios;
    }

   return getUsuarios();
}


