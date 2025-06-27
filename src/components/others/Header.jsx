import React, { useState } from 'react';
import { setLocalStorage } from '../../pages/utils/localStorage';

const Header = (props) => {

  const logoutUser = () => {
    // Clear the user from localStorage
    // localStorage.removeItem('loggedInUser');
    
    // Optional: Clear employee data if exists
    // localStorage.removeItem('employeeData');
    
     
    // Refresh the page to reset application state
    // window.location.reload();
    
     try {
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('employeeData');
    
    // Ensure changeUser exists before calling it
    if (typeof props.changeUser === 'function') {
      props.changeUser('');
    } else {
      console.error('changeUser is not a function');
    }
  } catch (error) {
    console.error('Logout failed:', error);
  }


  }
  
  return (
    <div className='flex items-center justify-between p-6 bg-white rounded-xl shadow-sm'>
      <div>
        <h1 className=' md:text-xl text-gray-700'>
          Hello, <br/>
          <span className='text-2xl md:text-3xl font-semibold text-[#2C3E50]'>
            {props.data.firstName} 👋
          </span>
        </h1>
        <p className='text-xl text-gray-500 mt-2'>Welcome to your dashboard</p>
      </div>
      
      <button onClick={logoutUser} className=' md:text-md bg-[#FF6B6B] hover:bg-[#E05555] text-white px-6 py-3 font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg'>
        LogOut 
      </button>
    </div>
  );
};

export default Header; 