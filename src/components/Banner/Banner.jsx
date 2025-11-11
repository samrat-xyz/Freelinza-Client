import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      className="relative overflow-hidden h-[90vh] flex items-center 
                 bg-no-repeat bg-cover bg-top sm:bg-center md:bg-fixed"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/F4F1pkD4/photographer-freelancer-talks-phone-while-working-85574-958.jpg')",
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

      {/* floating lights */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-28 h-28 bg-white/10 rounded-full blur-2xl"
        animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* content */}
      <div className="relative z-10 max-w-3xl mx-auto md:mx-0 text-left px-6 md:pl-20 text-white">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Connect. Collaborate. Create.
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-2xl mb-8 text-white/90 max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Hire the best freelancers or find your dream project — all in one
          place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5 }}
        >
          <button className="bg-white text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg text-sm sm:text-lg hover:bg-gray-200 transition">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
