
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaUserCheck ,FaGithub} from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdMarkEmailRead } from "react-icons/md";
import { ImSpinner } from "react-icons/im";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const SignUp = () => {
    const { googleSingUp, createUser, userUpdateProfile,loading,logOut } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handelSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.value;

        if (password.length < 6) {
            toast.error('Please most be at 6 characters');
            return
        } else if (!/(?=.*[A-Z])(?=.*[_.!@$*=-?#])/.test(password)) {
            toast.error('Your password should have at lest one upper case and special character')
            return;
        }

        createUser(email, password)

            .then(res => {
                console.log(res.user)
                userUpdateProfile(name, image )
                    .then(res => {
                        console.log(res)
                        navigate(location.state ? location.state : '/login')
                        toast.success('Successfully Registration!');

                        logOut()
                        .then (res => res)
                        .then (error => console.log(error))
                    })
            })

            .catch(error => {

                toast.error(error.message);


            })


    }

    const handelGoogleSignUp = () => {
        googleSingUp()
            .then(res => {
                console.log(res.user)
                if (res.user) {
                    navigate(location.state ? location.state : '/')
                    toast.success('Successfully Registration!')
                    return
                }
            })
            .catch(error => {
                if (error) {
                    toast.error(error.message)
                    return
                }

            })

    }

    return (
        <div>
        <Helmet>
            <title> New | Register </title>
        </Helmet>

        <div className="flex flex-col sm:flex-row">
            {/* Left half for the image */}

            {/* Right half for the login form */}
            <div className="sm:flex-1 min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-96">
                    <h2 className="text-2xl text-black text-center font-semibold mb-4">Sign Up</h2>
                    <form onSubmit={handelSignUp}>

                        <div className="mb-2 ">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Full Name"
                                className="w-full pl-4 pr-3 py-2 border rounded-md focus:outline-none focus:border-accent"
                                required
                            />
                        </div>
                        <div className="mb-3 ">
                            <input
                                type="text"
                                name="email"
                                placeholder="Your Email"
                                className="w-full pl-4 pr-3 py-2 border rounded-md focus:outline-none focus:border-accent"
                                required
                            />
                        </div>
                        <div className="mb-3 ">
                            <input
                                type="password"
                                name="password"
                                placeholder="*****"
                                className="w-full pl-4 pr-3 py-2 border rounded-md focus:outline-none focus:border-accent"
                                required
                            />
                        </div>

                        <div>
                            <input
                                className="mb-3 input-bordered cursor-pointer file-input-bordered file-input-accent"
                                required
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*' />
                        </div>
                    
                        <button type="submit" className="w-full font-medium bg-accent text-black py-2 rounded-md hover:bg-info focus:outline-none focus:ring focus:border-blue-300" >
                           
                             {loading ? (
                            < ImSpinner className='animate-spin m-auto' />
                          ) : (
                            ' Create Account'
                          )}
                            
                        </button>

                        <div className="divider"> Sign Up With</div>
                        <div onClick={handelGoogleSignUp}
                            className='flex justify-center items-center space-x-2 border  m-2 p-2 border-gray-300 border-rounded cursor-pointer' >
                            <FcGoogle size={20} />
                            <p>  Google</p>
                        </div>
                        <div className='flex justify-center items-center space-x-2 border  m-2 p-2 border-gray-300 border-rounded cursor-pointer'>                   
                    < FaGithub  size={20} />
                    <p> GitHub</p>
                </div>

                        <p className='px-6 text-sm text-center text-gray-400'>
                            Already have an account ?{' '}
                            <Link to='/login' className='hover:underline text-accent hover:text-[#14a077]'>  Login
                            </Link>

                        </p>

                    </form>
                </div>



            </div>
        </div>




    </div>
    );
};

export default SignUp;