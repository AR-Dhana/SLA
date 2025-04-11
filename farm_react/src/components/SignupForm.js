// src/components/SignupForm.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const [userList, setUserList] = useState([]);


    // Fetch on initial render
    useEffect(() => {
        fetchUsers();
    }, []);


     // Fetch users from DB
     const fetchUsers = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/auth/users');
            setUserList(res.data);
        } catch (err) {
            console.error('Error fetching users:', err);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/auth/register`, formData);

            // alert message
            alert(res.data.message);

            // Reset form
            setFormData({ username: '', email: '', password: '' });

            // Refresh user list from DB
            fetchUsers();
        } catch (err) {
            alert(err.response.data.message || 'Something went wrong');
        }
    };

    return (
        <div style={{ backgroundColor: "white", padding: "2rem" }}>
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Register</button>
                <p>{message}</p>
            </form>
            {/* Table to show submitted users */}
            {userList.length > 0 && (
                <div>
                    <h3>Registered Users</h3>
                    <table>
                        <thead>
                            <tr style={{border:'2px solid black'}}>
                                <th style={{border:'2px solid black'}}>ID</th>
                                <th style={{border:'2px solid black'}}>Username</th>
                            </tr>
                        </thead>
                        <tbody style={{border:'2px solid black'}}>
                            {userList.map((user, index) => (
                                user && user.id && user.username ? (
                                    <tr key={index} style={{border:'2px solid black'}}>
                                        <td style={{border:'2px solid black'}}>{user.id}</td>
                                        <td style={{border:'2px solid black'}}>{user.username}</td>
                                    </tr>
                                ) : null
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default SignupForm;
