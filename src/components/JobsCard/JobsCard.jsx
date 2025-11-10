import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

function JobsCard({ job }) {
  const { title, summary, coverImage, postedBy, _id } = job;

  return (
    <motion.div
      className="border border-gray-200 bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Top Section */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <img
            src={coverImage}
            alt={postedBy}
            className="w-10 h-10 rounded-full object-cover border"
          />
          <div>
            <p className="text-sm text-gray-500">by {postedBy}</p>
          </div>
        </div>
      </div>

      <div>
        <p className="inline-block bg-yellow-100 text-[#FF2EFF] text-xs font-semibold px-2 py-1 rounded-md mb-2">
          OPPORTUNITY
        </p>
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
          {summary.length > 180 ? summary.slice(0, 180) + "..." : summary}
        </p>
      </div>

      <div className="mt-5 text-right">
        <Link
          to={`/all-jobs/${_id}`}
          className="inline-block btn-style text-white text-sm font-medium px-4 py-2 rounded-lg "
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}

export default JobsCard;
