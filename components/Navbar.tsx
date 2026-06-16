"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Icon } from "@/components/icons";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { CATEGORIES } from "@/data/categories";
import { SearchOverlay } from "@/components/SearchOverlay";

const NAV_ITEMS = [
  { label: "Shop", href: "/shop" },
  { label: "Pet Care Journal", href: "/journal" },
  { label: "About Us", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { count } = useCart();
  const { user, signOut } = useAuth();
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [account, setAccount] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const accountRef = useRef<HTMLDivElement | null>(null);
  const shopRef = useRef<HTMLDivElement | null>(null);
  const shopCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMenu(false);
    setAccount(false);
    setShopOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (accountRef.current && !accountRef.current.contains(e.target as Node)) {
        setAccount(false);
      }
      if (shopRef.current && !shopRef.current.contains(e.target as Node)) {
        setShopOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenu(false);
        setAccount(false);
        setShopOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Hover open/close with a small close delay so moving the cursor from the
  // trigger to the menu doesn't dismiss it.
  const openShop = () => {
    if (shopCloseTimer.current) clearTimeout(shopCloseTimer.current);
    setShopOpen(true);
  };
  const closeShopSoon = () => {
    if (shopCloseTimer.current) clearTimeout(shopCloseTimer.current);
    shopCloseTimer.current = setTimeout(() => setShopOpen(false), 140);
  };

  const handleSignOut = async () => {
    await signOut();
    setAccount(false);
    router.push("/");
    router.refresh();
  };

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="wrap nav-inner">
        <Link className="brand" href="/" aria-label="ClariPet home">
          ClariPet<sup>®</sup>
        </Link>
        <nav className="nav-links" aria-label="Main">
          {NAV_ITEMS.map((n) =>
            n.href === "/shop" ? (
              <div
                key={n.href}
                className="nav-dropdown"
                ref={shopRef}
                onMouseEnter={openShop}
                onMouseLeave={closeShopSoon}
              >
                <Link
                  className={"nav-link" + (isActive(n.href) ? " active" : "")}
                  href={n.href}
                  aria-haspopup="true"
                  aria-expanded={shopOpen}
                  onClick={() => setShopOpen(false)}
                >
                  {n.label}
                  <Icon name="chevDown" size={15} />
                </Link>
                {shopOpen && (
                  <div className="shop-menu" role="menu">
                    <Link href="/shop" className="shop-menu-link" role="menuitem">
                      All Products
                    </Link>
                    <div className="shop-menu-sep" />
                    {CATEGORIES.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/shop/${c.slug}`}
                        className="shop-menu-link"
                        role="menuitem"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={n.href} className={"nav-link" + (isActive(n.href) ? " active" : "")} href={n.href}>
                {n.label}
              </Link>
            ),
          )}
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" aria-label="Search" onClick={() => setSearch(true)}>
            <Icon name="search" size={21} />
          </button>
          <div className="account-wrap desktop-only" ref={accountRef}>
            <button
              className="icon-btn"
              aria-label="Account"
              onClick={() => setAccount((v) => !v)}
            >
              <Icon name="user" size={21} />
            </button>
            {account && (
              <div className="account-menu">
                {user ? (
                  <>
                    <div className="account-head">
                      <div className="account-name">
                        {user.profile?.full_name || "Account"}
                      </div>
                      <div className="account-email">{user.email}</div>
                    </div>
                    <Link href="/account/orders" className="account-link">
                      <Icon name="package" size={17} /> My Orders
                    </Link>
                    <Link href="/account/addresses" className="account-link">
                      <Icon name="pinned" size={17} /> Addresses
                    </Link>
                    <Link href="/account" className="account-link">
                      <Icon name="settings" size={17} /> Profile
                    </Link>
                    {user.profile?.role === "admin" && (
                      <Link href="/admin" className="account-link admin-link">
                        <Icon name="dashboard" size={17} /> Admin Dashboard
                      </Link>
                    )}
                    <button onClick={handleSignOut} className="account-link signout">
                      <Icon name="log-out" size={17} /> Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="account-link">
                      Sign In
                    </Link>
                    <Link href="/signup" className="account-link">
                      Create Account
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
          <Link className="icon-btn" aria-label="Cart" href="/cart">
            <Icon name="cart" size={21} />
            {count > 0 && <span className="cart-badge">{count}</span>}
          </Link>
          <button
            className="icon-btn hamburger"
            aria-label="Menu"
            aria-expanded={menu}
            aria-controls="mobile-menu"
            onClick={() => setMenu(true)}
          >
            <Icon name="menu" size={21} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={"mobile-menu" + (menu ? " open" : "")} aria-hidden={!menu}>
        <div className="scrim" onClick={() => setMenu(false)} />
        <div className="panel" role="dialog" aria-modal="true" aria-label="Menu">
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
          <div style={{ borderTop: "1px solid var(--line)", margin: "8px 0" }} />
          {user ? (
            <>
              <Link href="/account">My Account</Link>
              <Link href="/account/orders">My Orders</Link>
              {user.profile?.role === "admin" && (
                <Link href="/admin">Admin Dashboard</Link>
              )}
              <button
                onClick={handleSignOut}
                style={{
                  textAlign: "left",
                  padding: "14px 16px",
                  borderRadius: "var(--r-md)",
                  fontWeight: 500,
                  fontSize: 17,
                  color: "var(--navy)",
                  background: "none",
                  border: "none",
                }}
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/login">Sign In</Link>
              <Link href="/signup">Create Account</Link>
            </>
          )}
        </div>
      </div>

      <SearchOverlay open={search} onClose={() => setSearch(false)} />
    </header>
  );
}
