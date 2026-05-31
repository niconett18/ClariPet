import type { ReactNode } from "react";
import { Icon } from "@/components/icons";

type BtnProps = {
  children: ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  block?: boolean;
  type?: "button" | "submit";
  icon?: string;
};

export function PrimaryButton({ children, onClick, size = "md", block, type = "button", icon }: BtnProps) {
  const cls = ["btn btn-primary", size === "lg" ? "btn-lg" : size === "sm" ? "btn-sm" : "", block ? "btn-block" : ""]
    .filter(Boolean)
    .join(" ");
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
      {icon && <Icon name={icon} size={18} />}
    </button>
  );
}
