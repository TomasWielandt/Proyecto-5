import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import useFetch from './hooks/useFetch';
import Card from './components/Cards';
import Pagination from './components/Pagination';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  const [category, setCategory] = useState('characters');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleSearch = (term) => setSearchTerm(term);
  const handlePageChange = (page) => setCurrentPage(page);

  const url = `https://web.dragonball-api.com/api/${category}?page=${currentPage}`;
  const { data, loading, error } = useFetch(url);

  return (
    <Router>
      <div className="flex">
        <Navbar onCategoryChange={handleCategoryChange} onSearch={handleSearch} />
        <ErrorBoundary>
          <div className="flex-1 bg-black text-center text-white">
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-600">Error: {error.message}</p>}
            {data && data.items.length > 0 ? (
              <div className="grid grid-cols-4 gap-4 p-4">
                {data.items.map((item) => (
                  <Card key={item._id} image={item.image} title={item.name} details={item.details} />
                ))}
              </div>
            ) : (
              <p className="text-orange-400">Elemento no encontrado</p>
            )}
            <Pagination
              currentPage={currentPage}
              totalPages={data ? data.totalPages : 1}
              onPageChange={handlePageChange}
            />
          </div>
        </ErrorBoundary>
      </div>
    </Router>
  );
};

export default App;
