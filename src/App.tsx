import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { RequireAuth } from './middleware';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          element={
            <>
              <RequireAuth>
                <Home />
              </RequireAuth>
            </>
          }
          path="/"
        />
        <Route Component={Login} path="/login" />
      </Routes>
    </Router>
  );
}
