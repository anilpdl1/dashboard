import { useState } from "react";
import Button from "../components/ui/Button";
import { useTheme } from "../context/useTheme";
const Toggle = ({ checked, onChange }) => (
  <button
    type="button"
    onClick={() => onChange(!checked)}
    className={`relative h-6 w-11 rounded-full transition-colors ${checked ? "bg-blue-600" : "bg-slate-300"}`}
    aria-pressed={checked}
  >
    <span
      className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-transform ${checked ? "translate-x-6" : "translate-x-1"}`}
    />
  </button>
);
export default function Settings() {
  const [account, setAccount] = useState({
    name: "Anil Poudel",
    email: "anil@example.com",
    username: "anildev",
  });
  const { theme, setTheme } = useTheme();
  const [notices, setNotices] = useState({
    email: true,
    updates: true,
    security: true,
  });
  const update = (key, value) => setAccount({ ...account, [key]: value });
  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
      <p className="mt-2 text-slate-500">
        Manage your account and workspace preferences.
      </p>
      <div className="mt-7 space-y-6">
        <Section
          title="Account"
          description="Your personal account information."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["name", "Name"],
              ["email", "Email"],
              ["username", "Username"],
            ].map(([key, label]) => (
              <label key={key} className="text-sm font-medium text-slate-700">
                {label}
                <input
                  value={account[key]}
                  onChange={(event) => update(key, event.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-slate-200 px-3 py-2.5 font-normal outline-none focus:border-blue-500"
                />
              </label>
            ))}
          </div>
          <Button className="mt-5">Save account changes</Button>
        </Section>
        <Section
          title="Appearance"
          description="Choose how DevSpace looks for you."
        >
          <div className="flex flex-wrap gap-3">
            {[
              ["light", "Light"],
              ["dark", "Dark"],
              ["system", "System"],
            ].map(([value, label]) => (
              <button
                key={value}
                onClick={() => setTheme(value)}
                className={`rounded-lg border px-4 py-2.5 text-sm font-medium ${theme === value ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-600"}`}
              >
                {label}
              </button>
            ))}
          </div>
        </Section>
        <Section
          title="Notifications"
          description="Select the updates you want to receive."
        >
          <div className="space-y-4">
            {[
              [
                "email",
                "Email notifications",
                "Receive product news and general updates.",
              ],
              [
                "updates",
                "Project updates",
                "Get notified when your projects change.",
              ],
              [
                "security",
                "Security alerts",
                "Always stay informed about account security.",
              ],
            ].map(([key, title, detail]) => (
              <div
                key={key}
                className="flex items-center justify-between gap-4"
              >
                <div>
                  <p className="text-sm font-medium text-slate-800">{title}</p>
                  <p className="text-sm text-slate-500">{detail}</p>
                </div>
                <Toggle
                  checked={notices[key]}
                  onChange={(value) => setNotices({ ...notices, [key]: value })}
                />
              </div>
            ))}
          </div>
        </Section>
        <Section
          title="Developer settings"
          description="Configure your developer tools and integrations."
        >
          <div className="divide-y divide-slate-100">
            {["GitHub integration", "API access", "Webhooks"].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
              >
                <span className="text-sm font-medium text-slate-800">
                  {item}
                </span>
                <Button variant="secondary" className="py-1.5">
                  Configure
                </Button>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
function Section({ title, description, children }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="font-semibold text-slate-900">{title}</h2>
      <p className="mt-1 text-sm text-slate-500">{description}</p>
      <div className="mt-5">{children}</div>
    </section>
  );
}
