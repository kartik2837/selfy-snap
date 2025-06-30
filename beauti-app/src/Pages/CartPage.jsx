// import React from 'react';
// import { useCart } from '../context/CartContext';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const CartPage = () => {
//     const { cartItems, removeFromCart, updateQuantity } = useCart();
//     const DELIVERY_CHARGE = 49;

//     const handleQtyChange = (id, qty) => {
//         if (qty > 0) updateQuantity(id, qty);
//     };

//     const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//     const total = subtotal + DELIVERY_CHARGE;

//     if (cartItems.length === 0)
//         return (
//             <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-center mt-20 text-lg"
//             >
//                 <p>Your cart is empty 😢</p>
//                 <Link to="/" className="text-blue-600 hover:underline mt-2 inline-block">Go Shopping</Link>
//             </motion.div>
//         );

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="max-w-3xl mx-auto p-4 space-y-6"
//         >
//             <h1 className="text-2xl font-bold text-center mb-2">🛒 Cart</h1>

//             <div className="bg-white rounded-xl shadow-md p-4 space-y-4">
//                 {cartItems.map((item) => (
//                     <motion.div
//                         key={item._id}
//                         initial={{ scale: 0.95, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         transition={{ duration: 0.3 }}
//                         className="flex items-center gap-4 border-b pb-3"
//                     >
//                         <img
//                             src={`http://localhost:4000${item.images?.[0]}`}
//                             alt={item.name}
//                             className="w-16 h-16 object-contain rounded"
//                         />
//                         <div className="flex-1">
//                             <p className="font-medium">{item.name}</p>
//                             <p className="text-sm text-gray-500">Brand: {item.brand}</p>
//                             <div className="flex items-center gap-2 mt-1">
//                                 <input
//                                     type="number"
//                                     min={1}
//                                     value={item.quantity}
//                                     onChange={(e) => handleQtyChange(item._id, parseInt(e.target.value))}
//                                     className="w-14 border rounded px-2 text-sm"
//                                 />
//                                 <span className="text-gray-700 text-sm">x ₹{item.price}</span>
//                             </div>
//                         </div>
//                         <div className="text-right">
//                             <p className="font-semibold text-sm">₹{item.price * item.quantity}</p>
//                             <button
//                                 onClick={() => removeFromCart(item._id)}
//                                 className="text-xs text-red-500 hover:underline mt-1"
//                             >
//                                 Remove
//                             </button>
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>

//             {/* Checkout Box */}
//             <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.1 }}
//                 className="bg-white p-4 rounded-lg shadow-md"
//             >
//                 <h2 className="text-lg font-semibold mb-3">Order Summary</h2>
//                 <div className="text-sm text-gray-700 space-y-2">
//                     <div className="flex justify-between">
//                         <span>Subtotal</span>
//                         <span>₹{subtotal}</span>
//                     </div>
//                     <div className="flex justify-between">
//                         <span>Delivery</span>
//                         <span>₹{DELIVERY_CHARGE}</span>
//                     </div>
//                     <div className="flex justify-between font-bold text-base border-t pt-2">
//                         <span>Total</span>
//                         <span>₹{total}</span>
//                     </div>
//                 </div>
//                 <button className="mt-4 w-full bg-blue-600 text-white text-sm py-2 rounded hover:bg-blue-700 transition">
//                     Proceed to Checkout
//                 </button>
//             </motion.div>
//         </motion.div>
//     );
// };

// export default CartPage;








// import React from 'react';
// import { useCart } from '../context/CartContext';
// import { Link } from 'react-router-dom';

// const CartPage = () => {
//     const { cartItems, updateQuantity, removeFromCart } = useCart();
//     const DELIVERY_CHARGE = 49;

//     const subtotal = cartItems.reduce(
//         (acc, item) => acc + item.product.price * item.quantity,
//         0
//     );
//     const total = subtotal + DELIVERY_CHARGE;

//     if (!cartItems.length)
//         return (
//             <div className="text-center mt-20 text-lg">
//                 <p>Your cart is empty 😢</p>
//                 <Link to="/" className="text-blue-600 hover:underline mt-2 inline-block">
//                     Go Shopping
//                 </Link>
//             </div>
//         );

//     return (
//         <div className="max-w-4xl mx-auto p-6 space-y-4">
//             <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

//             {cartItems.map(({ product, quantity }) => (
//                 <div key={product._id} className="flex items-center gap-4 border-b pb-3">
//                     <img
//                         src={`http://localhost:4000${product.images[0]}`}
//                         alt={product.name}
//                         className="w-20 h-20 object-contain rounded"
//                     />
//                     <div className="flex-1">
//                         <h2 className="font-semibold">{product.name}</h2>
//                         <p className="text-sm text-gray-500">Brand: {product.brand}</p>
//                         <div className="flex items-center gap-2 mt-2">
//                             <input
//                                 type="number"
//                                 min={1}
//                                 value={quantity}
//                                 onChange={(e) => updateQuantity(product._id, parseInt(e.target.value))}
//                                 className="w-14 px-2 py-1 border rounded"
//                             />
//                             <span>x ₹{product.price}</span>
//                         </div>
//                     </div>
//                     <div className="text-right">
//                         <p className="font-bold">₹{product.price * quantity}</p>
//                         <button
//                             onClick={() => removeFromCart(product._id)}
//                             className="text-red-500 text-sm mt-1 hover:underline"
//                         >
//                             Remove
//                         </button>
//                     </div>
//                 </div>
//             ))}

//             <div className="border-t pt-4">
//                 <div className="flex justify-between">
//                     <span>Subtotal:</span>
//                     <span>₹{subtotal}</span>
//                 </div>
//                 <div className="flex justify-between">
//                     <span>Delivery:</span>
//                     <span>₹{DELIVERY_CHARGE}</span>
//                 </div>
//                 <div className="flex justify-between font-bold text-lg mt-2">
//                     <span>Total:</span>
//                     <span>₹{total}</span>
//                 </div>
//                 <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//                     Proceed to Checkout
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default CartPage;

































// import React from 'react';
// import { useCart } from '../context/CartContext';

// const CartPage = () => {
//     const { cartItems, updateQuantity, removeFromCart } = useCart();

//     return (
//         <div>
//             <h2>Your Cart</h2>
//             {cartItems.map(item => (
//                 <div key={item.product._id} className="p-4 border-b">
//                     <h4>{item.product.name}</h4>
//                     <p>Price: ₹{item.product.price}</p>
//                     <p>Stock: {item.product.stock}</p>
//                     <p>Brand: {item.product.brand}</p>
//                     <img src={`http://localhost:4000${item.product.images[0]}`} alt={item.product.name} className="w-20" />

//                     <input
//                         type="number"
//                         value={item.quantity}
//                         onChange={e => updateQuantity(item.product._id, parseInt(e.target.value))}
//                         className="w-16 border"
//                     />
//                     <button onClick={() => removeFromCart(item.product._id)} className="text-red-500 ml-4">Remove</button>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default CartPage;






























// import React from 'react';
// import { useCart } from '../context/CartContext';
// import { Link } from 'react-router-dom';

// const CartPage = () => {
//     const { cartItems, updateQuantity, removeFromCart } = useCart();
//     const DELIVERY_CHARGE = 49;

//     const subtotal = cartItems.reduce((acc, item) => {
//         if (!item.product) return acc;
//         return acc + item.product.price * item.quantity;
//     }, 0);

//     const total = subtotal + DELIVERY_CHARGE;

//     if (!cartItems.length) {
//         return (
//             <div className="text-center mt-20 text-lg">
//                 <p>Your cart is empty 😢</p>
//                 <Link to="/" className="text-blue-600 hover:underline mt-2 inline-block">
//                     Go Shopping
//                 </Link>
//             </div>
//         );
//     }

//     return (
//         <div className="max-w-4xl mx-auto p-6 space-y-4">
//             <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

//             {cartItems.map(({ product, quantity }) => (
//                 product && (
//                     <div key={product._id} className="flex items-center gap-4 border-b pb-3">
//                         <img
//                             src={`http://localhost:4000${product.images[0]}`}
//                             alt={product.name}
//                             className="w-20 h-20 object-contain rounded"
//                         />
//                         <div className="flex-1">
//                             <h2 className="font-semibold">{product.name}</h2>
//                             <p className="text-sm text-black">Brand: {product.brand}</p>
//                             <p className="text-sm text-black">Description: {product.description}</p>


//                             <div className="flex items-center gap-2 mt-2">
//                                 <input
//                                     type="number"
//                                     min={1}
//                                     value={quantity}
//                                     onChange={(e) =>
//                                         updateQuantity(product._id, parseInt(e.target.value))
//                                     }
//                                     className="w-14 px-2 py-1 border rounded"
//                                 />
//                                 <span>x ₹{product.price}</span>
//                             </div>
//                         </div>
//                         <div className="text-right">
//                             <p className="font-bold">₹{product.price * quantity}</p>
//                             <button
//                                 onClick={() => removeFromCart(product._id)}
//                                 className="text-red-500 text-sm mt-1 hover:underline"
//                             >
//                                 Remove
//                             </button>
//                         </div>
//                     </div>
//                 )
//             ))}

//             <div className="border-t pt-4">
//                 <div className="flex justify-between">
//                     <span>Subtotal:</span>
//                     <span>₹{subtotal}</span>
//                 </div>
//                 <div className="flex justify-between">
//                     <span>Delivery:</span>
//                     <span>₹{DELIVERY_CHARGE}</span>
//                 </div>
//                 <div className="flex justify-between font-bold text-lg mt-2">
//                     <span>Total:</span>
//                     <span>₹{total}</span>
//                 </div>
//                 <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//                     Proceed to Checkout
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default CartPage;





// import React from 'react';
// import { useCart } from '../context/CartContext';
// import { Link } from 'react-router-dom';
// import {
//     FiShoppingCart,
//     FiBox,
//     FiTag,
//     FiTrash2,
//     FiHash,
//     FiCreditCard,
//     FiTruck,
//     FiCheckCircle
// } from 'react-icons/fi';

// const CartPage = () => {
//     const { cartItems, updateQuantity, removeFromCart } = useCart();
//     const DELIVERY_CHARGE = 49;

//     const subtotal = cartItems.reduce((acc, item) => {
//         if (!item.product) return acc;
//         return acc + item.product.price * item.quantity;
//     }, 0);

//     const total = subtotal + DELIVERY_CHARGE;

//     if (!cartItems.length) {
//         return (
//             <div className="text-center mt-20 text-lg text-gray-600">
//                 <FiShoppingCart className="mx-auto text-5xl mb-2" />
//                 <p>Your cart is empty 😢</p>
//                 <Link to="/" className="text-blue-600 hover:underline mt-2 inline-block">
//                     Go Shopping
//                 </Link>
//             </div>
//         );
//     }

//     return (
//         <div className="max-w-7xl mx-auto p-6">
//             <h1 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
//                 <FiShoppingCart /> Shopping Cart
//             </h1>

//             <div className="grid md:grid-cols-3 gap-6">
//                 {/* 🛒 Cart Items */}
//                 <div className="md:col-span-2 space-y-4">
//                     {cartItems.map(({ product, quantity }) => (
//                         product && (
//                             <div key={product._id} className="flex gap-4 border rounded-lg p-3 shadow-sm bg-white">
//                                 <img
//                                     src={`http://localhost:4000${product.images[0]}`}
//                                     alt={product.name}
//                                     className="w-20 h-20 object-contain border rounded"
//                                 />
//                                 <div className="flex-1">
//                                     <h2 className="text-base font-semibold text-gray-800 flex items-center gap-1">
//                                         <FiBox /> {product.name}
//                                     </h2>
//                                     <p className="text-xs text-gray-500 flex items-center gap-1">
//                                         <FiTag /> Brand: {product.brand}
//                                     </p>
//                                     <p className="text-xs text-gray-500 flex items-center gap-1">
//                                         <FiCreditCard /> ₹{product.price} x {quantity}
//                                     </p>

//                                     <div className="flex items-center gap-2 mt-2">
//                                         <input
//                                             type="number"
//                                             min={1}
//                                             value={quantity}
//                                             onChange={(e) => updateQuantity(product._id, parseInt(e.target.value))}
//                                             className="w-16 text-sm px-2 py-1 border rounded"
//                                         />
//                                         <p className="text-sm font-semibold text-gray-700 flex items-center gap-1">
//                                             <FiHash /> ₹{product.price * quantity}
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <button
//                                     onClick={() => removeFromCart(product._id)}
//                                     className="text-red-500 hover:text-red-600"
//                                     title="Remove"
//                                 >
//                                     <FiTrash2 size={16} />
//                                 </button>
//                             </div>
//                         )
//                     ))}
//                 </div>

//                 {/* ✅ Order Summary */}
//                 <div className="border rounded-lg shadow-md bg-white p-5 h-fit sticky top-6">
//                     <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
//                         <FiCheckCircle /> Order Summary
//                     </h3>
//                     <div className="flex justify-between text-sm mb-2 text-gray-600">
//                         <span className="flex items-center gap-1"><FiCreditCard /> Subtotal</span>
//                         <span>₹{subtotal}</span>
//                     </div>
//                     <div className="flex justify-between text-sm mb-2 text-gray-600">
//                         <span className="flex items-center gap-1"><FiTruck /> Delivery</span>
//                         <span>₹{DELIVERY_CHARGE}</span>
//                     </div>
//                     <div className="flex justify-between font-bold text-base border-t pt-3 mt-3 text-gray-800">
//                         <span className="flex items-center gap-1"><FiCheckCircle /> Total</span>
//                         <span>₹{total}</span>
//                     </div>
//                     <Link
//                         to="/order"
//                         className="w-full mt-4 bg-rose-600 text-white py-2 rounded hover:bg-rose-700 transition-all text-center flex items-center justify-center gap-2"
//                     >
//                         <FiCheckCircle /> Proceed to Checkout
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CartPage;


import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import {
    FiShoppingCart,
    FiBox,
    FiTag,
    FiTrash2,
    FiHash,
    FiCreditCard,
    FiTruck,
    FiCheckCircle
} from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartPage = () => {
    const { cartItems, updateQuantity, removeFromCart } = useCart();
    const DELIVERY_CHARGE = 49;

    const subtotal = cartItems.reduce((acc, item) => {
        if (!item.product) return acc;
        return acc + item.product.price * item.quantity;
    }, 0);

    const total = subtotal + DELIVERY_CHARGE;

    if (!cartItems.length) {
        return (
            <div className="text-center mt-20 text-lg text-gray-600">
                <ToastContainer position="top-right" autoClose={2000} />
                <FiShoppingCart className="mx-auto text-5xl mb-2" />
                <p>Your cart is empty 😢</p>
                <Link to="/" className="text-blue-600 hover:underline mt-2 inline-block">
                    Go Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto p-6">
            <ToastContainer position="top-right" autoClose={2000} />

            <h1 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                <FiShoppingCart /> Shopping Cart
            </h1>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Cart Items */}
                <div className="md:col-span-2 space-y-4">
                    {cartItems.map(({ product, quantity }) => (
                        product && (
                            <div key={product._id} className="flex gap-4 border rounded-lg p-3 shadow-sm bg-white">
                                <img
                                    src={`https://selfy-snap.onrender.com${product.images[0]}`}
                                    alt={product.name}
                                    className="w-20 h-20 object-contain border rounded"
                                />
                                <div className="flex-1">
                                    <h2 className="text-base font-semibold text-gray-800 flex items-center gap-1">
                                        <FiBox /> {product.name}
                                    </h2>
                                    <p className="text-xs text-gray-500 flex items-center gap-1">
                                        <FiTag /> Brand: {product.brand}
                                    </p>
                                    <p className="text-xs text-gray-500 flex items-center gap-1">
                                        <FiCreditCard /> ₹{product.price} x {quantity}
                                    </p>

                                    <div className="flex items-center gap-2 mt-2">
                                        <input
                                            type="number"
                                            min={1}
                                            value={quantity}
                                            onChange={(e) => {
                                                updateQuantity(product._id, parseInt(e.target.value));
                                                toast.info(`Updated quantity for ${product.name}`);
                                            }}
                                            className="w-16 text-sm px-2 py-1 border rounded"
                                        />
                                        <p className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                                            <FiHash /> ₹{product.price * quantity}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        removeFromCart(product._id);
                                        toast.error(`${product.name} removed from cart`);
                                    }}
                                    className="text-red-500 hover:text-red-600"
                                    title="Remove"
                                >
                                    <FiTrash2 size={16} />
                                </button>
                            </div>
                        )
                    ))}
                </div>

                {/* Order Summary */}
                <div className="border rounded-lg shadow-md bg-white p-5 h-fit sticky top-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
                        <FiCheckCircle /> Order Summary
                    </h3>
                    <div className="flex justify-between text-sm mb-2 text-gray-600">
                        <span className="flex items-center gap-1"><FiCreditCard /> Subtotal</span>
                        <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2 text-gray-600">
                        <span className="flex items-center gap-1"><FiTruck /> Delivery</span>
                        <span>₹{DELIVERY_CHARGE}</span>
                    </div>
                    <div className="flex justify-between font-bold text-base border-t pt-3 mt-3 text-gray-800">
                        <span className="flex items-center gap-1"><FiCheckCircle /> Total</span>
                        <span>₹{total}</span>
                    </div>
                    <Link
                        to="/order"
                        className="w-full mt-4 bg-rose-600 text-white py-2 rounded hover:bg-rose-700 transition-all text-center flex items-center justify-center gap-2"
                    >
                        <FiCheckCircle /> Proceed to Checkout
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartPage;



