import Link from "next/link";
import type { Category } from "@/lib/types";
import { Icon } from "@/components/icons";
import { Placeholder } from "@/components/Placeholder";

export function CategoryCard({ cat }: { cat: Category }) {
  return (
    <Link
      href={`/shop?category=${cat.slug}`}
      className={"cat-card ph " + cat.tone}
      style={{ background: `var(--${cat.tone}-50)` }}
    >
      <div className="cat-img">
        <Placeholder tone={cat.tone} label={cat.name} />
      </div>
      <div className="cat-name">{cat.name}</div>
      <div className="cat-arrow">
        <Icon name="arrowRight" size={18} />
      </div>
    </Link>
  );
}
