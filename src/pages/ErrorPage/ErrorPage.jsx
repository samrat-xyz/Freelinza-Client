import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[120px] font-extrabold text-[#FF2EFF] drop-shadow-lg"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3"
      >
        Oops! Page Not Found
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-600 max-w-md mb-8"
      >
        The page you’re looking for doesn’t exist or has been moved.  
        But don’t worry, let’s get you back on track!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Link
          to="/"
          className="px-6 py-3 text-white rounded-full shadow-md btn-style"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}

export default ErrorPage;
