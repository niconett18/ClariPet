import type { ReactNode } from "react";
import { Icon } from "@/components/icons";

type BtnProps = {
  children: ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  block?: boolean;
  icon?: string;
};

export function SecondaryButton({ children, onClick, size = "md", block, icon }: BtnProps) {
  const cls = ["btn btn-secondary", size === "lg" ? "btn-lg" : size === "sm" ? "btn-sm" : "", block ? "btn-block" : ""]
    .filter(Boolean)
    .join(" ");
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
      {icon && <Icon name={icon} size={18} />}
    </button>
  );
}
