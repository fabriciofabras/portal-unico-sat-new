import { URL_SERVER } from "../../properties";

export const getProductosReduced = () => {

    const getProductosReduced = async() => {

        const url = `http://${URL_SERVER}/productosReduced`;
        const resp = await fetch( url );
        const  results  = await resp.json();
    
        const productos = results.map( producto => ({
            id: producto._id,
            noParte: producto.noParte,
            desc: producto.descripcion,
            ubicacion: producto.ubicacion,
            cantidad: producto.cantidad,
        }));
        
        return productos;
    }

   return getProductosReduced();
}


