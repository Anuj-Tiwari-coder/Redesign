import React from 'react'

const LoginSignup = () => (
    <div className="p-8 bg-white shadow-md rounded-lg mx-4 my-8 md:mx-auto md:max-w-2xl">
        <h1 className="text-4xl font-bold text-red-600 mb-6">Login / Sign Up</h1>
        <p className="text-lg text-gray-700">Access your personalized dashboard now.</p>
        <form className="mt-4">
            <input
                type="email"
                className="mb-4 w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Email"
            />
            <input
                type="password"
                className="mb-4 w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Password"
            />
            <button className="w-full px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                Login
            </button>
        </form>
    </div>
);
export default LoginSignup