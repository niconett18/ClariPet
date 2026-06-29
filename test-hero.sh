sed -i 's|<div className="hero-blob" aria-hidden="true" />|<!-- no blob -->|' components/home/Hero.tsx
sed -i 's|<div className="wrap hero-grid">|<div className="wrap" style={{ position: "relative", minHeight: "600px", display: "flex", alignItems: "center" }}>|' components/home/Hero.tsx
sed -i 's|<div className="hero-copy">|<div className="hero-copy" style={{ position: "relative", zIndex: 10, maxWidth: "540px", padding: "60px 0" }}>|' components/home/Hero.tsx
sed -i 's|<div style={{ position: "relative" }}>|<div style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, zIndex: 1, marginLeft: "calc(-50vw + 50%)", marginRight: "calc(-50vw + 50%)" }}>|' components/home/Hero.tsx
sed -i 's|<div className="hero-media">|<div style={{ position: "absolute", inset: 0 }}>|' components/home/Hero.tsx
