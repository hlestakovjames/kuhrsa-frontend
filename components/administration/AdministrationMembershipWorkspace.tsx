"use client";

import Link from "next/link";

type MembershipView =
  | "dashboard"
  | "students"
  | "alumni"
  | "lecturers"
  | "pending"
  | "active"
  | "expired"
  | "suspended"
  | "activation"
  | "migration"
  | "renewal"
  | "cards"
  | "verification"
  | "requests"
  | "documents"
  | "history";

type Props = {
  view: MembershipView;
};

const stats = [
  {
    label: "Total Members",
    value: "1,284",
  },
  {
    label: "Students",
    value: "926",
  },
  {
    label: "Alumni",
    value: "218",
  },
  {
    label: "Lecturers",
    value: "140",
  },
  {
    label: "Pending Applications",
    value: "36",
  },
  {
    label: "Active Members",
    value: "1,172",
  },
];

const members = [
  {
    name: "Alex Morgan",
    number: "KUHRSA-STD-0042",
    category: "Student",
    status: "Active",
    period: "2026/27",
  },
  {
    name: "Brian Otieno",
    number: "KUHRSA-STD-0077",
    category: "Student",
    status: "Active",
    period: "2026/27",
  },
  {
    name: "Cynthia Wambui",
    number: "KUHRSA-ALU-0018",
    category: "Alumni",
    status: "Active",
    period: "2026/27",
  },
  {
    name: "Daniel Kariuki",
    number: "KUHRSA-LCT-0009",
    category: "Lecturer",
    status: "Active",
    period: "2026/27",
  },
  {
    name: "Esther Njeri",
    number: "KUHRSA-STD-0114",
    category: "Student",
    status: "Pending",
    period: "2026/27",
  },
];

const pending = [
  {
    name: "Grace M.",
    category: "Student",
    submitted: "02 Sep 2026",
    status: "Pending Review",
  },
  {
    name: "Ian K.",
    category: "Student",
    submitted: "03 Sep 2026",
    status: "Pending Review",
  },
  {
    name: "Jane W.",
    category: "Alumni",
    submitted: "04 Sep 2026",
    status: "Documents Required",
  },
];

const requests = [
  {
    request: "Membership card replacement",
    member: "KUHRSA-STD-0182",
    status: "Open",
  },
  {
    request: "Membership details update",
    member: "KUHRSA-ALU-0031",
    status: "Review",
  },
  {
    request: "Membership verification",
    member: "KUHRSA-STD-0221",
    status: "Resolved",
  },
];

const history = [
  "Membership period 2026/27 opened",
  "18 members activated",
  "12 membership cards issued",
  "7 legacy records migrated",
  "9 renewal applications processed",
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
        Membership
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
    <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_6px_20px_rgba(11,38,51,0.03)]">
      <p className="text-[10px] font-black uppercase tracking-[0.14em] text-black/35">
        {label}
      </p>

      <p className="mt-2 text-2xl font-black tracking-tight text-[#0B2633]">
        {value}
      </p>
    </div>
  );
}

function StatusBadge({ value }: { value: string }) {
  const positive =
    value === "Active" ||
    value === "Resolved" ||
    value === "Issued";

  const warning =
    value === "Pending" ||
    value === "Pending Review" ||
    value === "Review" ||
    value === "Open" ||
    value === "Documents Required";

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.08em] ${
        positive
          ? "bg-emerald-50 text-emerald-700"
          : warning
            ? "bg-[#CE26A4]/10 text-[#CE26A4]"
            : "bg-black/[0.05] text-black/50"
      }`}
    >
      {value}
    </span>
  );
}

function MemberTable({
  title,
  data = members,
}: {
  title: string;
  data?: typeof members;
}) {
  return (
    <section className="rounded-3xl bg-white p-6 ring-1 ring-black/[0.06]">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-black text-[#0B2633]">
            {title}
          </h2>

          <p className="mt-1 text-sm text-black/40">
            Synthetic administration records.
          </p>
        </div>

        <Link
          href="/administration/membership/verification"
          className="rounded-xl border border-black/[0.08] px-4 py-2 text-xs font-black text-[#0B2633] transition hover:bg-[#F8FBFC]"
        >
          Verify
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b border-black/[0.06]">
              {[
                "Member",
                "Member Number",
                "Category",
                "Period",
                "Status",
              ].map((item) => (
                <th
                  key={item}
                  className="px-3 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-black/35 first:pl-0"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item.number}
                className="border-b border-black/[0.05] last:border-0"
              >
                <td className="px-3 py-4 text-sm font-black text-[#0B2633] first:pl-0">
                  {item.name}
                </td>
                <td className="px-3 py-4 text-xs font-semibold text-black/55">
                  {item.number}
                </td>
                <td className="px-3 py-4 text-xs font-semibold text-black/55">
                  {item.category}
                </td>
                <td className="px-3 py-4 text-xs font-semibold text-black/55">
                  {item.period}
                </td>
                <td className="px-3 py-4">
                  <StatusBadge value={item.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function DashboardView() {
  return (
    <div className="space-y-6">
      <Header
        title="Membership Dashboard"
        description="Administrative oversight of member records, categories, activation, renewal and membership lifecycle."
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((item) => (
          <StatCard
            key={item.label}
            label={item.label}
            value={item.value}
          />
        ))}
      </section>

      <MemberTable title="Recent Membership Records" />

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 ring-1 ring-black/[0.06]">
          <h2 className="text-lg font-black text-[#0B2633]">
            Membership Lifecycle
          </h2>

          <div className="mt-5 space-y-3">
            {[
              ["Applications", "36 pending"],
              ["Activation", "18 recently activated"],
              ["Renewal", "42 due for review"],
              ["Cards", "12 issued recently"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-2xl bg-[#F8FBFC] px-4 py-3"
              >
                <span className="text-sm font-semibold text-black/55">
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
          <h2 className="text-lg font-black text-[#0B2633]">
            Quick Access
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              ["All Members", "/administration/members"],
              ["Pending Applications", "/administration/membership/pending"],
              ["Activation", "/administration/membership/activation"],
              ["Renewal", "/administration/membership/renewal"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-black/[0.06] bg-[#F8FBFC] px-4 py-4 text-sm font-bold text-[#0B2633] transition hover:border-[#CE26A4]/20 hover:bg-[#FFF7FC]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function CategoryView({
  title,
  description,
  category,
}: {
  title: string;
  description: string;
  category: string;
}) {
  const filtered = members.filter(
    (item) => item.category === category,
  );

  return (
    <div className="space-y-6">
      <Header title={title} description={description} />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Category Members" value={String(filtered.length + 120)} />
        <StatCard label="Active" value={String(filtered.length + 108)} />
        <StatCard label="Pending" value={String(filtered.length + 4)} />
        <StatCard label="Current Period" value="2026/27" />
      </section>

      <MemberTable title={`${category} Members`} data={filtered.length ? filtered : members} />
    </div>
  );
}

function StatusView({
  title,
  description,
  status,
}: {
  title: string;
  description: string;
  status: string;
}) {
  return (
    <div className="space-y-6">
      <Header title={title} description={description} />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard label="Records" value="124" />
        <StatCard label="Current Period" value="2026/27" />
        <StatCard label="Requiring Review" value="14" />
      </section>

      <MemberTable
        title={`${status} Members`}
        data={members
          .filter((item) =>
            status === "Active"
              ? item.status === "Active"
              : item.status !== "Active",
          )
          .map((item) => ({
            ...item,
            status:
              status === "Active"
                ? "Active"
                : status,
          }))}
      />
    </div>
  );
}

function PendingView() {
  return (
    <div className="space-y-6">
      <Header
        title="Pending Applications"
        description="Review applications that are waiting for membership approval or additional information."
      />

      <section className="rounded-3xl bg-white p-6 ring-1 ring-black/[0.06]">
        <div className="space-y-3">
          {pending.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-4 rounded-2xl bg-[#F8FBFC] p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-sm font-black text-[#0B2633]">
                  {item.name}
                </p>

                <p className="mt-1 text-xs text-black/45">
                  {item.category} • Submitted {item.submitted}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <StatusBadge value={item.status} />

                <button
                  type="button"
                  className="rounded-xl bg-[#0B2633] px-4 py-2 text-xs font-black text-white"
                >
                  Review
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function OperationalView({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="space-y-6">
      <Header title={title} description={description} />

      <section className="rounded-3xl bg-white p-6 ring-1 ring-black/[0.06]">
        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-2xl border border-black/[0.05] p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#CE26A4]/10 text-xs font-black text-[#CE26A4]">
                {index + 1}
              </span>

              <div>
                <p className="text-sm font-black text-[#0B2633]">
                  {item}
                </p>

                <p className="mt-1 text-xs text-black/40">
                  Development placeholder • Backend integration pending
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function RequestsView() {
  return (
    <div className="space-y-6">
      <Header
        title="Member Requests"
        description="Manage requests submitted by members and route them to the appropriate administrative process."
      />

      <section className="space-y-3">
        {requests.map((item) => (
          <div
            key={`${item.request}-${item.member}`}
            className="rounded-3xl bg-white p-6 ring-1 ring-black/[0.06]"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-black text-[#0B2633]">
                  {item.request}
                </p>

                <p className="mt-1 text-xs text-black/45">
                  Member: {item.member}
                </p>
              </div>

              <StatusBadge value={item.status} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

function HistoryView() {
  return (
    <div className="space-y-6">
      <Header
        title="Membership History"
        description="Historical membership lifecycle activity and administrative changes."
      />

      <section className="rounded-3xl bg-white p-6 ring-1 ring-black/[0.06]">
        <div className="space-y-3">
          {history.map((item, index) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-2xl bg-[#F8FBFC] p-4"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#CE26A4]/10 text-xs font-black text-[#CE26A4]">
                {index + 1}
              </div>

              <div>
                <p className="text-sm font-black text-[#0B2633]">
                  {item}
                </p>

                <p className="mt-1 text-xs text-black/40">
                  Synthetic historical record
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function AdministrationMembershipWorkspace({
  view,
}: Props) {
  switch (view) {
    case "students":
      return (
        <CategoryView
          title="Students"
          description="Manage the student membership population."
          category="Student"
        />
      );

    case "alumni":
      return (
        <CategoryView
          title="Alumni"
          description="Manage alumni membership records and status."
          category="Alumni"
        />
      );

    case "lecturers":
      return (
        <CategoryView
          title="Lecturers"
          description="Manage lecturer membership records."
          category="Lecturer"
        />
      );

    case "pending":
      return <PendingView />;

    case "active":
      return (
        <StatusView
          title="Active Members"
          description="View members with an active membership status."
          status="Active"
        />
      );

    case "expired":
      return (
        <StatusView
          title="Expired Members"
          description="Review members whose current membership period has expired."
          status="Expired"
        />
      );

    case "suspended":
      return (
        <StatusView
          title="Suspended Members"
          description="Review members whose membership access is currently suspended."
          status="Suspended"
        />
      );

    case "activation":
      return (
        <OperationalView
          title="Membership Activation"
          description="Process eligible member activation workflows."
          items={[
            "Pending activation queue",
            "Activation eligibility checks",
            "Manual activation review",
            "Activation history",
          ]}
        />
      );

    case "migration":
      return (
        <OperationalView
          title="Membership Migration"
          description="Manage migration of legacy association records into the KUHRSA membership system."
          items={[
            "Migration batches",
            "Legacy member matching",
            "Duplicate detection",
            "Migration validation",
          ]}
        />
      );

    case "renewal":
      return (
        <OperationalView
          title="Membership Renewal"
          description="Manage upcoming and current membership renewal workflows."
          items={[
            "Renewal queue",
            "Renewal eligibility",
            "Renewal status",
            "Renewal history",
          ]}
        />
      );

    case "cards":
      return (
        <OperationalView
          title="Membership Cards"
          description="Manage digital membership card issuance and lifecycle."
          items={[
            "Cards issued",
            "Cards pending",
            "Card replacement requests",
            "Card verification",
          ]}
        />
      );

    case "verification":
      return (
        <OperationalView
          title="Member Verification"
          description="Verify membership identity and current membership status."
          items={[
            "Member number lookup",
            "Membership status verification",
            "QR verification",
            "Verification history",
          ]}
        />
      );

    case "requests":
      return <RequestsView />;

    case "documents":
      return (
        <OperationalView
          title="Member Documents"
          description="Review and manage documents associated with membership records."
          items={[
            "Submitted documents",
            "Documents requiring review",
            "Verified documents",
            "Document categories",
          ]}
        />
      );

    case "history":
      return <HistoryView />;

    case "dashboard":
    default:
      return <DashboardView />;
  }
}
