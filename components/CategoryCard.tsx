import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/lib/types";
import { Icon } from "@/components/icons";
import { Placeholder } from "@/components/Placeholder";

export function CategoryCard({ cat }: { cat: Category }) {
  return (
    <Link
      href={`/shop/${cat.slug}`}
      className={"cat-card ph " + cat.tone}
      style={{ background: `var(--${cat.tone}-50)` }}
      aria-label={`Shop ${cat.name} category`}
    >
      <div className="cat-img">
              {cat.image ? (
                <Image src={cat.image} alt={cat.name} fill style={{ objectFit: "contain" }} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              ) : (
                <Placeholder tone={cat.tone} label={cat.name} />
              )}
            </div>
      <div className="cat-name">{cat.name}</div>
      <div className="cat-arrow">
        <Icon name="arrowRight" size={18} />
      </div>
    </Link>
  );
}
