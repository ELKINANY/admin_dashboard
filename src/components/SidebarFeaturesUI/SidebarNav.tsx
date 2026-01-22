import { NavLink } from "react-router-dom";
import { FaUser, FaCog, FaUsers, FaHome } from "react-icons/fa";

type SidebarNavProps = {
  onNavigate?: () => void;
};

export default function SidebarNav({ onNavigate }: SidebarNavProps) {
  const features = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome className="text-lg" />,
    },
    {
      name: "Users",
      path: "/dashboard/users",
      icon: <FaUsers className="text-lg" />,
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: <FaCog className="text-lg" />,
    },
    {
      name: "Profile",
      path: "/dashboard/profile",
      icon: <FaUser className="text-lg" />,
    },
  ];

  return (
    <nav className="space-y-1">
      <p className="px-3 text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
        Main Menu
      </p>

      {features.map((feature) => (
        <NavLink
          key={feature.name}
          to={feature.path}
          end={feature.path === "/dashboard"}
          onClick={onNavigate}
          className={({ isActive }) =>
            `
            flex items-center gap-3 px-3 py-2.5 rounded-xl
            transition-all duration-200
            ${
              isActive
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
            }
          `
          }
        >
          <span className="w-5 flex items-center justify-center">
            {feature.icon}
          </span>
          <span className="text-sm font-medium">{feature.name}</span>
        </NavLink>
      ))}
    </nav>
  );
}
