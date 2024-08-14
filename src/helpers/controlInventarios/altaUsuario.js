import { URL_SERVER } from "../../properties";

export const altaUsuario = (formData) => {

    const altaUsuario = async() => {

      console.log("formData",formData)

      /* const data = {
        usuario: formData.usuario,
        nombre: formData.nombre,
        telefono: formData.telefono,
        password: formData.password,
        correo: formData.correo,
        perfil: formData.perfil,
        gobierno: formData.gobierno
    } */


        fetch(`https://${URL_SERVER}/altaUsuario`, {
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

   return altaUsuario();
}


