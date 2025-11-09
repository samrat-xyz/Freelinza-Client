import React, { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

function AddJobs() {
  const { user } = use(AuthContext);

  const handleSubmite = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const postedBy = e.target.postedBy.value;
    const category = e.target.category.value;
    const summary = e.target.summary.value;
    const coverImage = e.target.coverImage.value;
    const userEmail = e.target.userEmail.value;

    const newJob = {
      title,
      postedBy,
      category,
      summary,
      coverImage,
      userEmail,
    };

    e.target.reset();

    fetch("http://localhost:3030/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Failed to save job",
          showConfirmButton: true,
        });
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4 my-6">
      <div className="bg-white shadow-lg p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Post a New Job
        </h2>

        <form onSubmit={handleSubmite} className="space-y-4">
          <div>
            <label className="block font-medium mb-1 text-gray-600">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter job title"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-600">
              Posted By
            </label>
            <input
              type="text"
              name="postedBy"
              defaultValue={user.displayName}
              placeholder="Job post creator’s name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-600">
              Category
            </label>
            <select
              name="category"
              className="input input-bordered w-full"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Writing & Translation">Writing & Translation</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-600">
              Short Description
            </label>
            <textarea
              name="summary"
              placeholder="Write a short job description"
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            ></textarea>
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-600">
              Cover Image URL
            </label>
            <input
              type="text"
              name="coverImage"
              placeholder="Paste imgbb image URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-600">
              User Email
            </label>
            <input
              type="email"
              name="userEmail"
              defaultValue={user.email}
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <button type="submit" className="btn btn-style w-full mt-4">
            Add Job
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddJobs;
