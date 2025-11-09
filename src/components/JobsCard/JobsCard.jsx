import React from "react";
import { motion } from "framer-motion";

function JobsCard({ job }) {
  const { title, summary, coverImage } = job;

  return (
    <motion.div
      className="card card-border bg-base-200 shadow-md"
      initial={{ opacity: 0, y: 20 }}   
      animate={{ opacity: 1, y: 0 }}       
      transition={{ duration: 0.5, ease: "easeOut" }} 
      whileHover={{ scale: 1.05 }}        
    >
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{summary}</p>
        <div className="card-actions justify-end">
          <img
            src={coverImage}
            alt={title}
            className="w-18 h-18 rounded-full object-cover border-2 border-[#FF2EFF]"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default JobsCard;
