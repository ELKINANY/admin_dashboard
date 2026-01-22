import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export default function SidebarNav() {

  const features = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaUser />
      },
      {
      name: "users",
      path: "/dashboard/users",
      icon: <FaUser />
      },
      {
      name: "Settings",
      path: "/dashboard/settings",
      icon: <FaUser />
      },
      {
      name: "Profile",
      path: "/dashboard/profile",
      icon: <FaUser />
    }
  ]

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
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
              isActive
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
            }`
          }
        >
          {feature.icon}
          <span className="text-sm font-medium">{feature.name}</span>
        </NavLink>
      ))}
    </nav>
  );
}
