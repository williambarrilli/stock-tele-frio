import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route Component={Home} path="/home" />
        <Route Component={Login} path="/" />
      </Routes>
    </Router>
  );
}
