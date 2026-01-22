const Dashboard = () => {
  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
        Welcome
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium">Total Users</h3>
          <p className="text-2xl sm:text-3xl font-bold text-blue-600 mt-2">
            1,280
          </p>
        </div>

        <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium">
            Active Sessions
          </h3>
          <p className="text-2xl sm:text-3xl font-bold text-green-600 mt-2">
            45
          </p>
        </div>

        <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 text-sm font-medium">
            Pending Requests
          </h3>
          <p className="text-2xl sm:text-3xl font-bold text-red-600 mt-2">
            12
          </p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-6 sm:mt-8 bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
          Recent Activity
        </h2>

        <div className="space-y-3 sm:space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-start sm:items-center justify-between gap-3 py-2 border-b border-gray-50 last:border-0"
            >
              <div className="flex items-start sm:items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <span className="text-xs font-medium text-gray-600">
                    JD
                  </span>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-800">
                    User updated profile
                  </p>
                  <p className="text-xs text-gray-500">
                    2 hours ago
                  </p>
                </div>
              </div>

              <button className="text-xs text-blue-600 hover:underline shrink-0">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
