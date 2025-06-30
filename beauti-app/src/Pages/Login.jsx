import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://selfy-snap.onrender.com/api/auth/login', formData);

            const { user, token } = res.data;

            if (!token || !user) {
                toast.error("Invalid login response from server");
                return;
            }

            try {
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
            } catch (storageErr) {
                console.error("❌ Failed to save token:", storageErr);
            }

            toast.success("Login Successful!");

            setTimeout(() => {
                if (user.role === "admin" || user.role === "seller") {
                    navigate("/admin/dashboard");
                } else {
                    navigate("/");
                }
            }, 100); // short delay
        } catch (err) {
            console.error("Login Error:", err.response?.data || err.message);
            toast.error(err.response?.data?.error || "Login failed");
        }
    };


    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded shadow-md w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-500">Login to SelfySnap</h2>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-200"
                >
                    Login
                </button>
            </form>

            {/* ✅ Toast container */}
            <ToastContainer position="bottom-right" />
        </div>
    );
};

export default Login;
