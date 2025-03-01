import React, { useState, useEffect } from "react";
import { AppSidebar } from "./AppSidebar";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const [sidebarWidth, setSidebarWidth] = useState("w-64");

  useEffect(() => {
    // Observe changes in the sidebar width
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          const sidebar = document.querySelector('[class*="fixed left-0 top-0 z-40 h-full"]');
          if (sidebar) {
            const classes = sidebar.className;
            if (classes.includes("w-16")) {
              setSidebarWidth("w-16");
            } else if (classes.includes("w-64")) {
              setSidebarWidth("w-64");
            }
          }
        }
      });
    });

    const sidebar = document.querySelector('[class*="fixed left-0 top-0 z-40 h-full"]');
    if (sidebar) {
      observer.observe(sidebar, { attributes: true });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex">
      <AppSidebar />
      <div className={`flex-1 transition-all duration-300 ${sidebarWidth === "w-16" ? "ml-16" : "ml-64"} p-8`}>
        {children}
      </div>
    </div>
  );
}