import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";

function JobDetails() {
  const job = useLoaderData();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const { _id, title, summary, coverImage, postedBy, category, userEmail } =
    job;

  const handleAccept = async () => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please log in to accept this job.",
      });
      navigate("/login");
      return;
    }

    const acceptedJob = {
      jobId: _id,
      title,
      summary,
      postedBy,
      category,
      acceptedBy: user.email,
    };
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 p-5 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {title}
        </h1>

        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-md">
            OPEN FOR PROPOSALS
          </span>
        </div>

        {coverImage && (
          <div className="w-full h-86 mb-6 overflow-hidden rounded-lg">
            <img
              src={coverImage}
              alt={title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Description
        </h2>
        <p className="text-gray-600 leading-relaxed">{summary}</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-md p-5">
          <div className="flex justify-between text-sm text-gray-500 border-b pb-3 mb-4">
            <p>Pay</p>
            <p className="font-semibold text-gray-800">$15/hr</p>
          </div>

          <button
            onClick={handleAccept}
            className="w-full btn-style text-white py-3 rounded-lg font-semibold transition-all"
          >
            Accept Job
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={coverImage}
              alt={postedBy}
              className="w-12 h-12 rounded-full object-cover border"
            />
            <div>
              <h3 className="font-semibold text-gray-800">{postedBy}</h3>
              <p className="text-xs text-gray-500">{userEmail}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 border-t pt-3">
            <p>Projects Completed</p>
            <p className="font-medium text-right">1</p>
            <p>Freelancers Worked With</p>
            <p className="font-medium text-right">1</p>
            <p>Last Project</p>
            <p className="font-medium text-right">Aug 6, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
