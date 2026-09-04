import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import Activity from './pages/Activity'
import Analytics from './pages/Analytics'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import ProjectDetails from './pages/ProjectDetails'
import Projects from './pages/Projects'
import Settings from './pages/Settings'
import Team from './pages/Team'
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  return <ThemeProvider><BrowserRouter><Routes><Route element={<AppLayout />}>
    <Route path="/" element={<Navigate to="/dashboard" replace />} />
    <Route path="/dashboard" element={<Dashboard />} /><Route path="/projects" element={<Projects />} />
    <Route path="/projects/:projectId" element={<ProjectDetails />} /><Route path="/analytics" element={<Analytics />} />
    <Route path="/activity" element={<Activity />} /><Route path="/team" element={<Team />} />
    <Route path="/settings" element={<Settings />} /><Route path="/profile" element={<Profile />} />
    <Route path="*" element={<NotFound />} />
  </Route></Routes></BrowserRouter></ThemeProvider>
}
