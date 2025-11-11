import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

function JobDetails() {
  const job = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { _id, title, summary, coverImage, postedBy, category, userEmail } = job;

  const handleAccept = () => {
    if (!user?.email) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "You need to login to accept this job.",
        confirmButtonText: "Go to Login",
      }).then(() => {
        navigate("/login");
      });
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
    fetch("https://freelinza-server.vercel.app/my-accepted-tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(acceptedJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire(
            "Job Accepted!",
            "You have successfully accepted the job.",
            "success"
          ).then(() => {
            navigate("/my-accepted-tasks");
          });
        } else {
          Swal.fire(
            "Error",
            "You have already accepted this job.",
            "error"
          );
        }
      })
      .catch((error) => {
       
        Swal.fire(
          "Error",
          "There was an issue accepting the job. Please try again later.",
          "error"
        );
      });
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 p-5 grid grid-cols-1 md:grid-cols-3 gap-8">
     
      <div className="md:col-span-2 border-2 border-[#800080] rounded-xl shadow-md p-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{title}</h1>

        <div className="flex items-center gap-2 mb-5">
          <span className="text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-md">
            OPEN FOR PROPOSALS
          </span>
        </div>

        {coverImage && (
          <div className="w-full h-80 mb-6 overflow-hidden rounded-lg">
            <img
              src={coverImage}
              alt={title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <h2 className="text-xl font-semibold  mb-3">Description</h2>
        <p className=" leading-relaxed">{summary ?? "No description provided."}</p>
      </div>

     
      <div className="space-y-6">
        <div className="rounded-xl shadow-md p-5 border-2 border-[#800080] ">
          <div className="flex justify-between text-sm border-b pb-3 mb-4">
            <p>Pay</p>
            <p className="font-semibold ">$15/hr</p>
          </div>

          <button
            onClick={handleAccept}
            className="w-full btn-style text-white py-3 rounded-lg font-semibold transition-all"
          >
            Accept Job
          </button>
        </div>

        <div className="border-2 border-[#800080] rounded-xl shadow-md p-5">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={coverImage}
              alt={postedBy}
              className="w-12 h-12 rounded-full object-cover border-2 border-[#800080]"
            />
            <div>
              <h3 className="font-semibold ">{postedBy}</h3>
              <p className="text-xs text-gray-200">{userEmail}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm border-t pt-3">
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
