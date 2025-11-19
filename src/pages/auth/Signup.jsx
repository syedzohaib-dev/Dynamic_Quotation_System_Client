import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper.js';
import { API_PATHS, BASE_URL } from '../../utils/apiPath.js';
import { errorToast, successToast } from '../../utils/toast.js';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        companyName: "",
        email: "",
        password: "",
        confirmPassword: "",
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

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.companyName.trim()) {
            newErrors.companyName = "Company name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Email is invalid";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        return newErrors;
    };

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
                `${BASE_URL}${API_PATHS.AUTH.SIGNUP}`,
                formData
            );

            successToast("Signup successful!");
            setFormData({
                name: "",
                companyName: "",
                email: "",
                password: "",
                confirmPassword: ""
            });
            setTimeout(() => {
                navigate("/login");
            }, 1500);

        } catch (err) {
            console.log("Signup Error:", err);

            const message =
                err.response?.data?.message || "Signup failed. Try again.";

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
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">SIGNUP</h1>
                        <p className="text-sm sm:text-base text-gray-600">Enter your email and password to signup</p>
                    </div>

                    {/* Signup Form */}
                    <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                        {/* Name Input */}
                        <div className=''>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full px-3 sm:px-4 py-2 sm:py-2 text-sm sm:text-base border rounded-lg hover:border-blue-400 outline-none ${errors.name ? 'border-red-400' : 'border-gray-300'}`}
                                placeholder="Enter your full name"
                            />
                            {errors.name && <p className='text-red-500 text-xs mt-1'>{errors.name}</p>}
                        </div>

                        {/* Company Name Input */}
                        <div className=''>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Company Name
                            </label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                className={`w-full px-3 sm:px-4 py-2 sm:py-2 text-sm sm:text-base border rounded-lg hover:border-blue-400 outline-none ${errors.companyName ? 'border-red-400' : 'border-gray-300'}`}
                                placeholder="Enter your company name"
                            />
                            {errors.companyName && <p className='text-red-500 text-xs mt-1'>{errors.companyName}</p>}
                        </div>

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

                        {/* Confirm Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={`w-full px-3 sm:px-4 py-2 sm:py-2 text-sm sm:text-base border rounded-lg hover:border-blue-400 outline-none ${errors.confirmPassword ? 'border-red-400' : 'border-gray-300'}`}
                                placeholder="Confirm your password"
                            />
                            {errors.confirmPassword && <p className='text-red-500 text-xs mt-1'>{errors.confirmPassword}</p>}
                        </div>

                        {/* Signup Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 text-white py-2 sm:py-3 px-4 rounded-lg outline-none hover:border-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{ backgroundColor: "var(--color-primary-500)" }}
                        >
                            {loading ? "Signing Up..." : "SIGNUP"}
                        </button>
                    </form>

                    {/* Login Link */}
                    <div className="text-center mt-4 sm:mt-6">
                        <p className="text-xs sm:text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                                Login
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

export default Signup;