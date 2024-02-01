import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthProvider';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import ApiPage from './pages/ApiPage';
import Precincts from './pages/api/Precincts';
import Auth from './pages/Auth';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/api" element={<ApiPage />} />
        <Route path="/api/precincts" element={<Precincts />} />
        <Route path="auth" element={<Auth />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
