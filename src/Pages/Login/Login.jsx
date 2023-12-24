import { Link, useLocation, useNavigate} from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ImSpinner } from "react-icons/im";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
const Login = () => {

    const { googleSingUp, signIn ,loading} = useAuth()
    const location = useLocation();
    const navigate = useNavigate();

    const handelLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            toast.error('Please most be at 6 characters');
            return
        } else if (!/(?=.*[A-Z])(?=.*[_.!@$*=-?#])/.test(password)) {
            toast.error('Your password should have at lest one upper case and special character')
            return;
        }
        signIn(email, password)
            .then(res => {
                console.log(res.user)
                const user = { email };

                axios.post('https://task-management-server-two-phi.vercel.app/user', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/')
                            toast.success('Successfully Login!')
                        }
                    })

            })
            .catch(error => {
                if (error) {
                    toast.error(error.message)
                }

            })

    }

    const handelGoogleLogIn = () => {
        googleSingUp()
            .then(res => {
                const loggedInUser = res.user.email
                const user = { email: loggedInUser };
                axios.post('https://task-management-server-two-phi.vercel.app/user', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/')
                            toast.success('Successfully Login!')
                        }
                    })
            })
            .catch(error => {
                if (error) {
                    toast.error(error.message)
                }

            })

    }

    return (
        <div>
        <Helmet>
            <title> New | Login </title>
        </Helmet>

<div className="flex sm:flex-row">
   
  
    <div className="sm:flex-1 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-96">
            <h2 className="text-2xl font-semibold text-black mb-4 text-center"> Please Login</h2>
            
            <form onSubmit={handelLogin}>
                <div className="mb-4 relative">
                    <input
                        type="text"
                        name="email"
                        placeholder="Your Email"
                        className="w-full pl-4 pr-3 py-2 border rounded-md "
                        required
                        
                    />
                </div>
                <div className="mb-6 ">
                    <input
                        type="password"
                        name="password"
                        placeholder="*****"
                        className="w-full pl-4 pr-3 py-2 border rounded-md"
                        required
                      
                    />
                </div>
                <button
                    type="submit" className="w-full bg-accent text-black py-2 rounded-md hover:bg-info focus:outline-none focus:ring focus:border-blue-300" >
                   {loading ? (
                            < ImSpinner className='animate-spin m-auto' />
                          ) : (
                            ' Login'
                          )}
                  
                </button>
                <div className='space-y-1'>
                    <button className='text-xs hover:underline hover:text-info text-gray-400'>
                        Forgot password?
                    </button>
                </div>
                <div className="divider ">Or Log in With</div>
                <div onClick={handelGoogleLogIn}className='flex justify-center items-center space-x-2 border  m-2 p-2 border-gray-300 border-rounded cursor-pointer'>                   
                    <FcGoogle size={20} />
                    <p> Google</p>
                </div>
             
                <p className='px-6 text-sm text-center text-gray-400'>
                    Don't have an account ?{' '}
                    <Link
                        to='/signUp'
                        className='hover:underline text-accent hover:text-info '
                    >
                        Sign up
                    </Link>
                    
                </p>

            </form>
        </div>



    </div>
</div>




    </div>
    );
};

export default Login;