// Función para realizar una solicitud a la API de Dragon Ball
const fetchDragonBallData = async (type, filters = {}, searchTerm = '') => {
    // Define la URL base de la API
    let url = `https://web.dragonball-api.com/api/${type}`;
  
    // Construye la URL con los filtros y el término de búsqueda, si están presentes
    const params = new URLSearchParams();
  
    // Añade el término de búsqueda a los parámetros si existe
    if (searchTerm) {
      params.append('name', searchTerm);
    }
  
    // Añade los filtros a los parámetros si existen
    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        params.append(key, filters[key]);
      }
    });
  
    // Si hay parámetros, los añade a la URL
    if (params.toString()) {
      url += `?${params.toString()}`;
    }
  
    try {
      // Realiza la solicitud HTTP a la API
      const response = await fetch(url);
  
      // Verifica si la respuesta es exitosa
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
  
      // Convierte la respuesta a formato JSON
      const data = await response.json();
  
      // Retorna los datos obtenidos
      return data;
    } catch (error) {
      // Maneja cualquier error ocurrido durante la solicitud
      throw new Error(`Error al obtener los datos: ${error.message}`);
    }
};

export default fetchDragonBallData;