// import { createContext, useContext, useEffect, useState } from 'react';

// const CartContext = createContext();
// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState([]);

//     // Load from localStorage
//     useEffect(() => {
//         const storedCart = localStorage.getItem('cart');
//         if (storedCart) {
//             setCartItems(JSON.parse(storedCart));
//         }
//     }, []);

//     // Save to localStorage
//     useEffect(() => {
//         localStorage.setItem('cart', JSON.stringify(cartItems));
//     }, [cartItems]);

//     const addToCart = (product) => {
//         const exists = cartItems.find(item => item._id === product._id);
//         if (exists) {
//             setCartItems(cartItems.map(item =>
//                 item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
//             ));
//         } else {
//             setCartItems([...cartItems, { ...product, quantity: 1 }]);
//         }
//     };

//     const removeFromCart = (productId) => {
//         setCartItems(cartItems.filter(item => item._id !== productId));
//     };

//     const updateQuantity = (productId, newQty) => {
//         setCartItems(cartItems.map(item =>
//             item._id === productId ? { ...item, quantity: newQty } : item
//         ));
//     };

//     return (
//         <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
//             {children}
//         </CartContext.Provider>
//     );
// };








// import { createContext, useContext, useEffect, useState } from 'react';
// import axios from 'axios';

// const CartContext = createContext();
// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         const storedCart = localStorage.getItem('cart');
//         if (storedCart) {
//             setCartItems(JSON.parse(storedCart));
//         }
//     }, []);

//     useEffect(() => {
//         localStorage.setItem('cart', JSON.stringify(cartItems));
//     }, [cartItems]);

//     const saveCartToDB = async (items) => {
//         try {
//             const token = localStorage.getItem('token');
//             await axios.post(
//                 'http://localhost:4000/api/cart/add',
//                 {
//                     cartItems: items.map(item => ({
//                         productId: item._id,
//                         name: item.name,
//                         price: item.price,
//                         quantity: item.quantity,
//                         image: item.images?.[0] || '',
//                     })),
//                 },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             console.log('Cart saved to MongoDB ✅');
//         } catch (err) {
//             console.error('❌ Failed to save cart:', err.response?.data || err.message);
//         }
//     };

//     const addToCart = async (product) => {
//         const exists = cartItems.find(item => item._id === product._id);
//         let updatedCart;
//         if (exists) {
//             updatedCart = cartItems.map(item =>
//                 item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
//             );
//         } else {
//             updatedCart = [...cartItems, { ...product, quantity: 1 }];
//         }

//         setCartItems(updatedCart);
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//         await saveCartToDB(updatedCart);
//     };

//     const removeFromCart = async (productId) => {
//         const updated = cartItems.filter(item => item._id !== productId);
//         setCartItems(updated);
//         localStorage.setItem('cart', JSON.stringify(updated));
//         await saveCartToDB(updated);
//     };

//     const updateQuantity = async (productId, newQty) => {
//         const updated = cartItems.map(item =>
//             item._id === productId ? { ...item, quantity: newQty } : item
//         );
//         setCartItems(updated);
//         localStorage.setItem('cart', JSON.stringify(updated));
//         await saveCartToDB(updated);
//     };

//     return (
//         <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
//             {children}
//         </CartContext.Provider>
//     );
// };
























// import { createContext, useContext, useEffect, useState } from 'react';
// import axios from 'axios';

// const CartContext = createContext();
// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState([]);

//     const token = localStorage.getItem("token");

//     const fetchCart = async () => {
//         try {
//             const res = await axios.get('http://localhost:4000/api/cart', {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             setCartItems(res.data.items);
//         } catch (err) {
//             console.error("Fetch cart error:", err);
//         }
//     };

//     const addToCart = async (productId, quantity = 1) => {
//         try {
//             await axios.post('http://localhost:4000/api/cart/add', {
//                 productId,
//                 quantity
//             }, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             fetchCart();
//         } catch (err) {
//             console.error("Add to cart error:", err);
//         }
//     };

//     const updateQuantity = async (productId, quantity) => {
//         try {
//             await axios.put('http://localhost:4000/api/cart/update', {
//                 productId,
//                 quantity
//             }, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             fetchCart();
//         } catch (err) {
//             console.error("Update cart error:", err);
//         }
//     };

//     const removeFromCart = async (productId) => {
//         try {
//             await axios.delete(`http://localhost:4000/api/cart/remove/${productId}`, {
//                 headers: { Authorization: `Bearer ${token}` }
//             });
//             fetchCart();
//         } catch (err) {
//             console.error("Remove from cart error:", err);
//         }
//     };

//     useEffect(() => {
//         if (token) fetchCart();
//     }, [token]);

//     return (
//         <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };





























































// import { createContext, useContext, useEffect, useState } from 'react';
// import axios from 'axios';

// const CartContext = createContext();
// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState([]);
//     const token = localStorage.getItem('token');

//     // 👇 Calculate cart count (total quantity)
//     // const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
//     const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);

//     // 🔄 Fetch cart on load
//     useEffect(() => {
//         const fetchCart = async () => {
//             try {
//                 const res = await axios.get('http://localhost:4000/api/cart', {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });
//                 setCartItems(res.data.items || []);
//             } catch (err) {
//                 console.error('Error fetching cart:', err);
//                 setCartItems([])
//             }
//         };
//         if (token) fetchCart();
//     }, [token]);

//     // ➕ Add item
//     const addToCart = async (product) => {
//         try {
//             const res = await axios.post('http://localhost:4000/api/cart/add', {
//                 productId: product._id,
//                 quantity: 1,
//             }, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setCartItems(res.data.items);
//         } catch (err) {
//             console.error('Error adding to cart:', err);
//         }
//     };

//     // 🔁 Update quantity
//     const updateQuantity = async (productId, quantity) => {
//         try {
//             const res = await axios.put('http://localhost:4000/api/cart/update', {
//                 productId,
//                 quantity,
//             }, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setCartItems(res.data.items);
//         } catch (err) {
//             console.error('Error updating quantity:', err);
//         }
//     };

//     // ❌ Remove
//     const removeFromCart = async (productId) => {
//         try {
//             const res = await axios.delete(`http://localhost:4000/api/cart/remove/${productId}`, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setCartItems(res.data.items);
//         } catch (err) {
//             console.error('Error removing from cart:', err);
//         }
//     };

//     return (
//         <CartContext.Provider value={{ cartItems, cartCount, addToCart, updateQuantity, removeFromCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };








// import { createContext, useContext, useEffect, useState } from 'react';
// import axios from 'axios';

// const CartContext = createContext();
// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState([]);
//     const token = localStorage.getItem('token');

//     // 🟡 Cart Count Calculation
//     const cartCount = cartItems.reduce((total, item) => total + (item?.quantity || 0), 0);

//     // 🟢 Fetch Cart
//     useEffect(() => {
//         const fetchCart = async () => {
//             try {
//                 const res = await axios.get('http://localhost:4000/api/cart', {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 // Ensure valid items
//                 const validItems = Array.isArray(res.data.items)
//                     ? res.data.items.filter(i => i?.quantity > 0)
//                     : [];

//                 setCartItems(validItems);
//             } catch (err) {
//                 console.error('Error fetching cart:', err);
//                 setCartItems([]);
//             }
//         };

//         if (token) fetchCart();
//     }, [token]);

//     // ➕ Add to Cart
//     const addToCart = async (product) => {
//         try {
//             const res = await axios.post('http://localhost:4000/api/cart/add', {
//                 productId: product._id,
//                 quantity: 1,
//             }, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });

//             const validItems = res.data.items?.filter(i => i?.quantity > 0) || [];
//             setCartItems(validItems);
//         } catch (err) {
//             console.error('Error adding to cart:', err);
//         }
//     };

//     // 🔁 Update Quantity
//     const updateQuantity = async (productId, quantity) => {
//         try {
//             const res = await axios.put('http://localhost:4000/api/cart/update', {
//                 productId,
//                 quantity,
//             }, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });

//             const validItems = res.data.items?.filter(i => i?.quantity > 0) || [];
//             setCartItems(validItems);
//         } catch (err) {
//             console.error('Error updating quantity:', err);
//         }
//     };

//     // ❌ Remove from Cart
//     const removeFromCart = async (productId) => {
//         try {
//             const res = await axios.delete(`http://localhost:4000/api/cart/remove/${productId}`, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });

//             const validItems = res.data.items?.filter(i => i?.quantity > 0) || [];
//             setCartItems(validItems);
//         } catch (err) {
//             console.error('Error removing from cart:', err);
//         }
//     };

//     return (
//         <CartContext.Provider value={{ cartItems, cartCount, addToCart, updateQuantity, removeFromCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };









import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const token = localStorage.getItem('token');

    // 🟡 Calculate total quantity for icon
    const cartCount = cartItems.reduce((total, item) => total + (item?.quantity || 0), 0);

    // 🟢 Fetch cart on mount
    useEffect(() => {
        const fetchCart = async () => {
            try {
                const res = await axios.get('https://selfy-snap.onrender.com/api/cart', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const validItems = Array.isArray(res.data?.items)
                    ? res.data.items.filter(i => i?.quantity > 0)
                    : [];
                setCartItems(validItems);
            } catch (err) {
                console.error('Error fetching cart:', err);
                setCartItems([]); // fallback to empty
            }
        };

        if (token) fetchCart();
    }, [token]);

    // ➕ Add to cart
    const addToCart = async (product) => {
        try {
            const res = await axios.post(
                'https://selfy-snap.onrender.com/api/cart/add',
                { productId: product._id, quantity: 1 },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            const validItems = Array.isArray(res.data?.items)
                ? res.data.items.filter(i => i?.quantity > 0)
                : [];
            setCartItems(validItems);
        } catch (err) {
            console.error('Error adding to cart:', err);
        }
    };

    // 🔁 Update quantity
    const updateQuantity = async (productId, quantity) => {
        try {
            const res = await axios.put(
                'https://selfy-snap.onrender.com/api/cart/update',
                { productId, quantity },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            const validItems = Array.isArray(res.data?.items)
                ? res.data.items.filter(i => i?.quantity > 0)
                : [];
            setCartItems(validItems);
        } catch (err) {
            console.error('Error updating quantity:', err);
        }
    };

    // ❌ Remove
    const removeFromCart = async (productId) => {
        try {
            const res = await axios.delete(
                `https://selfy-snap.onrender.com/api/cart/remove/${productId}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            const validItems = Array.isArray(res.data?.items)
                ? res.data.items.filter(i => i?.quantity > 0)
                : [];
            setCartItems(validItems);
        } catch (err) {
            console.error('Error removing from cart:', err);
        }
    };
    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{ cartItems, cartCount, addToCart, updateQuantity, removeFromCart, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
};
