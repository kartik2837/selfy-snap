import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const user = JSON.parse(localStorage.getItem("user"));
    const sellerId = user?._id;
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchSellerOrders = async () => {
            if (!token || !sellerId) {
                setError('Seller not logged in. Please login again.');
                setLoading(false);
                return;
            }

            try {
                const res = await axios.get(`https://selfy-snap.onrender.com/api/orders/seller`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setOrders(res.data || []);
            } catch (err) {
                console.error('Error fetching orders:', err);
                setError(err.response?.data?.error || 'Failed to fetch orders');
            } finally {
                setLoading(false);
            }
        };

        fetchSellerOrders();
    }, [token, sellerId]);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Seller Orders</h2>

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <table className="w-full border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border p-2">Order ID</th>
                            <th className="border p-2">Product</th>
                            <th className="border p-2">Price</th>
                            <th className="border p-2">Quantity</th>
                            <th className="border p-2">Total</th>
                            <th className="border p-2">Status</th>
                            <th className="border p-2">Placed On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) =>
                            order.items.map((item, index) => (
                                <tr key={`${order._id}-${index}`}>
                                    <td className="border p-2">{order._id}</td>
                                    <td className="border p-2 flex items-center gap-2">
                                        <img
                                            src={`http://localhost:4000${item.product.images[0]}`}
                                            alt={item.product?.name || 'Product'}
                                            className="w-10 h-10 object-cover rounded"
                                        />
                                        <span>{item.product?.name || 'Product'}</span>
                                    </td>
                                    <td className="border p-2">₹{item.product?.price?.toFixed(2) || '0.00'}</td>
                                    <td className="border p-2">{item.quantity}</td>
                                    <td className="border p-2">₹{(item.quantity * item.product?.price).toFixed(2)}</td>
                                    <td className="border p-2">
                                        <span className={`px-2 py-1 rounded text-white ${order.status === 'Delivered' ? 'bg-green-500' :
                                            order.status === 'Cancelled' ? 'bg-red-500' :
                                                'bg-yellow-500'
                                            }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="border p-2">{new Date(order.createdAt).toLocaleDateString()}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Order;
