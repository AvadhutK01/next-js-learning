import Link from "next/link";
import axios from "axios";
import { Product } from "@/types/product";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await axios.get<Product>(`https://dummyjson.com/products/${id}`);
  const product = response.data;

  if (!product.id) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products" className="text-blue-600 hover:underline">Back to Products</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-50 dark:bg-zinc-950 p-6 md:p-24">
      <div className="max-w-6xl w-full">
        <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors mb-12 group">
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="aspect-square relative overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl">
            <img 
              src="/product.png" 
              alt={product.title}
              className="object-contain w-full h-full p-8"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">
                {product.category}
              </span>
              <span className="text-zinc-400 dark:text-zinc-600">•</span>
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
                {product.brand}
              </span>
            </div>

            <h1 className="text-5xl font-black text-zinc-900 dark:text-zinc-50 mb-4 leading-tight">
              {product.title}
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-black text-blue-600 dark:text-blue-400">
                ${product.price}
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-green-600 dark:text-green-500">
                  {product.discountPercentage}% OFF
                </span>
                <span className="text-xs text-zinc-400">
                  {product.availabilityStatus}
                </span>
              </div>
            </div>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12 leading-relaxed">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <span className="block text-xs font-bold text-zinc-400 uppercase mb-1">Rating</span>
                <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{product.rating} / 5</span>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <span className="block text-xs font-bold text-zinc-400 uppercase mb-1">Stock</span>
                <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{product.stock} items</span>
              </div>
            </div>

            <button className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
