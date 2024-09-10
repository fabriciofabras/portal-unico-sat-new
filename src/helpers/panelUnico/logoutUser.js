import { URL_SERVER } from "../../properties";

export const logoutUser = (idSesion) => {

  const logoutUser = async () => {

    try {
      const response = await fetch(`https://${URL_SERVER}/logoutUser/${idSesion}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      //  alert(data);

      return data;
    } catch (error) {
      console.error('Error, servicio logout', error);
      throw error;
    }

  };

  return logoutUser();

}