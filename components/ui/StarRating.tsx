import { Icon } from "@/components/icons";

export function StarRating({
  rating,
  reviews,
  showCount = true,
}: {
  rating: number;
  reviews?: number;
  showCount?: boolean;
}) {
  return (
    <span className="stars">
      <Icon name="star" size={14} />
      <span className="num">{rating}</span>
      {showCount && reviews != null && <span>({reviews})</span>}
    </span>
  );
}
