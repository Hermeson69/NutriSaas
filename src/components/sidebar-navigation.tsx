import { cn } from "../lib/utils" // You'll need to create this utility
import { Home, Dumbbell, Ruler, FileText, Megaphone, LogOut } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "./ui/button"

// Simple utility function (create in lib/utils.ts)
// export const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');

interface SidebarNavigationProps {
  className?: string
}


export function SidebarNavigation({ className }: SidebarNavigationProps) {
  const location = useLocation()
  const pathname = location.pathname

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
      bgColor: "bg-green-900",
    },
    {
      name: "Workouts",
      href: "/workouts",
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
  ]

  return (
    <div
      className={cn("flex h-screen w-16 flex-col ml-4 rounded-[20px] mt-2 justify-between bg-gray-50 py-4", className)}
    >
      <div className="flex flex-col items-center space-y-6">
        {/* Profile icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
          <span className="text-lg font-semibold">H</span>
        </div>

        {/* Navigation items */}
        <nav className="flex flex-col items-center space-y-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.name} to={item.href}>
                <Button
                  className={cn(
                    "relative h-10 w-10 rounded-md flex items-center justify-center",
                    item.bgColor,
                    isActive && "bg-green-900",
                  )}
                  aria-label={item.name}
                >
                  <item.icon
                    className={cn("h-5 w-5", item.name === "Home" || isActive ? "text-white" : "text-gray-600")}
                  />
                </Button>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Logout button */}
      <div className="flex flex-col items-end pr-3 w-full ml-[-6px]">
        <Button className="h-10 w-10 rounded-md flex items-center justify-center" aria-label="Logout">
          <LogOut className="h-5 w-5 text-gray-600" />
        </Button>
      </div>
    </div>
  )
}
