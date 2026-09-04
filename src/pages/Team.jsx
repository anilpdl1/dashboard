import { useState } from "react";
import { Mail, UserPlus } from "lucide-react";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import { teamMembers } from "../data/team";
export default function Team() {
  const [inviteOpen, setInviteOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [invited, setInvited] = useState(false);
  const submit = (event) => {
    event.preventDefault();
    setInvited(true);
  };
  return (
    <div>
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Team</h1>
          <p className="mt-2 text-slate-500">
            The people building great things with you.
          </p>
        </div>
        <Button
          onClick={() => {
            setInviteOpen(true);
            setInvited(false);
          }}
        >
          <UserPlus size={17} />
          Invite member
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {teamMembers.map((member) => (
          <article
            key={member.email}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-blue-100 font-bold text-blue-700">
                {member.initials}
              </span>
              <span
                className={`flex items-center gap-1.5 text-xs font-medium ${member.status === "Online" ? "text-green-600" : "text-slate-500"}`}
              >
                <i
                  className={`h-2 w-2 rounded-full ${member.status === "Online" ? "bg-green-500" : "bg-slate-400"}`}
                />
                {member.status}
              </span>
            </div>
            <h2 className="mt-4 font-semibold text-slate-900">{member.name}</h2>
            <p className="text-sm text-slate-500">{member.role}</p>
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
              <span className="flex items-center gap-1.5 text-slate-500">
                <Mail size={15} />
                {member.email}
              </span>
              <span className="font-semibold text-slate-700">
                {member.commits} commits
              </span>
            </div>
          </article>
        ))}
      </div>
      <Modal
        open={inviteOpen}
        onClose={() => setInviteOpen(false)}
        title="Invite a team member"
      >
        {invited ? (
          <div className="py-4 text-center">
            <p className="font-semibold text-green-600">Invitation sent!</p>
            <p className="mt-1 text-sm text-slate-500">
              We’ll email {email} with access instructions.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <label className="block text-sm font-medium text-slate-700">
              Email address
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="teammate@example.com"
                className="mt-1.5 w-full rounded-lg border border-slate-200 px-3 py-2.5 outline-none focus:border-blue-500"
              />
            </label>
            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="secondary"
                onClick={() => setInviteOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Send invitation</Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
}
