import { notFound } from "next/navigation";
import { ARTICLES, getArticle } from "@/data/articles";
import { ArticleView } from "@/components/journal/ArticleView";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();
  return <ArticleView article={article} />;
}
