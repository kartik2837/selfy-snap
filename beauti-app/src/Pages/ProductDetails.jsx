// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const ProductDetails = () => {
//     const { id } = useParams(); // URL param like /product/123
//     const [product, setProduct] = useState(null);

//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:4000/api/products/${id}`);
//                 setProduct(res.data.product);
//             } catch (err) {
//                 console.error("Failed to fetch product:", err.message);
//             }
//         };
//         fetchProduct();
//     }, [id]);

//     if (!product) return <p className="text-center mt-10">Loading product...</p>;

//     return (
//         <div className="max-w-5xl mx-auto p-6">
//             <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden">
//                 {/* Left: Image */}
//                 <div className="md:w-1/2 p-4 flex justify-center items-center bg-gray-50">
//                     <img
//                         src={`http://localhost:4000${product.images?.[0]}`}
//                         alt={product.name}
//                         className="object-contain h-72 w-full rounded"
//                     />
//                 </div>

//                 {/* Right: Product Info */}
//                 <div className="md:w-1/2 p-6">
//                     <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
//                     <p className="text-gray-600 mb-4">{product.description}</p>

//                     <div className="mb-2">
//                         <span className="font-semibold text-gray-700">Price: </span>
//                         <span className="text-green-600 font-bold text-lg">₹{product.price}</span>
//                     </div>

//                     <div className="mb-2">
//                         <span className="font-semibold text-gray-700">Stock: </span>
//                         <span>{product.stock}</span>
//                     </div>

//                     <div className="mb-2">
//                         <span className="font-semibold text-gray-700">Brand: </span>
//                         <span>{product.brand}</span>
//                     </div>

//                     <div className="mt-6">
//                         <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
//                             Add to Cart
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;








// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const ProductDetails = () => {
//     const { id } = useParams(); // /product/:id
//     const [product, setProduct] = useState(null);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:4000/api/products/${id}`);
//                 setProduct(res.data.product);
//             } catch (err) {
//                 console.error("Failed to fetch product:", err);
//                 setError('Failed to load product.');
//             }
//         };
//         fetchProduct();
//     }, [id]);

//     if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
//     if (!product) return <div className="text-center mt-10">Loading product...</div>;

//     return (
//         <div className="max-w-5xl mx-auto p-6">
//             <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden">
//                 {/* Left: Image */}
//                 <div className="md:w-1/2 p-4 flex justify-center items-center bg-gray-50">
//                     <img
//                         src={`http://localhost:4000${product.images?.[0]}`}
//                         alt={product.name}
//                         className="object-contain h-72 w-full rounded"
//                     />
//                 </div>

//                 {/* Right: Product Info */}
//                 <div className="md:w-1/2 p-6">
//                     <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
//                     <p className="text-gray-600 mb-4">{product.description}</p>

//                     <div className="mb-2">
//                         <span className="font-semibold text-gray-700">Price: </span>
//                         <span className="text-green-600 font-bold text-lg">₹{product.price}</span>
//                     </div>

//                     <div className="mb-2">
//                         <span className="font-semibold text-gray-700">Stock: </span>
//                         <span>{product.stock}</span>
//                     </div>

//                     <div className="mb-2">
//                         <span className="font-semibold text-gray-700">Brand: </span>
//                         <span>{product.brand}</span>
//                     </div>

//                     <div className="mb-2">
//                         <span className="font-semibold text-gray-700">Category: </span>
//                         <span>{product.category?.name}</span>
//                     </div>

//                     <div className="mt-6">
//                         <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
//                             Add to Cart
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;






// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';




// const ProductDetails = () => {
//     const { id } = useParams();
//     const [product, setProduct] = useState(null);
//     const [selectedImage, setSelectedImage] = useState('');
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:4000/api/products/${id}`);
//                 setProduct(res.data.product);
//                 setSelectedImage(`http://localhost:4000${res.data.product.images?.[0]}`);
//             } catch (err) {
//                 console.error("Failed to fetch product:", err);
//                 setError('Failed to load product.');
//             }
//         };
//         fetchProduct();
//     }, [id]);

//     if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
//     if (!product) return <div className="text-center mt-10">Loading product...</div>;

//     return (
//         <div className="max-w-7xl mx-auto p-6">
//             <div className="bg-white shadow-xl rounded-2xl flex flex-col md:flex-row overflow-hidden transition-all duration-300">
//                 {/* Left: Main Image + Thumbnails */}
//                 <div className="md:w-1/2 p-6 bg-gray-50">
//                     <img
//                         src={selectedImage}
//                         alt={product.name}
//                         className="w-full h-80 object-contain rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
//                     />

//                     {/* 4 Thumbnail Images */}
//                     <div className="grid grid-cols-4 gap-3">
//                         {product.images?.slice(0, 4).map((img, index) => (
//                             <img
//                                 key={index}
//                                 src={`http://localhost:4000${img}`}
//                                 alt={`Thumbnail ${index}`}
//                                 onClick={() => setSelectedImage(`http://localhost:4000${img}`)}
//                                 className={`h-20 w-full object-contain cursor-pointer border p-1 rounded-lg transition duration-200 ${selectedImage === `http://localhost:4000${img}`
//                                     ? 'border-blue-600 ring-2 ring-blue-300'
//                                     : 'hover:border-blue-400'
//                                     }`}
//                             />

//                         ))}



//                     </div>
//                 </div>

//                 {/* Right: Product Details */}
//                 <div className="md:w-1/2 p-6 flex flex-col justify-between">
//                     <div>
//                         <h1 className="text-3xl font-bold mb-3 text-gray-900">{product.name}</h1>
//                         <p className="text-gray-600 mb-4">{product.description}</p>

//                         <div className="text-lg font-medium text-gray-800 mb-2">
//                             Price: <span className="text-green-600 font-bold">₹{product.price}</span>
//                         </div>
//                         <div className="mb-1">Stock: <span className="text-gray-700">{product.stock}</span></div>
//                         <div className="mb-1">Brand: <span className="text-gray-700">{product.brand}</span></div>
//                         <div className="mb-1">Category: <span className="text-gray-700">{product.category?.name}</span></div>
//                     </div>

//                     {/* CTA Buttons */}
//                     <div className="mt-6 flex gap-4">
//                         <button
//                             onClick={() => handleAddToCart(product._id)}
//                             className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition text-sm font-medium"
//                         >
//                             <ShoppingCart className="h-4 w-4" /> Add to Cart
//                         </button>

//                         <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow">
//                             Buy Now
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;






// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const ProductDetails = () => {
//     const { id } = useParams();
//     const [product, setProduct] = useState(null);
//     const [selectedImage, setSelectedImage] = useState('');
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:4000/api/products/${id}`);
//                 setProduct(res.data.product);
//                 setSelectedImage(`http://localhost:4000${res.data.product.images?.[0]}`);
//             } catch (err) {
//                 console.error("Failed to fetch product:", err);
//                 setError('Failed to load product.');
//             }
//         };
//         fetchProduct();
//     }, [id]);

//     if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
//     if (!product) return <div className="text-center mt-10">Loading product...</div>;

//     return (
//         <div className="max-w-7xl mx-auto p-6">
//             <div className="bg-white shadow-xl rounded-2xl flex flex-col md:flex-row overflow-hidden transition-all duration-300">
//                 {/* Left: Main Image + Thumbnails */}
//                 <div className="md:w-1/2 p-6 bg-gray-50">
//                     <img
//                         src={selectedImage}
//                         alt={product.name}
//                         className="w-full h-80 object-contain rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
//                     />

//                     {/* 4 Thumbnail Images */}
//                     <div className="grid grid-cols-4 gap-3">
//                         {product.images?.slice(0, 4).map((img, index) => (
//                             <img
//                                 key={index}
//                                 src={`http://localhost:4000${img}`}
//                                 alt={`Thumbnail ${index}`}
//                                 onClick={() => setSelectedImage(`http://localhost:4000${img}`)}
//                                 className={`h-20 w-full object-contain cursor-pointer border p-1 rounded-lg transition duration-200 ${selectedImage === `http://localhost:4000${img}`
//                                         ? 'border-blue-600 ring-2 ring-blue-300'
//                                         : 'hover:border-blue-400'
//                                     }`}
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 {/* Right: Product Details */}
//                 <div className="md:w-1/2 p-6 flex flex-col justify-between">
//                     <div>
//                         <h1 className="text-3xl font-bold mb-3 text-gray-900">{product.name}</h1>
//                         <p className="text-gray-600 mb-4">{product.description}</p>

//                         <div className="text-lg font-medium text-gray-800 mb-2">
//                             Price: <span className="text-green-600 font-bold">₹{product.price}</span>
//                         </div>
//                         <div className="mb-1">Stock: <span className="text-gray-700">{product.stock}</span></div>
//                         <div className="mb-1">Brand: <span className="text-gray-700">{product.brand}</span></div>
//                         <div className="mb-1">Category: <span className="text-gray-700">{product.category?.name}</span></div>
//                     </div>

//                     {/* CTA Buttons */}
//                     <div className="mt-6 flex gap-4">
//                         <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow">
//                             Add to Cart
//                         </button>
//                         <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow">
//                             Buy Now
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;



























// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useCart } from '../context/CartContext'; // 🔥 import cart context

// const ProductDetails = () => {
//     const { id } = useParams();
//     const [product, setProduct] = useState(null);
//     const [selectedImage, setSelectedImage] = useState('');
//     const [error, setError] = useState('');
//     const { addToCart } = useCart(); // 💡 use cart context

//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:4000/api/products/${id}`);
//                 setProduct(res.data.product);
//                 setSelectedImage(`http://localhost:4000${res.data.product.images?.[0]}`);
//             } catch (err) {
//                 console.error("Failed to fetch product:", err);
//                 setError('Failed to load product.');
//             }
//         };
//         fetchProduct();
//     }, [id]);

//     if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
//     if (!product) return <div className="text-center mt-10">Loading product...</div>;

//     return (
//         <div className="max-w-7xl mx-auto p-6">
//             <div className="bg-white shadow-xl rounded-2xl flex flex-col md:flex-row overflow-hidden transition-all duration-300">
//                 {/* Left: Image Preview */}
//                 <div className="md:w-1/2 p-6 bg-gray-50">
//                     <img
//                         src={selectedImage}
//                         alt={product.name}
//                         className="w-full h-80 object-contain rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
//                     />

//                     {/* Thumbnails */}
//                     <div className="grid grid-cols-4 gap-3">
//                         {product.images?.slice(0, 4).map((img, index) => (
//                             <img
//                                 key={index}
//                                 src={`http://localhost:4000${img}`}
//                                 alt={`Thumbnail ${index}`}
//                                 onClick={() => setSelectedImage(`http://localhost:4000${img}`)}
//                                 className={`h-20 w-full object-contain cursor-pointer border p-1 rounded-lg transition duration-200 ${selectedImage === `http://localhost:4000${img}`
//                                     ? 'border-blue-600 ring-2 ring-blue-300'
//                                     : 'hover:border-blue-400'
//                                     }`}
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 {/* Right: Product Info */}
//                 <div className="md:w-1/2 p-6 flex flex-col justify-between">
//                     <div>
//                         <h1 className="text-3xl font-bold mb-3 text-gray-900">{product.name}</h1>
//                         <p className=" text-gray-900 mb-4">Description:  {product.description}</p>

//                         <div className="text-lg font-medium text-gray-800 mb-2">
//                             Price: <span className=" text-gray-900 font-bold">₹{product.price}</span>
//                         </div>
//                         <div className="mb-1">Stock: <span className="text-gray-700">{product.stock}</span></div>
//                         <div className="mb-1">Brand: <span className="text-gray-700">{product.brand}</span></div>
//                         <div className="mb-1">Category: <span className="text-gray-700">{product.category?.name}</span></div>
//                     </div>

//                     {/* Buttons */}
//                     <div className="mt-6 flex gap-4">
//                         <button
//                             onClick={() => addToCart(product)}
//                             className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow"
//                         >
//                             Add to Cart
//                         </button>
//                         <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow">
//                             Buy Now
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;





















// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useCart } from '../context/CartContext'; // 🔥 import cart context

// const ProductDetails = () => {
//     const { id } = useParams();
//     const [product, setProduct] = useState(null);
//     const [selectedImage, setSelectedImage] = useState('');
//     const [error, setError] = useState('');
//     const { addToCart } = useCart(); // 💡 use cart context

//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const res = await axios.get(`http://localhost:4000/api/products/${id}`);
//                 setProduct(res.data.product);
//                 setSelectedImage(`http://localhost:4000${res.data.product.images?.[0]}`);
//             } catch (err) {
//                 console.error("Failed to fetch product:", err);
//                 setError('Failed to load product.');
//             }
//         };
//         fetchProduct();
//     }, [id]);

//     if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
//     if (!product) return <div className="text-center mt-10">Loading product...</div>;

//     return (
//         <div className="max-w-7xl mx-auto p-6">
//             <div className="bg-white shadow-xl rounded-2xl flex flex-col md:flex-row overflow-hidden transition-all duration-300">
//                 {/* Left: Image Preview */}
//                 <div className="md:w-1/2 p-6 bg-gray-50">
//                     <img
//                         src={selectedImage}
//                         alt={product.name}
//                         className="w-full h-80 object-contain rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
//                     />

//                     {/* ✅ Thumbnails (show 4 thumbnails) */}
//                     <div className="grid grid-cols-4 gap-3">
//                         {product.images?.slice(0, 4).map((img, index) => (
//                             <img
//                                 key={index}
//                                 src={`http://localhost:4000${img}`}
//                                 alt={`Thumbnail ${index}`}
//                                 onClick={() => setSelectedImage(`http://localhost:4000${img}`)}
//                                 className={`h-20 w-full object-contain cursor-pointer border p-1 rounded-lg transition duration-200 ${selectedImage === `http://localhost:4000${img}`
//                                     ? 'border-blue-600 ring-2 ring-blue-300'
//                                     : 'hover:border-blue-400'
//                                     }`}
//                             />
//                         ))}
//                     </div>
//                 </div>

//                 {/* Right: Product Info */}
//                 <div className="md:w-1/2 p-6 flex flex-col justify-between">
//                     <div>
//                         <h1 className="text-3xl font-bold mb-3 text-gray-900">{product.name}</h1>
//                         <p className="text-gray-900 mb-4">
//                             <span className="font-semibold">Description:</span> {product.description}
//                         </p>

//                         <div className="text-lg font-medium text-gray-800 mb-2">
//                             Price: <span className="text-gray-900 font-bold">₹{product.price}</span>
//                         </div>
//                         <div className="mb-1">Stock: <span className="text-gray-700">{product.stock}</span></div>
//                         <div className="mb-1">Brand: <span className="text-gray-700">{product.brand}</span></div>
//                         <div className="mb-1">Category: <span className="text-gray-700">{product.category?.name}</span>
//                             {/* Buttons */}
//                             <div className="mt-6 flex gap-4">
//                                 <button
//                                     onClick={() => addToCart(product)}
//                                     className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow"
//                                 >
//                                     Add to Cart
//                                 </button>
//                                 <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow">
//                                     Buy Now
//                                 </button>
//                             </div>

//                         </div>
//                     </div>


//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;

































import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState('');
    const [error, setError] = useState('');
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`https://selfy-snap.onrender.com/api/products/${id}`);
                setProduct(res.data.product);
                setSelectedImage(`https://selfy-snap.onrender.com${res.data.product.images?.[0]}`);
            } catch (err) {
                console.error("Failed to fetch product:", err);
                setError('Failed to load product.');
            }
        };
        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        addToCart(product);
        toast.success(`${product.name} added to cart!`);
    };

    if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
    if (!product) return <div className="text-center mt-10">Loading product...</div>;

    return (
        <div className="max-w-7xl mx-auto p-6">
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="bg-white shadow-xl rounded-2xl flex flex-col md:flex-row overflow-hidden transition-all duration-300">
                {/* Left: Image Preview */}
                <div className="md:w-1/2 p-6 bg-gray-50">
                    <img
                        src={selectedImage}
                        alt={product.name}
                        className="w-full h-80 object-contain rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
                    />

                    <div className="grid grid-cols-4 gap-3">
                        {product.images?.slice(0, 4).map((img, index) => (
                            <img
                                key={index}
                                src={`https://selfy-snap.onrender.com${img}`}
                                alt={`Thumbnail ${index}`}
                                onClick={() => setSelectedImage(`http://localhost:4000${img}`)}
                                className={`h-20 w-full object-contain cursor-pointer border p-1 rounded-lg transition duration-200 ${selectedImage === `http://localhost:4000${img}`
                                        ? 'border-blue-600 ring-2 ring-blue-300'
                                        : 'hover:border-blue-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right: Product Info */}
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-3 text-gray-900">{product.name}</h1>
                        <p className="text-gray-900 mb-4">
                            <span className="font-semibold">Description:</span> {product.description}
                        </p>

                        <div className="text-lg font-medium text-gray-800 mb-2">
                            Price: <span className="text-gray-900 font-bold">₹{product.price}</span>
                        </div>
                        <div className="mb-1">Stock: <span className="text-gray-700">{product.stock}</span></div>
                        <div className="mb-1">Brand: <span className="text-gray-700">{product.brand}</span></div>
                        <div className="mb-1">Category: <span className="text-gray-700">{product.category?.name}</span></div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-6 flex gap-4">
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow"
                        >
                            Add to Cart
                        </button>
                        <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
