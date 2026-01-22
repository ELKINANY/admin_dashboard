import { Link } from "react-router-dom";
import SidebarNav from "../SidebarFeaturesUI/SidebarNav";
import { FaRocket } from "react-icons/fa";

export default function Sidebar() {

  return (
    <aside className="flex flex-col fixed top-0 left-0 w-64 bg-slate-900 h-screen text-slate-300 border-r border-slate-800 shadow-xl z-50">
      <div className="flex items-center gap-3 px-6 h-20 border-b border-slate-800">
        <div className="bg-blue-600 p-2 rounded-lg">
          <FaRocket className="text-white text-xl" />
        </div>
        <h1 className="text-xl font-bold bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
          DashVibe
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-4">
        <SidebarNav />
      </div>

      <div className="p-4 border-t border-slate-800">
        <Link to="/dashboard/profile" className="bg-slate-800/50 p-3 rounded-xl flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white uppercase">
            
          </div>
          <p className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">
              Hi User
            </p>
          </p>
        </Link>
      </div>
    </aside>
  );
}
