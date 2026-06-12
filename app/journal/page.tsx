import { JournalView } from "@/components/journal/JournalView";
import { getAllArticles, getFeaturedArticle } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function JournalPage() {
  const [articles, featured] = await Promise.all([
    getAllArticles(),
    getFeaturedArticle(),
  ]);

  return <JournalView articles={articles} featured={featured} />;
}
