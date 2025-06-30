import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "select role"
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://selfy-snap.onrender.com/api/auth/register", formData);
            toast.success("Registered successfully!");
            setTimeout(() => navigate("/login"), 2000); // ✅ Redirect after 2 sec
        } catch (error) {
            toast.error(error.response?.data?.error || "Registration failed!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Register - SelfySnap</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <select
                    name="role"
                    className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    value={formData.role}
                    onChange={handleChange}
                    required
                >
                    <option value="select role" disabled>Select Role</option>
                    <option value="seller">Seller</option>
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                </select>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
                >
                    Register
                </button>
            </form>

            {/* ✅ Toast Container */}
            <ToastContainer position="bottom-right" />
        </div>
    );
};

export default Register;
