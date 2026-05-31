"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/icons";
import { useCart } from "@/context/CartContext";
import { SearchOverlay } from "@/components/SearchOverlay";

const NAV_ITEMS = [
  { label: "Shop", href: "/shop" },
  { label: "Pet Care Journal", href: "/journal" },
  { label: "About Us", href: "/about" },
  { label: "Reviews", href: "/shop" },
  { label: "Affiliate", href: "/about" },
  { label: "Contact", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const { count } = useCart();
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link className="brand" href="/" aria-label="ClariPet home">
          ClariPet<sup>®</sup>
        </Link>
        <nav className="nav-links" aria-label="Main">
          {NAV_ITEMS.map((n, i) => (
            <Link key={i} className={"nav-link" + (isActive(n.href) ? " active" : "")} href={n.href}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" aria-label="Search" onClick={() => setSearch(true)}>
            <Icon name="search" size={21} />
          </button>
          <button className="icon-btn desktop-only" aria-label="Account">
            <Icon name="user" size={21} />
          </button>
          <Link className="icon-btn" aria-label="Cart" href="/cart">
            <Icon name="cart" size={21} />
            {count > 0 && <span className="cart-badge">{count}</span>}
          </Link>
          <button className="icon-btn hamburger" aria-label="Menu" onClick={() => setMenu(true)}>
            <Icon name="menu" size={21} />
          </button>
        </div>
      </div>

      <div className={"mobile-menu" + (menu ? " open" : "")}>
        <div className="scrim" onClick={() => setMenu(false)} />
        <div className="panel">
          <button
            className="icon-btn"
            style={{ alignSelf: "flex-end" }}
            aria-label="Close menu"
            onClick={() => setMenu(false)}
          >
            <Icon name="close" size={21} />
          </button>
          {NAV_ITEMS.map((n, i) => (
            <Link key={i} href={n.href}>
              {n.label}
            </Link>
          ))}
        </div>
      </div>

      <SearchOverlay open={search} onClose={() => setSearch(false)} />
    </header>
  );
}
