"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface InventoryRow {
  id: string;
  label: string;
  stock: number;
  sku: string | null;
  product: { id: string; slug: string; name: string; status: string };
}

export default function AdminInventoryPage() {
  const [items, setItems] = useState<InventoryRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [threshold, setThreshold] = useState(20);

  const fetchInventory = useCallback(async () => {
    setLoading(true);
    const res = await fetch(`/api/admin/inventory?threshold=${threshold}`);
    const json = await res.json();
    if (json.success) setItems(json.data);
    setLoading(false);
  }, [threshold]);

  useEffect(() => {
    fetchInventory();
  }, [fetchInventory]);

  const updateStock = async (sizeId: string, stock: number) => {
    await fetch(`/api/admin/inventory/${sizeId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stock }),
    });
    fetchInventory();
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
        <h1 className="h2">Inventory</h1>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <label style={{ fontSize: 14, color: "var(--text-soft)" }}>Low stock threshold:</label>
          <input
            type="number"
            value={threshold}
            onChange={(e) => setThreshold(Number(e.target.value))}
            min={0}
            style={{
              width: 80,
              padding: "8px 12px",
              borderRadius: "var(--r-md)",
              border: "1.5px solid var(--line)",
              fontSize: 14,
              outline: "none",
              fontFamily: "inherit",
            }}
          />
        </div>
      </div>

      <p className="muted" style={{ marginBottom: 20 }}>
        Showing all sizes with stock at or below {threshold}.
      </p>

      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        {loading ? (
          <p className="muted" style={{ padding: 32 }}>Loading...</p>
        ) : items.length === 0 ? (
          <p className="muted" style={{ padding: 32 }}>All items above threshold. </p>
        ) : (
          <div className="table-scroll"><table className="data-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Size</th>
                <th>SKU</th>
                <th>Stock</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((row) => (
                <tr key={row.id}>
                  <td>
                    <Link href={`/admin/products/${row.product.id}`} style={{ fontWeight: 600, color: "var(--navy)" }}>
                      {row.product.name}
                    </Link>
                  </td>
                  <td>{row.label}</td>
                  <td style={{ fontSize: 13, color: "var(--text-soft)" }}>{row.sku ?? "—"}</td>
                  <td>
                    <span
                      style={{
                        color: row.stock === 0 ? "#b04050" : row.stock < 5 ? "#c47000" : "var(--text)",
                        fontWeight: 600,
                      }}
                    >
                      {row.stock}
                    </span>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <button
                      className="btn btn-sm btn-ghost"
                      onClick={() => {
                        const v = prompt("Set new stock", String(row.stock));
                        if (v != null && !isNaN(Number(v))) {
                          updateStock(row.id, Number(v));
                        }
                      }}
                    >
                      Update Stock
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table></div>
        )}
      </div>
    </div>
  );
}
