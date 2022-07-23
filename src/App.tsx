import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/main/MainPage';
import Pagination from './pages/Pagination';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/*" element={<Pagination />} />
    </Routes>
  );
}

export default App;
