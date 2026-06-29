"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";
import { PageHead } from "@/components/PageHead";

const WHATSAPP = "6281234567890";
const WHATSAPP_DISPLAY = "+62 812-3456-7890";
const EMAIL = "hello@claripet.com";

const INQUIRIES = [
  { icon: "bag", t: "Product Questions", d: "Need help choosing the right ClariPet product?" },
  { icon: "package", t: "Order Support", d: "Questions about your order, shipping, or delivery?" },
  { icon: "users", t: "Business & Partnerships", d: "Retailers, distributors, media, or collaborations." },
  { icon: "heart", t: "General Inquiries", d: "Anything else? We're happy to help." },
];

const SUBJECTS = [
  "Product Questions",
  "Order Support",
  "Business & Partnerships",
  "General Inquiries",
];

export function ContactView() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      <PageHead
        title="Let's Talk."
        subtitle="Whether you have questions about our products, your order, or simply need help finding the right solution for your pet — we're here to help."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center" style={{ marginBottom: 38 }}>
            <h2 className="h2" style={{ marginBottom: 10 }}>
              How Can We Help You?
            </h2>
            <p className="muted">Choose the topic that best fits your inquiry so we can assist you faster.</p>
          </div>
          <div className="inquiry-grid">
            {INQUIRIES.map((q, i) => (
              <div className="inquiry-card" key={i}>
                <span className="inquiry-ic">
                  <Icon name={q.icon} size={24} />
                </span>
                <div className="t">{q.t}</div>
                <div className="d">{q.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
            <div className="contact-info">
              <div style={{ position: "relative", width: "100%", aspectRatio: "3/2", borderRadius: 24, overflow: "hidden", marginBottom: 32 }}>
                <img src="/images/contact-info.png" alt="Contact Us" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            <div className="contact-block">
              <h3 className="h3">Customer Support</h3>
              <a className="contact-line" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">
                <span className="contact-line-ic"><Icon name="smile" size={18} /></span>
                <span>
                  <strong>WhatsApp</strong>
                  <em>{WHATSAPP_DISPLAY}</em>
                </span>
              </a>
              <a className="contact-line" href={`mailto:${EMAIL}`}>
                <span className="contact-line-ic"><Icon name="package" size={18} /></span>
                <span>
                  <strong>Email</strong>
                  <em>{EMAIL}</em>
                </span>
              </a>
              <div className="contact-line">
                <span className="contact-line-ic"><Icon name="clock" size={18} /></span>
                <span>
                  <strong>Operating Hours</strong>
                  <em>Mon–Fri, 09:00–18:00 WIB</em>
                </span>
              </div>
            </div>

            <div className="contact-block">
              <h3 className="h3">Connect With Us</h3>
              <a className="contact-line" href="#"><span className="contact-line-ic"><Icon name="instagram" size={18} /></span><span><strong>Instagram</strong><em>@claripet.id</em></span></a>
              <a className="contact-line" href="#"><span className="contact-line-ic"><Icon name="tiktok" size={18} /></span><span><strong>TikTok</strong><em>@claripet.id</em></span></a>
              <a className="contact-line" href="#"><span className="contact-line-ic"><Icon name="facebook" size={18} /></span><span><strong>Facebook</strong><em>ClariPet Indonesia</em></span></a>
            </div>

            <div className="contact-block">
              <h3 className="h3">Our Location</h3>
              <div className="contact-line">
                <span className="contact-line-ic"><Icon name="pin" size={18} /></span>
                <span>
                  <strong>Jakarta, Indonesia</strong>
                  <em>Serving pet parents across Indonesia with love.</em>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="contact-form-wrap">
            <div>
              <h2 className="h2" style={{ marginBottom: 10 }}>Message Us</h2>
              <p className="muted">
                Fill out the form and our team will get back to you as soon as possible.
              </p>
            </div>
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="cf-row">
                <label className="cf-field">
                  <span>Name <b>*</b></span>
                  <input required placeholder="Your full name" />
                </label>
                <label className="cf-field">
                  <span>Email <b>*</b></span>
                  <input required type="email" placeholder="your@email.com" />
                </label>
              </div>
              <label className="cf-field">
                <span>Subject <b>*</b></span>
                <select required defaultValue="">
                  <option value="" disabled>Select a subject</option>
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </label>
              <label className="cf-field">
                <span>Message <b>*</b></span>
                <textarea required rows={5} placeholder="How can we help?" />
              </label>
              <button type="submit" className="btn btn-primary btn-lg">
                <Icon name="arrowRight" size={18} /> Send Message
              </button>
              {sent && (
                <p className="cf-success">
                  Thanks for reaching out! This is a demo form — connect it to your inbox or WhatsApp to receive messages.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
