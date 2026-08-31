"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type AccessMode = "login" | "activate";

export default function LoginPage() {
  const [mode, setMode] = useState<AccessMode>("login");

  return (
    <main className="min-h-screen bg-[#F4FAFC] px-5 py-12 sm:py-16">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-black/5 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Brand Panel */}
          <section className="relative hidden overflow-hidden bg-[#2BB9EC] p-10 text-white lg:flex lg:flex-col lg:justify-between">
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="relative h-14 w-14 overflow-hidden rounded-full bg-white shadow-sm">
                  <Image
                    src="/images/kuhrsa_logo.jpeg"
                    alt="KUHRSA official logo"
                    fill
                    sizes="56px"
                    className="object-contain p-1"
                  />
                </div>

                <div>
                  <div className="text-2xl font-black tracking-tight">
                    KUHRSA
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0B2633]">
                    Student Association
                  </div>
                </div>
              </Link>

              <div className="mt-16 max-w-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-white/70">
                  Member Portal
                </p>

                <h2 className="mt-4 text-4xl font-black leading-tight">
                  Your KUHRSA access point.
                </h2>

                <p className="mt-5 leading-7 text-white/80">
                  Access your membership account, activate your membership
                  and stay connected with the KUHRSA community.
                </p>
              </div>
            </div>

            <p className="text-sm text-white/60">
              Connecting students, leaders and opportunities.
            </p>
          </section>

          {/* Access Panel */}
          <section className="p-6 sm:p-10 lg:p-12">
            {/* Mobile Brand */}
            <div className="mb-8 flex items-center lg:hidden">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-black/10">
                  <Image
                    src="/images/kuhrsa_logo.jpeg"
                    alt="KUHRSA official logo"
                    fill
                    sizes="48px"
                    className="object-contain p-1"
                  />
                </div>

                <div>
                  <div className="text-xl font-black tracking-tight text-[#0B2633]">
                    KUHRSA
                  </div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#168DB8]">
                    Student Association
                  </div>
                </div>
              </Link>
            </div>

            <div className="mx-auto max-w-md">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Member Access
              </p>

              <h1 className="mt-3 text-4xl font-black tracking-tight text-[#0B2633]">
                {mode === "login" ? "Welcome back." : "Activate your membership."}
              </h1>

              <p className="mt-4 leading-7 text-black/60">
                {mode === "login"
                  ? "Sign in to access your KUHRSA member account."
                  : "Use your membership details to activate your KUHRSA account."}
              </p>

              {/* Mode Switcher */}
              <div className="mt-8 grid grid-cols-2 rounded-full bg-[#F4FAFC] p-1">
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className={`rounded-full px-4 py-3 text-sm font-bold transition ${
                    mode === "login"
                      ? "bg-[#168DB8] text-white shadow-sm"
                      : "text-black/55 hover:text-[#168DB8]"
                  }`}
                >
                  Login
                </button>

                <button
                  type="button"
                  onClick={() => setMode("activate")}
                  className={`rounded-full px-4 py-3 text-sm font-bold transition ${
                    mode === "activate"
                      ? "bg-[#F700BA] text-white shadow-sm"
                      : "text-black/55 hover:text-[#CE26A4]"
                  }`}
                >
                  Activate
                </button>
              </div>

              {/* Login Form */}
              {mode === "login" && (
                <form
                  className="mt-8 grid gap-5"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <div>
                    <label
                      htmlFor="login-identifier"
                      className="text-sm font-bold text-[#0B2633]"
                    >
                      Email or Membership Number
                    </label>

                    <input
                      id="login-identifier"
                      name="identifier"
                      type="text"
                      autoComplete="username"
                      placeholder="Enter your email or membership number"
                      className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-black/35 focus:border-[#168DB8] focus:ring-2 focus:ring-[#168DB8]/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="login-password"
                      className="text-sm font-bold text-[#0B2633]"
                    >
                      Password
                    </label>

                    <input
                      id="login-password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-black/35 focus:border-[#168DB8] focus:ring-2 focus:ring-[#168DB8]/15"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-1 rounded-full bg-[#168DB8] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#11799D]"
                  >
                    Sign In
                  </button>
                </form>
              )}

              {/* Activation Form */}
              {mode === "activate" && (
                <form
                  className="mt-8 grid gap-5"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <div>
                    <label
                      htmlFor="activation-membership"
                      className="text-sm font-bold text-[#0B2633]"
                    >
                      Membership Number
                    </label>

                    <input
                      id="activation-membership"
                      name="membershipNumber"
                      type="text"
                      placeholder="Enter your membership number"
                      className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-black/35 focus:border-[#F700BA] focus:ring-2 focus:ring-[#F700BA]/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="activation-email"
                      className="text-sm font-bold text-[#0B2633]"
                    >
                      Email Address
                    </label>

                    <input
                      id="activation-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Enter your registered email"
                      className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-black/35 focus:border-[#F700BA] focus:ring-2 focus:ring-[#F700BA]/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="activation-password"
                      className="text-sm font-bold text-[#0B2633]"
                    >
                      Create Password
                    </label>

                    <input
                      id="activation-password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      placeholder="Create your account password"
                      className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-black/35 focus:border-[#F700BA] focus:ring-2 focus:ring-[#F700BA]/15"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-1 rounded-full bg-[#F700BA] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#CE26A4]"
                  >
                    Activate Membership
                  </button>
                </form>
              )}

              {/* Register */}
              <div className="mt-8 border-t border-black/10 pt-6 text-center">
                <p className="text-sm text-black/55">
                  Not registered yet?
                </p>

                <Link
                  href="/register"
                  className="mt-2 inline-block font-bold text-[#168DB8] transition hover:text-[#11799D]"
                >
                  Register for KUHRSA →
                </Link>
              </div>

              {/* Back */}
              <div className="mt-5 text-center">
                <Link
                  href="/"
                  className="text-sm font-semibold text-black/40 transition hover:text-[#168DB8]"
                >
                  ← Back to KUHRSA
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}