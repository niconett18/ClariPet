sed -i 's|<div style={{ width: "100%", height: "100%", background: "var(--sky-50)", display: "flex", alignItems: "center", justifyContent: "center" }}>|<!-- Removed placeholder div -->|' components/home/Hero.tsx
sed -i 's|<Image src="/images/brand/logo.png" alt="ClariPet" width={200} height={64} className="object-contain" />|<!-- Removed placeholder image -->|' components/home/Hero.tsx
sed -i 's|</div>|</div>|' components/home/Hero.tsx
