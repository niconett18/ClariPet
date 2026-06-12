"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { formatPrice } from "@/lib/format";

interface AdminProduct {
  id: string;
  slug: string;
  name: string;
  price: number;
  status: string;
  best_seller: boolean;
  category: { name: string } | null;
  sizes: { id: string; label: string; stock: number }[];
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<AdminProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchProducts = () => {
    setLoading(true);
    const url = search ? `/api/admin/products?search=${encodeURIComponent(search)}` : "/api/admin/products";
    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        if (json.success) setProducts(json.data.products);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleArchive = async (id: string) => {
    if (!confirm("Archive this product?")) return;
    await fetch(`/api/admin/products/${id}`, { method: "DELETE" });
    fetchProducts();
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
        <h1 className="h2">Products</h1>
        <Link href="/admin/products/new" className="btn btn-primary">
          <Icon name="plus" size={16} /> New Product
        </Link>
      </div>

      <div style={{ marginBottom: 20, display: "flex", gap: 12 }}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchProducts()}
          style={{
            flex: 1,
            padding: "12px 18px",
            borderRadius: "var(--r-pill)",
            border: "1.5px solid var(--line)",
            fontSize: 14,
            outline: "none",
            fontFamily: "inherit",
          }}
        />
        <button className="btn btn-ghost" onClick={fetchProducts}>
          Search
        </button>
      </div>

      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        {loading ? (
          <p className="muted" style={{ padding: 32 }}>Loading...</p>
        ) : (
          <div className="table-scroll"><table className="data-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => {
                const totalStock = p.sizes.reduce((s, x) => s + x.stock, 0);
                return (
                  <tr key={p.id}>
                    <td>
                      <div style={{ fontWeight: 600, color: "var(--navy)" }}>{p.name}</div>
                      <div style={{ fontSize: 12, color: "var(--text-soft)" }}>{p.slug}</div>
                    </td>
                    <td>{p.category?.name ?? "—"}</td>
                    <td>{formatPrice(p.price)}</td>
                    <td>
                      <span style={{ color: totalStock < 20 ? "#b04050" : "var(--text)" }}>
                        {totalStock}
                      </span>
                    </td>
                    <td>
                      <span className={`badge badge-${p.status === "active" ? "shipped" : p.status === "draft" ? "pending" : "cancelled"}`}>
                        {p.status}
                      </span>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <Link
                        href={`/admin/products/${p.id}`}
                        style={{ marginRight: 14, color: "var(--navy)", fontWeight: 500, fontSize: 13 }}
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleArchive(p.id)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#b04050",
                          fontSize: 13,
                          fontWeight: 500,
                          cursor: "pointer",
                          fontFamily: "inherit",
                        }}
                      >
                        Archive
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table></div>
        )}
      </div>
    </div>
  );
}
