import React from 'react';

const TaskList = ({ data, onRejectTask, onAcceptTask, onCompleteTask }) => {
  if (!data.tasks || data.tasks.length === 0) {
    return <div className="text-gray-500">No tasks assigned.</div>;
  }

  return (
    <div className="space-y-4">
      {data.tasks.map((task, idx) => (
        <div key={idx} className="bg-gray-100 rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-semibold text-lg text-gray-800">{task.title}</div>
            <div className="text-gray-600">{task.description}</div>
            <div className="text-xs text-gray-400 mt-1">
              Due: {task.date} | Priority: {task.priority}
            </div>
            <div className="text-xs text-gray-400 mt-1">
              Status: {task.completed ? 'Completed' : task.active ? 'In Progress' : task.new ? 'New' : 'Pending'}
            </div>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            {task.new && (
              <button
                onClick={() => onAcceptTask(idx)}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
              >
                Accept Task
              </button>
            )}
            {task.active && !task.completed && (
              <button
                onClick={() => onCompleteTask(idx)}
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
              >
                Mark as Completed
              </button>
            )}
            <button
              onClick={() => onRejectTask(idx)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;