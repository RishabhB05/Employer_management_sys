import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const AdminTaskView = ({data}) => {
  const authdata = useContext(AuthContext);
  console.log(authdata);

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold text-white">Admin Task Dashboard</h1>
        <div className="text-4xl text-gray-400">Tasks assigned to Employeer </div>
      </div>
      
    {/* //Header  */}
     <div className="bg-gray-800 p-3 rounded-lg   hover:bg-gray-750 transition-colors mb-6"> {/* Added mb-6 for margin-bottom */}
    <div className="grid grid-cols-5 gap-8 items-center text-white">
    <div className="text-4xl font-medium text-center">Employeer Name</div>
    <div className="text-4xl font-medium text-center">Total Task</div>
    <div className="text-4xl font-medium text-blue-600 text-center">Active</div>
    <div className="text-4xl font-medium text-green-600 text-center">Completed</div>
    <div className="text-4xl font-medium text-red-600 text-center">Failed</div>
          
    </div>
      </div>





      {/* Task List */}
      <div className="space-y-6 overflow-auto">
        {authdata.employees.map(function(elem , idx){
          
          return(
            <div key={idx} className=" bg-gray-800 p-8 rounded-lg border-l-8 border-red-500 hover:bg-gray-750 transition-colors">
              <div className="grid grid-cols-5 gap-8 items-center text-white">
                <div className="text-4xl font-medium text-center">{elem.firstName}</div>
                <div className="text-4xl text-gray-300 text-center">{elem.taskCounts.total}</div>
                <div className="text-4xl  text-blue-600 text-center">{elem.taskCounts.active}</div>
                <div className="text-4xl  text-green-600 text-center">{elem.taskCounts.completed}</div>
                <div className="text-4xl  text-red-600 text-center">{elem.taskCounts.failed}</div>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminTaskView;