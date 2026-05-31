"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { Icon } from "@/components/icons";
import { Placeholder } from "@/components/Placeholder";
import { StarRating } from "@/components/ui/StarRating";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { useCart } from "@/context/CartContext";

export function ProductCard({ product }: { product: Product }) {
  const cart = useCart();
  const router = useRouter();
  const [wish, setWish] = useState(false);

  return (
    <div
      className="prod-card"
      role="link"
      tabIndex={0}
      onClick={() => router.push(`/product/${product.slug}`)}
      onKeyDown={(e) => {
        if (e.key === "Enter") router.push(`/product/${product.slug}`);
      }}
    >
      <div className="prod-media">
        {product.bestSeller && <span className="prod-tag tag">Best Seller</span>}
        <button
          className={"wishlist" + (wish ? " active" : "")}
          aria-label="Add to wishlist"
          onClick={(e) => {
            e.stopPropagation();
            setWish((w) => !w);
          }}
        >
          <Icon name="heart" size={19} />
        </button>
        <Placeholder tone={product.tone} label={product.name} />
      </div>
      <div className="prod-body">
        <div className="prod-name">{product.name}</div>
        <div className="prod-sub">{product.subtitle}</div>
        <div className="prod-foot">
          <span className="prod-price">{formatPrice(product.price)}</span>
          <StarRating rating={product.rating} reviews={product.reviews} />
        </div>
        <div
          className="prod-add"
          onClick={(e) => {
            e.stopPropagation();
            cart.add(product.slug);
          }}
        >
          <PrimaryButton block size="sm">
            Add to Cart
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
