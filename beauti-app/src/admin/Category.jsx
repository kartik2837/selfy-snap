// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Category = () => {
//     const [name, setName] = useState("");
//     const [categories, setCategories] = useState([]);
//     const [editMode, setEditMode] = useState(false);
//     const [editId, setEditId] = useState(null);

//     const fetchCategories = async () => {
//         const res = await axios.get("http://localhost:4000/api/categories/all");
//         setCategories(res.data.categories);
//     };

//     useEffect(() => {
//         fetchCategories();
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (editMode) {
//             await axios.put(`http://localhost:4000/api/categories/update/${editId}`, { name });
//         } else {
//             await axios.post("http://localhost:4000/api/categories/create", { name });
//         }
//         setName("");
//         setEditMode(false);
//         fetchCategories();
//     };

//     const handleEdit = (cat) => {
//         setEditMode(true);
//         setEditId(cat._id);
//         setName(cat.name);
//     };

//     const handleDelete = async (id) => {
//         await axios.delete(`http://localhost:4000/api/categories/delete/${id}`);
//         fetchCategories();
//     };

//     return (
//         <div className="p-6">
//             <h2 className="text-2xl font-semibold mb-4">Manage Categories</h2>
//             <form onSubmit={handleSubmit} className="mb-4 flex gap-4">
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Category Name"
//                     className="border px-3 py-1 rounded w-64"
//                 />
//                 <button className="bg-blue-600 text-white px-4 py-1 rounded">
//                     {editMode ? "Update" : "Add"}
//                 </button>
//             </form>
//             <div>
//                 {categories.map((cat, idx) => (
//                     <div key={cat._id} className="flex justify-between w-96 mb-2 border p-2 rounded">
//                         <span>{idx + 1}. {cat.name}</span>
//                         <div className="flex gap-2">
//                             <button onClick={() => handleEdit(cat)} className="bg-yellow-400 px-2 py-1 rounded">Edit</button>
//                             <button onClick={() => handleDelete(cat._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Category;





// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

// const Category = () => {
//     const [name, setName] = useState("");
//     const [categories, setCategories] = useState([]);
//     const [editMode, setEditMode] = useState(false);
//     const [editId, setEditId] = useState(null);

//     const fetchCategories = async () => {
//         const res = await axios.get("http://localhost:4000/api/categories/all");
//         setCategories(res.data.categories);
//     };

//     useEffect(() => {
//         fetchCategories();
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!name.trim()) return;
//         if (editMode) {
//             await axios.put(`http://localhost:4000/api/categories/update/${editId}`, { name });
//         } else {
//             await axios.post("http://localhost:4000/api/categories/create", { name });
//         }
//         setName("");
//         setEditMode(false);
//         fetchCategories();
//     };

//     const handleEdit = (cat) => {
//         setEditMode(true);
//         setEditId(cat._id);
//         setName(cat.name);
//     };

//     const handleDelete = async (id) => {
//         if (window.confirm("Are you sure you want to delete this category?")) {
//             await axios.delete(`http://localhost:4000/api/categories/delete/${id}`);
//             fetchCategories();
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 p-6">
//             <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8">
//                 <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
//                     🗂 Category Management
//                 </h2>

//                 {/* Form */}
//                 <form
//                     onSubmit={handleSubmit}
//                     className="flex flex-col md:flex-row items-center gap-4 mb-10"
//                 >
//                     <input
//                         type="text"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         placeholder="Enter category name"
//                         className="w-full md:flex-1 border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <button
//                         type="submit"
//                         className={`px-6 py-2 text-white rounded-md font-medium tracking-wide transition duration-300 ${editMode
//                                 ? "bg-yellow-500 hover:bg-yellow-600"
//                                 : "bg-blue-600 hover:bg-blue-700"
//                             }`}
//                     >
//                         {editMode ? "Update" : "Add"}
//                     </button>
//                 </form>

//                 {/* Table */}
//                 <div className="overflow-x-auto">
//                     <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
//                         <thead className="bg-gray-100">
//                             <tr>
//                                 <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">#</th>
//                                 <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Category</th>
//                                 <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {categories.length === 0 ? (
//                                 <tr>
//                                     <td colSpan="3" className="text-center py-6 text-gray-500">
//                                         No categories found.
//                                     </td>
//                                 </tr>
//                             ) : (
//                                 categories.map((cat, index) => (
//                                     <tr
//                                         key={cat._id}
//                                         className="border-t hover:bg-gray-50 transition duration-200"
//                                     >
//                                         <td className="px-4 py-3 text-sm text-gray-700">{index + 1}</td>
//                                         <td className="px-4 py-3 text-sm font-medium text-gray-800">
//                                             {cat.name}
//                                         </td>
//                                         <td className="px-4 py-3">
//                                             <div className="flex gap-4">
//                                                 <button
//                                                     onClick={() => handleEdit(cat)}
//                                                     className="text-yellow-500 hover:text-yellow-600 transition"
//                                                     title="Edit"
//                                                 >
//                                                     <PencilSquareIcon className="w-5 h-5" />
//                                                 </button>
//                                                 <button
//                                                     onClick={() => handleDelete(cat._id)}
//                                                     className="text-red-500 hover:text-red-600 transition"
//                                                     title="Delete"
//                                                 >
//                                                     <TrashIcon className="w-5 h-5" />
//                                                 </button>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 ))
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Category;




















import React, { useEffect, useState } from "react";
import axios from "axios";
import { PencilSquareIcon, TrashIcon, PlusCircleIcon } from "@heroicons/react/24/solid";

const Category = () => {
    const [name, setName] = useState("");
    const [categories, setCategories] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const fetchCategories = async () => {
        try {
            const res = await axios.get("https://selfy-snap.onrender.com/api/categories/all");
            setCategories(res.data.categories);
        } catch (error) {
            console.error("Failed to fetch categories:", error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        try {
            if (editMode) {
                await axios.put(`https://selfy-snap.onrender.com/api/categories/update/${editId}`, { name });
            } else {
                await axios.post("https://selfy-snap.onrender.com/api/categories/create", { name });
            }
            setName("");
            setEditMode(false);
            fetchCategories();
        } catch (error) {
            console.error("Operation failed:", error);
        }
    };

    const handleEdit = (cat) => {
        setEditMode(true);
        setEditId(cat._id);
        setName(cat.name);
        setIsFormOpen(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this category?")) {
            try {
                await axios.delete(`https://selfy-snap.onrender.com/api/categories/delete/${id}`);
                fetchCategories();
            } catch (error) {
                console.error("Delete failed:", error);
            }
        }
    };

    const toggleForm = () => {
        setIsFormOpen(!isFormOpen);
        if (editMode) {
            setEditMode(false);
            setName("");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 flex justify-between items-center">
                    <h2 className="text-xl md:text-2xl font-bold text-white">
                        🗂️ Category Manager
                    </h2>
                    <button
                        onClick={toggleForm}
                        className="flex items-center gap-1 bg-white text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-full text-sm font-medium transition-all"
                    >
                        <PlusCircleIcon className="h-5 w-5" />
                        <span>{isFormOpen ? "Cancel" : "Add Category"}</span>
                    </button>
                </div>

                {/* Form */}
                {isFormOpen && (
                    <div className="p-4 border-b border-gray-200">
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                            <div className="flex-1">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter category name"
                                    className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <button
                                type="submit"
                                className={`px-4 py-2 text-white rounded-lg font-medium tracking-wide transition duration-300 flex items-center justify-center gap-1 ${editMode
                                        ? "bg-yellow-500 hover:bg-yellow-600"
                                        : "bg-blue-600 hover:bg-blue-700"
                                    }`}
                            >
                                {editMode ? (
                                    <>
                                        <PencilSquareIcon className="h-4 w-4" />
                                        <span>Update</span>
                                    </>
                                ) : (
                                    <>
                                        <PlusCircleIcon className="h-4 w-4" />
                                        <span>Add</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                )}

                {/* Categories List */}
                <div className="p-4">
                    {categories.length === 0 ? (
                        <div className="text-center py-8">
                            <div className="bg-gray-100 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <PlusCircleIcon className="h-8 w-8 text-gray-400" />
                            </div>
                            <p className="text-gray-500 mb-2">No categories found</p>
                            <button
                                onClick={toggleForm}
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                Add your first category
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {categories.map((cat, index) => (
                                <div
                                    key={cat._id}
                                    className="bg-gray-50 rounded-lg border border-gray-200 p-3 hover:shadow-md transition-shadow duration-200 flex justify-between items-center"
                                >
                                    <div className="flex items-center">
                                        <div className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center font-medium text-sm mr-3">
                                            {index + 1}
                                        </div>
                                        <span className="font-medium text-gray-800 truncate max-w-[120px] sm:max-w-[150px]">
                                            {cat.name}
                                        </span>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleEdit(cat)}
                                            className="p-1.5 text-blue-600 hover:bg-blue-100 rounded-full transition-colors"
                                            title="Edit"
                                        >
                                            <PencilSquareIcon className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(cat._id)}
                                            className="p-1.5 text-red-500 hover:bg-red-100 rounded-full transition-colors"
                                            title="Delete"
                                        >
                                            <TrashIcon className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Stats Footer */}
                <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>Total Categories: {categories.length}</span>
                        <span>Last Updated: {new Date().toLocaleTimeString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
