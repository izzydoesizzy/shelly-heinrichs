import { Link } from "react-router-dom";
import { User } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-['Dancing_Script'] text-foreground">
              Shelly Heinrichs Coaching
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/progress" className="text-foreground hover:text-primary transition-colors">
              Progress
            </Link>
            <Button variant="outline" className="gap-2">
              <User className="h-4 w-4" />
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};