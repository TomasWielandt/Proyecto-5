import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Se define una función asíncrona que realizará la solicitud de datos a la API
    const fetchData = async () => {
      try {
        // Se realiza la solicitud HTTP utilizando fetch y espera la respuesta
        const response = await fetch(url);
        // Se verifica si la respuesta no fue exitosa, en cuyo caso se lanza un error
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        // Se convierte la respuesta a formato JSON y se guarda en una variable
        const result = await response.json();
        // Se actualiza el estado con los datos obtenidos
        setData(result);
      } catch (error) {
        // Si ocurre un error durante la solicitud, se captura y actualiza el estado de error
        setError(error);
      } finally {
        // Independientemente del resultado, se actualiza el estado de carga a false
        setLoading(false);
      }
    };
    // Se llamamo a la función fetchData para iniciar la solicitud de datos
    fetchData();
  // Esta función se ejecutará cada vez que cambie la URL  
  }, [url]);
  // Se devuelve el estado de los datos, la carga y los errores para que se puedan usar en el componente
  return { data, loading, error };
}

export default useFetch;
