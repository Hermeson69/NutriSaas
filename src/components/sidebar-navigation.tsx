import { cn } from "../lib/utils"; // You'll need to create this utility
import {
  Home,
  Dumbbell,
  Ruler,
  FileText,
  Megaphone,
  LogOut,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

interface SidebarNavigationProps {
  className?: string;
}

export function SidebarNavigation({ className }: SidebarNavigationProps) {
  const location = useLocation();
  const pathname = location.pathname;

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
      bgColor: "bg-transparent",
    },
    {
      name: "Workouts",
      href: "/Diet",
      icon: Dumbbell,
      bgColor: "bg-transparent",
    },
    {
      name: "Measurements",
      href: "/measurements",
      icon: Ruler,
      bgColor: "bg-transparent",
    },
    {
      name: "Plans",
      href: "/plans",
      icon: FileText,
      bgColor: "bg-transparent",
    },
    {
      name: "Announcements",
      href: "/announcements",
      icon: Megaphone,
      bgColor: "bg-transparent",
    },
  ];

  return (
    <div
      className={cn(
        "flex h-dvh w-16 flex-col ml-4 rounded-[20px] mt-1 justify-between bg-gray-50 py-4",
        className
      )}
    >
      <div className="flex flex-col items-center space-y-6">
        {/* Profile icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
          <span className="text-lg font-semibold">H</span>
        </div>

        {/* Navigation items */}
        <nav className="flex flex-col items-center space-y-6 relative
        ">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link key={item.name} to={item.href}>
                <Button
                  className={cn(
                    "relative h-11 w-11 rounded-md flex items-center justify-center hover:bg-green-800 group",
                    isActive ? "bg-green-800" : "bg-transparent"
                  )}
                  aria-label={item.name}
                >
                  <item.icon
                    className={cn(
                      "h-9 w-9",
                      isActive
                        ? "text-white"
                        : "text-gray-600 group-hover:text-white"
                    )}
                  />
                </Button>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout button */}
      <div className="flex flex-col items-end pr-3 w-full ml-[-6px]">
        <Button
          className="h-10 w-10 rounded-md flex items-center justify-center bg-white hover:bg-green-800 group"
          aria-label="Logout"
        >
          <LogOut className="h-8 w-8 text-gray-600 group-hover:text-white" />
        </Button>
      </div>
    </div>
  );
}
