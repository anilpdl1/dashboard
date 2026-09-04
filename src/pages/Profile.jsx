import { useState } from "react";
import { GitFork, Globe, Link, MapPin } from "lucide-react";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
export default function Profile() {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Anil Poudel",
    username: "anildev",
    bio: "Frontend developer focused on useful, delightful tools for developers.",
    location: "Kathmandu, Nepal",
    skills: "React, TypeScript, Tailwind CSS, Node.js",
  });
  const save = (event) => {
    event.preventDefault();
    setEditing(false);
  };
  return (
    <div className="max-w-4xl">
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="h-28 rounded-t-xl bg-blue-600" />
        <div className="px-6 pb-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <span className="-mt-12 grid h-24 w-24 place-items-center rounded-full border-4 border-white bg-blue-100 text-2xl font-bold text-blue-700">
              AP
            </span>
            <Button className="sm:mt-5" onClick={() => setEditing(true)}>
              Edit profile
            </Button>
          </div>
          <h1 className="mt-3 text-2xl font-bold text-slate-900">
            {profile.name}
          </h1>
          <p className="text-slate-500">@{profile.username}</p>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            {profile.bio}
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <MapPin size={16} />
              {profile.location}
            </span>
            <a
              className="flex items-center gap-1.5 hover:text-blue-600"
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              <GitFork size={16} />
              GitHub
            </a>
            <a
              className="flex items-center gap-1.5 hover:text-blue-600"
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <Link size={16} />
              LinkedIn
            </a>
            <a
              className="flex items-center gap-1.5 hover:text-blue-600"
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
            >
              <Globe size={16} />
              Portfolio
            </a>
          </div>
        </div>
      </div>
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-semibold text-slate-900">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {profile.skills.split(", ").map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
      <Modal
        open={editing}
        onClose={() => setEditing(false)}
        title="Edit profile"
      >
        <form onSubmit={save} className="space-y-4">
          {[
            ["name", "Name"],
            ["username", "Username"],
            ["bio", "Bio"],
            ["location", "Location"],
            ["skills", "Skills (separate with commas)"],
          ].map(([key, label]) => (
            <label
              key={key}
              className="block text-sm font-medium text-slate-700"
            >
              {label}
              {key === "bio" ? (
                <textarea
                  value={profile[key]}
                  onChange={(event) =>
                    setProfile({ ...profile, [key]: event.target.value })
                  }
                  className="mt-1.5 min-h-24 w-full rounded-lg border border-slate-200 px-3 py-2.5 font-normal outline-none focus:border-blue-500"
                />
              ) : (
                <input
                  value={profile[key]}
                  onChange={(event) =>
                    setProfile({ ...profile, [key]: event.target.value })
                  }
                  className="mt-1.5 w-full rounded-lg border border-slate-200 px-3 py-2.5 font-normal outline-none focus:border-blue-500"
                />
              )}
            </label>
          ))}
          <div className="flex justify-end gap-2">
            <Button
              variant="secondary"
              type="button"
              onClick={() => setEditing(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Save profile</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
