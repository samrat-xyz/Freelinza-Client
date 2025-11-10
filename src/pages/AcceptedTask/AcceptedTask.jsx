import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Swal from 'sweetalert2';
import Loading from '../../components/Loading/Loading';
import { AiTwotoneDelete } from "react-icons/ai";

function AcceptedTask() {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(`http://localhost:3030/my-accepted-tasks?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          setTasks(data);
          setLoading(false);
        });
    }
  }, [user]);

  const handleRemove = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will remove this task!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc2626',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, remove it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3030/my-accepted-tasks/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire('Removed!', 'Task has been removed.', 'success');
              setTasks(tasks.filter(task => task._id !== id));
            }
          });
      }
    });
  };

  if (loading) {
    return (
      <Loading></Loading>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 p-5 space-y-4 h-screen">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No accepted tasks yet.</p>
      ) : (
        tasks.map(task => (
          <div
            key={task._id}
            className="bg-base-200 rounded-xl shadow-lg p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-xl transition-shadow"
          >
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800">{task.title}</h2>
              <p className="text-gray-600 mt-1">{task.summary}</p>
              <div className="flex flex-wrap text-gray-500 text-sm mt-2 gap-4">
                <span>Posted By: {task.postedBy}</span>
                <span>Category: {task.category}</span>
              </div>
            </div>
            <button
              onClick={() => handleRemove(task._id)}
             className='cursor-pointer'
            >
              <AiTwotoneDelete size={28} color='red'/>

            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default AcceptedTask;
