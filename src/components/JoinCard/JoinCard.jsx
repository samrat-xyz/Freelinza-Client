import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const JoinCard = () => {
  return (
    <div className="flex flex-col items-center bg-base-200 p-8 rounded-lg shadow-lg">
      <motion.h2
        className="text-3xl font-bold mb-4 leading-tight text-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Freelance services at your fingertips
      </motion.h2>

      <motion.p
        className="mb-8 text-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        Connect with skilled freelancers and bring your projects to life with ease and confidence.
      </motion.p>

      <span className="btn-style px-6 py-2 rounded-full">
        Join Freelinza
      </span>
    </div>
  );
};

export default JoinCard;
