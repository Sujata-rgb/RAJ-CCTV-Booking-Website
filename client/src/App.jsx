import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { Camera, LogOut } from 'lucide-react';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BookingForm from './pages/BookingForm';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';


function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem('access_token');

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/');
    window.location.reload();
  };

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    `text-sm font-medium transition ${
      isActive(path) ? 'text-orange-500' : 'text-gray-300 hover:text-white'
    }`;

  return (
    <nav className="bg-[#0a1128] px-6 py-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
  <img src="/Raj_logo.png" alt="RAJ CCTV Logo" className="h-20 w-15 rounded-lg object-contain" />
  <span className="text-white font-bold text-lg">RAJ CCTV</span>
</Link>
        <div className="flex items-center gap-6">
          <Link to="/" className={linkClass('/')}>Home</Link>
          {!isLoggedIn && (
            <>
              <Link to="/login" className={linkClass('/login')}>Login</Link>
              <Link
                to="/signup"
                className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
              >
                Signup
              </Link>
            </>
          )}
          {isLoggedIn && (
            <>
              <Link to="/booking" className={linkClass('/booking')}>Book Now</Link>
              <Link to="/dashboard" className={linkClass('/dashboard')}>Dashboard</Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-gray-300 hover:text-white text-sm font-medium transition"
              >
                <LogOut size={16} /> Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/booking"
          element={
            <ProtectedRoute>
              <BookingForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;