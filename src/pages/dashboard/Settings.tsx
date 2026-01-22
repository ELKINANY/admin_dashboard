const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-50">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            General Settings
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Manage your core application preferences.
          </p>

          <div className="space-y-4 max-w-md text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
            <p className="text-gray-400 italic">
              Settings configuration interface coming soon.
            </p>
          </div>
        </div>

        <div className="p-6 flex items-center justify-between bg-gray-50/50">
          <div>
            <h4 className="text-sm font-semibold text-gray-900">
              Developer Mode
            </h4>
            <p className="text-xs text-gray-500">
              Access advanced debugging tools and experimental features.
            </p>
          </div>
          <div className="w-10 h-5 bg-gray-200 rounded-full cursor-not-allowed"></div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
