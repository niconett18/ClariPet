import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATEGORIES } from "@/data/categories";
import { getCategoryBySlug, getProductsByCategory, getAllCategories } from "@/lib/data";
import { CollectionView } from "@/components/shop/CollectionView";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = await getCategoryBySlug(params.category);
  if (!category) return {};
  return {
    title: `${category.name} Collection`,
    description: category.blurb,
    alternates: { canonical: `/shop/${category.slug}` },
  };
}

export default async function CollectionPage({ params }: { params: { category: string } }) {
  const category = await getCategoryBySlug(params.category);
  if (!category) notFound();

  const [products, categories] = await Promise.all([
    getProductsByCategory(params.category),
    getAllCategories(),
  ]);

  return <CollectionView products={products} category={category} categories={categories} />;
}
