"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/lib/format";
import { Icon } from "@/components/icons";
import { Placeholder } from "@/components/Placeholder";
import { PageHead } from "@/components/PageHead";
import { QuantityStepper } from "@/components/ui/QuantityStepper";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { useCart, FREE_SHIPPING_THRESHOLD, SHIPPING_FEE } from "@/context/CartContext";

export function CartView() {
  const cart = useCart();
  const router = useRouter();
  const [modal, setModal] = useState(false);

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

  const shipping = cart.subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = cart.subtotal + shipping;

  return (
    <main>
      <PageHead title="Your Cart" />
      <div className="wrap cart-layout">
        <div className="cart-items">
          {cart.detailed.map((item) => (
            <div className="cart-item" key={item.slug + item.size}>
              <div
                className="ci-media"
                onClick={() => router.push(`/product/${item.slug}`)}
                style={{ cursor: "pointer" }}
              >
                <Placeholder tone={item.product.tone} paw={false} label="" />
              </div>
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
          <div className="summary-row">
            <span>Subtotal</span>
            <span>{formatPrice(cart.subtotal)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
          </div>
          {shipping > 0 && (
            <div className="muted" style={{ fontSize: 13, marginBottom: 14 }}>
              Add {formatPrice(FREE_SHIPPING_THRESHOLD - cart.subtotal)} more for free shipping.
            </div>
          )}
          <div className="summary-row total">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div style={{ marginTop: 22 }}>
            <PrimaryButton block size="lg" onClick={() => setModal(true)}>
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

      {modal && (
        <div className="modal-scrim" onClick={() => setModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="check">
              <Icon name="check" size={36} strokeWidth={3} />
            </div>
            <h3 className="h3" style={{ marginBottom: 10 }}>
              Order placed!
            </h3>
            <p className="muted" style={{ marginBottom: 24 }}>
              Thank you — this is a demo checkout. Your fur baby’s goodies are on the way. 🐾
            </p>
            <PrimaryButton
              block
              onClick={() => {
                cart.clear();
                setModal(false);
                router.push("/");
              }}
            >
              Back to Home
            </PrimaryButton>
          </div>
        </div>
      )}
    </main>
  );
}
