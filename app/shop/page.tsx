import { Suspense } from "react";
import { ShopView } from "@/components/shop/ShopView";

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="wrap section">Loading…</div>}>
      <ShopView />
    </Suspense>
  );
}
