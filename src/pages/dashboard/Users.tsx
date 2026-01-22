const Users = () => {
  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
          Users Management
        </h1>

        <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Add New User
        </button>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-gray-100">
          <p className="text-sm text-gray-500">
            A list of all users in the system including their name, role, and
            status.
          </p>
        </div>

        {/* Empty State */}
        <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 0 018 0z"
              />
            </svg>
          </div>

          <h3 className="text-base sm:text-lg font-medium text-gray-900">
            No users found
          </h3>
          <p className="text-sm text-gray-500 mt-1 max-w-sm">
            Get started by creating a new user account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Users;
