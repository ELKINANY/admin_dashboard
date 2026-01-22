import { Link } from "react-router-dom";
import SidebarNav from "../SidebarFeaturesUI/SidebarNav";
import { FaRocket, FaTimes } from "react-icons/fa";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <aside
      className={`
        fixed top-0 left-0 h-screen w-64 bg-slate-900 text-slate-300
        border-r border-slate-800 shadow-xl z-40
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 h-20 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <FaRocket className="text-white text-xl" />
          </div>
          <h1 className="text-xl font-bold bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
            DashVibe
          </h1>
        </div>

        {/* Close button (mobile only) */}
        <button
          onClick={onClose}
          className="lg:hidden text-slate-400 hover:text-white"
        >
          <FaTimes />
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-6 px-4">
        <SidebarNav onNavigate={onClose} />
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800">
        <Link
          to="/dashboard/profile"
          onClick={onClose}
          className="bg-slate-800/50 p-3 rounded-xl flex items-center gap-3"
        >
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white uppercase">
            U
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">
              Hi User
            </p>
          </div>
        </Link>
      </div>
    </aside>
  );
}
