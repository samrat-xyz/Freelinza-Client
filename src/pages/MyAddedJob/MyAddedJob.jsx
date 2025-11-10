import React, { useEffect, useState, use } from "react";
import { AuthContext } from "../../context/AuthContext";
import { AiTwotoneDelete, AiOutlineEdit } from "react-icons/ai";
import Swal from "sweetalert2";

function MyAddedJob() {
  const { user } = use(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null); 

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3030/jobs?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setJobs(data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3030/jobs/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setJobs((prev) => prev.filter((job) => job._id !== id));
              Swal.fire("Deleted!", "Your job has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleUpdate = (job) => {
    setSelectedJob(job); 
    document.getElementById("update_modal").showModal(); 
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const updatedJob = {
      title: e.target.title.value,
      category: e.target.category.value,
      summary: e.target.summary.value,
      coverImage: e.target.coverImage.value,
    };

    fetch(`http://localhost:3030/jobs/${selectedJob._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          
          setJobs((prev) =>
            prev.map((job) =>
              job._id === selectedJob._id ? { ...job, ...updatedJob } : job
            )
          );

          // SweetAlert2 confirmation
          Swal.fire({
            icon: "success",
            title: "Updated!",
            text: "Your job has been successfully updated.",
            timer: 2000,
            showConfirmButton: false,
          });
        }
        document.getElementById("update_modal").close();
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="max-w-5xl mx-auto mt-10 p-5 space-y-4 min-h-screen">
        {jobs.length === 0 ? (
          <p className="text-center ">No jobs added yet.</p>
        ) : (
          jobs.map((job) => (
            <div
              key={job._id}
              className="bg-base-200 rounded-xl shadow-lg p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-xl transition-shadow"
            >
              <div className="flex-1 flex flex-col md:flex-row items-start md:items-center gap-4">
                <img
                  src={
                    job.coverImage ||
                    "https://via.placeholder.com/120x80?text=No+Image"
                  }
                  alt={job.title}
                  className="w-full md:w-32 h-24 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h2 className="text-lg font-semibold ">
                    {job.title}
                  </h2>
                  <p className=" mt-1">{job.summary}</p>
                  <div className="flex flex-wrap text-sm mt-2 gap-4">
                    <span>Posted By: {job.postedBy}</span>
                    <span>Category: {job.category}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-3 md:mt-0">
                <button
                  onClick={() => handleUpdate(job)}
                  className="cursor-pointer"
                >
                  <AiOutlineEdit size={28} color="blue" title="Update" />
                </button>
                <button
                  onClick={() => handleDelete(job._id)}
                  className="cursor-pointer"
                >
                  <AiTwotoneDelete size={28} color="red" title="Delete" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <dialog id="update_modal" className="modal">
        <form
          onSubmit={handleUpdateSubmit}
          className="modal-box flex flex-col gap-4"
        >
          <h3 className="font-bold text-lg">Update Job</h3>

          <input
            type="text"
            name="title"
            defaultValue={selectedJob?.title}
            placeholder="Job Title"
            className="input input-bordered w-full"
            required
          />

          <input
            type="text"
            name="category"
            defaultValue={selectedJob?.category}
            placeholder="Category"
            className="input input-bordered w-full"
            required
          />

          <textarea
            name="summary"
            defaultValue={selectedJob?.summary}
            placeholder="Job Summary"
            className="textarea textarea-bordered w-full"
            required
          />

          <input
            type="text"
            name="coverImage"
            defaultValue={selectedJob?.coverImage}
            placeholder="Cover Image URL"
            className="input input-bordered w-full"
          />

          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
            <button
              type="button"
              className="btn"
              onClick={() =>
                document.getElementById("update_modal").close()
              }
            >
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default MyAddedJob;
