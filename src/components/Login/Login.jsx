import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../main";
import toast from "react-hot-toast";

const Login = () => {
    const { loginUser, googleLogin, setLoading, setUser } = use(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success('User logged in successfully!');
                form.reset();
                navigate(location?.state?.from?.pathname || "/");
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                toast.error(error.message);
                setLoading(false);
            });
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success('User logged in successfully!');
                navigate(location?.state?.from?.pathname || "/");
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                toast.error(error.message);
                setLoading(false);
            });
    };

  return (
    <div className=" bg-emerald-50  text-center min-h-screen flex items-center justify-center">
      <div className="p-4 bg-white rounded-lg shadow-sm space-y-2 w-1/3 mx-auto border border-base-300">
        <h1 className="text-2xl font-bold text-emerald-500">Login here!</h1>
        <form onSubmit={handleLogin} className=" bg-base-100  space-y-2">
          <input type="email" className="input" name="email" placeholder="Your Email" />
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Your Password"
                />
                <div>
                  <a className="link link-hover  text-blue-600 font-medium">
                    Forgot password?
                  </a>
                </div>
                <button className="btn bg-emerald-400 hover:bg-emerald-600 text-white">
                  Login
                </button>
            
          </form>
        
        <div>
          New here?{" "}
          <Link to="/register" className="text-blue-600 font-medium underline">
            Register
          </Link>
        </div>
        <div>
          <p>or</p>
        </div>

        <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
