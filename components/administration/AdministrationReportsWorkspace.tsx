"use client";

import Link from "next/link";

type ReportsView =
  | "dashboard"
  | "membership"
  | "finance"
  | "payments"
  | "events"
  | "activities"
  | "elections"
  | "communication"
  | "analytics"
  | "custom";

type Props = {
  view: ReportsView;
};

const reportCards = [
  {
    title: "Membership Reports",
    description: "Membership population, status, category and lifecycle reporting.",
    href: "/administration/reports/membership",
    value: "1,284",
    metric: "members",
  },
  {
    title: "Finance Reports",
    description: "Collections, expenses, budgets and financial position.",
    href: "/administration/reports/finance",
    value: "KSh 186,400",
    metric: "collections",
  },
  {
    title: "Payment Reports",
    description: "Payment transaction and reconciliation reporting.",
    href: "/administration/reports/payments",
    value: "684",
    metric: "transactions",
  },
  {
    title: "Event Reports",
    description: "Event registration, attendance and participation.",
    href: "/administration/reports/events",
    value: "28",
    metric: "events",
  },
  {
    title: "Activity Reports",
    description: "Activity participation and programme performance.",
    href: "/administration/reports/activities",
    value: "31",
    metric: "activities",
  },
  {
    title: "Election Reports",
    description: "Election cycles, voter participation, candidates and results.",
    href: "/administration/reports/elections",
    value: "2",
    metric: "election cycles",
  },
  {
    title: "Communication Reports",
    description: "Email, SMS, notification and campaign performance.",
    href: "/administration/reports/communication",
    value: "95.7%",
    metric: "delivery",
  },
  {
    title: "Membership Analytics",
    description: "Trends, distributions and membership intelligence.",
    href: "/administration/reports/analytics",
    value: "+12.8%",
    metric: "growth",
  },
];

const membershipRows = [
  ["Students", "926", "72.1%"],
  ["Alumni", "218", "17.0%"],
  ["Lecturers", "140", "10.9%"],
  ["Active Members", "1,172", "91.3%"],
  ["Pending", "36", "2.8%"],
  ["Expired / Suspended", "76", "5.9%"],
];

const financeRows = [
  ["Membership Fees", "KSh 142,700", "76.6%"],
  ["Other Collections", "KSh 43,700", "23.4%"],
  ["Expenses", "KSh 42,300", "22.7%"],
  ["Outstanding", "KSh 48,600", "26.1%"],
];

const paymentRows = [
  ["M-Pesa", "512", "KSh 112,450", "Verified"],
  ["Manual", "118", "KSh 36,700", "Mixed"],
  ["Other", "54", "KSh 8,450", "Verified"],
];

const eventRows = [
  ["AGM & First-Year Welcome", "214", "—", "Upcoming"],
  ["Professional Development Session", "86", "72", "Scheduled"],
  ["Leadership Forum", "112", "—", "Planned"],
];

const activityRows = [
  ["Student Mentorship", "54", "82%", "Upcoming"],
  ["Career & Professional Engagement", "72", "88%", "Open"],
  ["Academic Support Initiative", "41", "79%", "Planned"],
];

function Header({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgba(11,38,51,0.04)] ring-1 ring-black/[0.06] sm:p-8">
      <p className="text-xs font-black uppercase tracking-[0.17em] text-[#CE26A4]">
        Reports & Analytics
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
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-black/[0.06] bg-white p-5">
      <p className="text-[10px] font-black uppercase tracking-[0.14em] text-black/35">
        {label}
      </p>

      <p className="mt-2 text-2xl font-black tracking-tight text-[#0B2633]">
        {value}
      </p>
    </div>
  );
}

function DashboardView() {
  return (
    <div className="space-y-6">
      <Header
        title="Reports & Analytics"
        description="Central reporting workspace across membership, finance, payments, events, activities, elections and communication."
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Members" value="1,284" />
        <StatCard label="Collections" value="KSh 186,400" />
        <StatCard label="Events" value="28" />
        <StatCard label="Activities" value="31" />
      </section>

      <section>
        <div className="mb-5">
          <h2 className="text-lg font-black text-[#0B2633]">
            Reporting Areas
          </h2>

          <p className="mt-1 text-sm text-black/40">
            Select a report family.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {reportCards.map((report) => (
            <Link
              key={report.href}
              href={report.href}
              className="rounded-3xl bg-white p-5 ring-1 ring-black/[0.06] transition hover:-translate-y-0.5 hover:bg-[#FFF7FC]"
            >
              <p className="text-sm font-black text-[#0B2633]">
                {report.title}
              </p>

              <p className="mt-2 text-xs leading-5 text-black/45">
                {report.description}
              </p>

              <p className="mt-5 text-2xl font-black tracking-tight text-[#CE26A4]">
                {report.value}
              </p>

              <p className="mt-1 text-[10px] font-black uppercase tracking-[0.12em] text-black/30">
                {report.metric}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-white p-6 ring-1 ring-black/[0.06]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-black text-[#0B2633]">
              Custom Reporting
            </h2>

            <p className="mt-1 text-sm text-black/40">
              Build future configurable reports from approved data sources.
            </p>
          </div>

          <Link
            href="/administration/reports/custom"
            className="rounded-xl bg-[#0B2633] px-4 py-2 text-xs font-black text-white"
          >
            Open Report Builder
          </Link>
        </div>
      </section>
    </div>
  );
}

function MembershipReportView() {
  return (
    <div className="space-y-6">
      <Header
        title="Membership Reports"
        description="Membership population, categories, status and lifecycle reporting."
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Members" value="1,284" />
        <StatCard label="Active" value="1,172" />
        <StatCard label="Pending" value="36" />
        <StatCard label="Expired" value="58" />
      </section>

      <ReportTable
        headers={["Category / Status", "Members", "Share"]}
        rows={membershipRows}
      />
    </div>
  );
}

function FinanceReportView() {
  return (
    <div className="space-y-6">
      <Header
        title="Finance Reports"
        description="Financial collections, expenses and outstanding balances."
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Collections" value="KSh 186,400" />
        <StatCard label="Expenses" value="KSh 42,300" />
        <StatCard label="Outstanding" value="KSh 48,600" />
        <StatCard label="Net Position" value="KSh 144,100" />
      </section>

      <ReportTable
        headers={["Category", "Amount", "Share"]}
        rows={financeRows}
      />
    </div>
  );
}

function PaymentReportView() {
  return (
    <div className="space-y-6">
      <Header
        title="Payment Reports"
        description="Payment methods, transaction counts and reconciliation status."
      />

      <section className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Transactions" value="684" />
        <StatCard label="Verified Value" value="KSh 157,600" />
        <StatCard label="Needs Review" value="8" />
      </section>

      <ReportTable
        headers={["Method", "Transactions", "Value", "Status"]}
        rows={paymentRows}
      />
    </div>
  );
}

function EventReportView() {
  return (
    <div className="space-y-6">
      <Header
        title="Event Reports"
        description="Event registration, participation and operational reporting."
      />

      <section className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Events" value="28" />
        <StatCard label="Registrations" value="1,842" />
        <StatCard label="Attendance Rate" value="84%" />
      </section>

      <ReportTable
        headers={["Event", "Registrations", "Attendance", "Status"]}
        rows={eventRows}
      />
    </div>
  );
}

function ActivityReportView() {
  return (
    <div className="space-y-6">
      <Header
        title="Activity Reports"
        description="Activity participation and programme performance."
      />

      <section className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Activities" value="31" />
        <StatCard label="Participants" value="1,126" />
        <StatCard label="Average Participation" value="83%" />
      </section>

      <ReportTable
        headers={["Activity", "Participants", "Participation", "Status"]}
        rows={activityRows}
      />
    </div>
  );
}

function ElectionReportView() {
  return (
    <div className="space-y-6">
      <Header
        title="Election Reports"
        description="Election cycle, voter participation, candidate and results reporting."
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Election Cycles" value="2" />
        <StatCard label="Candidates" value="42" />
        <StatCard label="Eligible Voters" value="1,102" />
        <StatCard label="Participation" value="62%" />
      </section>

      <ReportTable
        headers={["Report", "Value", "Status"]}
        rows={[
          ["Candidate Eligibility", "42 candidates reviewed", "Complete"],
          ["Voter Register", "1,102 eligible voters", "Complete"],
          ["Voting Participation", "684 votes recorded", "Current"],
          ["Election Results", "Awaiting election close", "Pending"],
        ]}
      />
    </div>
  );
}

function CommunicationReportView() {
  return (
    <div className="space-y-6">
      <Header
        title="Communication Reports"
        description="Email, SMS, notification and campaign delivery performance."
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Messages" value="4,126" />
        <StatCard label="Email Delivery" value="96.8%" />
        <StatCard label="SMS Delivery" value="94.2%" />
        <StatCard label="In-App Delivery" value="99.1%" />
      </section>

      <ReportTable
        headers={["Channel", "Messages", "Delivery", "Status"]}
        rows={[
          ["Email", "2,142", "96.8%", "Complete"],
          ["SMS", "1,284", "94.2%", "Complete"],
          ["In-App", "700", "99.1%", "Complete"],
        ]}
      />
    </div>
  );
}

function AnalyticsView() {
  return (
    <div className="space-y-6">
      <Header
        title="Membership Analytics"
        description="Trend analysis and intelligence for KUHRSA membership planning."
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Growth" value="+12.8%" />
        <StatCard label="Active Rate" value="91.3%" />
        <StatCard label="Student Share" value="72.1%" />
        <StatCard label="Renewal Rate" value="87.4%" />
      </section>

      <section className="rounded-3xl bg-white p-6 ring-1 ring-black/[0.06]">
        <h2 className="text-lg font-black text-[#0B2633]">
          Six-Month Membership Trend
        </h2>

        <p className="mt-1 text-sm text-black/40">
          Synthetic trend data for frontend visualization.
        </p>

        <div className="mt-6 grid h-56 grid-cols-6 items-end gap-3">
          {[42, 49, 56, 63, 72, 84].map((height, index) => (
            <div
              key={index}
              className="flex h-full items-end rounded-2xl bg-[#F8FBFC] p-3"
            >
              <div
                className="w-full rounded-xl bg-[#CE26A4]"
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function CustomReportView() {
  return (
    <div className="space-y-6">
      <Header
        title="Custom Reports"
        description="Frontend-first report builder for future configurable administrative reports."
      />

      <section className="rounded-3xl bg-white p-6 ring-1 ring-black/[0.06]">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="text-[10px] font-black uppercase tracking-[0.12em] text-black/35">
              Report Name
            </label>

            <div className="mt-2 rounded-xl border border-black/[0.08] bg-[#F8FBFC] px-4 py-3 text-sm text-black/45">
              Example: Monthly Membership Summary
            </div>
          </div>

          <div>
            <label className="text-[10px] font-black uppercase tracking-[0.12em] text-black/35">
              Data Source
            </label>

            <div className="mt-2 rounded-xl border border-black/[0.08] bg-[#F8FBFC] px-4 py-3 text-sm text-black/45">
              Membership
            </div>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-[10px] font-black uppercase tracking-[0.12em] text-black/35">
            Available Fields
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Member Category",
              "Membership Status",
              "Membership Period",
              "Registration Date",
              "Renewal Status",
              "Payment Status",
            ].map((field) => (
              <span
                key={field}
                className="rounded-full bg-[#F8FBFC] px-3 py-2 text-xs font-bold text-[#0B2633]"
              >
                {field}
              </span>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="mt-6 rounded-xl bg-[#0B2633] px-5 py-3 text-xs font-black text-white"
        >
          Generate Report
        </button>
      </section>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
        <p className="text-xs font-black uppercase tracking-[0.12em] text-amber-700">
          Development Mode
        </p>

        <p className="mt-2 text-sm leading-6 text-amber-800">
          Custom report generation is a frontend placeholder. Actual data
          queries, filters, exports and scheduled reports will be provided by
          the backend.
        </p>
      </div>
    </div>
  );
}

function ReportTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <section className="rounded-3xl bg-white p-6 ring-1 ring-black/[0.06]">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b border-black/[0.06]">
              {headers.map((header) => (
                <th
                  key={header}
                  className="px-3 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-black/35 first:pl-0"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr
                key={`${row[0]}-${index}`}
                className="border-b border-black/[0.05] last:border-0"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${cell}-${cellIndex}`}
                    className="px-3 py-4 text-sm font-semibold text-black/55 first:pl-0"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function AdministrationReportsWorkspace({
  view,
}: Props) {
  switch (view) {
    case "membership":
      return <MembershipReportView />;

    case "finance":
      return <FinanceReportView />;

    case "payments":
      return <PaymentReportView />;

    case "events":
      return <EventReportView />;

    case "activities":
      return <ActivityReportView />;

    case "elections":
      return <ElectionReportView />;

    case "communication":
      return <CommunicationReportView />;

    case "analytics":
      return <AnalyticsView />;

    case "custom":
      return <CustomReportView />;

    case "dashboard":
    default:
      return <DashboardView />;
  }
}
