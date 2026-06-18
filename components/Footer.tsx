"use client";

import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import { Icon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="brand">
              ClariPet<sup>®</sup>
            </div>
            <p className="footer-blurb">
              Premium, pet-safe care made with love in Indonesia. Gentle formulas for happy, healthy
              fur babies.
            </p>
            <div className="socials">
              <a className="social" href="#" aria-label="Facebook">
                <Icon name="facebook" size={18} />
              </a>
              <a className="social" href="#" aria-label="Instagram">
                <Icon name="instagram" size={18} />
              </a>
              <a className="social" href="#" aria-label="TikTok">
                <Icon name="tiktok" size={18} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              {CATEGORIES.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link href={`/shop/${c.slug}`}>{c.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/shop">All Products</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/journal">Pet Care Journal</Link></li>
              <li><Link href="/reviews">Reviews</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/shipping">Shipping & Delivery</Link></li>
              <li><Link href="/returns">Returns & Refunds</Link></li>
              <li><Link href="/account/orders">Track Order</Link></li>
            </ul>
            <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
              <input placeholder="Your email" aria-label="Email for newsletter" type="email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bar">
          <span>© 2026 ClariPet. All rights reserved.</span>
          <span className="footer-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className="sep">·</span>
            <Link href="/terms">Terms & Conditions</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
