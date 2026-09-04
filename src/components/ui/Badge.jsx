export default function Badge({ children, status }) {
  const colors = {
    Active: "bg-green-50 text-green-700 ring-green-600/20",
    Completed: "bg-blue-50 text-blue-700 ring-blue-600/20",
    "In Progress": "bg-amber-50 text-amber-700 ring-amber-600/20",
    Planned: "bg-slate-100 text-slate-700 ring-slate-500/20",
  };
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${colors[status] || "bg-slate-100 text-slate-700 ring-slate-200"}`}
    >
      {children}
    </span>
  );
}
