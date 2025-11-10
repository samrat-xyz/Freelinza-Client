import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import Loading from "../../components/Loading/Loading";

function AcceptedTask() {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(`http://localhost:3030/my-accepted-tasks?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setTasks(data);
          setLoading(false);
        });
    }
  }, [user]);

  const handleRemove = (id) => {
    Swal.fire({
      title: "Mark as Done?",
      text: "Once marked as done, this task will be removed from your list.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Done!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3030/my-accepted-tasks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Completed!",
                text: "Great job! The task has been marked as done.",
                icon: "success",
                showConfirmButton: false,
                timer: 1800,
                timerProgressBar: true,
              });
              setTasks(tasks.filter((task) => task._id !== id));
            }
          });
      }
    });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 p-5 space-y-4 h-screen">
      {tasks.length === 0 ? (
        <p className="text-center ">No accepted tasks yet.</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task._id}
            className="bg-base-200 rounded-xl shadow-lg p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-xl transition-shadow"
          >
            <div className="flex-1">
              <h2 className="text-lg font-semibold ">
                {task.title}
              </h2>
              <p className=" mt-1">{task.summary}</p>
              <div className="flex flex-wrap text-sm mt-2 gap-4">
                <span>Posted By: {task.postedBy}</span>
                <span>Category: {task.category}</span>
              </div>
            </div>
            <button
              onClick={() => handleRemove(task._id)}
              className="cursor-pointer px-4 py-2 bg-green-400 text-white font-semibold rounded-lg  transition-colors flex items-center gap-2"
            >
              Done
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default AcceptedTask;
