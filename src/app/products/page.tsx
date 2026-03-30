import Link from "next/link";

export default function ProductsPage() {
  const products = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">Products</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
          Listing of all available products in our store.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {products.map((id) => (
            <Link
              key={id}
              href={`/products/${id}`}
              className="group flex flex-col items-center justify-center p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl transition-all hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <span className="text-3xl font-black text-zinc-900 dark:text-zinc-100 mb-2">
                {id}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-blue-500 transition-colors">
                Detail
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
