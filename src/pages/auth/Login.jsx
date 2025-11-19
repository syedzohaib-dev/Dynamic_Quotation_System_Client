import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper.js';
import { API_PATHS, BASE_URL } from '../../utils/apiPath.js';
import axios from 'axios';
import { errorToast, successToast } from '../../utils/toast.js';

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};



    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  // Submit form + API integration
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    if (loading) return;

    setLoading(true);

    try {
      const response = await axios.post(
        `${BASE_URL}${API_PATHS.AUTH.LOGIN}`,
        formData
      );
      console.log(response?.data?.data?.user)

      successToast("Login successful!");

      // setTimeout(() => {
      //   navigate("/dashboard/user"); 
      // }, 1500);

    } catch (err) {
      console.log("Login Error:", err);

      const message =
        err.response?.data?.message || "Login failed. Try again.";

      errorToast(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row">
      {/* Left Side - Signup Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-4 sm:p-6 lg:p-8 order-2 lg:order-1">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">LOGIN</h1>
            <p className="text-sm sm:text-base text-gray-600">Enter your email and password to Login</p>
          </div>

          {/* Signup Form */}
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2 sm:py-2 text-sm sm:text-base border rounded-lg hover:border-blue-400 outline-none ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
                placeholder="Enter your email"
              />
              {errors.email && <p className='text-red-500 text-xs mt-1'>{errors.email}</p>}
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2 sm:py-2 text-sm sm:text-base border rounded-lg hover:border-blue-400 outline-none ${errors.password ? 'border-red-400' : 'border-gray-300'}`}
                placeholder="Enter your password"
              />
              {errors.password && <p className='text-red-500 text-xs mt-1'>{errors.password}</p>}
            </div>



            {/* Signup Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 sm:py-3 px-4 rounded-lg outline-none hover:border-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: "var(--color-primary-500)" }}
            >
              {loading ? "LOGIN IN..." : "LOGIN"}
            </button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-4 sm:mt-6">
            <p className="text-xs sm:text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-semibold">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Background with Image */}
      <div
        className="w-full lg:w-1/2 order-1 lg:order-2 min-h-[40vh] lg:min-h-screen"
        style={{
          backgroundImage: `url("/images/signup-frame.svg")`,
          backgroundPosition: "center center",
        }}
      >
      </div>
    </div>
  );
};

export default Login;