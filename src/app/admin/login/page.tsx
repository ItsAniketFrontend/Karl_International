"use client";

import { useActionState } from "react";
import { GraduationCap, CircleNotch } from "@phosphor-icons/react";
import { loginAction, type LoginState } from "../actions/auth";

const inputBase =
  "w-full rounded-xl border border-pine-700/20 bg-bone px-4 py-3 text-pine-900 placeholder:text-pine-700/45 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200";

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState<LoginState, FormData>(
    loginAction,
    null,
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-pine-900 px-4 py-12">
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-bone p-8 shadow-2xl">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg">
            <GraduationCap size={30} weight="fill" />
          </div>
          <h1 className="mt-4 text-xl font-bold text-pine-900">Karl Konsult Admin</h1>
          <p className="mt-1 text-sm text-pine-700/70">Sign in to manage site content</p>
        </div>

        <form action={formAction} className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="username" className="text-sm font-semibold text-pine-800">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className={inputBase}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-sm font-semibold text-pine-800">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className={inputBase}
            />
          </div>

          {state?.error && (
            <p className="text-sm font-medium text-coral-500">{state.error}</p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 font-semibold text-white transition-all hover:bg-emerald-700 active:scale-[0.98] disabled:opacity-70"
          >
            {pending ? (
              <>
                <CircleNotch size={20} className="animate-spin" />
                Signing in
              </>
            ) : (
              "Sign in"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
