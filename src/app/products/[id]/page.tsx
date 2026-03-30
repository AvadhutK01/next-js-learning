export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-6">
      <div className="max-w-xl w-full p-12 border-4 border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl bg-white dark:bg-zinc-900 flex flex-col items-center justify-center text-center shadow-2xl">
        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Product {id} details page — content coming soon!
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
          The specifications and details for product ID <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{id}</span> are currently being prepared. 
        </p>
      </div>
    </main>
  );
}
