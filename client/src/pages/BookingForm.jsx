import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, MapPin, Phone, Calendar, Clock, FileText } from 'lucide-react';

function BookingForm() {
  const [formData, setFormData] = useState({
    service_type: 'cctv_install',
    preferred_date: '',
    preferred_time: '',
    address: '',
    phone_number: '',
    notes: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('access_token');
    try {
      await axios.post('http://127.0.0.1:8000/api/bookings/', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccess(true);
      setTimeout(() => navigate('/dashboard'), 1200);
    } catch (err) {
      setError('Booking failed. Please login again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1128] via-[#0d1b3e] to-[#1a2456] flex items-center justify-center px-6 py-16 relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white rounded-3xl shadow-2xl ring-1 ring-white/10 w-full max-w-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-[#0a1128] p-8 text-center">
          <div className="inline-flex bg-orange-500/20 p-3 rounded-full mb-3">
            <Camera className="text-orange-500" size={26} />
          </div>
          <h2 className="text-2xl font-bold text-white">Book a Service</h2>
          <p className="text-gray-400 text-sm mt-1">RAJ CCTV — सुरक्षा आपकी, जिम्मेदारी हमारी</p>
        </div>

        {/* Form */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">Service Type</label>
              <div className="relative">
                <Camera className="absolute left-3 top-3 text-gray-400" size={18} />
                <select
                  name="service_type"
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none bg-white"
                >
                  <option value="cctv_install">CCTV Installation</option>
                  <option value="wireless_camera">Wireless Camera Setup</option>
                  <option value="maintenance">Maintenance/Repair</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-1 block">Preferred Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    type="date"
                    name="preferred_date"
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 mb-1 block">Preferred Time</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    type="time"
                    name="preferred_time"
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">Address</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="text"
                  name="address"
                  placeholder="Full address"
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="text"
                  name="phone_number"
                  placeholder="Your contact number"
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 mb-1 block">Additional Notes</label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 text-gray-400" size={18} />
                <textarea
                  name="notes"
                  placeholder="Anything else we should know?"
                  onChange={handleChange}
                  rows="3"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 hover:scale-[1.02] text-white font-semibold py-3 rounded-lg transition-all"
            >
              Book Now
            </button>
          </form>
          {error && <p className="text-red-500 text-sm text-center mt-4">{error}</p>}
          {success && <p className="text-green-600 text-sm text-center mt-4">Booking successful! Redirecting...</p>}
        </div>
      </motion.div>
    </div>
  );
}

export default BookingForm;