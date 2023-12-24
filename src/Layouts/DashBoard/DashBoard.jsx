import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { BiTask } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";




const DashBoard = () => {
    const { logOut, user } = useAuth()
    return (
        <div className="flex flex-col  sm:flex-row">
            <Helmet>
                <title> Task Manager | DashBoard </title>
            </Helmet>
            {/*  dashboard Side bar */}
            <div className="w-full md:ml-10  md:block sm:w-56 min-h-screen text-slate-100 bg-[#5ae253] bg-opacity-30">

                <div className="mt-10">
                    <div className="avatar online pl-10">
                        <div className="w-28 rounded-full ">
                            <img src={user.photoURL} />
                        </div>
                        <div>

                        </div>
                    </div>
                    <p className="text-sm ">Name: {user?.displayName}</p>
                    <p className="text-sm ">Email: {user?.email}</p>
                </div>

                <ul className="menu lg:p-3 text-black gap-2 font-semibold">
                    <>
                        <li><NavLink to="/dashboard/newTask"> <BiTask size={20} /> New Tasks</NavLink> </li>
                        <li><NavLink to="/dashboard/myPostedTask"> <FaClipboardList size={20} />To-do List</NavLink> </li>
                    </>



                    {/* Shared NavLink */}
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink onClick={logOut} to='/login' > <FontAwesomeIcon icon={faRightFromBracket} />Log Out</NavLink> </li>

                </ul>
            </div>

            {/*dashboard Content  */}
            <div className="flex-1 p-8 bg-white">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashBoard;