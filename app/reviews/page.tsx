import type { Metadata } from "next";
import { ReviewsView } from "@/components/reviews/ReviewsView";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Real stories, ratings, and before & after results from ClariPet pet parents.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return <ReviewsView />;
}
