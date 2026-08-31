"use client";

import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
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
                  Membership
                </p>

                <h2 className="mt-4 text-4xl font-black leading-tight">
                  Become part of KUHRSA.
                </h2>

                <p className="mt-5 leading-7 text-white/80">
                  Register as a KUHRSA member and become part of a connected
                  student community built around engagement, leadership and
                  opportunity.
                </p>
              </div>
            </div>

            <p className="text-sm text-white/60">
              Connecting students, leaders and opportunities.
            </p>
          </section>

          {/* Registration Panel */}
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

                  <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#168DB8]">
                    Student Association
                  </div>
                </div>
              </Link>
            </div>

            <div className="mx-auto max-w-md">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
                Membership Registration
              </p>

              <h1 className="mt-3 text-4xl font-black tracking-tight text-[#0B2633]">
                Join KUHRSA.
              </h1>

              <p className="mt-4 leading-7 text-black/60">
                Complete your membership registration to become part of the
                KUHRSA community.
              </p>

              <form
                className="mt-8 grid gap-5"
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="text-sm font-bold text-[#0B2633]"
                    >
                      First Name
                    </label>

                    <input
                      id="first-name"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      placeholder="First name"
                      className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-black/35 focus:border-[#168DB8] focus:ring-2 focus:ring-[#168DB8]/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="last-name"
                      className="text-sm font-bold text-[#0B2633]"
                    >
                      Last Name
                    </label>

                    <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      placeholder="Last name"
                      className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-black/35 focus:border-[#168DB8] focus:ring-2 focus:ring-[#168DB8]/15"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="registration-email"
                    className="text-sm font-bold text-[#0B2633]"
                  >
                    Email Address
                  </label>

                  <input
                    id="registration-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email address"
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-black/35 focus:border-[#168DB8] focus:ring-2 focus:ring-[#168DB8]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="registration-phone"
                    className="text-sm font-bold text-[#0B2633]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="registration-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Enter your phone number"
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-black/35 focus:border-[#168DB8] focus:ring-2 focus:ring-[#168DB8]/15"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="registration-admission"
                      className="text-sm font-bold text-[#0B2633]"
                    >
                      Admission Number
                    </label>

                    <input
                      id="registration-admission"
                      name="admissionNumber"
                      type="text"
                      placeholder="Admission number"
                      className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-black/35 focus:border-[#168DB8] focus:ring-2 focus:ring-[#168DB8]/15"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="registration-year"
                      className="text-sm font-bold text-[#0B2633]"
                    >
                      Year of Study
                    </label>

                    <select
                      id="registration-year"
                      name="yearOfStudy"
                      defaultValue=""
                      className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm text-black/70 outline-none transition focus:border-[#168DB8] focus:ring-2 focus:ring-[#168DB8]/15"
                    >
                      <option value="" disabled>
                        Select year
                      </option>
                      <option value="1">Year 1</option>
                      <option value="2">Year 2</option>
                      <option value="3">Year 3</option>
                      <option value="4">Year 4</option>
                      <option value="5">Year 5</option>
                      <option value="6">Year 6</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="registration-program"
                    className="text-sm font-bold text-[#0B2633]"
                  >
                    Programme
                  </label>

                  <input
                    id="registration-program"
                    name="program"
                    type="text"
                    placeholder="Your academic programme"
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-black/35 focus:border-[#168DB8] focus:ring-2 focus:ring-[#168DB8]/15"
                  />
                </div>

                <div className="rounded-xl bg-[#F4FAFC] p-4 text-sm leading-6 text-black/55">
                  Your registration will be reviewed according to the KUHRSA
                  membership process. Account activation and member access
                  will be handled through the member access page.
                </div>

                <button
                  type="submit"
                  className="rounded-full bg-[#168DB8] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#11799D]"
                >
                  Submit Registration
                </button>
              </form>

              <div className="mt-8 border-t border-black/10 pt-6 text-center">
                <p className="text-sm text-black/55">
                  Already registered?
                </p>

                <Link
                  href="/login"
                  className="mt-2 inline-block font-bold text-[#168DB8] transition hover:text-[#11799D]"
                >
                  Go to Member Login →
                </Link>
              </div>

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
