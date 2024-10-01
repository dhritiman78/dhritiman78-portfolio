import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [password, setpassword] = useState('');
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setpassword(e.target.value
        );
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(import.meta.env.VITE_API_URL + '/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify(formData),
                body: JSON.stringify({password: password}),
            });
            const data = await response.json();
            if (data.message === 'Incorrect!') {
                 alert('Wrong passkey!');
            } else {
                navigate('./contactrequests');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred, please try again later.');
        }
    };
    
    return (
        <div className="min-h-screen mt-16 flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 via-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg w-full bg-white shadow-xl rounded-2xl p-8">
                <h2 className="text-4xl font-semibold text-pink-600 text-center mb-8">
                    Admin Login
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Passkey */}
                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-semibold text-blue-600">
                            Passkey
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-pink-600 focus:outline-none focus:ring-2 ring-pink-600"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 focus:outline-none focus:ring-2 ring-pink-600"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Admin;
