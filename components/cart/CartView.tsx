"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/lib/format";
import { Icon } from "@/components/icons";
import { Placeholder } from "@/components/Placeholder";
import { PageHead } from "@/components/PageHead";
import { QuantityStepper } from "@/components/ui/QuantityStepper";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { useCart, FREE_SHIPPING_THRESHOLD } from "@/context/CartContext";

export function CartView() {
  const cart = useCart();
  const router = useRouter();

  if (cart.detailed.length === 0) {
    return (
      <main>
        <PageHead title="Your Cart" />
        <div className="wrap empty-state">
          <div className="ec">
            <Icon name="cart" size={36} />
          </div>
          <h3 className="h3" style={{ marginBottom: 10 }}>
            Your cart is empty
          </h3>
          <p className="muted" style={{ marginBottom: 24 }}>
            Looks like you haven’t added anything yet.
          </p>
          <PrimaryButton icon="arrowRight" onClick={() => router.push("/shop")}>
            Shop Now
          </PrimaryButton>
        </div>
      </main>
    );
  }

  const remaining = FREE_SHIPPING_THRESHOLD - cart.subtotal;
  const progress = Math.min(100, Math.round((cart.subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  return (
    <main>
      <PageHead title="Your Cart" />
      <div className="wrap cart-layout">
        <div className="cart-items">
          {cart.detailed.map((item) => (
            <div className="cart-item" key={item.slug + item.size}>
              <Link
                className="ci-media"
                href={`/product/${item.slug}`}
                aria-label={item.product.name}
              >
                <Placeholder tone={item.product.tone} paw={false} label="" />
              </Link>
              <div>
                <div className="ci-name">{item.product.name}</div>
                <div className="ci-size">Size: {item.size}</div>
                <div className="ci-actions" style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <QuantityStepper value={item.qty} onChange={(q) => cart.updateQty(item.slug, item.size, q)} />
                  <button
                    className="ci-remove"
                    aria-label="Remove item"
                    onClick={() => cart.remove(item.slug, item.size)}
                  >
                    <Icon name="trash" size={18} />{" "}
                    <span style={{ fontSize: 13, verticalAlign: "middle" }}>Remove</span>
                  </button>
                </div>
              </div>
              <div className="ci-price">{formatPrice(item.product.price * item.qty)}</div>
            </div>
          ))}
        </div>

        <aside className="summary">
          <h3 className="h3">Order Summary</h3>
          <div className="freeship-strip">
            {remaining > 0 ? (
              <>
                <span>
                  Add <b>{formatPrice(remaining)}</b> more for <b>FREE shipping</b>
                </span>
                <div className="freeship-bar" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
                  <div style={{ width: `${progress}%` }} />
                </div>
              </>
            ) : (
              <span>🎉 You’ve unlocked <b>FREE shipping</b>!</span>
            )}
          </div>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>{formatPrice(cart.subtotal)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>{remaining > 0 ? "Calculated at checkout" : "Free"}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>{formatPrice(cart.subtotal)}</span>
          </div>
          <div style={{ marginTop: 22 }}>
            <PrimaryButton block size="lg" onClick={() => router.push("/checkout")}>
              Proceed to Checkout
            </PrimaryButton>
          </div>
          <div style={{ marginTop: 12 }}>
            <SecondaryButton block onClick={() => router.push("/shop")}>
              Continue Shopping
            </SecondaryButton>
          </div>
        </aside>
      </div>
    </main>
  );
}
