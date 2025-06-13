import React, { useState } from 'react';

const Login = () => {

  const [email,setEmail] = useState('')
  const[password,setpassword] = useState('')

   const submitHandler = (e)=>{
    e.preventDefault()
     console.log("email is ", email)
     console.log("password is ", password)
    
     setEmail("")
     setpassword("")


   }

  return (

   <div className="container mx-auto p-2">
      <h1 className="text-5xl font-bold bg-blue-500 text-white p-4 rounded-lg mb-4">
        Employee Management System
      </h1>

    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-20 rounded-xl shadow-xl w-full max-w-2xl"> {/* Increased width and padding */}
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Login to Your Account</h1> {/* Larger heading */}
        <form onSubmit={(e)=>{submitHandler(e)}} className="space-y-6"> 
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2"> {/* Larger text */}
              Email Address
            </label>
            <input
              value={email}
              onChange={(e)=>{
                 setEmail(e.target.value)
              }}
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              value={password}
              onChange={(e)=>{
                setpassword(e.target.value)
              }}
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-3 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-lg text-gray-700">
                Remember me
              </label>
            </div>
            <div className="text-lg">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </form>
        <div className="mt-8 text-center text-lg">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
     </div>
  );
};

export default Login;