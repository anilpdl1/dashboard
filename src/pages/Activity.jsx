import ActivityItem from "../components/dashboard/ActivityItem";
import { activities } from "../data/activity";
export default function Activity() {
  const groups = activities.reduce((result, item) => {
    (result[item.day] ||= []).push(item);
    return result;
  }, {});
  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-slate-900">Activity</h1>
      <p className="mt-2 text-slate-500">
        A timeline of recent development work across your projects.
      </p>
      <div className="mt-7 space-y-8">
        {Object.entries(groups).map(([day, items]) => (
          <section key={day}>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
              {day}
            </h2>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              {items.map((item) => (
                <ActivityItem key={item.title} activity={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
