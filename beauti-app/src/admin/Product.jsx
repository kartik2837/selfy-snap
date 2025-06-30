// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Product = () => {
//     const [categories, setCategories] = useState([]);
//     const [showModal, setShowModal] = useState(false);

//     const [formData, setFormData] = useState({
//         name: '',
//         description: '',
//         price: '',
//         stock: '',
//         images: [],
//         category: '',
//         brand: ''
//     });

//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const res = await axios.get('http://localhost:4000/api/categories/all');
//                 const data = Array.isArray(res.data) ? res.data : res.data.categories;
//                 setCategories(data);
//             } catch (err) {
//                 console.error('Error fetching categories:', err.message);
//             }
//         };
//         fetchCategories();
//     }, []);



//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleImageChange = (index, value) => {
//         const updatedImages = [...formData.images];
//         updatedImages[index] = value;
//         setFormData({ ...formData, images: updatedImages });
//     };

//     const addImageField = () => {
//         setFormData({ ...formData, images: [...formData.images, ''] });
//     };

//     const removeImageField = (index) => {
//         const updatedImages = formData.images.filter((_, i) => i !== index);
//         setFormData({ ...formData, images: updatedImages });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:4000/api/products/create', formData, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('token')}`
//                 }
//             });

//             alert('Product added successfully!');
//             setShowModal(false);
//             setFormData({
//                 name: '',
//                 description: '',
//                 price: '',
//                 stock: '',
//                 images: [],
//                 category: '',
//                 brand: ''
//             });
//         } catch (err) {
//             console.error('Error creating product:', err.message);
//         }
//     };

//     return (
//         <div className="p-6">
//             <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-2xl font-bold">Add Product</h2>
//                 <button
//                     onClick={() => setShowModal(true)}
//                     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 >
//                     Add New Product
//                 </button>
//             </div>

//             {/* Modal */}
//             {showModal && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//                     <div className="bg-white p-6 rounded-lg w-full max-w-md mx-2 max-h-[90vh] overflow-y-auto">
//                         <h2 className="text-xl font-bold mb-4">Add Product</h2>
//                         <form onSubmit={handleSubmit} className="space-y-3">
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 placeholder="Product Name"
//                                 required
//                                 className="w-full border px-3 py-2 rounded"
//                             />

//                             <textarea
//                                 name="description"
//                                 value={formData.description}
//                                 onChange={handleChange}
//                                 placeholder="Description"
//                                 required
//                                 className="w-full border px-3 py-2 rounded"
//                             />

//                             <input
//                                 type="number"
//                                 name="price"
//                                 value={formData.price}
//                                 onChange={handleChange}
//                                 placeholder="Price"
//                                 required
//                                 className="w-full border px-3 py-2 rounded"
//                             />

//                             <input
//                                 type="number"
//                                 name="stock"
//                                 value={formData.stock}
//                                 onChange={handleChange}
//                                 placeholder="Stock"
//                                 required
//                                 className="w-full border px-3 py-2 rounded"
//                             />

//                             {/* Image URLs */}
//                             <div>
//                                 <label className="block font-semibold mb-1">Upload Image:</label>
//                                 <input
//                                     type="file"
//                                     accept="image/*"
//                                     onChange={async (e) => {
//                                         const file = e.target.files[0];
//                                         const formDataImg = new FormData();
//                                         formDataImg.append('image', file);

//                                         try {
//                                             const res = await axios.post('http://localhost:4000/api/upload', formDataImg, {
//                                                 headers: {
//                                                     'Content-Type': 'multipart/form-data'
//                                                 }
//                                             });

//                                             const imageUrl = res.data.imageUrl;

//                                             // Add uploaded image URL to formData.images
//                                             setFormData((prev) => ({
//                                                 ...prev,
//                                                 images: [...prev.images, imageUrl]
//                                             }));
//                                         } catch (err) {
//                                             console.error('Image upload failed:', err.message);
//                                         }
//                                     }}
//                                     className="w-full border px-3 py-2 rounded"
//                                 />
//                             </div>

//                             {/* Image Previews */}
//                             {formData.images.length > 0 && (
//                                 <div className="grid grid-cols-3 gap-2 mt-2">
//                                     {formData.images.map((img, index) => (
//                                         <div key={index} className="relative">
//                                             <img
//                                                 src={`http://localhost:4000${img}`}
//                                                 alt="preview"
//                                                 className="w-full h-24 object-cover rounded"
//                                             />
//                                             <button
//                                                 type="button"
//                                                 onClick={() =>
//                                                     setFormData((prev) => ({
//                                                         ...prev,
//                                                         images: prev.images.filter((_, i) => i !== index)
//                                                     }))
//                                                 }
//                                                 className="absolute top-1 right-1 bg-red-500 text-white rounded-full px-2"
//                                             >
//                                                 ✕
//                                             </button>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}

//                             {/* Category */}
//                             {/* Category Dropdown */}
//                             <select
//                                 name="category"
//                                 value={formData.category}
//                                 onChange={handleChange}
//                                 required
//                                 className="w-full border px-3 py-2 rounded"
//                             >
//                                 <option value="">Select Category</option>
//                                 {Array.isArray(categories) &&
//                                     categories.map((cat) => (
//                                         <option key={cat._id} value={cat._id}>
//                                             {cat.name}
//                                         </option>
//                                     ))}
//                             </select>



//                             {/* Brand */}
//                             <input
//                                 type="text"
//                                 name="brand"
//                                 value={formData.brand}
//                                 onChange={handleChange}
//                                 placeholder="Brand"
//                                 required
//                                 className="w-full border px-3 py-2 rounded"
//                             />

//                             {/* Buttons */}
//                             <div className="flex justify-end gap-2">
//                                 <button
//                                     type="button"
//                                     onClick={() => setShowModal(false)}
//                                     className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
//                                 >
//                                     Cancel
//                                 </button>
//                                 <button
//                                     type="submit"
//                                     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                                 >
//                                     Save
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Product;








// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Product = () => {
//     const [categories, setCategories] = useState([]);
//     const [products, setProducts] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [editId, setEditId] = useState(null);

//     const [formData, setFormData] = useState({
//         name: '',
//         description: '',
//         price: '',
//         stock: '',
//         images: [],
//         category: '',
//         brand: ''
//     });

//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const res = await axios.get('http://localhost:4000/api/categories/all');
//                 const data = Array.isArray(res.data) ? res.data : res.data.categories;
//                 setCategories(data);
//             } catch (err) {
//                 console.error('Error fetching categories:', err.message);
//             }
//         };

//         const fetchProducts = async () => {
//             try {
//                 const res = await axios.get('http://localhost:4000/api/products/my-products', {
//                     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//                 });
//                 setProducts(res.data.products);
//             } catch (err) {
//                 console.error('Error fetching products:', err.message);
//             }
//         };

//         fetchCategories();
//         fetchProducts();
//     }, []);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             if (editId) {
//                 await axios.put(`http://localhost:4000/api/products/update/${editId}`, formData, {
//                     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//                 });
//                 alert('Product updated!');
//             } else {
//                 await axios.post('http://localhost:4000/api/products/create', formData, {
//                     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//                 });
//                 alert('Product created!');
//             }
//             setShowModal(false);
//             setEditId(null);
//             setFormData({ name: '', description: '', price: '', stock: '', images: [], category: '', brand: '' });
//             const res = await axios.get('http://localhost:4000/api/products/my-products', {
//                 headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//             });
//             setProducts(res.data.products);
//         } catch (err) {
//             console.error('Error saving product:', err.message);
//         }
//     };

//     const handleEdit = (product) => {
//         setFormData({
//             name: product.name,
//             description: product.description,
//             price: product.price,
//             stock: product.stock,
//             images: product.images,
//             category: product.category._id,
//             brand: product.brand
//         });
//         setEditId(product._id);
//         setShowModal(true);
//     };

//     const handleDelete = async (id) => {
//         if (!window.confirm('Are you sure to delete this product?')) return;
//         try {
//             await axios.delete(`http://localhost:4000/api/products/delete/${id}`, {
//                 headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//             });
//             alert('Product deleted!');
//             const res = await axios.get('http://localhost:4000/api/products/my-products', {
//                 headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//             });
//             setProducts(res.data.products);
//         } catch (err) {
//             console.error('Error deleting product:', err.message);
//         }
//     };

//     return (
//         <div className="p-6">
//             <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-2xl font-bold">Add Product</h2>
//                 <button
//                     onClick={() => setShowModal(true)}
//                     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 >
//                     Add New Product
//                 </button>
//             </div>

//             {showModal && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//                     <div className="bg-white p-6 rounded-lg w-full max-w-md mx-2 max-h-[90vh] overflow-y-auto">
//                         <h2 className="text-xl font-bold mb-4">{editId ? 'Edit' : 'Add'} Product</h2>
//                         <form onSubmit={handleSubmit} className="space-y-3">
//                             <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required className="w-full border px-3 py-2 rounded" />
//                             <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required className="w-full border px-3 py-2 rounded" />
//                             <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required className="w-full border px-3 py-2 rounded" />
//                             <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" required className="w-full border px-3 py-2 rounded" />
//                             <input type="file" accept="image/*" onChange={async (e) => {
//                                 const file = e.target.files[0];
//                                 const formDataImg = new FormData();
//                                 formDataImg.append('image', file);
//                                 try {
//                                     const res = await axios.post('http://localhost:4000/api/upload', formDataImg, {
//                                         headers: { 'Content-Type': 'multipart/form-data' }
//                                     });
//                                     const imageUrl = res.data.imageUrl;
//                                     setFormData((prev) => ({ ...prev, images: [...prev.images, imageUrl] }));
//                                 } catch (err) {
//                                     console.error('Image upload failed:', err.message);
//                                 }
//                             }} className="w-full border px-3 py-2 rounded" />
//                             <div className="grid grid-cols-3 gap-2 mt-2">
//                                 {formData.images.map((img, index) => (
//                                     <div key={index} className="relative">
//                                         <img src={`http://localhost:4000${img}`} alt="preview" className="w-full h-24 object-cover rounded" />
//                                         <button type="button" onClick={() => setFormData((prev) => ({ ...prev, images: prev.images.filter((_, i) => i !== index) }))} className="absolute top-1 right-1 bg-red-500 text-white rounded-full px-2">✕</button>
//                                     </div>
//                                 ))}
//                             </div>
//                             <select name="category" value={formData.category} onChange={handleChange} required className="w-full border px-3 py-2 rounded">
//                                 <option value="">Select Category</option>
//                                 {categories.map((cat) => (
//                                     <option key={cat._id} value={cat._id}>{cat.name}</option>
//                                 ))}
//                             </select>
//                             <input type="text" name="brand" value={formData.brand} onChange={handleChange} placeholder="Brand" required className="w-full border px-3 py-2 rounded" />
//                             <div className="flex justify-end gap-2">
//                                 <button type="button" onClick={() => { setShowModal(false); setEditId(null); }} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
//                                 <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}

//             <div className="mt-8">
//                 <h3 className="text-xl font-semibold mb-3">Your Products</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {products.map((product) => (
//                         <div key={product._id} className="border p-4 rounded shadow">
//                             <img src={`http://localhost:4000${product.images[0]}`} alt={product.name} className="w-full h-32 object-cover mb-2 rounded" />
//                             <h4 className="text-lg font-bold">{product.name}</h4>
//                             <p className="text-sm text-gray-600 mb-2">Price: ₹{product.price}</p>
//                             <div className="flex justify-between gap-2">
//                                 <button onClick={() => handleEdit(product)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Edit</button>
//                                 <button onClick={() => handleDelete(product._id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Product;







// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FiEdit2, FiTrash2 } from 'react-icons/fi';

// const Product = () => {
//     const [categories, setCategories] = useState([]);
//     const [products, setProducts] = useState([]);
//     const [showModal, setShowModal] = useState(false);
//     const [editId, setEditId] = useState(null);

//     const [formData, setFormData] = useState({
//         name: '',
//         description: '',
//         price: '',
//         stock: '',
//         images: [],
//         category: '',
//         brand: ''
//     });

//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const res = await axios.get('http://localhost:4000/api/categories/all');
//                 const data = Array.isArray(res.data) ? res.data : res.data.categories;
//                 setCategories(data);
//             } catch (err) {
//                 console.error('Error fetching categories:', err.message);
//             }
//         };

//         const fetchProducts = async () => {
//             try {
//                 const res = await axios.get('http://localhost:4000/api/products/my-products', {
//                     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//                 });
//                 setProducts(res.data.products);
//             } catch (err) {
//                 console.error('Error fetching products:', err.message);
//             }
//         };

//         fetchCategories();
//         fetchProducts();
//     }, []);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const url = editId
//                 ? `http://localhost:4000/api/products/update/${editId}`
//                 : 'http://localhost:4000/api/products/create';

//             const method = editId ? 'put' : 'post';

//             await axios[method](url, formData, {
//                 headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//             });

//             alert(`Product ${editId ? 'updated' : 'created'}!`);
//             setShowModal(false);
//             setEditId(null);
//             setFormData({ name: '', description: '', price: '', stock: '', images: [], category: '', brand: '' });

//             const res = await axios.get('http://localhost:4000/api/products/my-products', {
//                 headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//             });
//             setProducts(res.data.products);
//         } catch (err) {
//             console.error('Error saving product:', err.message);
//         }
//     };

//     const handleEdit = (product) => {
//         setFormData({
//             name: product.name,
//             description: product.description,
//             price: product.price,
//             stock: product.stock,
//             images: product.images,
//             category: product.category._id,
//             brand: product.brand
//         });
//         setEditId(product._id);
//         setShowModal(true);
//     };

//     const handleDelete = async (id) => {
//         if (!window.confirm('Are you sure to delete this product?')) return;
//         try {
//             await axios.delete(`http://localhost:4000/api/products/delete/${id}`, {
//                 headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//             });
//             alert('Product deleted!');
//             const res = await axios.get('http://localhost:4000/api/products/my-products', {
//                 headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//             });
//             setProducts(res.data.products);
//         } catch (err) {
//             console.error('Error deleting product:', err.message);
//         }
//     };

//     return (
//         <div className="p-6">
//             <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-2xl font-bold">Add Product</h2>
//                 <button
//                     onClick={() => setShowModal(true)}
//                     className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 >
//                     Add New Product
//                 </button>
//             </div>

//             {showModal && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//                     <div className="bg-white p-6 rounded-lg w-full max-w-md mx-2 max-h-[90vh] overflow-y-auto">
//                         <h2 className="text-xl font-bold mb-4">{editId ? 'Edit' : 'Add'} Product</h2>
//                         <form onSubmit={handleSubmit} className="space-y-3">
//                             <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required className="w-full border px-3 py-2 rounded" />
//                             <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required className="w-full border px-3 py-2 rounded" />
//                             <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required className="w-full border px-3 py-2 rounded" />
//                             <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" required className="w-full border px-3 py-2 rounded" />
//                             <input type="file" accept="image/*" onChange={async (e) => {
//                                 const file = e.target.files[0];
//                                 const formDataImg = new FormData();
//                                 formDataImg.append('image', file);
//                                 try {
//                                     const res = await axios.post('http://localhost:4000/api/upload', formDataImg, {
//                                         headers: { 'Content-Type': 'multipart/form-data' }
//                                     });
//                                     const imageUrl = res.data.imageUrl;
//                                     setFormData((prev) => ({ ...prev, images: [...prev.images, imageUrl] }));
//                                 } catch (err) {
//                                     console.error('Image upload failed:', err.message);
//                                 }
//                             }} className="w-full border px-3 py-2 rounded" />
//                             <div className="grid grid-cols-3 gap-2 mt-2">
//                                 {formData.images.map((img, index) => (
//                                     <div key={index} className="relative">
//                                         <img src={`http://localhost:4000${img}`} alt="preview" className="w-full h-24 object-cover rounded" />
//                                         <button type="button" onClick={() => setFormData((prev) => ({ ...prev, images: prev.images.filter((_, i) => i !== index) }))} className="absolute top-1 right-1 bg-red-500 text-white rounded-full px-2">✕</button>
//                                     </div>
//                                 ))}
//                             </div>
//                             <select name="category" value={formData.category} onChange={handleChange} required className="w-full border px-3 py-2 rounded">
//                                 <option value="">Select Category</option>
//                                 {categories.map((cat) => (
//                                     <option key={cat._id} value={cat._id}>{cat.name}</option>
//                                 ))}
//                             </select>
//                             <input type="text" name="brand" value={formData.brand} onChange={handleChange} placeholder="Brand" required className="w-full border px-3 py-2 rounded" />
//                             <div className="flex justify-end gap-2">
//                                 <button type="button" onClick={() => { setShowModal(false); setEditId(null); }} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
//                                 <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}

//             <div className="mt-8">
//                 <h3 className="text-xl font-semibold mb-3">Your Products</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {products.map((product) => (
//                         <div
//                             key={product._id}
//                             className="bg-white rounded-2xl overflow-hidden shadow-md transform transition-all hover:scale-[1.02] hover:shadow-xl duration-300 ease-in-out group"
//                         >
//                             <div className="relative w-full h-40 overflow-hidden">
//                                 <img
//                                     src={`http://localhost:4000${product.images[0]}`}
//                                     alt={product.name}
//                                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                                 />
//                             </div>
//                             <div className="p-4 space-y-2">
//                                 <h4 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h4>
//                                 <p className="text-sm text-gray-600">₹{product.price}</p>

//                                 {/* Thumbnails Line */}
//                                 <div className="flex items-center gap-2 overflow-x-auto pb-1">
//                                     {product.images.map((img, idx) => (
//                                         <img
//                                             key={idx}
//                                             src={`http://localhost:4000${img}`}
//                                             alt={`thumb-${idx}`}
//                                             className="w-10 h-10 object-cover rounded border"
//                                         />
//                                     ))}
//                                 </div>

//                                 <div className="flex justify-between gap-2 mt-3">
//                                     <button
//                                         onClick={() => handleEdit(product)}
//                                         className="flex items-center gap-1 bg-yellow-400 text-white text-sm font-semibold px-3 py-1 rounded hover:bg-yellow-500 transition"
//                                     >
//                                         <FiEdit2 className="text-base" />
//                                         Edit
//                                     </button>
//                                     <button
//                                         onClick={() => handleDelete(product._id)}
//                                         className="flex items-center gap-1 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded hover:bg-red-600 transition"
//                                     >
//                                         <FiTrash2 className="text-base" />
//                                         Delete
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Product;


























import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

const Product = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editId, setEditId] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        stock: '',
        images: [],
        category: '',
        brand: ''
    });

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await axios.get('https://selfy-snap.onrender.com/api/categories/all');
                const data = Array.isArray(res.data) ? res.data : res.data.categories;
                setCategories(data);
            } catch (err) {
                console.error('Error fetching categories:', err.message);
            }
        };

        const fetchProducts = async () => {
            try {
                const res = await axios.get('https://selfy-snap.onrender.com/api/products/my-products', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setProducts(res.data.products);
            } catch (err) {
                console.error('Error fetching products:', err.message);
            }
        };

        fetchCategories();
        fetchProducts();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = editId
                ? `https://selfy-snap.onrender.com/api/products/update/${editId}`
                : 'https://selfy-snap.onrender.com/api/products/create';

            const method = editId ? 'put' : 'post';

            await axios[method](url, formData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });

            alert(`Product ${editId ? 'updated' : 'created'}!`);
            setShowModal(false);
            setEditId(null);
            setFormData({ name: '', description: '', price: '', stock: '', images: [], category: '', brand: '' });

            const res = await axios.get('http://localhost:4000/api/products/my-products', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setProducts(res.data.products);
        } catch (err) {
            console.error('Error saving product:', err.message);
        }
    };

    const handleEdit = (product) => {
        setFormData({
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock,
            images: product.images,
            category: product.category._id,
            brand: product.brand
        });
        setEditId(product._id);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure to delete this product?')) return;
        try {
            await axios.delete(`https://selfy-snap.onrender.com/api/products/delete/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            alert('Product deleted!');
            const res = await axios.get('https://selfy-snap.onrender.com/api/products/my-products', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setProducts(res.data.products);
        } catch (err) {
            console.error('Error deleting product:', err.message);
        }
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Add Product</h2>
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Add New Product
                </button>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md mx-2 max-h-[90vh] overflow-y-auto">
                        <h2 className="text-xl font-bold mb-4">{editId ? 'Edit' : 'Add'} Product</h2>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required className="w-full border px-3 py-2 rounded" />
                            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required className="w-full border px-3 py-2 rounded" />
                            <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required className="w-full border px-3 py-2 rounded" />
                            <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" required className="w-full border px-3 py-2 rounded" />
                            <input type="file" accept="image/*" onChange={async (e) => {
                                const file = e.target.files[0];
                                const formDataImg = new FormData();
                                formDataImg.append('image', file);
                                try {
                                    const res = await axios.post('https://selfy-snap.onrender.com/api/upload', formDataImg, {
                                        headers: { 'Content-Type': 'multipart/form-data' }
                                    });
                                    const imageUrl = res.data.imageUrl;
                                    setFormData((prev) => ({ ...prev, images: [...prev.images, imageUrl] }));
                                } catch (err) {
                                    console.error('Image upload failed:', err.message);
                                }
                            }} className="w-full border px-3 py-2 rounded" />
                            <div className="grid grid-cols-3 gap-2 mt-2">
                                {formData.images.map((img, index) => (
                                    <div key={index} className="relative">
                                        <img src={`http://localhost:4000${img}`} alt="preview" className="w-full h-20 object-cover rounded" />
                                        <button type="button" onClick={() => setFormData((prev) => ({ ...prev, images: prev.images.filter((_, i) => i !== index) }))} className="absolute top-1 right-1 bg-red-500 text-white rounded-full px-2">✕</button>
                                    </div>
                                ))}
                            </div>
                            <select name="category" value={formData.category} onChange={handleChange} required className="w-full border px-3 py-2 rounded">
                                <option value="">Select Category</option>
                                {categories.map((cat) => (
                                    <option key={cat._id} value={cat._id}>{cat.name}</option>
                                ))}
                            </select>
                            <input type="text" name="brand" value={formData.brand} onChange={handleChange} placeholder="Brand" required className="w-full border px-3 py-2 rounded" />
                            <div className="flex justify-end gap-2">
                                <button type="button" onClick={() => { setShowModal(false); setEditId(null); }} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
                                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Product List */}
            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3">Your Products</h3>
                <div className="space-y-2">
                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="bg-white rounded-md shadow-sm p-3 flex items-center justify-between gap-2 text-sm"
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={`https://selfy-snap.onrender.com${product.images[0]}`}
                                    alt={product.name}
                                    className="w-12 h-12 object-cover rounded"
                                />
                                <div>
                                    <p className="font-medium truncate max-w-[150px]">{product.name}</p>
                                    <p className="text-xs text-gray-500">₹{product.price}</p>
                                    <p className="text-xs text-gray-500">Descriptionz; {product.description}</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleEdit(product)}
                                    className="bg-yellow-400 text-white text-[10px] px-2 py-1 rounded hover:bg-yellow-500"
                                >
                                    <FiEdit2 />
                                </button>
                                <button
                                    onClick={() => handleDelete(product._id)}
                                    className="bg-red-500 text-white text-[10px] px-2 py-1 rounded hover:bg-red-600"
                                >
                                    <FiTrash2 />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;

