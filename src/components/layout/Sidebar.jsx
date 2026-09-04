import {
  BarChart3,
  FolderKanban,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
  Activity,
  Code2,
} from "lucide-react";
import { NavLink } from "react-router-dom";
const links = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/projects", label: "Projects", icon: FolderKanban },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/activity", label: "Activity", icon: Activity },
  { to: "/team", label: "Team", icon: Users },
  { to: "/settings", label: "Settings", icon: Settings },
];
export function NavigationLinks({ onNavigate }) {
  return (
    <nav className="space-y-1">
      {links.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          onClick={onNavigate}
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`
          }
        >
          <Icon size={19} />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-slate-200 bg-white p-4 lg:flex lg:flex-col">
      <div className="flex items-center gap-2 px-2 py-3 text-lg font-bold text-slate-900">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-600 text-white">
          <Code2 size={19} />
        </span>
        DevSpace
      </div>
      <div className="mt-8">
        <NavigationLinks />
      </div>
      <div className="mt-auto border-t border-slate-200 pt-4">
        <NavLink
          to="/profile"
          className="flex items-center gap-3 rounded-lg p-2 hover:bg-slate-50"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
            AP
          </span>
          <span>
            <span className="block text-sm font-semibold text-slate-800">
              Anil Poudel
            </span>
            <span className="block text-xs text-slate-500">View profile</span>
          </span>
        </NavLink>
        <button className="mt-3 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-red-50 hover:text-red-600">
          <LogOut size={18} />
          Log out
        </button>
      </div>
    </aside>
  );
}
