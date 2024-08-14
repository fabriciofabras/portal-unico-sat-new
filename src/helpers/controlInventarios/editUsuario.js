import { URL_SERVER } from "../../properties";

export const editUsuario = (formData) => {

  const editUsuario = async () => {

    try {
      const response = await fetch(`http://${URL_SERVER}/updateUsuario/${formData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      alert(data);

      return data;
    } catch (error) {
      console.error('Error actualizando el usuario:', error);
      throw error;
    }

  };

  return editUsuario();

}