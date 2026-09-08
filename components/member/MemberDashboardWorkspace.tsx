"use client";

import Link from "next/link";

import type { AuthUser } from "@/lib/auth";
import { memberDashboardMock } from "@/lib/mock/member-dashboard";

type MemberDashboardWorkspaceProps = {
  user: AuthUser;
};

function firstName(user: AuthUser) {
  const source =
    user.member?.registrationNumber ||
    user.email.split("@")[0] ||
    "Member";

  const cleaned = source
    .replace(/[._-]+/g, " ")
    .trim();

  return cleaned
    .split(/\s+/)[0]
    .replace(/^\w/, (value) =>
      value.toUpperCase(),
    );
}

function formatCurrency(
  value: number,
  currency: string,
) {
  return `${currency} ${value.toLocaleString("en-KE")}`;
}

function StatIcon({
  type,
}: {
  type:
    | "membership"
    | "finance"
    | "events"
    | "activities"
    | "attendance"
    | "notifications";
}) {
  const classes = "h-5 w-5";

  switch (type) {
    case "membership":
      return (
        <svg
          className={classes}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="8" r="3.2" />
          <path d="M5 20c.8-3.5 3.1-5.5 7-5.5s6.2 2 7 5.5" />
        </svg>
      );

    case "finance":
      return (
        <svg
          className={classes}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 10h18M7 15h4" />
        </svg>
      );

    case "events":
      return (
        <svg
          className={classes}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M7 3v4M17 3v4M3 10h18" />
        </svg>
      );

    case "activities":
      return (
        <svg
          className={classes}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M4 17.5 9 12l3 3 8-9" />
          <path d="M16 6h4v4M4 21h16" />
        </svg>
      );

    case "attendance":
      return (
        <svg
          className={classes}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="12" r="8.5" />
          <path d="m8 12 2.5 2.5L16 9" />
        </svg>
      );

    case "notifications":
      return (
        <svg
          className={classes}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
          <path d="M10 21h4" />
        </svg>
      );
  }
}

function StatCard({
  title,
  value,
  subtitle,
  href,
  icon,
}: {
  title: string;
  value: string;
  subtitle: string;
  href: string;
  icon:
    | "membership"
    | "finance"
    | "events"
    | "activities"
    | "attendance"
    | "notifications";
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_8px_30px_rgba(11,38,51,0.04)] transition hover:-translate-y-0.5 hover:border-[#168DB8]/25 hover:shadow-[0_14px_40px_rgba(11,38,51,0.08)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#168DB8]/10 text-[#168DB8]">
          <StatIcon type={icon} />
        </div>

        <svg
          className="h-4 w-4 text-black/20 transition group-hover:translate-x-0.5 group-hover:text-[#168DB8]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </div>

      <p className="mt-4 text-xs font-black uppercase tracking-[0.13em] text-black/35">
        {title}
      </p>

      <p className="mt-2 text-2xl font-black tracking-tight text-[#0B2633]">
        {value}
      </p>

      <p className="mt-1 text-xs font-medium text-black/45">
        {subtitle}
      </p>
    </Link>
  );
}

export default function MemberDashboardWorkspace({
  user,
}: MemberDashboardWorkspaceProps) {
  const first = firstName(user);
  const mock = memberDashboardMock;

  return (
    <div className="mx-auto w-full max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <section className="relative overflow-hidden rounded-3xl bg-[#0B2633] px-6 py-7 text-white shadow-[0_18px_50px_rgba(11,38,51,0.14)] sm:px-8 sm:py-8">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#168DB8]/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300/80">
            Member Portal
          </p>

          <div className="mt-2 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                Welcome, {first}
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">
                Manage your membership, payments,
                participation and KUHRSA activities
                from one secure workspace.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3">
              <p className="text-[10px] font-black uppercase tracking-[0.15em] text-white/35">
                Membership
              </p>

              <p className="mt-1 text-sm font-black">
                {mock.membership.memberType}
              </p>

              <div className="mt-1 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                <span className="text-xs font-semibold text-emerald-300">
                  {mock.membership.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
        <StatCard
          title="Membership"
          value={mock.membership.label}
          subtitle={mock.membership.status}
          href="/dashboard/membership"
          icon="membership"
        />

        <StatCard
          title="Balance"
          value={formatCurrency(
            mock.finance.balance,
            mock.finance.currency,
          )}
          subtitle="Outstanding balance"
          href="/dashboard/finance/balance"
          icon="finance"
        />

        <StatCard
          title="Upcoming Events"
          value={String(
            mock.events.count,
          )}
          subtitle="Scheduled opportunities"
          href="/dashboard/events/upcoming"
          icon="events"
        />

        <StatCard
          title="Activities"
          value={String(
            mock.activities.count,
          )}
          subtitle="Current registrations"
          href="/dashboard/activities"
          icon="activities"
        />

        <StatCard
          title="Attendance"
          value={`${mock.attendance.percentage}%`}
          subtitle={`${mock.attendance.attended} of ${mock.attendance.total} recorded`}
          href="/dashboard/events/attendance"
          icon="attendance"
        />

        <StatCard
          title="Notifications"
          value={String(
            mock.notifications.count,
          )}
          subtitle="Recent notifications"
          href="/dashboard/communication/notifications"
          icon="notifications"
        />
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_8px_30px_rgba(11,38,51,0.04)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                Membership
              </p>

              <h2 className="mt-1 text-xl font-black tracking-tight text-[#0B2633]">
                Digital Membership Card
              </h2>
            </div>

            <Link
              href="/dashboard/membership/card"
              className="text-xs font-black text-[#168DB8] hover:underline"
            >
              Open Card
            </Link>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0B2633] to-[#124861] p-6 text-white">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/40">
                  KUHRSA Digital Membership
                </p>

                <p className="mt-3 text-xl font-black">
                  {mock.membership.memberType}
                </p>

                <div className="mt-4 space-y-1.5">
                  <p className="text-sm text-white/75">
                    Member account
                  </p>

                  <p className="text-xs text-white/45">
                    Valid until{" "}
                    {mock.membership.validUntil}
                  </p>
                </div>
              </div>

              <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl bg-white p-4">
                <div className="grid grid-cols-7 gap-1 opacity-80">
                  {Array.from({
                    length: 49,
                  }).map((_, index) => (
                    <span
                      key={index}
                      className={`h-2 w-2 ${
                        (index * 7 + index) % 3 ===
                          0 ||
                        (index + 2) % 5 === 0
                          ? "bg-[#0B2633]"
                          : "bg-black/10"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_8px_30px_rgba(11,38,51,0.04)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                Quick Access
              </p>

              <h2 className="mt-1 text-xl font-black tracking-tight text-[#0B2633]">
                Common Actions
              </h2>
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <Link
              href="/dashboard/finance/payment"
              className="flex items-center justify-between rounded-xl border border-black/[0.05] px-4 py-3 text-sm font-bold text-[#0B2633] transition hover:border-[#168DB8]/20 hover:bg-[#168DB8]/5"
            >
              Make Payment

              <span className="text-[#168DB8]">
                →
              </span>
            </Link>

            <Link
              href="/dashboard/membership/profile"
              className="flex items-center justify-between rounded-xl border border-black/[0.05] px-4 py-3 text-sm font-bold text-[#0B2633] transition hover:border-[#168DB8]/20 hover:bg-[#168DB8]/5"
            >
              Update Profile

              <span className="text-[#168DB8]">
                →
              </span>
            </Link>

            <Link
              href="/dashboard/events/upcoming"
              className="flex items-center justify-between rounded-xl border border-black/[0.05] px-4 py-3 text-sm font-bold text-[#0B2633] transition hover:border-[#168DB8]/20 hover:bg-[#168DB8]/5"
            >
              Browse Events

              <span className="text-[#168DB8]">
                →
              </span>
            </Link>

            <Link
              href="/dashboard/services/submit"
              className="flex items-center justify-between rounded-xl border border-black/[0.05] px-4 py-3 text-sm font-bold text-[#0B2633] transition hover:border-[#168DB8]/20 hover:bg-[#168DB8]/5"
            >
              Submit a Request

              <span className="text-[#168DB8]">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_8px_30px_rgba(11,38,51,0.04)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                Upcoming
              </p>

              <h2 className="mt-1 text-xl font-black text-[#0B2633]">
                Events
              </h2>
            </div>

            <Link
              href="/dashboard/events"
              className="text-xs font-black text-[#168DB8]"
            >
              View all
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {mock.events.items.map(
              (event) => (
                <div
                  key={event.id}
                  className="rounded-xl border border-black/[0.05] p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-black text-[#0B2633]">
                        {event.title}
                      </p>

                      <p className="mt-1 text-xs font-medium text-black/45">
                        {event.date} ·{" "}
                        {event.time}
                      </p>
                    </div>

                    <span className="rounded-full bg-[#168DB8]/10 px-2.5 py-1 text-[10px] font-black text-[#168DB8]">
                      {event.category}
                    </span>
                  </div>

                  <p className="mt-3 text-xs text-black/40">
                    {event.venue}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_8px_30px_rgba(11,38,51,0.04)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
                Recent
              </p>

              <h2 className="mt-1 text-xl font-black text-[#0B2633]">
                Announcements
              </h2>
            </div>

            <Link
              href="/dashboard/content/announcements"
              className="text-xs font-black text-[#168DB8]"
            >
              View all
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {mock.announcements.map(
              (announcement) => (
                <Link
                  href="/dashboard/content/announcements"
                  key={announcement.id}
                  className="block rounded-xl border border-black/[0.05] p-4 transition hover:border-[#168DB8]/20 hover:bg-[#168DB8]/[0.02]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm font-black text-[#0B2633]">
                      {announcement.title}
                    </p>

                    <span className="shrink-0 text-[10px] font-bold text-black/35">
                      {announcement.date}
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-5 text-black/45">
                    {announcement.excerpt}
                  </p>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_8px_30px_rgba(11,38,51,0.04)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[#168DB8]">
              Recent
            </p>

            <h2 className="mt-1 text-xl font-black text-[#0B2633]">
              Notifications
            </h2>
          </div>

          <Link
            href="/dashboard/communication/notifications"
            className="text-xs font-black text-[#168DB8]"
          >
            Open notifications
          </Link>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {mock.notifications.items.map(
            (notification) => (
              <div
                key={notification.id}
                className="rounded-xl border border-black/[0.05] p-4"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.12em] text-[#168DB8]">
                  {notification.type}
                </span>

                <p className="mt-2 text-sm font-black text-[#0B2633]">
                  {notification.title}
                </p>

                <p className="mt-1 text-xs leading-5 text-black/45">
                  {notification.body}
                </p>

                <p className="mt-3 text-[10px] font-bold text-black/30">
                  {notification.time}
                </p>
              </div>
            ),
          )}
        </div>
      </section>
    </div>
  );
}
