const Profile = () => {
  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
        My Profile
      </h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Cover */}
        <div className="h-24 sm:h-32 bg-linear-to-r from-blue-500 to-indigo-600" />

        <div className="p-4 sm:p-6 -mt-12">
          {/* Avatar & Info */}
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white p-1 shadow-md">
              <div className="w-full h-full rounded-xl bg-gray-100 flex items-center justify-center text-2xl sm:text-3xl font-bold text-gray-400">
                U
              </div>
            </div>

            <div className="pb-1">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                User Name
              </h2>
              <p className="text-sm text-gray-500">
                user@email.com
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-6 border-t border-gray-50">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <p className="text-gray-800 font-medium">
                  User Name
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <p className="text-gray-800 font-medium">
                  user@email.com
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Account Role
                </label>
                <p className="text-gray-800 font-medium">
                  Admin
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Status
                </label>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
