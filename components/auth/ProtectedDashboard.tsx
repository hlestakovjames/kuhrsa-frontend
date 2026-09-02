"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AuthUser,
  canAccessPortal,
  getMe,
  getToken,
  logout,
  PortalType,
} from "@/lib/auth";

type ProtectedDashboardProps = {
  portal: PortalType;
  title: string;
  description: string;
};

type DashboardResponse = {
  portal: PortalType;
  message: string;
  user: {
    id: string;
    email: string;
    member?: AuthUser["member"];
  };
};

const dashboardEndpoints: Record<
  PortalType,
  string
> = {
  member: "/dashboard/member",
  executive: "/dashboard/executive",
  administration: "/dashboard/administration",
};

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://localhost:3001";

export default function ProtectedDashboard({
  portal,
  title,
  description,
}: ProtectedDashboardProps) {
  const router = useRouter();

  const [user, setUser] =
    useState<AuthUser | null>(null);

  const [dashboard, setDashboard] =
    useState<DashboardResponse | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    let mounted = true;

    async function loadDashboard() {
      try {
        const authenticatedUser =
          await getMe();

        if (
          !canAccessPortal(
            authenticatedUser,
            portal,
          )
        ) {
          throw new Error(
            "You do not have access to this portal.",
          );
        }

        const token = getToken();

        if (!token) {
          throw new Error(
            "Your session is no longer available.",
          );
        }

        const response = await fetch(
          `${API_URL}${dashboardEndpoints[portal]}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            cache: "no-store",
          },
        );

        const data =
          (await response.json()) as
            | DashboardResponse
            | { message?: string };

        if (!response.ok) {
          throw new Error(
            "message" in data &&
              data.message
              ? data.message
              : "Unable to load your dashboard.",
          );
        }

        if (mounted) {
          setUser(authenticatedUser);
          setDashboard(
            data as DashboardResponse,
          );
        }
      } catch (dashboardError) {
        if (mounted) {
          setError(
            dashboardError instanceof Error
              ? dashboardError.message
              : "Your session is invalid or the dashboard could not be loaded.",
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    void loadDashboard();

    return () => {
      mounted = false;
    };
  }, [portal]);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F4FAFC] px-5 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-black/5">
            <p className="text-sm font-semibold text-black/50">
              Loading your KUHRSA dashboard...
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (error || !user || !dashboard) {
    return (
      <main className="min-h-screen bg-[#F4FAFC] px-5 py-12">
        <div className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center">
          <div className="w-full rounded-3xl bg-white p-8 text-center shadow-xl ring-1 ring-black/5">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#F700BA]">
              Access Restricted
            </p>

            <h1 className="mt-3 text-3xl font-black text-[#0B2633]">
              Portal access unavailable.
            </h1>

            <p className="mt-4 leading-7 text-black/60">
              {error}
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link
                href="/login"
                className="rounded-full bg-[#168DB8] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#11799D]"
              >
                Return to Login
              </Link>

              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-bold text-[#0B2633] transition hover:bg-black/[0.03]"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F4FAFC] px-5 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-black/5 sm:p-10">
          <div className="flex flex-col gap-5 border-b border-black/10 pb-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#168DB8]">
                KUHRSA
              </p>

              <h1 className="mt-2 text-3xl font-black tracking-tight text-[#0B2633] sm:text-4xl">
                {title}
              </h1>

              <p className="mt-3 max-w-2xl leading-7 text-black/55">
                {dashboard.message ||
                  description}
              </p>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="rounded-full border border-black/10 px-5 py-3 text-sm font-bold text-[#0B2633] transition hover:bg-black/[0.03]"
            >
              Sign Out
            </button>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-[#F4FAFC] p-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#168DB8]">
                Account
              </p>

              <p className="mt-3 break-all text-sm font-semibold text-[#0B2633]">
                {user.email}
              </p>
            </div>

            <div className="rounded-2xl bg-[#F4FAFC] p-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#168DB8]">
                Organization
              </p>

              <p className="mt-3 text-sm font-semibold text-[#0B2633]">
                {user.organization?.name ??
                  "KUHRSA"}
              </p>
            </div>

            <div className="rounded-2xl bg-[#F4FAFC] p-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#168DB8]">
                Access
              </p>

              <p className="mt-3 text-sm font-semibold text-[#0B2633]">
                {user.isSystemOwner
                  ? "System Owner"
                  : user.roles
                      .map(
                        (role) =>
                          role.name,
                      )
                      .join(", ")}
              </p>
            </div>
          </div>

          {user.member && (
            <div className="mt-6 rounded-2xl border border-black/10 p-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#168DB8]">
                Membership
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs text-black/40">
                    Registration Number
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#0B2633]">
                    {user.member
                      .registrationNumber ??
                      "Not assigned"}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-black/40">
                    Membership Number
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#0B2633]">
                    {
                      user.member.memberNumber
                    }
                  </p>
                </div>

                <div>
                  <p className="text-xs text-black/40">
                    Status
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#0B2633]">
                    {user.member.status}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 rounded-2xl border border-[#168DB8]/15 bg-[#168DB8]/5 p-5">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#168DB8]">
              Dashboard Status
            </p>

            <p className="mt-2 text-sm leading-6 text-[#0B2633]/70">
              Connected successfully to the
              KUHRSA {dashboard.portal} dashboard
              service.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}