"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Article } from "@/lib/types";
import { Icon } from "@/components/icons";
import { Placeholder } from "@/components/Placeholder";
import { PageHead } from "@/components/PageHead";

export function JournalView({
  articles,
  featured,
}: {
  articles: Article[];
  featured?: Article;
}) {
  const [filter, setFilter] = useState("All");
  const router = useRouter();

  const filters = [
    "All",
    ...Array.from(new Set(articles.map((a) => a.category).filter(Boolean))),
  ];

  const filtered = articles.filter((a) => filter === "All" || a.category === filter);
  const showFeatured = !!featured && (filter === "All" || featured.category === filter);
  const sidebar = filtered.filter(
    (a) => !(filter === "All" && featured && a.slug === featured.slug),
  );

  return (
    <main>
      <PageHead title="Pet Care Journal" subtitle="Tips, guides, and insights for happy, healthy pets." />
      <div className="wrap section-sm" style={{ paddingTop: 0 }}>
        <div className="filter-pills" style={{ marginBottom: 36, justifyContent: "center" }}>
          {filters.map((f) => (
            <button key={f} className={"pill" + (filter === f ? " active" : "")} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="empty-state">
            <p className="muted">No articles in this category yet.</p>
          </div>
        )}

        <div className="journal-grid">
          <div>
            {showFeatured && featured && (
              <article
                className="featured-card"
                onClick={() => router.push(`/journal/${featured.slug}`)}
                style={{ cursor: "pointer" }}
              >
                <div className="featured-media">
                  <span className="tag" style={{ position: "absolute", top: 18, left: 18, zIndex: 2 }}>
                    Featured Article
                  </span>
                  <Placeholder tone={featured.tone} label={featured.title} />
                </div>
                <div className="featured-body">
                  <div className="muted" style={{ fontSize: 13, display: "flex", gap: 10, marginBottom: 6 }}>
                    <span>{featured.category}</span>
                    <span>·</span>
                    <span>{featured.readTime} read</span>
                  </div>
                  <h2 className="h3">{featured.title}</h2>
                  <p className="muted" style={{ margin: "12px 0 18px", lineHeight: 1.7 }}>
                    {featured.excerpt}
                  </p>
                  <Link
                    className="link"
                    href={`/journal/${featured.slug}`}
                    style={{ color: "var(--navy)", fontWeight: 600, display: "inline-flex", gap: 6, alignItems: "center" }}
                  >
                    Read more <Icon name="arrowRight" size={17} />
                  </Link>
                </div>
              </article>
            )}
          </div>

          <div className="article-list">
            {sidebar
              .filter((a) => !(showFeatured && featured && a.slug === featured.slug))
              .map((a) => (
                <article className="article-row" key={a.slug} onClick={() => router.push(`/journal/${a.slug}`)}>
                  <div className="thumb">
                    <Placeholder tone={a.tone} paw={false} label="" />
                  </div>
                  <div>
                    <div className="meta">
                      <span>{a.category}</span>
                      <span>· {a.readTime}</span>
                    </div>
                    <h4>{a.title}</h4>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
