import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="grid min-h-[60vh] place-items-center text-center">
      <div>
        <p className="text-7xl font-bold text-blue-600">404</p>
        <h1 className="mt-4 text-2xl font-bold text-slate-900">
          Page not found
        </h1>
        <p className="mt-2 text-slate-500">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <Button className="mt-6" onClick={() => navigate("/dashboard")}>
          <ArrowLeft size={17} />
          Back to dashboard
        </Button>
      </div>
    </div>
  );
}
