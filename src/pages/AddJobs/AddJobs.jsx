import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const AddJobs = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newJob = {
      title: form.title.value,
      postedBy: user?.email,
      category: form.category.value,
      summary: form.summary.value,
      coverImage: form.coverImage.value,
      userEmail: form.userEmail.value,
      createdAt: new Date(),
    };

    form.reset();

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
            title: "Job Added Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch(() => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Failed to Save Job",
          showConfirmButton: true,
        });
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-3xl border border-gray-100 transition-all duration-300 hover:shadow-purple-200">
        <h2 className="text-3xl font-bold text-center mb-8">Post a New Job</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block font-medium mb-1 text-gray-700">
                Job Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter job title"
                className="w-full rounded-xl border-gray-300 focus:outline-none p-3 border"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-gray-700">
                Category
              </label>
              <select
                name="category"
                className="w-full rounded-xl border-gray-300 focus:outline-none p-3 border"
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
                <option value="Writing & Translation">
                  Writing & Translation
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1 text-gray-700">
                Posted By
              </label>
              <input
                type="text"
                name="postedBy"
                defaultValue={user?.displayName || ""}
                placeholder="Job post creator’s name"
                className="w-full rounded-xl border-gray-300 focus:outline-none p-3 border"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-gray-700">
                User Email
              </label>
              <input
                type="email"
                name="userEmail"
                defaultValue={user?.email || ""}
                placeholder="Enter your email"
                className="w-full rounded-xl border-gray-300 focus:outline-none p-3 border"
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Cover Image URL
            </label>
            <input
              type="url"
              name="coverImage"
              placeholder="Paste image URL (e.g. imgbb link)"
              className="w-full rounded-xl border-gray-300 focus:outline-none p-3 border"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Short Description
            </label>
            <textarea
              name="summary"
              placeholder="Write a short job description..."
              className="w-full rounded-xl border-gray-300 focus:outline-none p-3 border resize-none"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full btn-style text-white py-3 rounded-xl font-semibold "
          >
            Add Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJobs;
