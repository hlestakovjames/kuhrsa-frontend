"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AuthUser,
  PortalType,
} from "@/lib/auth";

type DashboardSidebarProps = {
  portal: PortalType;
  user: AuthUser;
  onLogout: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
};

type NavItem = {
  label: string;
  href: string;
  icon:
    | "dashboard"
    | "membership"
    | "users"
    | "payments"
    | "events"
    | "activities"
    | "announcements"
    | "resources"
    | "departments"
    | "roles"
    | "reports"
    | "settings";
};

const navigation: Record<
  PortalType,
  NavItem[]
> = {
  member: [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: "dashboard",
    },
    {
      label: "My Membership",
      href: "/membership",
      icon: "membership",
    },
    {
      label: "Payments",
      href: "/membership/fees",
      icon: "payments",
    },
    {
      label: "Events",
      href: "/events",
      icon: "events",
    },
    {
      label: "Activities",
      href: "/activities",
      icon: "activities",
    },
    {
      label: "Announcements",
      href: "/announcements",
      icon: "announcements",
    },
    {
      label: "Resources",
      href: "/resources/members",
      icon: "resources",
    },
  ],

  executive: [
    {
      label: "Dashboard",
      href: "/executive/dashboard",
      icon: "dashboard",
    },
    {
      label: "Members",
      href: "/resources/members",
      icon: "users",
    },
    {
      label: "Membership",
      href: "/membership",
      icon: "membership",
    },
    {
      label: "Events",
      href: "/events",
      icon: "events",
    },
    {
      label: "Activities",
      href: "/activities",
      icon: "activities",
    },
    {
      label: "Announcements",
      href: "/announcements",
      icon: "announcements",
    },
    {
      label: "Reports",
      href: "/resources",
      icon: "reports",
    },
  ],

  administration: [
    {
      label: "Dashboard",
      href: "/administration/dashboard",
      icon: "dashboard",
    },
    {
      label: "Members",
      href: "/resources/members",
      icon: "users",
    },
    {
      label: "Users",
      href: "/resources/members",
      icon: "users",
    },
    {
      label: "Roles & Permissions",
      href: "/resources",
      icon: "roles",
    },
    {
      label: "Departments",
      href: "/departments",
      icon: "departments",
    },
    {
      label: "Finance",
      href: "/membership/fees",
      icon: "payments",
    },
    {
      label: "Announcements",
      href: "/announcements",
      icon: "announcements",
    },
    {
      label: "Reports",
      href: "/resources",
      icon: "reports",
    },
    {
      label: "Settings",
      href: "/resources",
      icon: "settings",
    },
  ],
};

function getInitials(user: AuthUser) {
  const emailName =
    user.email.split("@")[0] ?? "";

  const parts = emailName
    .replace(/[._-]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }

  return (
    emailName
      .slice(0, 2)
      .toUpperCase() || "KU"
  );
}

function Icon({
  type,
}: {
  type: NavItem["icon"];
}) {
  const common =
    "h-[18px] w-[18px] shrink-0";

  switch (type) {
    case "dashboard":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="3"
            width="7"
            height="7"
            rx="1"
          />
          <rect
            x="14"
            y="3"
            width="7"
            height="7"
            rx="1"
          />
          <rect
            x="3"
            y="14"
            width="7"
            height="7"
            rx="1"
          />
          <rect
            x="14"
            y="14"
            width="7"
            height="7"
            rx="1"
          />
        </svg>
      );

    case "membership":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="8"
            r="3.5"
          />
          <path d="M5 21c.8-4 3-6 7-6s6.2 2 7 6" />
        </svg>
      );

    case "users":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <circle
            cx="9"
            cy="8"
            r="3"
          />
          <path d="M3.5 20c.7-3.5 2.5-5.5 5.5-5.5s4.8 2 5.5 5.5" />
          <path d="M16 5.5a3 3 0 0 1 0 5.5" />
          <path d="M17 14.5c1.9.6 3.1 2.3 3.5 4.5" />
        </svg>
      );

    case "payments":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
          />
          <path d="M3 10h18" />
          <path d="M7 15h4" />
        </svg>
      );

    case "events":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="5"
            width="18"
            height="16"
            rx="2"
          />
          <path d="M7 3v4M17 3v4M3 10h18" />
          <path d="M8 14h3M8 17h3M14 14h3" />
        </svg>
      );

    case "activities":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="M4 17.5 9 12l3 3 8-9" />
          <path d="M16 6h4v4" />
          <path d="M4 21h16" />
        </svg>
      );

    case "announcements":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="M4 10h5l8-4v12l-8-4H4z" />
          <path d="M9 14.5 10 19h3l-1.5-4.5" />
          <path d="M19 9a4 4 0 0 1 0 6" />
        </svg>
      );

    case "resources":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21z" />
          <path d="M4 5.5v13" />
          <path d="M8 7h8M8 10h8M8 13h5" />
        </svg>
      );

    case "departments":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="4"
            width="18"
            height="16"
            rx="2"
          />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      );

    case "roles":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="8"
            r="3"
          />
          <path d="M5 21c.8-4.2 3.1-6.3 7-6.3s6.2 2.1 7 6.3" />
          <path d="M16.5 3.5 19 5l-.5 2.8" />
        </svg>
      );

    case "reports":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="M5 20V10M12 20V4M19 20v-7" />
        </svg>
      );

    case "settings":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="3"
          />
          <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V20h-2.6v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1A1.7 1.7 0 0 0 8 15a1.7 1.7 0 0 0-1.5-1H6v-2.6h.1A1.7 1.7 0 0 0 7.6 10a1.7 1.7 0 0 0-.3-1.9l-.1-.1L9 6.2l.1.1A1.7 1.7 0 0 0 11 6a1.7 1.7 0 0 0 1-1.5V4h2.6v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.1V14h-.1a1.7 1.7 0 0 0-1.1 1z" />
        </svg>
      );
  }
}

export default function DashboardSidebar({
  portal,
  user,
  onLogout,
  mobileOpen,
  onCloseMobile,
}: DashboardSidebarProps) {
  const pathname = usePathname();
  const items = navigation[portal];
  const initials = getInitials(user);

  const portalLabel =
    portal === "member"
      ? "Member Portal"
      : portal === "executive"
        ? "Executive Portal"
        : "Administration Portal";

  const sidebar = (
    <aside className="flex h-screen w-[270px] flex-col border-r border-white/10 bg-[#0B2633] text-white">
      <div className="shrink-0 border-b border-white/10 px-5 py-5">
        <Link
          href="/"
          onClick={onCloseMobile}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm">
            <Image
              src="/images/kuhrsa/kuhrsa_logo.jpeg"
              alt="KUHRSA logo"
              width={44}
              height={44}
              className="h-full w-full object-contain p-1"
              priority
            />
          </div>

          <div className="min-w-0">
            <p className="text-base font-black tracking-tight">
              KUHRSA
            </p>

            <p className="mt-0.5 truncate text-[10px] font-black uppercase tracking-[0.18em] text-white/40">
              {portalLabel}
            </p>
          </div>
        </Link>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-5">
        <p className="px-3 pb-3 text-[10px] font-black uppercase tracking-[0.18em] text-white/30">
          Navigation
        </p>

        <nav className="space-y-1">
          {items.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !==
                "/dashboard" &&
                item.href !==
                  "/executive/dashboard" &&
                item.href !==
                  "/administration/dashboard" &&
                pathname.startsWith(
                  `${item.href}/`,
                ));

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onCloseMobile}
                className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${
                  active
                    ? "bg-[#168DB8] text-white shadow-lg shadow-[#168DB8]/20"
                    : "text-white/60 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                <Icon type={item.icon} />

                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="shrink-0 border-t border-white/10 p-4">
        <div className="mb-3 flex items-center gap-3 rounded-xl bg-white/[0.05] p-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xs font-black text-[#0B2633]">
            {initials}
          </div>

          <div className="min-w-0">
            <p className="truncate text-xs font-bold text-white">
              {user.email}
            </p>

            <p className="mt-1 truncate text-[10px] font-black uppercase tracking-[0.12em] text-white/35">
              {user.isSystemOwner
                ? "System Owner"
                : user.roles
                    .map(
                      (role) => role.name,
                    )
                    .join(", ")}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onLogout}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-white/55 transition hover:bg-white/[0.06] hover:text-white"
        >
          <svg
            className="h-[18px] w-[18px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path d="M10 17l5-5-5-5" />
            <path d="M15 12H3" />
            <path d="M21 5v14a2 2 0 0 1-2 2h-5" />
          </svg>

          Sign Out
        </button>
      </div>
    </aside>
  );

  return (
    <>
      <div className="fixed inset-y-0 left-0 z-40 hidden lg:block">
        {sidebar}
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation"
            onClick={onCloseMobile}
            className="absolute inset-0 bg-[#0B2633]/60 backdrop-blur-sm"
          />

          <div className="relative h-full">
            {sidebar}

            <button
              type="button"
              aria-label="Close navigation"
              onClick={onCloseMobile}
              className="absolute right-3 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}