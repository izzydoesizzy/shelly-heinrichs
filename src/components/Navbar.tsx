import { Link } from "react-router-dom";

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
          <div className="flex gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/progress" className="text-foreground hover:text-primary transition-colors">
              Progress Tracker
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};