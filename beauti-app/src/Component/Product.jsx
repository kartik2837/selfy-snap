// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Product = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const res = await axios.get("http://localhost:4000/api/products/all-products");
//                 setProducts(res.data.products); // Ensure backend returns { products: [...] }
//             } catch (error) {
//                 console.error("Failed to fetch products:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, []);

//     if (loading) return <p className="text-center mt-10">Loading products...</p>;

//     return (
//         <div className="p-6">
//             <h2 className="text-center text-3xl font-bold mb-6">Our Products</h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {products.map(({ _id, name, price, images = [] }) => (
//                     <div
//                         key={_id}
//                         className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
//                     >
//                         <img
//                             src={`http://localhost:4000${images[0]}`}  // Example: /uploads/17508xxxxx.webp
//                             crossOrigin="anonymous"
//                             alt="Product"
//                         />
//                         {/* console.log(images[0]); */}
//                         <div className="p-4">
//                             <h3 className="text-lg font-semibold mb-2">{name}</h3>
//                             <p className="text-gray-700 font-bold">₹{price}</p>

//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Product;












// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { ShoppingCart, Eye } from 'lucide-react'; // Optional: Install if you want icons

// const Product = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const res = await axios.get("http://localhost:4000/api/products/all-products");
//                 setProducts(res.data.products);
//             } catch (error) {
//                 console.error("Failed to fetch products:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, []);

//     if (loading) return <p className="text-center mt-10 text-gray-600">Loading products...</p>;

//     return (
//         <div className="p-6">
//             <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">Our Products</h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {products.map(({ _id, name, price, images = [] }) => (
//                     <div
//                         key={_id}
//                         className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition duration-300 relative group"
//                     >
//                         <img
//                             src={`http://localhost:4000${images[0]}`}
//                             alt={name}
//                             className="w-full h-48 object-cover rounded-t-xl"
//                         />

//                         <div className="p-4">
//                             <h3 className="text-md font-semibold text-gray-800 truncate">{name}</h3>


//                         </div>

//                         {/* Action Buttons */}
//                         <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all flex flex-col gap-2">
//                             <button
//                                 className="bg-white shadow p-2 rounded-full hover:bg-blue-50"
//                                 title="Add to Cart"
//                             >
//                                 <ShoppingCart className="w-4 h-4 text-blue-600" />
//                             </button>
//                             <button
//                                 className="bg-white shadow p-2 rounded-full hover:bg-gray-100"
//                                 title="View Details"
//                             >
//                                 <Eye className="w-4 h-4 text-gray-600" />
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Product;





















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { ShoppingCart, CreditCard } from 'lucide-react';

// const Product = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const res = await axios.get("http://localhost:4000/api/products/all-products");
//                 setProducts(res.data.products);
//             } catch (error) {
//                 console.error("Failed to fetch products:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, []);

//     if (loading) return <p className="text-center mt-10 text-gray-600">Loading products...</p>;

//     return (
//         <div className="p-6 bg-gray-50 min-h-screen">
//             <h2 className="text-center text-4xl font-bold mb-10 text-gray-800">Our Products</h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//                 {products.map(({ _id, name, price, images = [] }) => (
//                     <div
//                         key={_id}
//                         className="flex flex-col bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
//                     >
//                         {/* Image */}
//                         <div className="overflow-hidden rounded-t-xl">
//                             <img
//                                 src={`http://localhost:4000${images[0]}`}
//                                 alt={name}
//                                 className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
//                             />
//                         </div>

//                         {/* Product Info */}
//                         <div className="p-4 flex flex-col flex-grow">
//                             <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
//                             <p className="text-blue-600 font-bold text-md mb-4">₹{price}</p>
//                             {/* <p className="text-blue-600 font-bold text-md mb-4">{stock}</p> */}

//                             {/* CTA Buttons */}
//                             <div className="mt-auto flex flex-col gap-2">
//                                 <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition text-sm font-medium">
//                                     <ShoppingCart className="h-4 w-4" /> Add to Cart
//                                 </button>
//                                 <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition text-sm font-medium">
//                                     <CreditCard className="h-4 w-4" /> Buy Now
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Product;







import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ShoppingCart, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("https://selfy-snap.onrender.com/api/products/all-products");
                setProducts(res.data.products);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p className="text-center mt-10 text-gray-600">Loading products...</p>;

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h2 className="text-center text-4xl font-bold mb-10 text-gray-800">Our Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map(({ _id, name, price, stock, images = [] }) => (
                    <div
                        key={_id}
                        className="flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        {/* Product Image */}
                        <div className="overflow-hidden rounded-t-xl">
                            <Link to={`/product/${_id}`}><img
                                src={`http://localhost:4000${images[0]}`}
                                alt={name}
                                className="w-full h-40 object-contain bg-white p-2 transition-transform duration-300 hover:scale-105"
                            /></Link>

                        </div>

                        {/* Product Info */}
                        <div className="p-4 flex flex-col flex-grow">
                            <h3 className="text-md font-semibold text-gray-800 mb-1 line-clamp-1">{name}</h3>
                            <p className="text-sm text-gray-600 mb-1">Stock: <span className="font-medium">{stock}</span></p>
                            <p className="text-blue-600 font-bold text-lg mb-4">₹{price}</p>

                            {/* CTA Buttons */}
                            <div className="mt-auto flex flex-col gap-2">
                                <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition text-sm font-medium">
                                    <ShoppingCart className="h-4 w-4" /> Add to Cart
                                </button>
                                <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition text-sm font-medium">
                                    <CreditCard className="h-4 w-4" /> Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;





















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { ShoppingCart, Heart, Star, Eye, CreditCard } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Product = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const res = await axios.get("http://localhost:4000/api/products/all-products");
//                 setProducts(res.data.products);
//             } catch (error) {
//                 console.error("Failed to fetch products:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProducts();
//     }, []);

//     if (loading) return (
//         <div className="p-6 bg-gray-50 min-h-screen">
//             <h2 className="text-center text-4xl font-bold mb-10 text-gray-800">Our Products</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//                 {[...Array(8)].map((_, idx) => (
//                     <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
//                         <div className="bg-gray-200 border-2 border-dashed rounded-t-xl w-full h-48" />
//                         <div className="p-4 space-y-3">
//                             <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//                             <div className="h-4 bg-gray-200 rounded w-1/4"></div>
//                             <div className="h-4 bg-gray-200 rounded w-1/2"></div>
//                             <div className="h-8 bg-gray-200 rounded"></div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );

//     return (
//         <div className="p-6 bg-gray-50 min-h-screen">
//             <h2 className="text-center text-4xl font-bold mb-10 text-gray-800">Our Products</h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//                 {products.map(({ _id, name, price, stock, images = [], category, rating }) => (
//                     <div
//                         key={_id}
//                         className="flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
//                     >
//                         {/* Product Image with Hover Actions */}
//                         <div className="relative overflow-hidden rounded-t-xl">
//                             <div className="relative h-48">
//                                 <Link to={`/product/${_id}`}>
//                                     <img
//                                         src={`http://localhost:4000${images[0]}`}
//                                         alt={name}
//                                         className="w-full h-full object-contain bg-white p-4 transition-transform duration-500 group-hover:scale-110"
//                                     />
//                                 </Link>

//                                 {/* Quick Actions */}
//                                 <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                     <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-red-50 hover:text-red-500">
//                                         <Heart className="h-4 w-4" />
//                                     </button>
//                                     <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-blue-50 hover:text-blue-500">
//                                         <Eye className="h-4 w-4" />
//                                     </button>
//                                 </div>

//                                 {/* Stock Badge */}
//                                 {stock <= 0 ? (
//                                     <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//                                         Out of Stock
//                                     </span>
//                                 ) : (
//                                     <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
//                                         In Stock
//                                     </span>
//                                 )}

//                                 {/* Category Tag */}
//                                 <span className="absolute bottom-3 left-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
//                                     {category || "General"}
//                                 </span>
//                             </div>
//                         </div>

//                         {/* Product Info */}
//                         <div className="p-4 flex flex-col flex-grow">
//                             <div className="mb-2">
//                                 <Link to={`/product/${_id}`}>
//                                     <h3 className="text-md font-semibold text-gray-800 mb-1 line-clamp-1 hover:text-blue-600 transition-colors">
//                                         {name}
//                                     </h3>
//                                 </Link>

//                                 {/* Rating */}
//                                 <div className="flex items-center mb-1">
//                                     <div className="flex text-yellow-400">
//                                         {[...Array(5)].map((_, i) => (
//                                             <Star
//                                                 key={i}
//                                                 className={`h-3 w-3 ${i < Math.round(rating || 4) ? 'fill-current' : ''}`}
//                                             />
//                                         ))}
//                                     </div>
//                                     <span className="text-xs text-gray-500 ml-1">({rating || 4}.0)</span>
//                                 </div>
//                             </div>

//                             {/* Price */}
//                             <div className="flex items-center mt-auto">
//                                 <p className="text-blue-600 font-bold text-lg">₹{price}</p>
//                                 {price > 1000 && (
//                                     <span className="text-xs text-gray-500 ml-2 line-through">₹{(price * 1.2).toFixed(0)}</span>
//                                 )}
//                             </div>

//                             {/* CTA Buttons */}
//                             <div className="mt-4 flex gap-2">
//                                 <button
//                                     className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition text-sm font-medium
//                                         ${stock <= 0
//                                             ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                                             : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
//                                     disabled={stock <= 0}
//                                 >
//                                     <ShoppingCart className="h-4 w-4" /> Add to Cart
//                                 </button>
//                                 <button
//                                     className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition text-sm font-medium
//                                         ${stock <= 0
//                                             ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                                             : 'bg-green-600 hover:bg-green-700 text-white'}`}
//                                     disabled={stock <= 0}
//                                 >
//                                     <CreditCard className="h-4 w-4" /> Buy Now
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Product;
