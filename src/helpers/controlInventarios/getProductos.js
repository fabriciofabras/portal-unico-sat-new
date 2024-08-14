import { URL_SERVER } from "../../properties";

export const getProductos = () => {

    const getProductos = async() => {

        const url = `http://${URL_SERVER}/productos`;
        const resp = await fetch( url );
        const  results  = await resp.json();
    
        const productos = results.map( producto => ({
            id: producto._id,
            tipo: producto.tipo,
            noParte: producto.noParte,
            desc: producto.descripcion,
            componente: producto.componente,
            sede: producto.sede,
            ubicacion: producto.ubicacion,
            min_stock: producto.minStock,
            cantidad: producto.cantidad,
            max_stock: producto.maxStock,
            reorden: producto.reorden,
            proveedor: producto.proveedor,
            sendor: producto.sendor,
            pn_vendor: producto.pnVendor,
            sn_vendor: producto.snVendor,
            sn_emc: producto.snEMC,
            capacidad: producto.capacidad
        }));
        
        return productos;
    }

   return getProductos();
}


