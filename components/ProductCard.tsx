"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { Icon } from "@/components/icons";
import { Placeholder } from "@/components/Placeholder";
import { StarRating } from "@/components/ui/StarRating";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { useCart } from "@/context/CartContext";
import { useFlyToCart } from "@/context/FlyToCartContext";

export function ProductCard({ product }: { product: Product }) {
  const cart = useCart();
  const btnRef = useRef<HTMLDivElement>(null);
  const { flyToCart } = useFlyToCart();
  const [wish, setWish] = useState(false);

  return (
    <div className="prod-card">
      <Link
        className="prod-card-link"
        href={`/product/${product.slug}`}
        aria-label={product.name}
      />
      <div className="prod-media">
        {product.bestSeller && <span className="prod-tag tag">Best Seller</span>}
        <button
          className={"wishlist" + (wish ? " active" : "")}
          aria-label="Add to wishlist"
          aria-pressed={wish}
          onClick={() => setWish((w) => !w)}
        >
          <Icon name="heart" size={19} />
        </button>
        {product.images?.[0] ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.images[0].url}
            alt={product.images[0].alt ?? product.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        ) : (
          <Placeholder tone={product.tone} label={product.name} />
        )}
      </div>
      <div className="prod-body">
        <div className="prod-name">{product.name}</div>
        <div className="prod-sub">{product.subtitle}</div>
        <div className="prod-foot">
          <span className="prod-price">{formatPrice(product.price)}</span>
          <StarRating rating={product.rating} reviews={product.reviews} />
        </div>
        <div
          ref={btnRef}
          className="prod-add"
          onClick={() => {
            if (btnRef.current) flyToCart(btnRef.current);
            cart.add(product.slug, undefined, 1, product);
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
