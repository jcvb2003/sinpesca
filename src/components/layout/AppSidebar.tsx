import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Users, UserPlus, FileText, Settings, Menu, X, BarChart3 } from "lucide-react";

interface SidebarSubmenuItem {
  title: string;
  path: string;
}

interface SidebarItem {
  title: string;
  path: string;
  icon: any;
  submenu?: SidebarSubmenuItem[];
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
    title: "Documentos",
    path: "/documents",
    icon: FileText,
  },
  {
    title: "Configurações",
    path: "/settings",
    icon: Settings,
  },
  {
    title: "Relatórios",
    path: "/reports",
    icon: BarChart3,
    submenu: [], //Removed Sócios and Requerimentos
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
        {items.map((item) => (
              <div key={item.path}> {/* Replaced React.Fragment with div */}
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    (location.pathname === item.path || (item.submenu && item.submenu.some(subItem => location.pathname === subItem.path)))
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {!collapsed && <span>{item.title}</span>}
                </Link>

                {!collapsed && item.submenu && (
                  <div className="ml-7 mt-1 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className={cn(
                          "block rounded-md px-3 py-1.5 text-sm transition-colors",
                          location.pathname === subItem.path
                            ? "bg-accent/50 text-accent-foreground"
                            : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
                        )}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
        ))}
      </div>
    </div>
  );
}