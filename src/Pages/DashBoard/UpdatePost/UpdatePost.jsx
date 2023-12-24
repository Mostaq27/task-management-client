import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";


const UpdatePost = () => {
    const { user} = useAuth()
    const location = useLocation();
    const navigate = useNavigate();
    const myPost = useLoaderData();
    const {  title, deadline,priority,description, _id} = myPost || {};


    const handelAddTask = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;
        const UpdateTask = { title, description, deadline, priority, email: user?.email }
        console.log(UpdateTask)

        fetch(`https://task-management-server-two-phi.vercel.app/tasks/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    toast.success('Task Updated Successfully')
                    navigate(location?.state ? location?.state : '/dashboard/myPostedTask')
                }
            })
    }

    return (
        <div>
              <div className="px-10 bg-slate-200 rounded-md mt-10">

<form onSubmit={handelAddTask} className="card-body">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="form-control">
            <label className="label">
                <span className="label-text"> Task Title</span>
            </label>
            <input type="text" name="title" defaultValue={title} placeholder="Task Title" className="input input-bordered" required />
        </div>
      
        
        <div className="form-control">
            <label className="label">
                <span className="label-text">Priority</span>
            </label>
            <select
                name="priority"
                className="input input-bordered"
                defaultValue={priority}
            >
                <option selected>Priority</option>
                <option>Low</option>
                <option>Moderate</option>
                <option>High</option>
            </select>

        </div>


        <div className="form-control">
            <label className="label">
                <span className="label-text">Deadline</span>
            </label>
            <input type="date" placeholder="Date" defaultValue={deadline} name="deadline" className="input input-bordered" required />
        </div>

        <div className="form-control">
        <label className="label">
            <span className="label-text">Description</span>
        </label>
        <textarea className="textarea textarea-bordered h-24" defaultValue={description} name="description" placeholder="Description"></textarea>
    </div>

    </div>
   

    <div className="form-control mt-6">
        <input className="btn btn-block bg-accent  my-5 text-white hover:bg-[#164f3f]" type="submit" value="Update Task" />
    </div>
</form>
</div>
        </div>
    );
};

export default UpdatePost;