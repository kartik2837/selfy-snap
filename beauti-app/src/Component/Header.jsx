// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Header = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [showDropdown, setShowDropdown] = useState(false);
//     const [showMenu, setShowMenu] = useState(false);
//     const [user, setUser] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const storedUser = localStorage.getItem('user');
//         if (storedUser) {
//             setUser(JSON.parse(storedUser));
//         }
//     }, []);

//     const handleLogout = () => {
//         localStorage.removeItem('user');
//         setUser(null);
//         navigate('/login');
//     };

//     return (
//         <header className="bg-blue-300 text-white shadow-md">
//             <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
//                 {/* Logo */}
//                 <Link to="/" className="flex items-center">
//                     <img src="/images/logo/logo2.png" alt="Logo" className="h-14" />
//                 </Link>

//                 {/* Hamburger Button */}
//                 <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         {isOpen ? (
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                         ) : (
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                         )}
//                     </svg>
//                 </button>

//                 {/* Navigation Menu */}
//                 <nav className={`absolute top-full left-0 w-full bg-blue-300 md:bg-transparent md:static md:w-auto z-50 transition-all duration-300 ease-in-out text-base md:text-lg font-medium ${isOpen ? 'block' : 'hidden'} md:block`}>
//                     <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 px-4 md:px-0 py-4 md:py-0 text-white font-medium">
//                         <li><Link to="/" className="hover:text-red-300">Home</Link></li>

//                         {/* Dropdown */}
//                         <li className="relative group">
//                             <button
//                                 className="hover:text-gray-300 text-black"
//                                 onClick={() => setShowDropdown(!showDropdown)}
//                             >
//                                 Category
//                             </button>
//                             {showDropdown && (
//                                 <ul className="absolute left-0 mt-2 w-52 bg-white text-black shadow-lg rounded-md z-50">
//                                     <li><Link to="/makeup" className="block px-4 py-2 hover:bg-gray-200">Makeup Kits</Link></li>
//                                     <li><Link to="/bath" className="block px-4 py-2 hover:bg-gray-200">Bath Soaps</Link></li>
//                                     <li><Link to="/treatement" className="block px-4 py-2 hover:bg-gray-200">Acne Treatment</Link></li>
//                                     <li><Link to="/makeuptool" className="block px-4 py-2 hover:bg-gray-200">Makeup Tools</Link></li>
//                                 </ul>
//                             )}
//                         </li>

//                         <li><Link to="/product" className="hover:text-gray-300">Products</Link></li>
//                         <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
//                         <li><Link to="/contact" className="hover:text-gray-300">Contact us</Link></li>

//                         {/* Icons */}
//                         <li className="relative flex gap-4 items-center mt-2 md:mt-0">
//                             {/* User Icon with Dropdown */}
//                             <div className="relative">
//                                 <img
//                                     src="/images/user.svg"
//                                     alt="User"
//                                     className="h-6 cursor-pointer"
//                                     onClick={() => setShowMenu(!showMenu)}
//                                 />
//                                 {showMenu && (
//                                     <div className="absolute top-8 right-0 bg-white shadow-lg rounded-md p-2 z-50 min-w-[150px]">
//                                         {user ? (
//                                             <>
//                                                 <div className="px-3 py-1 text-gray-800 font-semibold">{user.name}</div>
//                                                 <button
//                                                     onClick={handleLogout}
//                                                     className="block w-full text-left text-sm text-red-600 hover:text-red-800 px-3 py-1"
//                                                 >
//                                                     Logout
//                                                 </button>
//                                             </>
//                                         ) : (
//                                             <>
//                                                 <Link
//                                                     to="/login"
//                                                     className="block text-sm text-gray-700 hover:text-blue-600 px-3 py-1"
//                                                     onClick={() => setShowMenu(false)}
//                                                 >
//                                                     Login
//                                                 </Link>
//                                                 <Link
//                                                     to="/register"
//                                                     className="block text-sm text-gray-700 hover:text-blue-600 px-3 py-1"
//                                                     onClick={() => setShowMenu(false)}
//                                                 >
//                                                     Sign Up
//                                                 </Link>
//                                             </>
//                                         )}
//                                     </div>
//                                 )}
//                             </div>

//                             {/* Cart Icon */}
//                             <Link to="/cart">
//                                 <img src="/images/cart.svg" alt="Cart" className="h-6" />
//                             </Link>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </header>
//     );
// };

// export default Header;







// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Header = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [showDropdown, setShowDropdown] = useState(false);
//     const [showMenu, setShowMenu] = useState(false);
//     const [user, setUser] = useState(null);
//     const [categories, setCategories] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const storedUser = localStorage.getItem('user');
//         if (storedUser) {
//             setUser(JSON.parse(storedUser));
//         }

//         // Fetch dynamic categories
//         axios.get('http://localhost:4000/api/categories/all')
//             .then(res => setCategories(res.data.categories))
//             .catch(err => console.error("Failed to load categories", err));
//     }, []);

//     const handleLogout = () => {
//         localStorage.removeItem('user');
//         setUser(null);
//         navigate('/login');
//     };

//     return (
//         <header className="bg-blue-300 text-white shadow-md">
//             <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
//                 <Link to="/" className="flex items-center">
//                     <img src="/images/logo/logo2.png" alt="Logo" className="h-14" />
//                 </Link>

//                 <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         {isOpen ? (
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                         ) : (
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                         )}
//                     </svg>
//                 </button>

//                 <nav className={`absolute top-full left-0 w-full bg-blue-300 md:bg-transparent md:static md:w-auto z-50 transition-all duration-300 ease-in-out text-base md:text-lg font-medium ${isOpen ? 'block' : 'hidden'} md:block`}>
//                     <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 px-4 md:px-0 py-4 md:py-0 text-white font-medium">
//                         <li><Link to="/" className="hover:text-red-300">Home</Link></li>

//                         {/* Dynamic Dropdown */}
//                         <li className="relative group">
//                             <button
//                                 className="hover:text-gray-300 text-black"
//                                 onClick={() => setShowDropdown(!showDropdown)}
//                             >
//                                 Category
//                             </button>
//                             {showDropdown && (
//                                 <ul className="absolute left-0 mt-2 w-52 bg-white text-black shadow-lg rounded-md z-50">
//                                     {categories.map(cat => (
//                                         <li key={cat._id}>
//                                             <Link
//                                                 to={`/category/${cat.slug}`}
//                                                 className="block px-4 py-2 hover:bg-gray-200"
//                                             >
//                                                 {cat.name}
//                                             </Link>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </li>

//                         <li><Link to="/product" className="hover:text-gray-300">Products</Link></li>
//                         <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
//                         <li><Link to="/contact" className="hover:text-gray-300">Contact us</Link></li>

//                         {/* User Menu and Cart */}
//                         <li className="relative flex gap-4 items-center mt-2 md:mt-0">
//                             <div className="relative">
//                                 <img
//                                     src="/images/user.svg"
//                                     alt="User"
//                                     className="h-6 cursor-pointer"
//                                     onClick={() => setShowMenu(!showMenu)}
//                                 />
//                                 {showMenu && (
//                                     <div className="absolute top-8 right-0 bg-white shadow-lg rounded-md p-2 z-50 min-w-[150px]">
//                                         {user ? (
//                                             <>
//                                                 <div className="px-3 py-1 text-gray-800 font-semibold">{user.name}</div>
//                                                 <button
//                                                     onClick={handleLogout}
//                                                     className="block w-full text-left text-sm text-red-600 hover:text-red-800 px-3 py-1"
//                                                 >
//                                                     Logout
//                                                 </button>
//                                             </>
//                                         ) : (
//                                             <>
//                                                 <Link to="/login" className="block text-sm text-gray-700 hover:text-blue-600 px-3 py-1" onClick={() => setShowMenu(false)}>Login</Link>
//                                                 <Link to="/register" className="block text-sm text-gray-700 hover:text-blue-600 px-3 py-1" onClick={() => setShowMenu(false)}>Sign Up</Link>
//                                             </>
//                                         )}
//                                     </div>
//                                 )}
//                             </div>

//                             <Link to="/cart">
//                                 <img src="/images/cart.svg" alt="Cart" className="h-6" />
//                             </Link>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </header>
//     );
// };

// export default Header;















































// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useCart } from '../context/CartContext';

// const Header = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [showDropdown, setShowDropdown] = useState(false);
//     const [showMenu, setShowMenu] = useState(false);
//     const [user, setUser] = useState(null);
//     const [categories, setCategories] = useState([]);
//     const navigate = useNavigate();

//     const { cartItems } = useCart();
//     const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

//     useEffect(() => {
//         const storedUser = localStorage.getItem('user');
//         if (storedUser) {
//             setUser(JSON.parse(storedUser));
//         }

//         axios.get('http://localhost:4000/api/categories/all')
//             .then(res => setCategories(res.data.categories || []))
//             .catch(err => console.error("Failed to load categories", err));
//     }, []);

//     const handleLogout = () => {
//         localStorage.removeItem('user');
//         setUser(null);
//         navigate('/login');
//     };

//     return (
//         <header className="bg-blue-300 text-white shadow-md ">
//             <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
//                 <Link to="/" className="flex items-center">
//                     <img src="/images/logo/logo2.png" alt="Logo" className="h-14" />
//                 </Link>

//                 <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         {isOpen ? (
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                         ) : (
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                         )}
//                     </svg>
//                 </button>

//                 <nav className={`absolute top-full left-0 w-full bg-blue-300 md:bg-transparent md:static md:w-auto z-50 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} md:block`}>
//                     <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 px-4 md:px-0 py-4 md:py-0 text-white font-medium">
//                         <li><Link to="/" className="hover:text-red-300 text-">Home</Link></li>
//                         <li className="relative group">
//                             <button
//                                 className="hover:text-gray-300 text-black"
//                                 onClick={() => setShowDropdown(!showDropdown)}
//                             >
//                                 Category
//                             </button>
//                             {showDropdown && (
//                                 <ul className="absolute left-0 mt-2 w-52 bg-white text-black shadow-lg rounded-md z-50">
//                                     {categories.map(cat => (
//                                         <li key={cat._id}>
//                                             <Link to={`/category/${cat.slug}`} className="block px-4 py-2 hover:bg-gray-200">
//                                                 {cat.name}
//                                             </Link>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </li>
//                         <li><Link to="/product" className="hover:text-gray-300">Products</Link></li>
//                         <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
//                         <li><Link to="/contact" className="hover:text-gray-300">Contact us</Link></li>

//                         <li className="relative flex gap-4 items-center mt-2 md:mt-0">
//                             <div className="relative">
//                                 <img
//                                     src="/images/user.svg"
//                                     alt="User"
//                                     className="h-6 cursor-pointer"
//                                     onClick={() => setShowMenu(!showMenu)}
//                                 />
//                                 {showMenu && (
//                                     <div className="absolute top-8 right-0 bg-white shadow-lg rounded-md p-2 z-50 min-w-[150px]">
//                                         {user ? (
//                                             <>
//                                                 <div className="px-3 py-1 text-gray-800 font-semibold">{user.name}</div>
//                                                 <button onClick={handleLogout} className="block w-full text-left text-sm text-red-600 hover:text-red-800 px-3 py-1">
//                                                     Logout
//                                                 </button>
//                                             </>
//                                         ) : (
//                                             <>
//                                                 <Link to="/login" className="block text-sm text-gray-700 hover:text-blue-600 px-3 py-1" onClick={() => setShowMenu(false)}>Login</Link>
//                                                 <Link to="/register" className="block text-sm text-gray-700 hover:text-blue-600 px-3 py-1" onClick={() => setShowMenu(false)}>Sign Up</Link>
//                                             </>
//                                         )}
//                                     </div>
//                                 )}
//                             </div>

//                             <Link to="/cart" className="relative">
//                                 <img src="/images/cart.svg" alt="Cart" className="h-6" />

//                                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1.5">
//                                     {cartCount}
//                                 </span>

//                             </Link>

//                             {/* <Link to="/cart" className="relative">
//                                 <img src="/images/cart.svg" alt="Cart" className="h-6" />
//                                 {cartItems.length > 0 && (
//                                     <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
//                                         {cartItems.reduce((total, item) => total + item.quantity, 0)}
//                                     </span>
//                                 )}
//                             </Link> */}


//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </header>
//     );
// };

// export default Header;







import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [user, setUser] = useState(null);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    const { cartItems } = useCart();
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        axios.get('https://selfy-snap.onrender.com/api/categories/all')
            .then(res => setCategories(res.data.categories || []))
            .catch(err => console.error("Failed to load categories", err));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/');
    };

    return (
        <header className="bg-blue-300 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
                <Link to="/" className="flex items-center">
                    <img src="/images/logo/logo2.png" alt="Logo" className="h-14" />
                </Link>

                {/* Mobile menu toggle */}
                <button className="text-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Navigation */}
                <nav className={`absolute top-full left-0 w-full bg-blue-300 md:bg-transparent md:static md:w-auto z-50 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 px-4 md:px-0 py-4 md:py-0 font-semibold text-lg">
                        <li><Link to="/" className="hover:text-red-300">Home</Link></li>
                        <li className="relative group">
                            <button
                                className="hover:text-gray-300 text-black"
                                onClick={() => setShowDropdown(!showDropdown)}
                            >
                                Category
                            </button>
                            {showDropdown && (
                                <ul className="absolute left-0 mt-2 w-52 bg-white text-black shadow-lg rounded-md z-50 text-base">
                                    {categories.map(cat => (
                                        <li key={cat._id}>
                                            <Link to={`/category/${cat.slug}`} className="block px-4 py-2 hover:bg-gray-200">
                                                {cat.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        <li><Link to="/product" className="hover:text-gray-300">Products</Link></li>
                        <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
                        <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>

                        {/* User & Cart */}
                        <li className="relative flex gap-4 items-center mt-2 md:mt-0">
                            {/* User Avatar and Menu */}
                            <div className="relative">
                                <img
                                    src="/images/user.svg"
                                    alt="User"
                                    className="h-6 cursor-pointer"
                                    onClick={() => setShowMenu(!showMenu)}
                                />
                                {showMenu && (
                                    <div className="absolute top-8 right-0 bg-white shadow-lg rounded-md p-2 z-50 min-w-[150px] text-base">
                                        {user ? (
                                            <>
                                                <div className="px-3 py-1 text-gray-800 font-semibold">{user.name}</div>
                                                <button onClick={handleLogout} className="block w-full text-left text-red-600 hover:text-red-800 px-3 py-1">
                                                    Logout
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <Link to="/login" className="block text-gray-700 hover:text-blue-600 px-3 py-1" onClick={() => setShowMenu(false)}>Login</Link>
                                                <Link to="/register" className="block text-gray-700 hover:text-blue-600 px-3 py-1" onClick={() => setShowMenu(false)}>Sign Up</Link>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Cart */}
                            <Link to="/cart" className="relative">
                                <img src="/images/cart.svg" alt="Cart" className="h-6" />
                                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1.5">
                                    {cartCount}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
