import React from 'react';

const AdminDashboard = () => {
  return (
    <div className='min-h-screen w-full bg-black text-white'>
      
      <div className="flex h-[calc(100vh-80px)]"> {/* Full height minus header */}
        {/* Sidebar - 20% width */}
        <div className="w-1/5 bg-[#1A1A1A] p-6 border-r border-[#333]">
          <h2 className="text-6xl font-bold mb-20 text-[#F39C12]">Admin Panel</h2>
          <nav className="space-y-4 text-3xl">
            <a href="#" className="block py-2 px-4 rounded-lg bg-[#2A2A2A] hover:bg-[#333] transition">Dashboard</a>
            <a href="#" className="block py-2 px-4 rounded-lg hover:bg-[#2A2A2A] transition">Tasks</a>
            <a href="#" className="block py-2 px-4 rounded-lg hover:bg-[#2A2A2A] transition">Users</a>
            <a href="#" className="block py-2 px-4 rounded-lg hover:bg-[#2A2A2A] transition">Settings</a>
          </nav>
        </div>

        {/* Main Content - 80% width */}
        <div className="w-4/5 p-10 overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-7xl font-bold">Task Management</h1>
            <button className="bg-[#F39C12] hover:bg-[#E05555] text-4xl text-white font-medium py-2 px-6 rounded-lg transition">
              + New Task
            </button>
          </div>

          {/* Full-width form */}
          <form className="bg-[#1A1A1A] rounded-xl shadow-lg p-8 text-3xl">
            <h2 className="text-4xl font-bold mb-6 text-[#F39C12]">Create New Task</h2>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
<label className="block text-4xl font-medium mb-6">Task Title</label>                <input 
                  type="text" 
                  placeholder="Make a UI design"
                  className="w-full bg-[#2A2A2A] border border-[#333] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F39C12]"
                />
              </div>
              
              <div>
                <label className="block text-4xl font-medium mb-6">Employer Name</label>
                <input 
                  type="text" 
                  placeholder="Enter employer name"
                  className="w-full bg-[#2A2A2A] border border-[#333] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F39C12]"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-4xl font-medium mb-6">Description</label>
              <textarea 
                rows={6}
                className="w-full bg-[#2A2A2A] border border-[#333] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F39C12]"
              ></textarea>
            </div>

            <div className="grid grid-cols-3 gap-8 mb-10">
              <div>
                <label className="block text-4xl font-medium mb-6">Due Date</label>
                <input 
                  type="date" 
                  className="w-full bg-[#2A2A2A] border border-[#333] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F39C12]"
                />
              </div>
              
              <div>
                <label className="block text-4xl font-medium mb-6">Priority</label>
                <select className="w-full bg-[#2A2A2A] border border-[#333] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F39C12]">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
              
              <div>
                <label className="block text-4xl font-medium mb-6">Status</label>
                <select className="w-full bg-[#2A2A2A] border border-[#333] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#F39C12]">
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button type="button" className="px-6 py-3 border border-[#555] rounded-lg hover:bg-[#2A2A2A] transition">
                Cancel
              </button>
              <button 
                type="submit"
                className="bg-[#F39C12] hover:bg-[#E05555] text-white font-medium px-6 py-3 rounded-lg transition"
              >
                Create Task 
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;