import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

function JobsCard({ job }) {
  const { title, summary, coverImage, postedBy, _id } = job;

  return (
    <motion.div
      className="border-2 border-[#800080] rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 w-[350px] h-[250px] mx-auto flex flex-col justify-between"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      
      <div className="flex items-center gap-3 mb-3">
        <img
          src={coverImage}
          alt={postedBy}
          className="w-12 h-12 rounded-full object-cover border-2 border-purple-500"
        />
        <div>
          <p className="text-sm">by {postedBy}</p>
        </div>
      </div>

      
      <div className="overflow-hidden">
        <p className="inline-block bg-yellow-100 text-[#FF2EFF] text-xs font-semibold px-2 py-1 rounded-md mb-2">
          OPPORTUNITY
        </p>
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm leading-relaxed overflow-auto h-[150px]">
          {summary.length > 180 ? summary.slice(0, 180) + "..." : summary}
        </p>
      </div>

      
      <div className="text-right mt-5">
        <Link
          to={`/all-jobs/${_id}`}
          className="inline-block btn-style text-white text-sm font-medium px-4 py-2 rounded-lg"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}

export default JobsCard;
