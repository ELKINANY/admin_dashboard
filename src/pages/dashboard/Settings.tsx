const Settings = () => {
  return (
    <div className="p-4 sm:p-6 max-w-5xl mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
        Settings
      </h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-50">
        {/* General Settings */}
        <div className="p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1">
            General Settings
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Manage your core application preferences.
          </p>

          <div className="space-y-4 max-w-md mx-auto text-center py-10 sm:py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
            <p className="text-gray-400 italic text-sm">
              Settings configuration interface coming soon.
            </p>
          </div>
        </div>

        {/* Developer Mode */}
        <div className="p-4 sm:p-6 bg-gray-50/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-900">
              Developer Mode
            </h4>
            <p className="text-xs text-gray-500">
              Access advanced debugging tools and experimental features.
            </p>
          </div>

          <div className="w-10 h-5 bg-gray-200 rounded-full cursor-not-allowed self-start sm:self-auto" />
        </div>
      </div>
    </div>
  );
};

export default Settings;
