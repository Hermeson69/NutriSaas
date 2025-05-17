import { cn } from "../../lib/utils";
import {
  Home,
  Dumbbell,
  Apple,
  FileText,
  Megaphone,
  LogOut,
  UserPen,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { useTheme } from "../Provider/theme-provider";

interface SidebarNavigationProps {
  className?: string;
}

export function SidebarNavigation({ className }: SidebarNavigationProps) {
  const location = useLocation();
  const pathname = location.pathname;
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
      bgColor: "bg-transparent",
    },
    {
      name: "Workouts",
      href: "/Treino",
      icon: Dumbbell,
      bgColor: "bg-transparent",
    },
    {
      name: "Diet",
      href: "/Dieta",
      icon: Apple,
      bgColor: "bg-transparent",
    },
    {
      name: "Plans",
      href: "/Planos",
      icon: FileText,
      bgColor: "bg-transparent",
    },
    {
      name: "Profile",
      href: "/Perfil",
      icon: UserPen,
    },
    {
      name: "Announcements",
      href: "/Announcements",
      icon: Megaphone,
      bgColor: "bg-transparent",
    },
  ];

  return (
    <div
      className={cn(
        "flex h-dvh w-16 flex-col ml-4 rounded-[20px] mt-0 justify-between py-4 transition-colors duration-200 shadow-sm",
        isDark ? "bg-bark text-gray-100" : "bg-light-50 text-gray-300",
        className
      )}
    >
      <div className="flex flex-col items-center space-y-6">
        {/* Profile icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
          <span className="text-lg font-semibold">H</span>
        </div>

        {/* Navigation items */}
        <nav className="flex flex-col items-center space-y-6 relative">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            const Icon = item.icon;

            return (
              <Link key={item.name} to={item.href}>
                <Button
                  variant={"default"}
                  className={cn(
                    "relative h-11 w-11 rounded-md flex items-center justify-center hover:bg-green-800 group",
                    isActive ? "bg-green-800" : "bg-transparent"
                  )}
                  aria-label={item.name}
                >
                  <Icon
                    size={43}
                    className={cn(
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
          className="h-10 w-10 rounded-md flex items-center justify-center bg-transparent hover:bg-green-800 group"
          aria-label="Logout"
        >
          <LogOut className="h-8 w-8 text-gray-600 group-hover:text-white" />
        </Button>
      </div>
    </div>
  );
}
