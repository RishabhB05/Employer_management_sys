import React from 'react';

const Header = () => {
  return (
    <div className='flex items-center justify-between p-6 bg-white rounded-xl shadow-sm'>
      <div>
        <h1 className='text-4xl md:text-5xl text-gray-700'>
          Hello, <br/>
          <span className='text-5xl md:text-6xl font-semibold text-[#2C3E50]'>
            Rishabh 👋
          </span>
        </h1>
        <p className='text-xl text-gray-500 mt-2'>Welcome to your dashboard</p>
      </div>
      
      <button className='text-3xl md:text-4xl bg-[#FF6B6B] hover:bg-[#E05555] text-white px-6 py-3 font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg'>
        Log Out
      </button>
    </div>
  );
};

export default Header;