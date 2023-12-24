<div>
<div className="px-5 pt-5 rounded-lg  bg-[#c6e5eb] ">

<div className="space-y-2">
  <h2 className="card-title text-emerald-600 text-2xl">{task}</h2>
  <p><span className="font-bold">Priority:</span> {priority}</p>
  <p><span className="font-bold">DeadLine:</span> {deadline}</p>
  <p><span className="font-bold">Description:</span> {description}</p>

</div>
<div className="card-actions justify-between">
  <Link to={`/dashboard/updateTask/${_id}`}>
  <button className="btn btn-primary"></button>
  </Link>
  <button onClick={() => handelDelete(_id)} className="btn bg-[#a01420]  my-5 text-white hover:bg-[#4f161b]">Delete</button>
</div>
</div>








{/* ====>   */}

<div className="card w-96 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title">{task}!</h2>
    <p><span className="font-normal">Priority:</span>{priority}</p>
    <p><span className="font-semibold">DeadLine:</span> {deadline}</p>
  <p><span className="font-semibold">Description:</span> {description}</p>

    <div className="card-actions justify-end">

    <Link to={`/dashboard/updateTask/${_id}`}>
  <button className="btn btn-primary"><FaEdit></FaEdit></button>
  </Link>
      <button onClick={() => handelDelete(_id)} className="btn btn-ghost"><FaTrashAlt ></FaTrashAlt></button>

    </div>
  </div>
</div>


</div>

