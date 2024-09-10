import { URL_SERVER } from "../../properties";

export const altaProducto = (formData) => {

    const altaProducto = async() => {

      console.log("formData",formData)

      const data = {
        tipo: formData.tipo,
        noParte: formData.noParte,
        desc: formData.descripcion,
        componente: formData.componente,
        sede: formData.sede,
        ubicacion: formData.ubicacion,
        min_stock: formData.minStock,
        cantidad: formData.cantidad,
        max_stock: formData.maxStock,
        reorden: formData.reorden,
        proveedor: formData.proveedor,
        sendor: formData.sendor,
        pn_vendor: formData.pnVendor,
        sn_vendor: formData.snVendor,
        sn_emc: formData.snEmc,
        capacidad: formData.capacidad
    }

        fetch(`https:${URL_SERVER}/altaProducto`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(response => {
          console.log("response",response)
          if (!response.ok) {
            throw new Error('Error en la solicitud');
          }
          return response.text();
        })
        .then(data => {
          console.log('Respuesta del servidor:', data);
          alert(data);
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Hubo un error al crear el registro');
        });
      
    }

   return altaProducto();
}


