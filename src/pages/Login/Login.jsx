import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router"; 
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const {loginUser, googleLogin } = use(AuthContext);
  const handleGoogleLogin = () => {
    googleLogin();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email,password)
  };
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-base-200 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none "
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none "
              required
            />
          </div>

          {/* Forget Password */}
          <div className="text-right">
            <span className="text-sm hover:underline cursor-pointer">
              Forget Password?
            </span>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full text-white py-2 rounded-lg font-semibold btn-style"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition duration-300 cursor-pointer"
        >
          <FcGoogle className="text-2xl" />
          <span className="font-medium text-gray-700">
            Continue with Google
          </span>
        </button>

        {/* Don't have an account */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link to="/signin" className="font-medium hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
