import PropTypes from 'prop-types';
import { useState } from 'react';

const Navbar = ({ onCategoryChange, onSearch, onFilterChange }) => {
  // Estado para manejar la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState('characters');

  // Función para manejar el cambio en la selección de categoría
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onCategoryChange(category);
    // Reiniciar filtros al cambiar de categoría
    onFilterChange({});
  };

  // Función para manejar el cambio en los filtros
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ [name]: value });
  };

  return (
    <div className="bg-blue-600 text-orange-400 p-4 flex flex-col items-center">
      <img src="src\assets\pngwing.com.png" alt="Dragon Ball Radar" className="w-20 mb-4" />
      <select 
        onChange={handleCategoryChange} 
        value={selectedCategory} 
        className="mb-4 p-2"
      >
        <option value="characters">Characters</option>
        <option value="transformations">Transformations</option>
        <option value="planets">Planets</option>
      </select>
      <input
        type="text"
        placeholder="Search..."
        className="p-2 mb-4"
        onChange={(e) => onSearch(e.target.value)}
      />
      {/* Filtros */}
      {selectedCategory === 'characters' && (
        <div className="flex flex-col mb-4">
          <label className="mb-2">Gender:</label>
          <select name="gender" onChange={handleFilterChange} className="p-2 mb-2">
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <label className="mb-2">Race:</label>
          <select name="race" onChange={handleFilterChange} className="p-2 mb-2">
            <option value="">All</option>
            <option value="Saiyan">Saiyan</option>
            <option value="Human">Human</option>
            <option value="Namekian">Namekian</option>
          </select>

          <label className="mb-2">Affiliation:</label>
          <select name="affiliation" onChange={handleFilterChange} className="p-2">
            <option value="">All</option>
            <option value="Z Fighters">Z Fighters</option>
            <option value="Ginyu Force">Ginyu Force</option>
            <option value="Freezer Force">Freezer Force</option>
          </select>
        </div>
      )}

      {selectedCategory === 'planets' && (
        <div className="flex flex-col mb-4">
          <label className="mb-2">Destroyed:</label>
          <select name="destroyed" onChange={handleFilterChange} className="p-2">
            <option value="">All</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      )}

      {/* No hay filtros para transformations */}
      {selectedCategory === 'transformations' && (
        <div className="mb-4">No filters available for transformations.</div>
      )}
    </div>
  );
};

// Se define propTypes para el componente Navbar 
Navbar.propTypes = {
    onCategoryChange: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    onFilterChange: PropTypes.func.isRequired,
};

export default Navbar;
