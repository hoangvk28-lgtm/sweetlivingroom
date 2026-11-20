/**
 * Public-facing product data layer, backed entirely by data/products.ts.
 * Async signatures are kept so pages call it the same way everywhere.
 */
import { products as staticProducts, type Product } from "@/data/products";
import type { Category } from "@/data/categories";

export async function getPublicProducts(): Promise<Product[]> {
  return staticProducts;
}

export async function getPublicProductBySlug(slug: string): Promise<Product | undefined> {
  return staticProducts.find((p) => p.slug === slug);
}

export async function getPublicProductSlugs(): Promise<string[]> {
  return staticProducts.map((p) => p.slug);
}

/**
 * Products for a category hub: direct category match first, then a
 * subcategory-collected fallback for thematic categories.
 */
export async function getPublicProductsForCategoryHub(category: Category): Promise<Product[]> {
  const all = await getPublicProducts();

  const direct = all.filter((p) => p.categorySlug === category.slug);
  if (direct.length > 0) return direct;

  const seen = new Set<string>();
  const result: Product[] = [];
  for (const sub of category.subcategories) {
    for (const p of all.filter((p) => p.subcategorySlug === sub)) {
      if (!seen.has(p.id)) {
        seen.add(p.id);
        result.push(p);
      }
    }
  }
  return result.sort((a, b) => b.scores.overall - a.scores.overall);
}
