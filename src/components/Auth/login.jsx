import React, { useState } from 'react';

const Login = (props) => {






  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const submitHandler = (e) => {
  e.preventDefault();
  props.handleLogin(email.trim().toLowerCase(), password.trim());  // Added trim() and toLowerCase()
  setEmail("");
  setPassword("");
};
  return (
    <div className="min-h-screen w-full h-14 bg-linear-to-r from-cyan-500 to-blue-500">
      {/* Header */}
      <header className="bg-white text-blue-600 p-5 shadow-md">
  <h1 className="text-4xl font-bold text-center">Employee Management System</h1>
</header>

      {/* Main Content - Full screen centered login form */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <div className="bg-white p-12 rounded-xl shadow-2xl w-full max-w-6xl min-h-[900px] flex flex-col justify-center">
          <div className="w-full max-w-2xl mx-auto"> {/* New container for form content */}
            <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">Login to Your Account</h1>
            
            <form onSubmit={submitHandler} className="space-y-8">
              <div>
                <label htmlFor="email" className="block text-xl font-medium text-gray-700 mb-5">
                  Email Address
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-6 py-4 text-xl border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-xl font-medium text-gray-700 mb-5">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  className="mt-1 block w-full px-6 py-4 text-xl border-2 border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-6 w-6 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-xl text-gray-700">
                    Remember me
                  </label>
                </div>
                <div className="text-xl">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full flex justify-center py-4 px-6 border border-transparent rounded-xl shadow-sm text-xl font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign In
              </button>
            </form>
            
            <div className="mt-12 text-center text-xl">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;