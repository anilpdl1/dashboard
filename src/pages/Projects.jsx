import { FolderPlus } from 'lucide-react'
import ProjectCard from '../components/dashboard/ProjectCard'
import Button from '../components/ui/Button'
import { projects } from '../data/projects'
export default function Projects() { return <div><div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><h1 className="text-2xl font-bold text-slate-900">Projects</h1><p className="mt-2 text-slate-500">Explore and manage your development work.</p></div><Button><FolderPlus size={17}/>New project</Button></div><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{projects.map(project=><ProjectCard key={project.id} project={project}/>)}</div></div> }
