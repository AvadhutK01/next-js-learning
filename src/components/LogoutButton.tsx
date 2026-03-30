"use client";

import { useTransition } from "react";
import { logoutAction } from "@/app/login/actions";

export default function LogoutButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(() => logoutAction())}
      disabled={isPending}
      className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-red-600 transition-all disabled:opacity-50 flex items-center gap-2 group"
    >
      {isPending ? (
        <span className="w-4 h-4 border-2 border-zinc-300 border-t-zinc-500 rounded-full animate-spin"></span>
      ) : (
        <>
          <span className="hidden sm:inline">Logout</span>
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </>
      )}
    </button>
  );
}
