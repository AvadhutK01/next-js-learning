"use client";

import { useActionState } from "react";
import { loginAction } from "@/app/login/actions";

interface AuthState {
  error?: string;
}

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(
    loginAction as (prevState: any, formData: FormData) => Promise<AuthState>,
    undefined
  );

  return (
    <main className="flex min-h-screen items-center justify-center p-6 bg-zinc-50 dark:bg-zinc-950">
      <div className="w-full max-w-sm">
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Sign In
          </h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Access your account to start shopping
          </p>
        </div>

        <form action={formAction} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-white"
              placeholder="user@example.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-white"
              placeholder="••••••••"
            />
          </div>

          {state?.error && (
            <p className="text-sm font-medium text-red-600 dark:text-red-400 text-center animate-in fade-in duration-300">
              {state.error}
            </p>
          )}

          <button
            disabled={isPending}
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-xl font-semibold transition-all active:scale-[0.98]"
          >
            {isPending ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
}

