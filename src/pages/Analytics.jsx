import { useState } from "react";
import {
  Bar,
  BarChart,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChartCard from "../components/dashboard/ChartCard";
import {
  analyticsByTimeframe,
  languages,
  pullRequests,
} from "../data/analytics";
const timeframes = ["7 Days", "30 Days", "3 Months", "6 Months", "1 Year"];
export default function Analytics() {
  const [timeframe, setTimeframe] = useState("30 Days");
  const commitData = analyticsByTimeframe[timeframe].map((commits, index) => ({
    label: `Week ${index + 1}`,
    commits,
  }));
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Analytics</h1>
        <p className="mt-2 text-slate-500">
          Understand your development output and team momentum.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {timeframes.map((item) => (
          <button
            key={item}
            onClick={() => setTimeframe(item)}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${timeframe === item ? "bg-blue-600 text-white" : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["Total commits", "386"],
          ["Pull requests", "79"],
          ["Issues closed", "124"],
          ["Code reviews", "58"],
        ].map(([label, value]) => (
          <article
            key={label}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm font-medium text-slate-500">{label}</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
            <p className="mt-2 text-sm font-medium text-green-600">
              +12%{" "}
              <span className="font-normal text-slate-500">
                vs previous period
              </span>
            </p>
          </article>
        ))}
      </section>
      <section className="grid gap-6 xl:grid-cols-2">
        <ChartCard
          title="Monthly commits"
          subtitle={`Commit trend for ${timeframe.toLowerCase()}`}
        >
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={commitData}>
                <XAxis dataKey="label" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Line
                  dataKey="commits"
                  stroke="#2563eb"
                  strokeWidth={3}
                  type="monotone"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
        <ChartCard title="Pull requests" subtitle="PRs opened by month">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={pullRequests}>
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Bar dataKey="value" fill="#2563eb" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
        <ChartCard
          title="Language distribution"
          subtitle="Across all repositories"
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={languages}
                  dataKey="value"
                  innerRadius={58}
                  outerRadius={88}
                >
                  {languages.map((item) => (
                    <Cell key={item.name} fill={item.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {languages.map((item) => (
              <span
                className="flex items-center gap-1.5 text-xs text-slate-600"
                key={item.name}
              >
                <i
                  className="h-2 w-2 rounded-full"
                  style={{ background: item.color }}
                />
                {item.name} {item.value}%
              </span>
            ))}
          </div>
        </ChartCard>
        <ChartCard
          title="Contribution activity"
          subtitle="Your activity is most consistent on weekdays"
        >
          <div className="grid grid-cols-7 gap-2 pt-3">
            {Array.from({ length: 35 }, (_, index) => (
              <div
                key={index}
                className="aspect-square rounded"
                style={{
                  backgroundColor: ["#eff6ff", "#bfdbfe", "#60a5fa", "#2563eb"][
                    index % 4
                  ],
                }}
                title={`${index + 1} contributions`}
              />
            ))}
          </div>
          <div className="mt-5 flex justify-end gap-2 text-xs text-slate-500">
            <span>Less</span>
            {["#eff6ff", "#bfdbfe", "#60a5fa", "#2563eb"].map((color) => (
              <i
                className="h-3 w-3 rounded-sm"
                key={color}
                style={{ backgroundColor: color }}
              />
            ))}
            <span>More</span>
          </div>
        </ChartCard>
      </section>
    </div>
  );
}
