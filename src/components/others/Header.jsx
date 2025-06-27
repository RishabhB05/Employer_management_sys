// Header.jsx
import React from 'react';

const Header = ({ data, changeUser }) => {
  const logoutUser = () => {
    try {
      localStorage.removeItem('loggedInUser');
      localStorage.removeItem('employeeData');
      if (typeof changeUser === 'function') {
        changeUser('');
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 px-8 py-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <span>Welcome back, {data.firstName}</span>
            <span className="ml-3 text-2xl">👋</span>
          </h1>
          <p className="mt-1 text-gray-600">Your personalized task dashboard</p>
        </div>
        <button
          onClick={logoutUser}
          className="flex items-center space-x-2 px-4 py-2.5 text-sm font-medium text-red-600 hover:text-white hover:bg-red-600 rounded-lg border border-red-200 hover:border-red-600 transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
          </svg>
          <span>Sign Out</span>
        </button>
      </div>
    </header>
  );
};

export default Header;