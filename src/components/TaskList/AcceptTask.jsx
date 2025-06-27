// AcceptTask.jsx
// filepath: c:\Users\Hp\Videos\Employer_Management_System-master - Copy\src\components\TaskList\AcceptTask.jsx
import React from 'react';

const AcceptTask = ({ task }) => {
  const getPriorityColor = () => {
    switch ((task.priority || '').toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-amber-100 text-amber-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow w-80">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className={`${getPriorityColor()} px-3 py-1 rounded-full text-sm font-medium`}>
            {task.priority}
          </span>
          <span className="text-gray-500 text-sm">{task.date}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{task.title}</h3>
        <p className="text-gray-600 mb-6">{task.description}</p>
        <div className="flex space-x-3">
          <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Mark as Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;