import { URL_SERVER } from "../../properties";

export const editServidor = (formData) => {

  const editServidor = async () => {


    try {
      const response = await fetch(`https://${URL_SERVER}/updateProduct/${formData.id}`, {
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
      console.error('Error actualizando el producto:', error);
      throw error;
    }

  };

  return editServidor();

}