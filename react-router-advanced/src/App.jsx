import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import { useAuth } from './useAuth';

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  return auth.isAuthenticated ? children : <div>Please log in to access this page.</div>;
};

function App() {
  const auth = useAuth();

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>

      <button onClick={auth.isAuthenticated ? auth.logout : auth.login}>
        {auth.isAuthenticated ? 'Logout' : 'Login'}
      </button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
