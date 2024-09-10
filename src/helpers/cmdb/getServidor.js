import { URL_SERVER } from "../../properties";

export const getServidor = async (id) => {
  try {
    const response = await fetch(`http://${URL_SERVER}:3000/producto/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Fetching item failed: ${error.message}`);
  }
};

