import { Home, LogOut, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const ProfileNav = () => {
  // In a real app, this would come from auth context
  const userName = "Maria Rodriguez";

  const handleSignOut = () => {
    console.log("User signed out");
    // In a real app, this would handle sign out logic
  };

  return (
    <nav className="bg-white border-b py-3 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left section with navigation */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <Button variant="ghost" size="icon" className="hover:bg-accent">
              <Home className="h-5 w-5 text-muted-foreground" />
            </Button>
          </Link>
        </div>

        {/* Center section - can be used for page title or search in the future */}
        <div className="hidden sm:block">
          <h2 className="text-lg font-semibold text-foreground">Progress Tracker</h2>
        </div>

        {/* Right section with user actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hover:bg-accent">
            <Settings className="h-5 w-5 text-muted-foreground" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleSignOut} 
            className="hover:bg-accent"
          >
            <LogOut className="h-5 w-5 text-muted-foreground" />
          </Button>
          
          <div className="flex items-center gap-2 ml-4 pl-4 border-l">
            <User className="h-5 w-5 text-primary" />
            <span className="font-medium hidden sm:inline">{userName}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};