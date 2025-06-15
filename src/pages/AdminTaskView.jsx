import React from 'react'

const AdminTaskView = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-12"> {/* Increased margin */}
        <h1 className="text-4xl font-bold text-white">Admin Task Dashboard</h1>
        <div className="text-4xl text-gray-400">Tasks assigned by you</div>
      </div>

      {/* Task List */}
      <div className="space-y-6 overflow-auto"> {/* Increased spacing */}
        {/* Task Card 1 */}
        <div className="bg-gray-800 p-8 rounded-lg border-l-8 border-red-500 hover:bg-gray-750 transition-colors"> {/* Increased padding and border */}
          <div className="grid grid-cols-4 gap-8 items-center text-white"> {/* Increased gap */}
            <div className="text-4xl font-medium">Make a UI design</div>
            <div className="text-4xl text-gray-300">Design Team</div>
            <div className="text-4xl text-gray-400">Build a responsive UI</div>
            <div className="flex justify-end">
              <span className="bg-red-500 text-white px-6 py-3 rounded-full text-4xl"> {/* Increased size */}
                Pending
              </span>
            </div>
          </div>
        </div>

        {/* Task Card 2 */}
        <div className="bg-gray-800 p-8 rounded-lg border-l-8 border-yellow-500 hover:bg-gray-750 transition-colors">
          <div className="grid grid-cols-4 gap-8 items-center text-white">
            <div className="text-4xl font-medium">Make a UI design</div>
            <div className="text-4xl text-gray-300">Design Team</div>
            <div className="text-4xl text-gray-400">Build a responsive UI</div>
            <div className="flex justify-end">
              <span className="bg-yellow-500 text-white px-6 py-3 rounded-full text-4xl">
                In Progress
              </span>
            </div>
          </div>
        </div>

        {/* Task Card 3 */}
        <div className="bg-gray-800 p-8 rounded-lg border-l-8 border-green-500 hover:bg-gray-750 transition-colors">
          <div className="grid grid-cols-4 gap-8 items-center text-white">
            <div className="text-4xl font-medium">Make a UI design</div>
            <div className="text-4xl text-gray-300">Design Team</div>
            <div className="text-4xl text-gray-400">Build a responsive UI</div>
            <div className="flex justify-end">
              <span className="bg-green-500 text-white px-6 py-3 rounded-full text-4xl">
                Completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminTaskView