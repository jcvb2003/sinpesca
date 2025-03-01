
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AppSidebar } from "./AppSidebar";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AppSidebar />
      <main className="transition-all duration-300 ml-16 md:ml-64 p-4 sm:p-6 md:p-8 animate-fadeIn">
        {children}
      </main>
    </div>
  );
}
