
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Users, UserPlus, Settings, Menu, X } from "lucide-react";

interface SidebarItem {
  title: string;
  path: string;
  icon: any;
}

const items: SidebarItem[] = [
  {
    title: "Sócios",
    path: "/",
    icon: Users,
  },
  {
    title: "Cadastro",
    path: "/register",
    icon: UserPlus,
  },
  {
    title: "Configurações",
    path: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-40 h-full transition-all duration-300 ease-in-out bg-white border-r border-gray-200",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
        <h1 
          className={cn(
            "text-lg font-bold text-primary transition-opacity duration-300", 
            collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
          )}
        >
          Associação
        </h1>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar}
          className="text-gray-500 hover:text-primary hover:bg-gray-100"
        >
          {collapsed ? <Menu size={20} /> : <X size={20} />}
        </Button>
      </div>
      
      <div className="flex flex-col gap-1 p-2">
        {items.map((item) => {
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-md transition-all duration-200",
                isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-gray-600 hover:text-primary hover:bg-gray-100",
                collapsed && "justify-center"
              )}
            >
              <item.icon size={20} className={cn(
                isActive ? "text-primary" : "text-gray-500"
              )} />
              <span className={cn(
                "transition-all duration-300",
                collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
              )}>
                {item.title}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  );
}
