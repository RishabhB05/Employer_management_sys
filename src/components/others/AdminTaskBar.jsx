import React from 'react';

const AdminTaskBar = () => {
  return (
    <div className="h-screen w-64 bg-[#1E293B] text-white p-4 flex flex-col">
      {/* Profile Section */}
      <div className="flex items-center mb-8 p-3 bg-[#334155] rounded-lg">
        <div className="h-10 w-10 rounded-full bg-[#4F46E5] flex items-center justify-center mr-3">
          <span className="font-medium">AM</span>
        </div>
        <div>
          <p className="font-medium">Admin</p>
          <p className="text-xs text-gray-400">admin@email.com</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <button className="w-full flex items-center p-3 mb-2 rounded-lg bg-[#4F46E5]">
          <span className="mr-3">📊</span>
          Dashboard
        </button>
        <button className="w-full flex items-center p-3 mb-2 rounded-lg hover:bg-[#334155]">
          <span className="mr-3">👥</span>
          Users
        </button>
        <button className="w-full flex items-center p-3 mb-2 rounded-lg hover:bg-[#334155]">
          <span className="mr-3">✅</span>
          Tasks
        </button>
        <button className="w-full flex items-center p-3 rounded-lg hover:bg-[#334155]">
          <span className="mr-3">⚙️</span>
          Settings
        </button>
      </nav>

      {/* Logout */}
      <button className="p-3 rounded-lg hover:bg-[#334155] flex items-center">
        <span className="mr-3">🚪</span>
        Logout
      </button>
    </div>
  );
};

export default AdminTaskBar;