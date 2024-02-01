import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthProvider';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import GraphiQL from './pages/GraphiQL';
import Precincts from './pages/Precincts';
import Auth from './pages/Auth';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/graphiql" element={<GraphiQL />} />
        <Route path="/precincts" element={<Precincts />} />
        <Route path="auth" element={<Auth />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
