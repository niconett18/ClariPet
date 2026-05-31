import { notFound } from "next/navigation";
import { PRODUCTS, getProduct } from "@/data/products";
import { ProductView } from "@/components/product/ProductView";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  return <ProductView product={product} />;
}
