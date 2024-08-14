import React from 'react';
import PropTypes from 'prop-types';

// Definición de la clase `ErrorBoundary` que extiende `React.Component`
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="text-red-600">Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

// Se define propTypes para el componente ErrorBoundary
ErrorBoundary.propTypes = {
    children: PropTypes.func.isRequired,
};

export default ErrorBoundary;
