import {
  ArrowLeft,
  ExternalLink,
  GitCommitHorizontal,
  GitFork,
  Users,
} from "lucide-react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useNavigate, useParams } from "react-router-dom";
import ChartCard from "../components/dashboard/ChartCard";
import ActivityItem from "../components/dashboard/ActivityItem";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import EmptyState from "../components/ui/EmptyState";
import { activities } from "../data/activity";
import { monthlyCommits } from "../data/analytics";
import { projects } from "../data/projects";
export default function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((item) => item.id === projectId);
  if (!project)
    return (
      <EmptyState
        title="Project not found"
        description="This project may have been moved or deleted."
      />
    );
  return (
    <div className="space-y-6">
      <button
        onClick={() => navigate("/projects")}
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600"
      >
        <ArrowLeft size={17} />
        Back to projects
      </button>
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-5 md:flex-row">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-slate-900">
                {project.name}
              </h1>
              <Badge status={project.status}>{project.status}</Badge>
            </div>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-slate-100 px-2.5 py-1 text-sm text-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex h-fit gap-2">
            <a href={project.github} target="_blank" rel="noreferrer">
              <Button variant="secondary">
                <GitFork size={16} />
                GitHub
              </Button>
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer">
              <Button>
                <ExternalLink size={16} />
                Live demo
              </Button>
            </a>
          </div>
        </div>
      </section>
      <section className="grid gap-4 sm:grid-cols-3">
        <Stat
          label="Commits"
          value={project.commits}
          icon={GitCommitHorizontal}
        />
        <Stat label="Contributors" value={project.contributors} icon={Users} />
        <Stat
          label="Completion"
          value={`${project.completion}%`}
          icon={GitCommitHorizontal}
        />
      </section>
      <section className="grid gap-6 lg:grid-cols-3">
        <ChartCard
          title="Commit activity"
          subtitle="Last 7 months"
          className="lg:col-span-2"
        >
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyCommits}>
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip />
                <Line
                  dataKey="commits"
                  type="monotone"
                  stroke="#2563eb"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
        <ChartCard
          title="Contributors"
          subtitle="People working on this project"
        >
          <div className="space-y-4">
            {["Anil Poudel", "Maya Chen", "Jordan Lee"].map((name, index) => (
              <div className="flex items-center gap-3" key={name}>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                  {name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{name}</p>
                  <p className="text-xs text-slate-500">
                    {[86, 42, 31][index]} commits
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ChartCard>
      </section>
      <ChartCard title="Recent activity">
        {activities.slice(0, 3).map((activity) => (
          <ActivityItem key={activity.title} activity={activity} />
        ))}
      </ChartCard>
    </div>
  );
}
function Stat({ label, value, icon: Icon }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <Icon className="text-blue-600" size={20} />
      <p className="mt-3 text-2xl font-bold text-slate-900">{value}</p>
      <p className="text-sm text-slate-500">{label}</p>
    </article>
  );
}
