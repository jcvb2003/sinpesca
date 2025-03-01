
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
          icon: <CheckCircle className="text-primary" size={18} />,
          label: "Ativo",
          color: "text-primary"
        };
      case "inactive":
        return {
          icon: <XCircle className="text-gray-400" size={18} />,
          label: "Inativo",
          color: "text-gray-500"
        };
      case "suspended":
        return {
          icon: <XCircle className="text-red-500" size={18} />,
          label: "Suspenso",
          color: "text-red-500"
        };
      default:
        return {
          icon: <XCircle className="text-gray-400" size={18} />,
          label: "Desconhecido",
          color: "text-gray-500"
        };
    }
  };

  const { icon, label, color } = getStatusInfo();

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      {icon}
      {showLabel && <span className={cn("text-sm font-medium", color)}>{label}</span>}
    </div>
  );
}
