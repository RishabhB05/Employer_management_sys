import React, { useState, useContext } from 'react';
import AdminTaskView from '../../pages/AdminTaskView';
import { AuthContext } from '../../context/AuthProvider';

const AdminDashboard = ({ changeUser, openTaskView, openUserView }) => {
  const logoutUser = () => {
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('employeeData');
    window.location.reload();
  };

  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const task = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      assignTo,
      category,
      priority,
      active: false,
      new: true,
      failed: false,
      completed: false
    };

    if (!userData || !userData.employees) {
      console.log("userData not loaded yet");
      return;
    }

    // Assign by email for uniqueness
    const data = userData.employees.map(emp => {
      if (assignTo === emp.email) {
        // Update task counts
        const newTaskCounts = {
          ...emp.taskCounts,
          total: (emp.taskCounts?.total || 0) + 1,
          new: (emp.taskCounts?.new || 0) + 1,
        };
        return {
          ...emp,
          tasks: [...(emp.tasks || []), task],
          taskCounts: newTaskCounts
        };
      }
      return emp;
    });

    setUserData({ employees: data });
    localStorage.setItem('employees', JSON.stringify(data));
    setTaskTitle('');
    setCategory('');
    setAssignTo('');
    setTaskDate('');
    setTaskDescription('');
    setPriority('');
  };

  return (
    <div className='bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] min-h-screen w-full text-white'>
      <div className="flex h-screen font-sans">
        {/* Sidebar */}
        <div className="w-64 bg-[#1E293B] p-4 flex flex-col"  style={{ 
            backgroundImage: "url('https://i.pinimg.com/736x/6e/0f/9d/6e0f9d1967bdd722bf2ae8100ccdfe47.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
             }} >
          {/* Profile Section */}
          <div className="flex items-center mb-10 py-3 px-5 -mx-4 -my-4">
            <img 
              src="https://i.pinimg.com/736x/81/8a/1b/818a1b89a57c2ee0fb7619b95e11aebd.jpg"
              alt="Admin"
              className="w-19 h-19 rounded-full mr-3 border-2 border-[#F39C12]"
            />
            <div>
              <p className="font-semibold text-lg">Admin</p>
              <p className="text-sm text-gray-400">admin@gmail.com</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            <button className="w-full text-left p-3 rounded-lg hover:bg-[#4338CA] transition text-base font-medium">
              Dashboard
            </button>
            <button 
              onClick={openTaskView} 
              className="w-full text-left p-3 rounded-lg  hover:bg-[#4338CA] transition text-base font-medium"
            >
              Tasks
            </button>
            <button 
            onClick={openUserView}
            className="w-full text-left p-3 rounded-lg hover:bg-[#4338CA] transition text-base font-medium">
              Users
            </button>
          </nav>

          {/* Logout */}
          <button 
            onClick={logoutUser}
            className="mt-auto p-3 rounded-lg hover:bg-[#334155] flex items-center justify-center bg-red-600 hover:bg-red-500 transition text-base font-medium"
          >
            Logout
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="bg-[#1E293B] h-16 flex items-center justify-between px-8 shadow-md">
            <div className="text-white font-semibold text-xl">TASK MANAGEMENT</div>
            <div className="flex space-x-4">
              <button className="text-white hover:bg-red-700 px-4 py-2 rounded transition text-sm font-medium">
                <span className="mr-2">⚙️</span> Settings
              </button>
              <button className="text-white hover:bg-red-700 px-4 py-2 rounded transition text-sm font-medium">
                <span className="mr-2">❓</span> Help
              </button>
              <button className="bg-[#F39C12] hover:bg-[#E05555] text-white font-medium py-2 px-6 rounded-lg transition text-sm">
                + New Task
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 p-8 overflow-y-auto bg-white">
            {/* Task Creation Form */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-xl font-semibold mb-6 text-[#F39C12]">Create New Task</h2>
              
              <form onSubmit={submitHandler}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-base font-medium mb-2 text-gray-800">Task Title</label>
                    <input 
                      value={taskTitle}
                      onChange={(e) => setTaskTitle(e.target.value)}
                      type="text" 
                      placeholder="Make a UI design"
                      className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F39C12] text-sm text-gray-800"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-base font-medium mb-2 text-gray-800">Employer</label>
                    <select
                      value={assignTo}
                      onChange={(e) => setAssignTo(e.target.value)}
                      className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F39C12] text-sm text-gray-800"
                    >
                      <option value="">Select employer</option>
                      {userData?.employees?.map(emp => (
                        <option key={emp.email} value={emp.email}>
                          {emp.firstName} {emp.lastName} ({emp.email})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-base font-medium mb-2 text-gray-800">Description</label>
                  <textarea  
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    rows={4}
                    className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F39C12] text-sm text-gray-800"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-base font-medium mb-2 text-gray-800">Due Date</label>
                    <input 
                      value={taskDate}
                      onChange={(e) => setTaskDate(e.target.value)}
                      type="date" 
                      className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F39C12] text-sm text-gray-800"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-base font-medium mb-2 text-gray-800">Priority</label>
                    <select 
                      className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F39C12] text-sm text-gray-800"
                      value={priority}
                      onChange={(e) => setPriority(e.target.value)}
                    >
                      <option value="">Select priority</option>
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-base font-medium mb-2 text-gray-800">Category</label>
                    <input 
                      type='text'
                      className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F39C12] text-sm text-gray-800"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <button type="button" className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition text-sm font-medium text-gray-800">
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="bg-[#F39C12] hover:bg-[#E05555] text-white font-medium px-6 py-2 rounded-lg transition text-sm"
                  >
                    Create Task 
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;