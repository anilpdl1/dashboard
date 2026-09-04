import {
  CalendarDays,
  FolderKanban,
  GitCommitHorizontal,
  Star,
  Users,
} from "lucide-react";
import {
  Bar,
  BarChart,
  Cell,
  Legend,
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
import ProjectCard from "../components/dashboard/ProjectCard";
import StatCard from "../components/dashboard/StatCard";
import { languages, monthlyCommits, projectActivity } from "../data/analytics";
import { projects } from "../data/projects";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-blue-600">
            Thursday, September 4
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Good morning, Anil
          </h1>
          <p className="mt-2 text-slate-500">
            Here’s what’s happening with your projects today.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 self-start rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 shadow-sm">
          <CalendarDays size={16} />
          Last 7 months
        </button>
      </section>
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={FolderKanban}
          title="Total Projects"
          value="12"
          change="+2"
          description="this month"
        />
        <StatCard
          icon={Star}
          title="GitHub Stars"
          value="1,248"
          change="+12.5%"
          description="from last month"
          index={1}
        />
        <StatCard
          icon={GitCommitHorizontal}
          title="Commits"
          value="386"
          change="+8.2%"
          description="from last month"
          index={2}
        />
        <StatCard
          icon={Users}
          title="Contributors"
          value="24"
          change="+4"
          description="this month"
          index={3}
        />
      </section>
      <section className="grid gap-6 xl:grid-cols-3">
        <ChartCard
          title="GitHub activity"
          subtitle="Commits over the last 7 months"
          className="xl:col-span-2"
        >
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyCommits}>
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="commits"
                  stroke="#2563eb"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
        <ChartCard
          title="Programming languages"
          subtitle="Codebase distribution"
        >
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={languages}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={55}
                  outerRadius={82}
                  paddingAngle={3}
                >
                  {languages.map((item) => (
                    <Cell key={item.name} fill={item.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </section>
      <section className="grid gap-6 lg:grid-cols-3">
        <ChartCard
          title="Project activity"
          subtitle="Current project portfolio"
          className="lg:col-span-1"
        >
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={projectActivity}>
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  fontSize={11}
                />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Bar dataKey="value" fill="#2563eb" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
        <section className="lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-slate-900">Recent projects</h2>
              <p className="mt-1 text-sm text-slate-500">
                Your latest work at a glance.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
