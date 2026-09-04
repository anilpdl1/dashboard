import { Bell, Menu, Search } from "lucide-react";
import { useLocation } from "react-router-dom";
const titles = {
  dashboard: "Dashboard",
  projects: "Projects",
  analytics: "Analytics",
  activity: "Activity",
  team: "Team",
  settings: "Settings",
  profile: "Profile",
};
export default function Navbar({ onMenu }) {
  const { pathname } = useLocation();
  const page = pathname.split("/")[1] || "dashboard";
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenu}
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
          aria-label="Open navigation"
        >
          <Menu size={21} />
        </button>
        <h1 className="font-semibold text-slate-900">
          {titles[page] || "Project details"}
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <button className="hidden items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-400 sm:flex">
          <Search size={16} />
          Search
        </button>
        <button
          className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100"
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-600" />
        </button>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
          AP
        </span>
      </div>
    </header>
  );
}
