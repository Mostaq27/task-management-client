import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { FaRegUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";


const Navbar = () => {

    const { user, logOut } = useAuth()
    const handelLogout = () => {
        logOut()
            .then(() => {
                toast.success('Successfully Logout')
            }).catch((error) => {
                toast.error(error)
            });
    }

    const navLink = <>

        <li><NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending " : isActive ? " text-[#14a077]" : "lg:text-white font-normal"}>Home
        </NavLink> </li>

       { user?.email ?  <li><NavLink to="/dashboard" className={({ isActive, isPending }) =>
            isPending ? "pending " : isActive ? " text-[#14a077]" : "lg:text-white font-normal"}>Dashboard
        </NavLink> </li> :"" }

        <li><NavLink to="/task" className={({ isActive, isPending }) =>
            isPending ? "pending " : isActive ? " text-[#14a077]" : "lg:text-white font-normal"}>Tasks
        </NavLink> </li>
    </>



    
    return (
        <div className="navbar max-w-screen-lg  lg:px-10 fixed lg:bg-opacity-10 bg-opacity-90 z-10 bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to="/">
                <a className="btn btn-ghost text-xl">Task Manager</a>
                </Link>

            </div>

            <div className="navbar-center md:block hidden ">
                <ul className="flex gap-5 text-lg font-semibold ">
                    {navLink}
                </ul>
            </div>

            <div className="navbar-end">

                {
                    user?.email ?

                        <div className="dropdown  dropdown-end">
                            <label tabIndex={0} className="btn border-[#14a077]  btn-ghost btn-circle avatar ">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64">
                                <li><a>{user.displayName}</a></li>
                                <li><a>{user.email}</a></li>
                                <li><a onClick={handelLogout}>Logout</a></li>
                            </ul>
                        </div>

                        :
                        <Link to="login">
                            <button className="btn bg-white border rounded-full  border-[#14a077] hover:bg-[#2a346f] hover:text-white  ">
                                <div className="text-2xl">
                                <FaRegUserCircle />
                                </div>
                                Login</button>
                        </Link>


                }


            </div>
        </div>
    );
};

export default Navbar;