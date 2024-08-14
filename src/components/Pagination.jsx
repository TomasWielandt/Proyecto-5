import PropTypes from 'prop-types';

// Componente funcional `Pagination`
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    // Contenedor para los botones de paginación
    <div className="flex justify-center mt-4">
      <button
        onClick={() => onPageChange(1)}
        className="p-2 bg-orange-400 text-white rounded-md mx-2"
        disabled={currentPage === 1}
      >
        First
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className="p-2 bg-orange-400 text-white rounded-md mx-2"
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="p-2 bg-orange-400 text-white rounded-md mx-2"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        className="p-2 bg-orange-400 text-white rounded-md mx-2"
        disabled={currentPage === totalPages}
      >
        Last
      </button>
    </div>
  );
};

// Se define propTypes para el componente Pagination 
Pagination.propTypes = {
    currentPage: PropTypes.func.isRequired,
    totalPages: PropTypes.func.isRequired,
    onPageChange: PropTypes.func.isRequired
}

export default Pagination;
