import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Camera, Calendar, Clock, MapPin, Phone, CheckCircle2, ClockAlert, Wrench } from 'lucide-react';

const statusStyles = {
  pending: { bg: 'bg-yellow-50', text: 'text-yellow-700', ring: 'ring-yellow-200', icon: ClockAlert },
  confirmed: { bg: 'bg-blue-50', text: 'text-blue-700', ring: 'ring-blue-200', icon: Wrench },
  completed: { bg: 'bg-green-50', text: 'text-green-700', ring: 'ring-green-200', icon: CheckCircle2 },
  cancelled: { bg: 'bg-red-50', text: 'text-red-700', ring: 'ring-red-200', icon: ClockAlert },
};

const serviceLabels = {
  cctv_install: 'CCTV Installation',
  wireless_camera: 'Wireless Camera Setup',
  maintenance: 'Maintenance/Repair',
  consultation: 'Consultation',
};

function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem('access_token');
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/bookings/', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBookings(response.data);
      } catch (err) {
        setError('Could not load bookings. Please login.');
      }
    };
    fetchBookings();
  }, []);

  const counts = {
    total: bookings.length,
    pending: bookings.filter((b) => b.status === 'pending').length,
    confirmed: bookings.filter((b) => b.status === 'confirmed').length,
    completed: bookings.filter((b) => b.status === 'completed').length,
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-[#0a1128] px-6 py-14 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-semibold mb-3">
              <Camera size={14} /> RAJ CCTV
            </div>
            <h2 className="text-3xl font-bold text-white mb-1">My Bookings</h2>
            <p className="text-gray-400 text-sm">Track your service requests</p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
          >
            {[
              { label: 'Total', value: counts.total },
              { label: 'Pending', value: counts.pending },
              { label: 'Confirmed', value: counts.confirmed },
              { label: 'Completed', value: counts.completed },
            ].map((s, i) => (
              <div key={i} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-white">{s.value}</p>
                <p className="text-gray-400 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bookings list */}
      <div className="max-w-4xl mx-auto px-6 -mt-6 pb-16">
        {error && (
          <div className="bg-white rounded-2xl p-6 shadow-lg text-red-500 text-sm">{error}</div>
        )}

        {bookings.length === 0 && !error && (
          <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
            <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="text-orange-500" size={28} />
            </div>
            <p className="text-slate-700 font-medium mb-1">No bookings yet</p>
            <p className="text-gray-500 text-sm mb-4">Book your first service to see it here</p>
            <a
              href="/booking"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg transition"
            >
              Book a Service
            </a>
          </div>
        )}

        <div className="space-y-4">
          {bookings.map((booking, i) => {
            const style = statusStyles[booking.status] || statusStyles.pending;
            const StatusIcon = style.icon;
            return (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i === 0 ? 0.2 : i * 0.06 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition"
              >
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-50 w-10 h-10 rounded-lg flex items-center justify-center">
                      <Camera className="text-orange-500" size={18} />
                    </div>
                    <h3 className="font-semibold text-slate-800">
                      {serviceLabels[booking.service_type] || booking.service_type}
                    </h3>
                  </div>
                  <span className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ring-1 capitalize ${style.bg} ${style.text} ${style.ring}`}>
                    <StatusIcon size={12} /> {booking.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 py-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={15} className="text-gray-400" /> {booking.preferred_date}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={15} className="text-gray-400" /> {booking.preferred_time}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 truncate">
                    <MapPin size={15} className="text-gray-400" /> {booking.address}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone size={15} className="text-gray-400" /> {booking.phone_number}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;