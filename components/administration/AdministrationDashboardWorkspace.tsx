"use client";

import Link from "next/link";

type AdministrationDashboardView =
  | "dashboard"
  | "overview"
  | "statistics"
  | "analytics"
  | "activity"
  | "alerts";

type Props = {
  view: AdministrationDashboardView;
};

const overviewStats = [
  {
    label: "Active Members",
    value: "1,284",
    change: "+8.4%",
  },
  {
    label: "Pending Applications",
    value: "36",
    change: "+4",
  },
  {
    label: "Active Executives",
    value: "16",
    change: "Current",
  },
  {
    label: "Upcoming Events",
    value: "12",
    change: "+3",
  },
  {
    label: "Open Requests",
    value: "18",
    change: "-5",
  },
  {
    label: "Outstanding Balance",
    value: "KSh 48,600",
    change: "-12.2%",
  },
];

const recentActivities = [
  "New student membership applications received",
  "Executive appointment records updated",
  "Membership payment reconciliation completed",
  "Upcoming event registration opened",
  "New announcement scheduled for publication",
];

const alerts = [
  {
    level: "Review",
    title: "Pending membership applications",
    detail: "36 applications require administrative review.",
  },
  {
    level: "Attention",
    title: "Payment reconciliation",
    detail: "8 transactions require reconciliation review.",
  },
  {
    level: "Notice",
    title: "Executive appointments",
    detail: "Several term records are approaching review dates.",
  },
];

const quickLinks = [
  {
    label: "Membership",
    href: "/administration/members",
  },
  {
    label: "Users",
    href: "/administration/users",
  },
  {
    label: "Notifications",
    href: "/administration/notifications",
  },
  {
    label: "Finance",
    href: "/administration/finance",
  },
  {
    label: "Content",
    href: "/administration/content",
  },
  {
    label: "Reports",
    href: "/administration/reports",
  },
];

function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgba(11,38,51,0.04)] ring-1 ring-black/[0.06] sm:p-8">
      <p className="text-xs font-black uppercase tracking-[0.17em] text-[#CE26A4]">
        Dashboard & Intelligence
      </p>

      <h1 className="mt-2 text-3xl font-black tracking-tight text-[#0B2633]">
        {title}
      </h1>

      <p className="mt-3 max-w-3xl text-sm leading-6 text-black/50">
        {description}
      </p>
    </section>
  );
}

function StatCard({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  change: string;
}) {
  return (
    <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_6px_20px_rgba(11,38,51,0.03)]">
      <p className="text-[10px] font-black uppercase tracking-[0.14em] text-black/35">
        {label}
      </p>

      <p className="mt-2 text-2xl font-black tracking-tight text-[#0B2633]">
        {value}
      </p>

      <p className="mt-1 text-xs font-bold text-[#CE26A4]">
        {change}
      </p>
    </div>
  );
}

function SectionTitle({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div>
      <h2 className="text-lg font-black text-[#0B2633]">{title}</h2>

      {description ? (
        <p className="mt-1 text-sm text-black/45">{description}</p>
      ) : null}
    </div>
  );
}

function DashboardView() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Executive Dashboard"
        description="High-level oversight of KUHRSA membership, governance, operations, finance, communications and system activity."
      />

      <section>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {overviewStats.map((item) => (
            <StatCard
              key={item.label}
              label={item.label}
              value={item.value}
              change={item.change}
            />
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-black/[0.06] bg-white p-6 shadow-[0_6px_24px_rgba(11,38,51,0.03)]">
          <SectionTitle
            title="Recent Activities"
            description="Latest operational activity across the administration environment."
          />

          <div className="mt-5 space-y-3">
            {recentActivities.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl bg-[#F8FBFC] p-4"
              >
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#CE26A4]/10 text-xs font-black text-[#CE26A4]">
                  {index + 1}
                </span>

                <p className="text-sm font-semibold leading-6 text-[#0B2633]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-black/[0.06] bg-white p-6 shadow-[0_6px_24px_rgba(11,38,51,0.03)]">
          <SectionTitle
            title="Alerts"
            description="Items requiring administrative attention."
          />

          <div className="mt-5 space-y-3">
            {alerts.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#CE26A4]/10 bg-[#FFF7FC] p-4"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#CE26A4]">
                  {item.level}
                </p>

                <p className="mt-2 text-sm font-black text-[#0B2633]">
                  {item.title}
                </p>

                <p className="mt-1 text-xs leading-5 text-black/50">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-black/[0.06] bg-white p-6 shadow-[0_6px_24px_rgba(11,38,51,0.03)]">
        <SectionTitle
          title="Quick Access"
          description="Jump directly into major administration areas."
        />

        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between rounded-2xl border border-black/[0.06] bg-[#F8FBFC] px-4 py-4 text-sm font-bold text-[#0B2633] transition hover:border-[#CE26A4]/20 hover:bg-[#FFF7FC]"
            >
              {item.label}

              <span className="text-[#CE26A4]">→</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function OverviewView() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Overview"
        description="A consolidated view of the current KUHRSA administrative environment."
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {overviewStats.map((item) => (
          <StatCard
            key={item.label}
            label={item.label}
            value={item.value}
            change={item.change}
          />
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 ring-1 ring-black/[0.06]">
          <SectionTitle
            title="Operational Summary"
            description="Synthetic development data representing the future administration API."
          />

          <div className="mt-5 space-y-4">
            {[
              ["Membership", "Stable"],
              ["Governance", "Current"],
              ["Finance", "Monitoring"],
              ["Communications", "Active"],
              ["System Health", "Healthy"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-2xl bg-[#F8FBFC] px-4 py-3"
              >
                <span className="text-sm font-semibold text-black/60">
                  {label}
                </span>

                <span className="text-sm font-black text-[#0B2633]">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 ring-1 ring-black/[0.06]">
          <SectionTitle
            title="Administrative Focus"
            description="Current synthetic areas requiring attention."
          />

          <div className="mt-5 space-y-3">
            {alerts.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-[#FFF7FC] p-4"
              >
                <p className="text-sm font-black text-[#0B2633]">
                  {item.title}
                </p>

                <p className="mt-1 text-xs leading-5 text-black/50">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function StatisticsView() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Quick Statistics"
        description="Key synthetic indicators for administrative decision-making."
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {overviewStats.map((item) => (
          <StatCard
            key={item.label}
            label={item.label}
            value={item.value}
            change={item.change}
          />
        ))}
      </section>

      <section className="rounded-3xl bg-white p-6 ring-1 ring-black/[0.06]">
        <SectionTitle
          title="Category Distribution"
          description="Illustrative values that will later come from the reporting API."
        />

        <div className="mt-6 space-y-4">
          {[
            ["Students", 72],
            ["Alumni", 17],
            ["Lecturers", 11],
            ["Active Executives", 16],
            ["Open Requests", 18],
          ].map(([label, value]) => (
            <div key={String(label)}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold text-black/60">
                  {label}
                </span>

                <span className="text-sm font-black text-[#0B2633]">
                  {value}
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-black/[0.05]">
                <div
                  className="h-full rounded-full bg-[#CE26A4]"
                  style={{ width: `${Math.min(Number(value), 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function AnalyticsView() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Reports & Analytics"
        description="Administrative intelligence views for trends, performance and planning."
      />

      <section className="grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "Membership Growth",
            value: "+12.8%",
            detail: "Synthetic year-to-date increase.",
          },
          {
            title: "Event Participation",
            value: "84%",
            detail: "Synthetic average participation rate.",
          },
          {
            title: "Collection Rate",
            value: "91.4%",
            detail: "Synthetic membership fee collection rate.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl bg-white p-6 ring-1 ring-black/[0.06]"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-black/35">
              {item.title}
            </p>

            <p className="mt-3 text-3xl font-black tracking-tight text-[#0B2633]">
              {item.value}
            </p>

            <p className="mt-2 text-xs leading-5 text-black/45">
              {item.detail}
            </p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl bg-white p-6 ring-1 ring-black/[0.06]">
        <SectionTitle
          title="Trend Snapshot"
          description="Placeholder analytical output for the frontend-first phase."
        />

        <div className="mt-6 grid gap-3 md:grid-cols-6">
          {[58, 66, 62, 74, 81, 88].map((value, index) => (
            <div
              key={index}
              className="flex h-40 items-end rounded-2xl bg-[#F8FBFC] p-3"
            >
              <div
                className="w-full rounded-xl bg-[#CE26A4]"
                style={{ height: `${value}%` }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ActivityView() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Recent Activities"
        description="A centralized administrative activity stream."
      />

      <section className="rounded-3xl bg-white p-6 ring-1 ring-black/[0.06]">
        <div className="space-y-3">
          {recentActivities.map((item, index) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-2xl border border-black/[0.05] p-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#CE26A4]/10 text-xs font-black text-[#CE26A4]">
                {index + 1}
              </div>

              <div>
                <p className="text-sm font-black text-[#0B2633]">
                  {item}
                </p>

                <p className="mt-1 text-xs text-black/40">
                  Synthetic activity record • Administration
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function AlertsView() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Alerts"
        description="Administrative warnings, notices and items requiring attention."
      />

      <section className="space-y-4">
        {alerts.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-[#CE26A4]/10 bg-white p-6 ring-1 ring-black/[0.05]"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[#CE26A4]">
                  {item.level}
                </p>

                <h2 className="mt-2 text-lg font-black text-[#0B2633]">
                  {item.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-black/50">
                  {item.detail}
                </p>
              </div>

              <button
                type="button"
                className="rounded-xl border border-black/[0.08] px-4 py-2 text-xs font-black text-[#0B2633] transition hover:bg-[#F8FBFC]"
              >
                Review
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default function AdministrationDashboardWorkspace({
  view,
}: Props) {
  switch (view) {
    case "overview":
      return <OverviewView />;

    case "statistics":
      return <StatisticsView />;

    case "analytics":
      return <AnalyticsView />;

    case "activity":
      return <ActivityView />;

    case "alerts":
      return <AlertsView />;

    case "dashboard":
    default:
      return <DashboardView />;
  }
}
