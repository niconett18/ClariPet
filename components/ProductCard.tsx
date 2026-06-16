"use client";

import { memo, useRef, useCallback } from "react";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { Icon } from "@/components/icons";
import { Placeholder } from "@/components/Placeholder";
import { StarRating } from "@/components/ui/StarRating";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { useCart } from "@/context/CartContext";
import { useFlyToCart } from "@/context/FlyToCartContext";
import { useWishlist } from "@/context/WishlistContext";

// memo prevents re-renders of every card in the grid when unrelated parent
// state changes (e.g. filter toggles, cart count update in Navbar).
export const ProductCard = memo(function ProductCard({ product }: { product: Product }) {
  const cart = useCart();
  const btnRef = useRef<HTMLDivElement>(null);
  const { flyToCart } = useFlyToCart();
  const { slugs, toggle } = useWishlist();
  const isWished = slugs.includes(product.slug);

  // Stable reference so memo comparison is not defeated by inline arrow functions
  const handleAddToCart = useCallback(() => {
    if (btnRef.current) flyToCart(btnRef.current);
    cart.add(product.slug, undefined, 1, product);
  }, [cart, flyToCart, product]);

  const toggleWish = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault(); // Prevent link click if necessary
      toggle(product.slug);
    },
    [toggle, product.slug]
  );

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
          className={"wishlist" + (isWished ? " active" : "")}
          aria-label={isWished ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={isWished}
          onClick={toggleWish}
        >
          <Icon name="heart" size={19} />
        </button>
        {product.images?.[0] ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.images[0].url}
            alt={product.images[0].alt ?? product.name}
            loading="lazy"
            decoding="async"
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
        <div ref={btnRef} className="prod-add" onClick={handleAddToCart}>
          <PrimaryButton block size="sm">
            Add to Cart
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
});
