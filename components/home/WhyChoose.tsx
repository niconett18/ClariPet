import { Icon } from "@/components/icons";

const WHY = [
  { ic: "shield", t: "Pet Safe", d: "Vet-conscious formulas, gentle enough for daily use." },
  { ic: "pin", t: "Made in Indonesia", d: "Locally crafted with pride and care." },
  { ic: "leaf", t: "Premium Ingredients", d: "Thoughtfully chosen botanicals that work." },
  { ic: "batch", t: "Small Batches", d: "Crafted in small batches for freshness." },
  { ic: "users", t: "Trusted by Thousands", d: "Loved by pet parents across the country." },
];

export function WhyChoose() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="why">
          <div className="center">
            <div className="eyebrow" style={{ marginBottom: 10 }}>
              Our difference
            </div>
            <h2 className="h2">Why Pet Parents Choose ClariPet</h2>
          </div>
          <div className="why-grid">
            {WHY.map((w, i) => (
              <div className="why-item" key={i}>
                <div className="why-ic">
                  <Icon name={w.ic} size={28} />
                </div>
                <div className="t">{w.t}</div>
                <div className="d">{w.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
