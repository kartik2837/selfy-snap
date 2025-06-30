// import React from 'react'

// const User = () => {
//     return (
//         <div>
//             <div className="p-4">Welcome to the User</div>
//         </div>
//     )
// }

// export default User





import React, { useEffect, useState } from 'react';
import axios from 'axios';

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('https://selfy-snap.onrender.com/api/admin/users', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUsers(res.data.users);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">All Users</h1>
            <table className="w-full text-left border border-collapse">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Email</th>
                        <th className="border px-4 py-2">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id} className="hover:bg-gray-50">
                            <td className="border px-4 py-2">{user.name}</td>
                            <td className="border px-4 py-2">{user.email}</td>
                            <td className="border px-4 py-2 capitalize">{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default User;
