import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="https://shellyheinrichs.com/wp-content/uploads/2022/09/Shelly-Heinrichs-L-Black-512-%C3%97-512-px.png"
              alt="Shelly Heinrichs Logo"
              className="h-12"
            />
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