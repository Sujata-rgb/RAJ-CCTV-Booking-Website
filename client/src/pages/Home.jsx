import { motion } from 'framer-motion';
import { Camera, Shield, Zap, DollarSign, Phone, MapPin } from 'lucide-react';
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Split layout */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              <span className="text-orange-500">Professional Camera Installation Services</span>{' '}
              | Reliable Security for Your Home & Business
            </h1>
            <p className="text-gray-300 mb-8">
              सुरक्षा आपकी, जिम्मेदारी हमारी — expert installation, night vision & IP cameras, and dependable support from RAJ CCTV, Bhopal.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/booking"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Book Consultation
              </a>
              <a
                href="#services"
                className="border border-gray-400 hover:border-white text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Explore Our Services
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/Home_page.png"
              alt="CCTV camera installation technician"
              className="rounded-2xl shadow-2xl w-full h-80 object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us - icon row */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-6 py-14"
      >
        <h2 className="text-2xl font-bold text-slate-800 mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex items-start gap-3">
            <div className="bg-orange-50 p-3 rounded-lg"><Shield className="text-orange-500" size={22} /></div>
            <div>
              <h3 className="font-semibold text-slate-800 text-sm">Expert Technicians</h3>
              <p className="text-gray-500 text-xs mt-1">Trained & experienced installers</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-orange-50 p-3 rounded-lg"><Zap className="text-orange-500" size={22} /></div>
            <div>
              <h3 className="font-semibold text-slate-800 text-sm">Fast Installation</h3>
              <p className="text-gray-500 text-xs mt-1">Quick turnaround, minimal disruption</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-orange-50 p-3 rounded-lg"><Camera className="text-orange-500" size={22} /></div>
            <div>
              <h3 className="font-semibold text-slate-800 text-sm">HD Systems</h3>
              <p className="text-gray-500 text-xs mt-1">High-definition night vision cameras</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-orange-50 p-3 rounded-lg"><DollarSign className="text-orange-500" size={22} /></div>
            <div>
              <h3 className="font-semibold text-slate-800 text-sm">Affordable Pricing</h3>
              <p className="text-gray-500 text-xs mt-1">Transparent, no hidden costs</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services - with images */}
      <div id="services" className="bg-slate-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Residential Security',
                desc: 'Complete CCTV setup for homes with night vision & mobile alerts.',
                img: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&auto=format&fit=crop&q=80',
              },
              {
                title: 'Commercial Surveillance',
                desc: 'IP camera systems for shops, offices, warehouses & factories.',
                img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=80',
              },
              {
                title: 'Maintenance & Repair',
                desc: 'Fast diagnosis and repair for any existing camera system.',
                img: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&auto=format&fit=crop&q=80',
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition"
              >
                <img src={s.img} alt={s.title} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <h3 className="font-semibold text-slate-800 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{s.desc}</p>
                  <a href="/booking" className="text-orange-500 text-sm font-semibold hover:underline">
                    Learn More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-orange-500 to-orange-600 py-14 px-6 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          घर • दुकान • ऑफिस • गोदाम • फैक्ट्री • स्कूल • सोसाइटी
        </h2>
        <p className="text-orange-100 mb-6">हम लगाएं, आप निश्चिंत रहें</p>
        <a
          href="/booking"
          className="inline-block bg-white text-orange-600 font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-all"
        >
          Request a Free Quote
        </a>
      </motion.div>

      {/* Footer - columns */}
      <footer className="bg-slate-900 text-gray-300 pt-14 pb-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-white font-bold text-lg mb-2">RAJ CCTV</h3>
            <p className="text-sm text-gray-400">सुरक्षा आपकी, जिम्मेदारी हमारी। Professional camera installation & maintenance in Bhopal.</p>
            <div className="flex gap-3 mt-4">
             
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="/booking" className="hover:text-white">Book Now</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Contact Info</h4>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <Phone size={14} /> 9516513488
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin size={14} /> Bhopal, India
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-slate-700 pt-6 text-center text-xs text-gray-500">
          © 2026 RAJ CCTV. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;