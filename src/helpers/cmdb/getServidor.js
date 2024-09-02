import { URL_SERVER } from "../../properties";

export const getServidor = async (id) => {
  try {
    const response = await fetch(`https://${URL_SERVER}/producto/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Fetching item failed: ${error.message}`);
  }
};

