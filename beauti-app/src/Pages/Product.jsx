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
//                         console.log(images[0]);
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


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ShoppingCart, Eye } from 'lucide-react';
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
        <div className="p-6">
            <h2 className="text-center text-3xl font-bold mb-8 text-red-500">Our Products</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {products.map(({ _id, name, price, images = [] }) => (
                    <div
                        key={_id}
                        className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow hover:shadow-xl transition-all duration-300"
                    >
                        <div className="relative overflow-hidden">
                            <Link to={`/product/${_id}`}> <img
                                src={`https://selfy-snap.onrender.com${images[0]}`}
                                alt={name}
                                className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                            </Link>
                            {/* Optional discount badge */}
                            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full shadow">
                                10% OFF
                            </span>

                            {/* View and Cart icons */}
                            <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    className="bg-white p-2 rounded-full shadow hover:bg-blue-50"
                                    title="Add to Cart"
                                >
                                    <ShoppingCart className="h-4 w-4 text-blue-600" />
                                </button>
                                <button
                                    className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                                    title="View Details"
                                >
                                    <Eye className="h-4 w-4 text-gray-600" />
                                </button>
                            </div>
                        </div>

                        <div className="p-4">
                            <h3 className="text-md font-medium text-gray-900 truncate mb-1">{name}</h3>
                            <p className="text-blue-600 font-semibold text-sm mb-3">₹{price}</p>

                            <button className="w-full bg-blue-600 text-white py-1.5 rounded-lg text-sm hover:bg-blue-700 transition">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
