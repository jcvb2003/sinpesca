
import { cn } from "@/lib/utils";
import { MemberStatus } from "@/types/member";
import { CheckCircle, XCircle } from "lucide-react";

interface MemberStatusBadgeProps {
  status: MemberStatus;
  showLabel?: boolean;
  className?: string;
}

export function MemberStatusBadge({ 
  status, 
  showLabel = true,
  className 
}: MemberStatusBadgeProps) {
  const getStatusInfo = () => {
    switch (status) {
      case "active":
        return {
          icon: <CheckCircle className="text-green-600" size={18} />,
          label: "Ativo",
          color: "text-green-600",
          bgColor: "bg-green-50"
        };
      case "inactive":
        return {
          icon: <XCircle className="text-gray-500" size={18} />,
          label: "Inativo",
          color: "text-gray-500",
          bgColor: "bg-gray-50"
        };
      case "suspended":
        return {
          icon: <XCircle className="text-red-500" size={18} />,
          label: "Suspenso",
          color: "text-red-500",
          bgColor: "bg-red-50"
        };
      default:
        return {
          icon: <XCircle className="text-gray-500" size={18} />,
          label: "Desconhecido",
          color: "text-gray-500",
          bgColor: "bg-gray-50"
        };
    }
  };

  const { icon, label, color, bgColor } = getStatusInfo();

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className={cn("px-3 py-1.5 rounded-full flex items-center gap-1.5", bgColor)}>
        {icon}
        {showLabel && <span className={cn("text-sm font-medium", color)}>{label}</span>}
      </div>
    </div>
  );
}
