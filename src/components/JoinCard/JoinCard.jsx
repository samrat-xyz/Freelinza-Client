import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const JoinCard = () => {
  return (
    <div className="flex flex-col items-center bg-base-200 p-8 rounded-lg shadow-lg overflow-hidden">
      <motion.h2
        className="text-3xl font-bold mb-4 leading-tight text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Freelance services at your fingertips
      </motion.h2>

      <motion.p
        className="mb-8 text-center text-base sm:text-lg text-gray-600"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Connect with skilled freelancers and bring your projects to life with ease and confidence.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Link to="/join">
          <span className="btn-style px-6 py-2 rounded-full inline-block">
            Join Freelinza
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default JoinCard;
