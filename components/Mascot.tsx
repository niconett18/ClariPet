import type { Tone } from "@/lib/types";
import { Placeholder } from "@/components/Placeholder";

export function Mascot({ tone = "cream", speech, sub }: { tone?: Tone; speech: string; sub?: string }) {
  return (
    <div className="mascot">
      <div className="mascot-img">
        <Placeholder tone={tone} label="" paw />
      </div>
      <div className="mascot-bubble">
        <div className="speech">“{speech}”</div>
        {sub && <div className="sub">{sub}</div>}
      </div>
    </div>
  );
}
