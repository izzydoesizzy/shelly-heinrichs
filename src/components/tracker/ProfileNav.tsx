import { User } from "lucide-react";

export const ProfileNav = () => {
  // In a real app, this would come from auth context
  const userName = "Maria Rodriguez";

  return (
    <div className="bg-white border-b py-3 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <User className="h-6 w-6 text-primary" />
          <span className="font-semibold">{userName}</span>
        </div>
      </div>
    </div>
  );
};