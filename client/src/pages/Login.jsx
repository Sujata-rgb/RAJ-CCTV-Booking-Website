import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, User, Shield, Camera } from 'lucide-react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        username,
        password,
      });
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      navigate('/dashboard');
    } catch (err) {
      setError('Login failed. Check username/password.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1128] via-[#0d1b3e] to-[#1a2456] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
        {/* Left side - branding */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-800 to-[#0a1128] p-10 hidden md:flex flex-col justify-center border border-slate-700"
        >
          <div className="bg-orange-500/20 w-14 h-14 rounded-full flex items-center justify-center mb-6">
            <Camera className="text-orange-500" size={26} />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">RAJ CCTV</h2>
          <p className="text-orange-400 font-semibold mb-4">सुरक्षा आपकी, जिम्मेदारी हमारी</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Login to book services, track your requests, and stay connected with Bhopal's trusted camera installation experts.
          </p>
        </motion.div>

        {/* Right side - form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-10 flex flex-col justify-center"
        >
          <div className="flex justify-center mb-4 md:hidden">
            <div className="bg-orange-50 p-3 rounded-full">
              <Shield className="text-orange-500" size={26} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-1">Welcome Back</h2>
          <p className="text-gray-500 text-sm mb-6">Login to manage your bookings</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 hover:scale-[1.02] text-white font-semibold py-2.5 rounded-lg transition-all"
            >
              Login
            </button>
          </form>
          {error && <p className="text-red-500 text-sm text-center mt-4">{error}</p>}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{' '}
            <a href="/signup" className="text-orange-500 font-semibold hover:underline">Signup</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Login;