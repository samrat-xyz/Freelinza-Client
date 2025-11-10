import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-base-content px-4 text-center">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="text-9xl font-extrabold text-[#FF2EFF] drop-shadow-lg"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl md:text-4xl font-semibold mt-4"
      >
        Oops! Page not found
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-sm md:text-base mt-2 text-gray-500 dark:text-gray-400 max-w-md"
      >
        The page you’re looking for doesn’t exist or has been moved to another location.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <Link to="/" className="btn btn-style mt-6">
           Back to Home
        </Link>
      </motion.div>
    </div>
  );
}

export default ErrorPage;
