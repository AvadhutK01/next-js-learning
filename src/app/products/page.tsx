import Link from "next/link";
import axios from "axios";
import { ProductsResponse } from "@/types/product";

export const revalidate = 60;

export default async function ProductsPage() {
  const response = await axios.get<ProductsResponse>("https://dummyjson.com/products");
  const products = response.data.products;

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">Products</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
          Listing of all available products in our store.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: any) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden transition-all hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-2xl"
            >
              <div className="aspect-square relative overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <img 
                  src="/product.png" 
                  alt={product.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 p-4"
                />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1 truncate">
                  {product.title}
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black text-blue-600 dark:text-blue-400">
                    ${product.price}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                    View Details
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
