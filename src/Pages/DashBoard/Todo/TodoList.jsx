import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaArrowAltCircleRight, FaEdit } from "react-icons/fa";
import { MdOutlineLowPriority, MdDateRange } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";



// eslint-disable-next-line react/prop-types
const TodoList = ({ myPost, myPosts, setMyPosts }) => {
  const { user } = useAuth();

  const { title, deadline, priority, description, status,  _id } = myPost || {};

  const handleDelete = id => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://task-management-server-two-phi.vercel.app/tasks/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });

              // eslint-disable-next-line react/prop-types
              const remaining = myPosts.filter(item => item._id !== id);
              setMyPosts(remaining);


            }
          })

      }
    });

  }


  const handleOngoing = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "To Ongoing this Task",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Ongoing It!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(
            `https://task-management-server-two-phi.vercel.app/tasks/ongoing/${id}`
          )
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              axios
                .get(
                  "https://task-management-server-two-phi.vercel.app/tasks"
                )
                .then((res) => {
                  const filteredTask = res.data.filter(
                    // eslint-disable-next-line react/prop-types
                    (myPost) => myPost.email === user?.email
                  );
                  setMyPosts(filteredTask);
                });

              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Update task status successfully.`,
                showConfirmButton: false,
                timer: 1000,
              });
            }
            console.log(res.data);
          });
      }
    });
  };

  const handleComplete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "To complete this Task",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Complete It!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(
            `https://task-management-server-two-phi.vercel.app/tasks/complete/${id}`
          )
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              axios
                .get(
                  "https://task-management-server-two-phi.vercel.app/tasks"
                )
                .then((res) => {
                  const filteredTask = res.data.filter(
                    // eslint-disable-next-line react/prop-types
                    (myPost) => myPost.email === user?.email
                  );
                  setMyPosts(filteredTask);
                });

              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Update task status successfully.`,
                showConfirmButton: false,
                timer: 1000,
              });
            }
            console.log(res.data);
          });
      }
    });
  };


  return (


    <div className="my-4">
      <div>
        <div className="card h-60 bg-base-100 ">
          <div className="card-body ">
            <h2 className="card-title mr-6">
              {title}
              <span className="bg-blue-500 p-2 rounded-xl text-white">
                {status}
              </span>
            </h2>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <MdDateRange size={24} />
                <p>{deadline}</p>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineLowPriority size={24} />
                <p>{priority}</p>
              </div>
            </div>

            <p>{description}</p>
            <div className="flex justify-between items-center">
              <div className="card-actions items-center">
                <Link to={`/dashboard/updateTask/${_id}`}>
                  <button>
                    <FaEdit size={26} />
                  </button>
                </Link>
                <button onClick={() => handleDelete(_id)}>
                  <FaTrashAlt size={26} />
                </button>
              </div>
              <div className="space-x-3">
                <button
                  onClick={() => handleOngoing(_id)}
                  title="Ongoing"
                >
                  <FaArrowAltCircleRight size={26} />
                </button>
                <button
                  onClick={() => handleComplete(_id)}
                  title="Completed"
                >
                  <FaArrowAltCircleRight size={26} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="card w-96 bg-base-300 shadow-md text-neutral-content">
    //   <div className="card-body items-center text-center">
    //     <div className="text-black ">
    //       <h2 className="card  text-center"> <span className="font-semibold ">Task:</span> {task}</h2>
    //       <p><span className="font-semibold">Priority:</span> {priority}</p>
    //       <p><span className="font-semibold">DeadLine:</span> {deadline}</p>
    //       <p><span className="font-semibold">Description:</span> {description}</p>
    //     </div>

    //     <div className="card-actions justify-end">

    //       <Link to={`/dashboard/updateTask/${_id}`}>
    //         <button className="btn text-white bg-teal-400  border-0 rounded-full"><FaEdit></FaEdit></button>
    //       </Link>
    //       <button onClick={() => handelDelete(_id)} className="btn text-white bg-rose-500  border-0 rounded-full"><FaTrashAlt ></FaTrashAlt></button>

    //     </div>
    //   </div>
    // </div>
  );
};

export default TodoList;