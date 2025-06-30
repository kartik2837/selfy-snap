// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//     FiShoppingCart,
//     FiBox,
//     FiTag,
//     FiHash,
//     FiCreditCard,
//     FiTruck,
//     FiCheckCircle
// } from 'react-icons/fi';

// const Order = () => {
//     const [orders, setOrders] = useState([]);
//     const token = localStorage.getItem('token');

//     useEffect(() => {
//         const fetchOrders = async () => {
//             try {
//                 const res = await axios.get('https://selfy-snap.onrender.com/api/orders/my', {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });
//                 setOrders(res.data);
//             } catch (err) {
//                 console.error('Error fetching orders:', err.message);
//             }
//         };

//         fetchOrders();
//     }, []);

//     if (!orders.length) {
//         return (
//             <div className="text-center mt-20 text-lg text-gray-600">
//                 <FiShoppingCart className="mx-auto text-5xl mb-2" />
//                 <p>No orders found 🧾</p>
//             </div>
//         );
//     }

//     return (
//         <div className="max-w-7xl mx-auto p-6">
//             <h1 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
//                 <FiCheckCircle /> My Orders
//             </h1>

//             <div className="space-y-6">
//                 {orders.map((order) => (
//                     <div key={order._id} className="border rounded-lg p-5 bg-white shadow-md space-y-4">
//                         {/* Order Header */}
//                         <div className="flex justify-between items-center text-sm text-gray-600">
//                             <span>🧾 Order ID: <b>{order._id.slice(-6).toUpperCase()}</b></span>
//                             <span>Status: <b className="text-rose-600">{order.status}</b></span>
//                         </div>

//                         {/* Items */}
//                         <div className="grid md:grid-cols-2 gap-4">
//                             {order.items.map((item) => (
//                                 item.product && (
//                                     <div key={item._id} className="flex gap-4 border rounded-lg p-3 shadow-sm bg-gray-50">
//                                         <img
//                                             src={`http://localhost:4000${item.product.images[0]}`}
//                                             alt={item.product.name}
//                                             className="w-20 h-20 object-contain border rounded"
//                                         />
//                                         <div className="flex-1">
//                                             <h2 className="text-base font-semibold text-gray-800 flex items-center gap-1">
//                                                 <FiBox /> {item.product.name}
//                                             </h2>
//                                             <p className="text-xs text-gray-500 flex items-center gap-1">
//                                                 <FiTag /> Brand: {item.product.brand}
//                                             </p>
//                                             <p className="text-xs text-gray-500 flex items-center gap-1">
//                                                 <FiHash /> Qty: {item.quantity}
//                                             </p>
//                                             <p className="text-xs text-gray-500 flex items-center gap-1">
//                                                 <FiCreditCard /> ₹{item.product.price} x {item.quantity} = ₹{item.product.price * item.quantity}
//                                             </p>
//                                         </div>
//                                     </div>
//                                 )
//                             ))}
//                         </div>

//                         {/* Summary */}
//                         <div className="border-t pt-3 flex justify-between text-sm text-gray-800 font-semibold">
//                             <span className="flex items-center gap-1">
//                                 <FiTruck /> Payment: {order.paymentMethod}
//                             </span>
//                             <span className="flex items-center gap-1 text-rose-600">
//                                 <FiCheckCircle /> Total: ₹{order.totalAmount}
//                             </span>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Order;







// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//     FiShoppingCart,
//     FiBox,
//     FiTag,
//     FiHash,
//     FiCreditCard,
//     FiTruck,
//     FiCheckCircle
// } from 'react-icons/fi';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../context/CartContext';

// const Order = () => {
//     const [orders, setOrders] = useState([]);
//     const token = localStorage.getItem('token');
//     const navigate = useNavigate();
//     const { cartItems, clearCart } = useCart();

//     const DELIVERY_CHARGE = 49;

//     const subtotal = cartItems.reduce((acc, item) => {
//         if (!item.product) return acc;
//         return acc + item.product.price * item.quantity;
//     }, 0);

//     const totalAmount = subtotal + DELIVERY_CHARGE;

//     // Fetch orders
//     const fetchOrders = async () => {
//         try {
//             const res = await axios.get('http://localhost:4000/api/orders/my', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setOrders(res.data);
//         } catch (err) {
//             console.error('Error fetching orders:', err.message);
//         }
//     };

//     useEffect(() => {
//         fetchOrders();
//     }, []);

//     // Place COD order
//     const handlePlaceOrder = async () => {
//         try {
//             const res = await axios.post(
//                 'http://localhost:4000/api/orders/place',
//                 {},
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             clearCart(); // remove from context/local
//             alert('Order placed successfully!');
//             await fetchOrders(); // refresh order list
//             navigate('/'); // redirect home
//         } catch (error) {
//             console.error('Error placing order:', error.message);
//             alert('Failed to place order');
//         }
//     };

//     return (
//         <div className="max-w-7xl mx-auto p-6">
//             <h1 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
//                 <FiCheckCircle /> My Orders
//             </h1>

//             {/* Order Form Summary */}
//             {cartItems.length > 0 && (
//                 <div className="border rounded-lg bg-white shadow-md p-6 mb-8">
//                     <h2 className="text-lg font-semibold mb-4 text-gray-700">Place New Order</h2>
//                     <div className="space-y-2 text-gray-700">
//                         <p>🛒 Items: {cartItems.length}</p>
//                         <p>Subtotal: ₹{subtotal}</p>
//                         <p>Delivery Charge: ₹{DELIVERY_CHARGE}</p>
//                         <p className="font-bold text-lg">Total: ₹{totalAmount}</p>
//                     </div>
//                     <button
//                         onClick={handlePlaceOrder}
//                         className="mt-4 bg-rose-600 hover:bg-rose-700 text-white py-2 px-6 rounded flex items-center gap-2"
//                     >
//                         <FiCheckCircle /> Place COD Order
//                     </button>
//                 </div>
//             )}

//             {/* Orders List */}
//             {orders.length === 0 ? (
//                 <div className="text-center mt-10 text-lg text-gray-600">
//                     <FiShoppingCart className="mx-auto text-5xl mb-2" />
//                     <p>No orders found 🧾</p>
//                 </div>
//             ) : (
//                 <div className="space-y-6">
//                     {orders.map((order) => (
//                         <div key={order._id} className="border rounded-lg p-5 bg-white shadow-md space-y-4">
//                             <div className="flex justify-between items-center text-sm text-gray-600">
//                                 <span>🧾 Order ID: <b>{order._id.slice(-6).toUpperCase()}</b></span>
//                                 <span>Status: <b className="text-rose-600">{order.status}</b></span>
//                             </div>

//                             <div className="grid md:grid-cols-2 gap-4">
//                                 {order.items.map((item) => (
//                                     item.product && (
//                                         <div key={item._id} className="flex gap-4 border rounded-lg p-3 shadow-sm bg-gray-50">
//                                             <img
//                                                 src={`http://localhost:4000${item.product.images[0]}`}
//                                                 alt={item.product.name}
//                                                 className="w-20 h-20 object-contain border rounded"
//                                             />
//                                             <div className="flex-1">
//                                                 <h2 className="text-base font-semibold text-gray-800 flex items-center gap-1">
//                                                     <FiBox /> {item.product.name}
//                                                 </h2>
//                                                 <p className="text-xs text-gray-500 flex items-center gap-1">
//                                                     <FiTag /> Brand: {item.product.brand}
//                                                 </p>
//                                                 <p className="text-xs text-gray-500 flex items-center gap-1">
//                                                     <FiHash /> Qty: {item.quantity}
//                                                 </p>
//                                                 <p className="text-xs text-gray-500 flex items-center gap-1">
//                                                     <FiCreditCard /> ₹{item.product.price} x {item.quantity} = ₹{item.product.price * item.quantity}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     )
//                                 ))}
//                             </div>

//                             <div className="border-t pt-3 flex justify-between text-sm text-gray-800 font-semibold">
//                                 <span className="flex items-center gap-1">
//                                     <FiTruck /> Payment: {order.paymentMethod}
//                                 </span>
//                                 <span className="flex items-center gap-1 text-rose-600">
//                                     <FiCheckCircle /> Total: ₹{order.totalAmount}
//                                 </span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Order;










// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//     FiShoppingCart,
//     FiBox,
//     FiTag,
//     FiHash,
//     FiCreditCard,
//     FiTruck,
//     FiCheckCircle
// } from 'react-icons/fi';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../context/CartContext';

// const Order = () => {
//     const [orders, setOrders] = useState([]);
//     const token = localStorage.getItem('token');
//     const navigate = useNavigate();
//     const { cartItems, clearCart } = useCart();

//     const DELIVERY_CHARGE = 49;

//     const subtotal = cartItems.reduce((acc, item) => {
//         if (!item.product) return acc;
//         return acc + item.product.price * item.quantity;
//     }, 0);

//     const totalAmount = subtotal + DELIVERY_CHARGE;

//     // Fetch orders
//     const fetchOrders = async () => {
//         try {
//             const res = await axios.get('http://localhost:4000/api/orders/my', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setOrders(res.data);
//         } catch (err) {
//             console.error('Error fetching orders:', err.message);
//         }
//     };

//     useEffect(() => {
//         fetchOrders();
//     }, []);

//     // Place COD order
//     const handlePlaceOrder = async () => {
//         try {
//             const res = await axios.post(
//                 'http://localhost:4000/api/orders/place',
//                 {},
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             clearCart(); // remove from context/local
//             alert('Order placed successfully!');
//             await fetchOrders(); // refresh order list
//             navigate('/'); // redirect home
//         } catch (error) {
//             console.error('Error placing order:', error.message);
//             alert('Failed to place order');
//         }
//     };

//     // ❌ CUT item from UI only
//     const handleCutItem = (orderId, itemId) => {
//         setOrders(prevOrders =>
//             prevOrders.map(order =>
//                 order._id === orderId
//                     ? {
//                         ...order,
//                         items: order.items.filter(item => item._id !== itemId)
//                     }
//                     : order
//             )
//         );
//     };

//     return (
//         <div className="max-w-7xl mx-auto p-6">
//             <h1 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
//                 <FiCheckCircle /> My Orders
//             </h1>

//             {/* Order Form Summary */}
//             {cartItems.length > 0 && (
//                 <div className="border rounded-lg bg-white shadow-md p-6 mb-8">
//                     <h2 className="text-lg font-semibold mb-4 text-gray-700">Place New Order</h2>
//                     <div className="space-y-2 text-gray-700">
//                         <p>🛒 Items: {cartItems.length}</p>
//                         <p>Subtotal: ₹{subtotal}</p>
//                         <p>Delivery Charge: ₹{DELIVERY_CHARGE}</p>
//                         <p className="font-bold text-lg">Total: ₹{totalAmount}</p>
//                     </div>
//                     <button
//                         onClick={handlePlaceOrder}
//                         className="mt-4 bg-rose-600 hover:bg-rose-700 text-white py-2 px-6 rounded flex items-center gap-2"
//                     >
//                         <FiCheckCircle /> Place COD Order
//                     </button>
//                 </div>
//             )}

//             {/* Orders List */}
//             {orders.length === 0 ? (
//                 <div className="text-center mt-10 text-lg text-gray-600">
//                     <FiShoppingCart className="mx-auto text-5xl mb-2" />
//                     <p>No orders found 🧾</p>
//                 </div>
//             ) : (
//                 <div className="space-y-6">
//                     {orders.map((order) => (
//                         <div key={order._id} className="border rounded-lg p-5 bg-white shadow-md space-y-4">
//                             <div className="flex justify-between items-center text-sm text-gray-600">
//                                 <span>🧾 Order ID: <b>{order._id.slice(-6).toUpperCase()}</b></span>
//                                 <span>Status: <b className="text-rose-600">{order.status}</b></span>
//                             </div>

//                             <div className="grid md:grid-cols-2 gap-4">
//                                 {order.items.map((item) => (
//                                     item.product && (
//                                         <div key={item._id} className="flex gap-4 border rounded-lg p-3 shadow-sm bg-gray-50 relative">
//                                             <img
//                                                 src={`http://localhost:4000${item.product.images[0]}`}
//                                                 alt={item.product.name}
//                                                 className="w-20 h-20 object-contain border rounded"
//                                             />
//                                             <div className="flex-1">
//                                                 <h2 className="text-base font-semibold text-gray-800 flex items-center gap-1">
//                                                     <FiBox /> {item.product.name}
//                                                 </h2>
//                                                 <p className="text-xs text-gray-500 flex items-center gap-1">
//                                                     <FiTag /> Brand: {item.product.brand}
//                                                 </p>
//                                                 <p className="text-xs text-gray-500 flex items-center gap-1">
//                                                     <FiHash /> Qty: {item.quantity}
//                                                 </p>
//                                                 <p className="text-xs text-gray-500 flex items-center gap-1">
//                                                     <FiCreditCard /> ₹{item.product.price} x {item.quantity} = ₹{item.product.price * item.quantity}
//                                                 </p>
//                                             </div>

//                                             {/* ❌ Cut Button */}
//                                             <button
//                                                 onClick={() => handleCutItem(order._id, item._id)}
//                                                 className="text-red-500 hover:text-red-700 absolute top-2 right-2 text-sm"
//                                                 title="Remove item from view"
//                                             >
//                                                 ❌
//                                             </button>
//                                         </div>
//                                     )
//                                 ))}
//                             </div>

//                             <div className="border-t pt-3 flex justify-between text-sm text-gray-800 font-semibold">
//                                 <span className="flex items-center gap-1">
//                                     <FiTruck /> Payment: {order.paymentMethod}
//                                 </span>
//                                 <span className="flex items-center gap-1 text-rose-600">
//                                     <FiCheckCircle /> Total: ₹{order.totalAmount}
//                                 </span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Order;













// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//     FiShoppingCart,
//     FiBox,
//     FiTag,
//     FiHash,
//     FiCreditCard,
//     FiTruck,
//     FiCheckCircle
// } from 'react-icons/fi';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Order = () => {
//     const [orders, setOrders] = useState([]);
//     const token = localStorage.getItem('token');
//     const navigate = useNavigate();
//     const { cartItems, clearCart } = useCart();

//     const DELIVERY_CHARGE = 49;

//     const subtotal = cartItems.reduce((acc, item) => {
//         if (!item.product) return acc;
//         return acc + item.product.price * item.quantity;
//     }, 0);

//     const totalAmount = subtotal + DELIVERY_CHARGE;

//     // Fetch orders
//     const fetchOrders = async () => {
//         try {
//             const res = await axios.get('http://localhost:4000/api/orders/my', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setOrders(res.data);
//         } catch (err) {
//             console.error('Error fetching orders:', err.message);
//         }
//     };

//     useEffect(() => {
//         fetchOrders();
//     }, []);

//     // Place COD order
//     const handlePlaceOrder = async () => {
//         try {
//             const res = await axios.post(
//                 'http://localhost:4000/api/orders/place',
//                 {},
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             clearCart();
//             toast.success('Order placed successfully!');
//             await fetchOrders();
//             setTimeout(() => navigate('/'), 2000);
//         } catch (error) {
//             console.error('Error placing order:', error.message);
//             toast.error('Failed to place order');
//         }
//     };

//     // CUT item from UI only
//     const handleCutItem = (orderId, itemId) => {
//         setOrders(prevOrders =>
//             prevOrders.map(order =>
//                 order._id === orderId
//                     ? {
//                         ...order,
//                         items: order.items.filter(item => item._id !== itemId)
//                     }
//                     : order
//             )
//         );
//         toast.info('Item removed from view');
//     };

//     return (
//         <div className="max-w-7xl mx-auto p-6">
//             <ToastContainer position="top-right" autoClose={2000} />
//             <h1 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
//                 <FiCheckCircle /> My Orders
//             </h1>

//             {/* Order Form Summary */}
//             {cartItems.length > 0 && (
//                 <div className="border rounded-lg bg-white shadow-md p-6 mb-8">
//                     <h2 className="text-lg font-semibold mb-4 text-gray-700">Place New Order</h2>
//                     <div className="space-y-2 text-gray-700">
//                         <p>🛒 Items: {cartItems.length}</p>
//                         <p>Subtotal: ₹{subtotal}</p>
//                         <p>Delivery Charge: ₹{DELIVERY_CHARGE}</p>
//                         <p className="font-bold text-lg">Total: ₹{totalAmount}</p>
//                     </div>
//                     <button
//                         onClick={handlePlaceOrder}
//                         className="mt-4 bg-rose-600 hover:bg-rose-700 text-white py-2 px-6 rounded flex items-center gap-2"
//                     >
//                         <FiCheckCircle /> Place COD Order
//                     </button>
//                 </div>
//             )}

//             {/* Orders List */}
//             {orders.length === 0 ? (
//                 <div className="text-center mt-10 text-lg text-gray-600">
//                     <FiShoppingCart className="mx-auto text-5xl mb-2" />
//                     <p>No orders found 🧾</p>
//                 </div>
//             ) : (
//                 <div className="space-y-6">
//                     {orders.map((order) => (
//                         <div key={order._id} className="border rounded-lg p-5 bg-white shadow-md space-y-4">
//                             <div className="flex justify-between items-center text-sm text-gray-600">
//                                 <span>🧾 Order ID: <b>{order._id.slice(-6).toUpperCase()}</b></span>
//                                 <span>Status: <b className="text-rose-600">{order.status}</b></span>
//                             </div>

//                             <div className="grid md:grid-cols-2 gap-4">
//                                 {order.items.map((item) => (
//                                     item.product && (
//                                         <div key={item._id} className="flex gap-4 border rounded-lg p-3 shadow-sm bg-gray-50 relative">
//                                             <img
//                                                 src={`http://localhost:4000${item.product.images[0]}`}
//                                                 alt={item.product.name}
//                                                 className="w-20 h-20 object-contain border rounded"
//                                             />
//                                             <div className="flex-1">
//                                                 <h2 className="text-base font-semibold text-gray-800 flex items-center gap-1">
//                                                     <FiBox /> {item.product.name}
//                                                 </h2>
//                                                 <p className="text-xs text-gray-500 flex items-center gap-1">
//                                                     <FiTag /> Brand: {item.product.brand}
//                                                 </p>
//                                                 <p className="text-xs text-gray-500 flex items-center gap-1">
//                                                     <FiHash /> Qty: {item.quantity}
//                                                 </p>
//                                                 <p className="text-xs text-gray-500 flex items-center gap-1">
//                                                     <FiCreditCard /> ₹{item.product.price} x {item.quantity} = ₹{item.product.price * item.quantity}
//                                                 </p>
//                                             </div>

//                                             {/* ❌ Cut Button */}
//                                             <button
//                                                 onClick={() => handleCutItem(order._id, item._id)}
//                                                 className="text-red-500 hover:text-red-700 absolute top-2 right-2 text-sm"
//                                                 title="Remove item from view"
//                                             >
//                                                 ❌
//                                             </button>
//                                         </div>
//                                     )
//                                 ))}
//                             </div>

//                             <div className="border-t pt-3 flex justify-between text-sm text-gray-800 font-semibold">
//                                 <span className="flex items-center gap-1">
//                                     <FiTruck /> Payment: {order.paymentMethod}
//                                 </span>
//                                 <span className="flex items-center gap-1 text-rose-600">
//                                     <FiCheckCircle /> Total: ₹{order.totalAmount}
//                                 </span>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Order;
















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//     FiShoppingCart,
//     FiBox,
//     FiTag,
//     FiHash,
//     FiCreditCard,
//     FiTruck,
//     FiCheckCircle
// } from 'react-icons/fi';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../context/CartContext';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Order = () => {
//     const [orders, setOrders] = useState([]);
//     const token = localStorage.getItem('token');
//     const navigate = useNavigate();
//     const { cartItems, clearCart } = useCart();

//     const DELIVERY_CHARGE = 49;

//     const subtotal = cartItems.reduce((acc, item) => {
//         if (!item.product) return acc;
//         return acc + item.product.price * item.quantity;
//     }, 0);

//     const totalAmount = subtotal + DELIVERY_CHARGE;

//     const fetchOrders = async () => {
//         try {
//             const res = await axios.get('http://localhost:4000/api/orders/my', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setOrders(res.data);
//         } catch (err) {
//             console.error('Error fetching orders:', err.message);
//         }
//     };

//     useEffect(() => {
//         fetchOrders();
//     }, []);

//     const handlePlaceOrder = async () => {
//         try {
//             const res = await axios.post(
//                 'http://localhost:4000/api/orders/place',
//                 {},
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             clearCart();
//             toast.success('Order placed successfully!');
//             await fetchOrders();
//             setTimeout(() => navigate('/'), 2000);
//         } catch (error) {
//             console.error('Error placing order:', error.message);
//             toast.error('Failed to place order');
//         }
//     };

//     const handleCutItem = (orderId, itemId) => {
//         setOrders(prevOrders =>
//             prevOrders.map(order =>
//                 order._id === orderId
//                     ? {
//                         ...order,
//                         items: order.items.filter(item => item._id !== itemId)
//                     }
//                     : order
//             )
//         );
//         toast.info('Item removed from view');
//     };

//     return (
//         <div className="max-w-7xl mx-auto p-6">
//             <ToastContainer position="top-right" autoClose={2000} />
//             <h1 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
//                 <FiCheckCircle /> My Orders
//             </h1>







//             {/* Orders Display */}
//             {orders.length === 0 ? (
//                 <div className="text-center mt-10 text-lg text-gray-600">
//                     <FiShoppingCart className="mx-auto text-5xl mb-2" />
//                     <p>No orders found 🧾</p>
//                 </div>
//             ) : (
//                 <div className="space-y-6">
//                     {orders.map((order) => (
//                         <div key={order._id} className="border rounded-lg p-5 bg-white shadow-md space-y-4">
//                             <div className="flex justify-between items-center text-sm text-gray-600">
//                                 <span>🧾 Order ID: <b>{order._id.slice(-6).toUpperCase()}</b></span>
//                                 <span>Status: <b className="text-rose-600">{order.status}</b></span>
//                             </div>

//                             <div className="grid md:grid-cols-2 gap-4">
//                                 {order.items.map((item) => (
//                                     item.product && (
//                                         <div key={item._id} className="flex gap-4 border rounded-lg p-3 shadow-sm bg-gray-50 relative">
//                                             <img
//                                                 src={`http://localhost:4000${item.product.images[0]}`}
//                                                 alt={item.product.name}
//                                                 className="w-20 h-20 object-contain border rounded"
//                                             />
//                                             <div className="flex-1">
//                                                 <h2 className="text-base font-semibold text-gray-800 flex items-center gap-1">
//                                                     <FiBox /> {item.product.name}
//                                                 </h2>
//                                                 <p className="text-xs text-gray-500 flex items-center gap-1">
//                                                     <FiTag /> Brand: {item.product.brand}
//                                                 </p>
//                                                 <p className="text-xs text-gray-500 flex items-center gap-1">
//                                                     <FiHash /> Qty: {item.quantity}
//                                                 </p>
//                                                 <p className="text-xs text-gray-500 flex items-center gap-1">
//                                                     <FiCreditCard /> ₹{item.product.price} x {item.quantity} = ₹{item.product.price * item.quantity}
//                                                 </p>
//                                             </div>

//                                             <button
//                                                 onClick={() => handleCutItem(order._id, item._id)}
//                                                 className="text-red-500 hover:text-red-700 absolute top-2 right-2 text-sm"
//                                                 title="Remove item from view"
//                                             >
//                                                 ❌
//                                             </button>
//                                         </div>
//                                     )
//                                 ))}
//                             </div>

//                             <div className="border-t pt-3 flex justify-between text-sm text-gray-800 font-semibold">
//                                 <span className="flex items-center gap-1">
//                                     <FiTruck /> Payment: {order.paymentMethod}
//                                 </span>
//                                 <span className="flex items-center gap-1 text-rose-600">
//                                     <FiCheckCircle /> Total: ₹{order.totalAmount}
//                                 </span>
//                             </div>
//                             <div>
//                                 <h2 className="text-xl font-bold mb-4 text-gray-700">Place Your Order</h2>
//                                 <div className="space-y-2 text-gray-700">
//                                     <p>🛒 Items: <b>{cartItems.length}</b></p>
//                                     <p>Subtotal: ₹{subtotal}</p>
//                                     <p>Delivery Charge: ₹{DELIVERY_CHARGE}</p>
//                                     <p className="font-bold text-lg">Total: ₹{totalAmount}</p>
//                                 </div>

//                                 {/* Animated Button */}
//                                 <button
//                                     onClick={handlePlaceOrder}
//                                     className="mt-6 w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white py-3 px-6 rounded-xl text-lg font-semibold shadow-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
//                                 >
//                                     <FiCheckCircle size={10} /> Cash On Delivery
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Order;

























import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    FiShoppingCart,
    FiBox,
    FiTag,
    FiHash,
    FiCreditCard,
    FiTruck,
    FiCheckCircle
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { cartItems, clearCart } = useCart();

    const DELIVERY_CHARGE = 49;

    const subtotal = cartItems.reduce((acc, item) => {
        if (!item.product) return acc;
        return acc + item.product.price * item.quantity;
    }, 0);

    const totalAmount = subtotal + DELIVERY_CHARGE;

    const fetchOrders = async () => {
        try {
            const res = await axios.get('https://selfy-snap.onrender.com/api/orders/my', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setOrders(res.data);
        } catch (err) {
            console.error('Error fetching orders:', err.message);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const handlePlaceOrder = async () => {
        try {
            await axios.post(
                'https://selfy-snap.onrender.com/api/orders/place',
                {},
                { headers: { Authorization: `Bearer ${token}` } }
            );
            clearCart();
            toast.success('Order placed successfully!');
            await fetchOrders();
            setTimeout(() => navigate('/'), 2000);
        } catch (error) {
            console.error('Error placing order:', error.message);
            toast.error('Failed to place order');
        }
    };

    const handleCutItem = (orderId, itemId) => {
        setOrders(prevOrders =>
            prevOrders.map(order =>
                order._id === orderId
                    ? {
                        ...order,
                        items: order.items.filter(item => item._id !== itemId)
                    }
                    : order
            )
        );
        toast.info('Item removed from view');
    };

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6">
            <ToastContainer position="top-right" autoClose={2000} />
            <h1 className="text-xl md:text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                <FiCheckCircle /> My Orders
            </h1>


            {orders.length === 0 ? (
                <div className="text-center mt-10 text-lg text-gray-600">
                    <FiShoppingCart className="mx-auto text-5xl mb-2" />
                    <p>No orders found 🧾</p>
                </div>
            ) : (
                <div className="space-y-6">
                    {orders.map((order) => (
                        <div key={order._id} className="border rounded-lg p-4 md:p-5 bg-white shadow-md space-y-4">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-600 gap-1">
                                <span>🧾 Order ID: <b>{order._id.slice(-6).toUpperCase()}</b></span>
                                <span>Status: <b className="text-rose-600">{order.status}</b></span>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {order.items.map((item) => (
                                    item.product && (
                                        <div key={item._id} className="flex gap-3 border rounded-lg p-3 shadow-sm bg-gray-50 relative flex-col sm:flex-row">
                                            <img
                                                src={`https://selfy-snap.onrender.com${item.product.images[0]}`}
                                                alt={item.product.name}
                                                className="w-full sm:w-20 h-20 object-contain border rounded"
                                            />
                                            <div className="flex-1 text-sm space-y-1 break-words">
                                                <p className="font-semibold text-gray-800 flex items-center gap-1 text-sm">
                                                    <FiBox /> {item.product.name}
                                                </p>
                                                <p className="text-xs text-gray-500 flex items-center gap-1">
                                                    <FiTag /> Brand: {item.product.brand}
                                                </p>
                                                <p className="text-xs text-gray-500 flex items-center gap-1">
                                                    <FiHash /> Qty: {item.quantity}
                                                </p>
                                                <p className="text-xs text-gray-500 flex items-center gap-1">
                                                    <FiCreditCard /> ₹{item.product.price} × {item.quantity} = ₹{item.product.price * item.quantity}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => handleCutItem(order._id, item._id)}
                                                className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm"
                                                title="Remove item from view"
                                            >
                                                ❌
                                            </button>
                                        </div>
                                    )
                                ))}
                            </div>

                            <div className="border-t pt-3 flex flex-col sm:flex-row justify-between text-sm text-gray-800 font-semibold">
                                <span className="flex items-center gap-1 mb-1 sm:mb-0">
                                    <FiTruck /> Payment: {order.paymentMethod}
                                </span>
                                <span className="flex items-center gap-1 text-rose-600">
                                    <FiCheckCircle /> Total: ₹{order.totalAmount}
                                </span>
                            </div>
                            {cartItems.length > 0 && (
                                <div className="border rounded-lg bg-white shadow-md p-4 mb-8 space-y-2">
                                    <h2 className="text-lg font-semibold text-gray-700">Place New Order</h2>
                                    <p>🛒 Items: <b>{cartItems.length}</b></p>
                                    <p>Subtotal: ₹{subtotal}</p>
                                    <p>Delivery Charge: ₹{DELIVERY_CHARGE}</p>
                                    <p className="font-bold text-lg">Total: ₹{totalAmount}</p>
                                    <button
                                        onClick={handlePlaceOrder}
                                        className="mt-3 w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white py-2 px-4 rounded-lg text-base font-medium shadow transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                                    >
                                        <FiCheckCircle /> Cash On Delivery
                                    </button>
                                </div>
                            )}

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Order;
