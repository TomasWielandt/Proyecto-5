import PropTypes from 'prop-types';

// Componente funcional `Card`
const Card = ({ image, title, details }) => {
  return (
    // Contenedor principal de la tarjeta
    <div className="bg-gray-800 p-4 m-2 rounded-lg text-white shadow-md hover:bg-gray-700 transition">
      <img src={image} alt={title} className="bg-white p-2 rounded-md mb-4" />
      <h2 className="text-orange-400 mb-2">{title}</h2>
      <p>{details}</p>
    </div>
  );
};

// Se define propTypes para el componente Card 
Card.propTypes = {
    image: PropTypes.func.isRequired,
    title: PropTypes.func.isRequired,
    details: PropTypes.func.isRequired
};

export default Card;
