export const validateUser = (formData) => {

    const validateUser = async () => {
    
      try {
         const response = await fetch(`http://localhost:3001/login`, {
           /* const response = await fetch(`http://10.30.39.33:3001/login`, { */
            method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
  
        const data = await response.json();
      //  alert(data);
  
        return data;
      } catch (error) {
        console.error('Error actualizando el producto:', error);
        throw error;
      }
  
    };
  
    return validateUser();
  
  }