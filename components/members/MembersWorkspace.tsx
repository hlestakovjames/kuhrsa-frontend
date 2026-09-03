"use client";

import {
  FormEvent,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import {
  getToken,
  logout,
} from "@/lib/auth";

type MemberCategory =
  | "STUDENT"
  | "ALUMNI"
  | "LECTURER";

type MemberStatus =
  | "PENDING"
  | "ACTIVE"
  | "INACTIVE"
  | "SUSPENDED"
  | "ARCHIVED";

type Member = {
  id: string;
  organizationId: string;
  category: MemberCategory;
  registrationNumber: string | null;
  memberNumber: string;
  status: MemberStatus;
  createdAt: string;
  updatedAt: string;
  organization: {
    id: string;
    name: string;
    code: string;
  } | null;
  user: {
    id: string;
    email: string;
    status: string;
    isSystemOwner: boolean;
  } | null;
};

type MemberForm = {
  category: MemberCategory;
  registrationNumber: string;
  email: string;
};

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://localhost:3001";

const EMPTY_FORM: MemberForm = {
  category: "STUDENT",
  registrationNumber: "",
  email: "",
};

function formatStatus(status: string) {
  return status
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) =>
      letter.toUpperCase(),
    );
}

function formatCategory(
  category: MemberCategory,
) {
  switch (category) {
    case "STUDENT":
      return "Student";

    case "ALUMNI":
      return "Alumni";

    case "LECTURER":
      return "Lecturer";
  }
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat(
    "en-KE",
    {
      dateStyle: "medium",
    },
  ).format(new Date(value));
}

function statusClasses(
  status: MemberStatus,
) {
  switch (status) {
    case "ACTIVE":
      return "bg-emerald-50 text-emerald-700 ring-emerald-600/10";

    case "PENDING":
      return "bg-amber-50 text-amber-700 ring-amber-600/10";

    case "SUSPENDED":
      return "bg-rose-50 text-rose-700 ring-rose-600/10";

    case "INACTIVE":
      return "bg-slate-100 text-slate-600 ring-slate-500/10";

    case "ARCHIVED":
      return "bg-zinc-100 text-zinc-600 ring-zinc-500/10";

    default:
      return "bg-slate-100 text-slate-600 ring-slate-500/10";
  }
}

async function apiRequest<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const token = getToken();

  if (!token) {
    throw new Error(
      "Your session has expired. Please sign in again.",
    );
  }

  const response = await fetch(
    `${API_URL}${path}`,
    {
      ...options,
      headers: {
        "Content-Type":
          "application/json",
        Authorization: `Bearer ${token}`,
        ...(options.headers ?? {}),
      },
      cache: "no-store",
    },
  );

  const data = await response
    .json()
    .catch(() => null);

  if (response.status === 401) {
    logout();

    throw new Error(
      "Your session has expired. Please sign in again.",
    );
  }

  if (!response.ok) {
    const message = Array.isArray(
      data?.message,
    )
      ? data.message.join(", ")
      : data?.message;

    throw new Error(
      message ||
        "The request could not be completed.",
    );
  }

  return data as T;
}

export default function MembersWorkspace() {
  const router = useRouter();

  const [members, setMembers] =
    useState<Member[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [busy, setBusy] =
    useState(false);

  const [error, setError] =
    useState("");

  const [notice, setNotice] =
    useState("");

  const [search, setSearch] =
    useState("");

  const [categoryFilter, setCategoryFilter] =
    useState<"ALL" | MemberCategory>(
      "ALL",
    );

  const [statusFilter, setStatusFilter] =
    useState<"ALL" | MemberStatus>(
      "ALL",
    );

  const [
    selectedMember,
    setSelectedMember,
  ] = useState<Member | null>(null);

  const [showCreate, setShowCreate] =
    useState(false);

  const [
    editingMember,
    setEditingMember,
  ] = useState<Member | null>(null);

  const [form, setForm] =
    useState<MemberForm>(
      EMPTY_FORM,
    );

  const loadMembers =
    useCallback(async () => {
      setLoading(true);
      setError("");

      try {
        const data =
          await apiRequest<Member[]>(
            "/members",
          );

        setMembers(data);
      } catch (requestError) {
        const message =
          requestError instanceof Error
            ? requestError.message
            : "Unable to load members.";

        if (
          message
            .toLowerCase()
            .includes("sign in")
        ) {
          router.push("/login");
          return;
        }

        setError(message);
      } finally {
        setLoading(false);
      }
    }, [router]);

  useEffect(() => {
    // This effect intentionally synchronizes
    // component state with the external Members API.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void loadMembers();
  }, [loadMembers]);

  const filteredMembers =
    useMemo(() => {
      const query =
        search.trim().toLowerCase();

      return members.filter(
        (member) => {
          const matchesSearch =
            !query ||
            member.memberNumber
              .toLowerCase()
              .includes(query) ||
            (
              member.registrationNumber ??
              ""
            )
              .toLowerCase()
              .includes(query) ||
            (
              member.user?.email ??
              ""
            )
              .toLowerCase()
              .includes(query);

          const matchesCategory =
            categoryFilter === "ALL" ||
            member.category ===
              categoryFilter;

          const matchesStatus =
            statusFilter === "ALL" ||
            member.status ===
              statusFilter;

          return (
            matchesSearch &&
            matchesCategory &&
            matchesStatus
          );
        },
      );
    }, [
      members,
      search,
      categoryFilter,
      statusFilter,
    ]);

  const stats = useMemo(() => {
    return {
      total: members.length,

      pending: members.filter(
        (member) =>
          member.status ===
          "PENDING",
      ).length,

      active: members.filter(
        (member) =>
          member.status ===
          "ACTIVE",
      ).length,

      suspended: members.filter(
        (member) =>
          member.status ===
          "SUSPENDED",
      ).length,
    };
  }, [members]);

  function openCreate() {
    setError("");
    setNotice("");
    setForm(EMPTY_FORM);
    setEditingMember(null);
    setSelectedMember(null);
    setShowCreate(true);
  }

  function openEdit(
    member: Member,
  ) {
    setError("");
    setNotice("");
    setShowCreate(false);
    setSelectedMember(null);
    setEditingMember(member);

    setForm({
      category: member.category,
      registrationNumber:
        member.registrationNumber ??
        "",
      email:
        member.user?.email ?? "",
    });
  }

  function closePanels() {
    if (busy) {
      return;
    }

    setShowCreate(false);
    setEditingMember(null);
    setSelectedMember(null);
    setForm(EMPTY_FORM);
  }

  async function handleCreate(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setBusy(true);
    setError("");
    setNotice("");

    try {
      const payload: {
        category: MemberCategory;
        registrationNumber?: string;
        email?: string;
      } = {
        category: form.category,
      };

      if (
        form.registrationNumber.trim()
      ) {
        payload.registrationNumber =
          form.registrationNumber.trim();
      }

      if (form.email.trim()) {
        payload.email =
          form.email.trim();
      }

      const member =
        await apiRequest<Member>(
          "/members",
          {
            method: "POST",
            body: JSON.stringify(
              payload,
            ),
          },
        );

      setMembers((current) => [
        member,
        ...current,
      ]);

      setShowCreate(false);
      setForm(EMPTY_FORM);

      setNotice(
        `${member.memberNumber} was created successfully.`,
      );
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Unable to create member.",
      );
    } finally {
      setBusy(false);
    }
  }

  async function handleEdit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (!editingMember) {
      return;
    }

    setBusy(true);
    setError("");
    setNotice("");

    try {
      const payload: {
        registrationNumber?: string;
        email?: string;
      } = {};

      const registrationNumber =
        form.registrationNumber.trim();

      const email =
        form.email.trim();

      if (registrationNumber) {
        payload.registrationNumber =
          registrationNumber;
      }

      if (email) {
        payload.email = email;
      }

      const updated =
        await apiRequest<Member>(
          `/members/${editingMember.id}`,
          {
            method: "PATCH",
            body: JSON.stringify(
              payload,
            ),
          },
        );

      setMembers((current) =>
        current.map((member) =>
          member.id === updated.id
            ? updated
            : member,
        ),
      );

      setEditingMember(null);
      setForm(EMPTY_FORM);

      setNotice(
        `${updated.memberNumber} was updated successfully.`,
      );
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Unable to update member.",
      );
    } finally {
      setBusy(false);
    }
  }

  async function handleStatusAction(
    member: Member,
    action:
      | "approve"
      | "activate"
      | "suspend",
  ) {
    setBusy(true);
    setError("");
    setNotice("");

    try {
      const updated =
        await apiRequest<Member>(
          `/members/${member.id}/${action}`,
          {
            method: "POST",
            body: JSON.stringify({}),
          },
        );

      setMembers((current) =>
        current.map((item) =>
          item.id === updated.id
            ? updated
            : item,
        ),
      );

      setSelectedMember(updated);

      const actionLabel =
        action === "approve"
          ? "approved"
          : action === "activate"
            ? "activated"
            : "suspended";

      setNotice(
        `${updated.memberNumber} was ${actionLabel} successfully.`,
      );
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : `Unable to ${action} member.`,
      );
    } finally {
      setBusy(false);
    }
  }

  async function openMember(
    member: Member,
  ) {
    setError("");
    setNotice("");

    try {
      const details =
        await apiRequest<Member>(
          `/members/${member.id}`,
        );

      setSelectedMember(details);
      setShowCreate(false);
      setEditingMember(null);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Unable to load member details.",
      );
    }
  }

  return (
    <div className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#168DB8]">
            Administration
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-tight text-[#0B2633] sm:text-4xl">
            Members
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-black/55 sm:text-base">
            Manage KUHRSA membership records,
            member numbers, registration details
            and member lifecycle actions.
          </p>
        </div>

        <button
          type="button"
          onClick={openCreate}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#168DB8] px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-[#168DB8]/20 transition hover:bg-[#11799D]"
        >
          <span className="text-lg leading-none">
            +
          </span>

          Add Member
        </button>
      </div>

      {(error || notice) && (
        <div className="mt-6">
          {error && (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm font-semibold text-rose-700">
              {error}
            </div>
          )}

          {notice && !error && (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-semibold text-emerald-700">
              {notice}
            </div>
          )}
        </div>
      )}

      <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Total Members"
          value={String(stats.total)}
          detail="All member records"
        />

        <StatCard
          label="Pending"
          value={String(stats.pending)}
          detail="Awaiting approval"
        />

        <StatCard
          label="Active"
          value={String(stats.active)}
          detail="Currently active"
        />

        <StatCard
          label="Suspended"
          value={String(stats.suspended)}
          detail="Requires attention"
        />
      </section>

      <section className="mt-6 overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-black/5">
        <div className="border-b border-black/5 p-5 sm:p-6">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <h2 className="text-xl font-black tracking-tight text-[#0B2633]">
                Member Registry
              </h2>

              <p className="mt-1 text-sm text-black/45">
                {filteredMembers.length} of{" "}
                {members.length} records shown
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-[minmax(240px,1fr)_170px_170px]">
              <input
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value,
                  )
                }
                placeholder="Search number, registration or email"
                className="h-11 rounded-xl border border-black/10 bg-[#F8FBFC] px-4 text-sm font-medium text-[#0B2633] outline-none transition placeholder:text-black/30 focus:border-[#168DB8] focus:ring-4 focus:ring-[#168DB8]/10"
              />

              <select
                value={categoryFilter}
                onChange={(event) =>
                  setCategoryFilter(
                    event.target.value as
                      | "ALL"
                      | MemberCategory,
                  )
                }
                className="h-11 rounded-xl border border-black/10 bg-[#F8FBFC] px-4 text-sm font-bold text-[#0B2633] outline-none focus:border-[#168DB8] focus:ring-4 focus:ring-[#168DB8]/10"
              >
                <option value="ALL">
                  All Categories
                </option>

                <option value="STUDENT">
                  Students
                </option>

                <option value="ALUMNI">
                  Alumni
                </option>

                <option value="LECTURER">
                  Lecturers
                </option>
              </select>

              <select
                value={statusFilter}
                onChange={(event) =>
                  setStatusFilter(
                    event.target.value as
                      | "ALL"
                      | MemberStatus,
                  )
                }
                className="h-11 rounded-xl border border-black/10 bg-[#F8FBFC] px-4 text-sm font-bold text-[#0B2633] outline-none focus:border-[#168DB8] focus:ring-4 focus:ring-[#168DB8]/10"
              >
                <option value="ALL">
                  All Statuses
                </option>

                <option value="PENDING">
                  Pending
                </option>

                <option value="ACTIVE">
                  Active
                </option>

                <option value="INACTIVE">
                  Inactive
                </option>

                <option value="SUSPENDED">
                  Suspended
                </option>

                <option value="ARCHIVED">
                  Archived
                </option>
              </select>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="p-6">
            <div className="space-y-3">
              {Array.from({
                length: 6,
              }).map((_, index) => (
                <div
                  key={index}
                  className="h-16 animate-pulse rounded-2xl bg-[#F4FAFC]"
                />
              ))}
            </div>
          </div>
        ) : filteredMembers.length ===
          0 ? (
          <div className="p-10 text-center sm:p-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4FAFC] text-xl font-black text-[#168DB8]">
              M
            </div>

            <h3 className="mt-5 text-xl font-black text-[#0B2633]">
              No members found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-black/45">
              Try changing your search or filters,
              or create the first member record.
            </p>

            <button
              type="button"
              onClick={openCreate}
              className="mt-6 rounded-full bg-[#168DB8] px-5 py-3 text-sm font-black text-white hover:bg-[#11799D]"
            >
              Add Member
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px]">
              <thead>
                <tr className="border-b border-black/5 bg-[#F8FBFC] text-left">
                  <TableHead>
                    Member Number
                  </TableHead>

                  <TableHead>
                    Category
                  </TableHead>

                  <TableHead>
                    Registration Number
                  </TableHead>

                  <TableHead>
                    Linked Account
                  </TableHead>

                  <TableHead>
                    Status
                  </TableHead>

                  <TableHead>
                    Created
                  </TableHead>

                  <TableHead align="right">
                    Actions
                  </TableHead>
                </tr>
              </thead>

              <tbody>
                {filteredMembers.map(
                  (member) => (
                    <tr
                      key={member.id}
                      className="border-b border-black/5 last:border-0 hover:bg-[#FBFDFE]"
                    >
                      <td className="px-5 py-5">
                        <button
                          type="button"
                          onClick={() =>
                            void openMember(
                              member,
                            )
                          }
                          className="text-left"
                        >
                          <p className="text-sm font-black text-[#0B2633]">
                            {
                              member.memberNumber
                            }
                          </p>

                          <p className="mt-1 text-[11px] text-black/35">
                            ID{" "}
                            {member.id.slice(
                              0,
                              8,
                            )}
                          </p>
                        </button>
                      </td>

                      <td className="px-5 py-5 text-sm font-semibold text-black/65">
                        {formatCategory(
                          member.category,
                        )}
                      </td>

                      <td className="px-5 py-5 text-sm font-semibold text-black/60">
                        {member.registrationNumber ??
                          "—"}
                      </td>

                      <td className="px-5 py-5">
                        {member.user ? (
                          <div>
                            <p className="text-sm font-semibold text-[#0B2633]">
                              {
                                member
                                  .user
                                  .email
                              }
                            </p>

                            <p className="mt-1 text-[11px] text-black/35">
                              {formatStatus(
                                member
                                  .user
                                  .status,
                              )}
                            </p>
                          </div>
                        ) : (
                          <span className="text-sm font-semibold text-black/35">
                            Not linked
                          </span>
                        )}
                      </td>

                      <td className="px-5 py-5">
                        <span
                          className={`inline-flex rounded-full px-3 py-1.5 text-[11px] font-black ring-1 ${statusClasses(
                            member.status,
                          )}`}
                        >
                          {formatStatus(
                            member.status,
                          )}
                        </span>
                      </td>

                      <td className="px-5 py-5 text-sm font-semibold text-black/50">
                        {formatDate(
                          member.createdAt,
                        )}
                      </td>

                      <td className="px-5 py-5">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              void openMember(
                                member,
                              )
                            }
                            className="rounded-xl border border-black/10 px-3 py-2 text-xs font-black text-[#0B2633] hover:bg-black/[0.03]"
                          >
                            View
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              openEdit(
                                member,
                              )
                            }
                            className="rounded-xl border border-[#168DB8]/20 bg-[#168DB8]/5 px-3 py-2 text-xs font-black text-[#168DB8] hover:bg-[#168DB8]/10"
                          >
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {(showCreate ||
        editingMember ||
        selectedMember) && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center bg-[#0B2633]/55 backdrop-blur-sm sm:items-center">
          <div className="max-h-[92vh] w-full overflow-y-auto rounded-t-[2rem] bg-white shadow-2xl sm:mx-4 sm:max-w-2xl sm:rounded-[2rem]">
            {selectedMember && (
              <MemberDetails
                member={selectedMember}
                busy={busy}
                onClose={closePanels}
                onEdit={() =>
                  openEdit(
                    selectedMember,
                  )
                }
                onApprove={() =>
                  void handleStatusAction(
                    selectedMember,
                    "approve",
                  )
                }
                onActivate={() =>
                  void handleStatusAction(
                    selectedMember,
                    "activate",
                  )
                }
                onSuspend={() =>
                  void handleStatusAction(
                    selectedMember,
                    "suspend",
                  )
                }
              />
            )}

            {(showCreate ||
              editingMember) && (
              <MemberFormPanel
                editingMember={
                  editingMember
                }
                form={form}
                busy={busy}
                onClose={closePanels}
                onChange={setForm}
                onSubmit={
                  editingMember
                    ? handleEdit
                    : handleCreate
                }
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-black/5">
      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-black/35">
        {label}
      </p>

      <p className="mt-3 text-3xl font-black tracking-tight text-[#0B2633]">
        {value}
      </p>

      <p className="mt-1 text-xs font-semibold text-black/40">
        {detail}
      </p>
    </div>
  );
}

function TableHead({
  children,
  align,
}: {
  children: ReactNode;
  align?: "right";
}) {
  return (
    <th
      className={`px-5 py-4 text-[10px] font-black uppercase tracking-[0.14em] text-black/35 ${
        align === "right"
          ? "text-right"
          : ""
      }`}
    >
      {children}
    </th>
  );
}

function MemberDetails({
  member,
  busy,
  onClose,
  onEdit,
  onApprove,
  onActivate,
  onSuspend,
}: {
  member: Member;
  busy: boolean;
  onClose: () => void;
  onEdit: () => void;
  onApprove: () => void;
  onActivate: () => void;
  onSuspend: () => void;
}) {
  return (
    <div>
      <div className="border-b border-black/5 px-6 py-6 sm:px-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#168DB8]">
              Member Record
            </p>

            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#0B2633]">
              {member.memberNumber}
            </h2>

            <p className="mt-1 text-sm text-black/45">
              {formatCategory(
                member.category,
              )}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-lg text-black/50 hover:bg-black/[0.03]"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      </div>

      <div className="space-y-6 p-6 sm:p-7">
        <div className="grid gap-4 sm:grid-cols-2">
          <DetailBox
            label="Category"
            value={formatCategory(
              member.category,
            )}
          />

          <DetailBox
            label="Status"
            value={formatStatus(
              member.status,
            )}
          />

          <DetailBox
            label="Member Number"
            value={member.memberNumber}
          />

          <DetailBox
            label="Registration Number"
            value={
              member.registrationNumber ??
              "Not assigned"
            }
          />

          <DetailBox
            label="Linked Account"
            value={
              member.user?.email ??
              "Not linked"
            }
          />

          <DetailBox
            label="Created"
            value={formatDate(
              member.createdAt,
            )}
          />
        </div>

        <div className="rounded-2xl bg-[#F6FBFD] p-5 ring-1 ring-black/5">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-black/35">
            Lifecycle
          </p>

          <p className="mt-2 text-sm leading-6 text-black/55">
            Member status changes are
            recorded through the administration
            API and audit log.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onEdit}
            disabled={busy}
            className="rounded-xl border border-black/10 px-4 py-3 text-sm font-black text-[#0B2633] hover:bg-black/[0.03] disabled:opacity-50"
          >
            Edit
          </button>

          {member.status ===
            "PENDING" && (
            <button
              type="button"
              onClick={onApprove}
              disabled={busy}
              className="rounded-xl bg-[#168DB8] px-4 py-3 text-sm font-black text-white hover:bg-[#11799D] disabled:opacity-50"
            >
              Approve
            </button>
          )}

          {member.status !==
            "ACTIVE" &&
            member.status !==
              "ARCHIVED" && (
              <button
                type="button"
                onClick={onActivate}
                disabled={busy}
                className="rounded-xl bg-emerald-600 px-4 py-3 text-sm font-black text-white hover:bg-emerald-700 disabled:opacity-50"
              >
                Activate
              </button>
            )}

          {member.status !==
            "SUSPENDED" &&
            member.status !==
              "ARCHIVED" && (
              <button
                type="button"
                onClick={onSuspend}
                disabled={busy}
                className="rounded-xl bg-rose-600 px-4 py-3 text-sm font-black text-white hover:bg-rose-700 disabled:opacity-50"
              >
                Suspend
              </button>
            )}
        </div>
      </div>
    </div>
  );
}

function DetailBox({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-[#F8FBFC] p-4 ring-1 ring-black/5">
      <p className="text-[10px] font-black uppercase tracking-[0.14em] text-black/35">
        {label}
      </p>

      <p className="mt-2 break-words text-sm font-bold text-[#0B2633]">
        {value}
      </p>
    </div>
  );
}

function MemberFormPanel({
  editingMember,
  form,
  busy,
  onClose,
  onChange,
  onSubmit,
}: {
  editingMember: Member | null;
  form: MemberForm;
  busy: boolean;
  onClose: () => void;
  onChange: (
    value: MemberForm,
  ) => void;
  onSubmit: (
    event: FormEvent<HTMLFormElement>,
  ) => void;
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="border-b border-black/5 px-6 py-6 sm:px-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#168DB8]">
              {editingMember
                ? "Edit Member"
                : "New Member"}
            </p>

            <h2 className="mt-2 text-2xl font-black tracking-tight text-[#0B2633]">
              {editingMember
                ? editingMember.memberNumber
                : "Create Member"}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={busy}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-lg text-black/50 hover:bg-black/[0.03] disabled:opacity-50"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      </div>

      <div className="space-y-5 p-6 sm:p-7">
        {!editingMember && (
          <div className="rounded-2xl bg-[#F6FBFD] p-4 text-sm leading-6 text-black/55 ring-1 ring-black/5">
            Member numbers are generated
            automatically from the selected
            category. The category cannot be changed
            after creation through this first V1
            workflow.
          </div>
        )}

        <label className="block">
          <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-black/40">
            Member Category
          </span>

          <select
            value={form.category}
            onChange={(event) =>
              onChange({
                ...form,
                category:
                  event.target
                    .value as MemberCategory,
              })
            }
            disabled={
              Boolean(
                editingMember,
              ) || busy
            }
            className="h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm font-bold text-[#0B2633] outline-none focus:border-[#168DB8] focus:ring-4 focus:ring-[#168DB8]/10 disabled:bg-black/[0.03]"
          >
            <option value="STUDENT">
              Student
            </option>

            <option value="ALUMNI">
              Alumni
            </option>

            <option value="LECTURER">
              Lecturer
            </option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-black/40">
            University Registration Number
          </span>

          <input
            type="text"
            value={
              form.registrationNumber
            }
            onChange={(event) =>
              onChange({
                ...form,
                registrationNumber:
                  event.target.value,
              })
            }
            disabled={busy}
            placeholder="e.g. KU/HR/2024/001"
            className="h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm font-semibold text-[#0B2633] outline-none placeholder:text-black/25 focus:border-[#168DB8] focus:ring-4 focus:ring-[#168DB8]/10"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-black uppercase tracking-[0.12em] text-black/40">
            Existing User Email
          </span>

          <input
            type="email"
            value={form.email}
            onChange={(event) =>
              onChange({
                ...form,
                email:
                  event.target.value,
              })
            }
            disabled={busy}
            placeholder="member@example.com"
            className="h-12 w-full rounded-xl border border-black/10 bg-white px-4 text-sm font-semibold text-[#0B2633] outline-none placeholder:text-black/25 focus:border-[#168DB8] focus:ring-4 focus:ring-[#168DB8]/10"
          />

          <p className="mt-2 text-xs leading-5 text-black/40">
            The current backend links a member
            to an existing KUHRSA user account.
            Leave this empty when creating an
            unlinked member record.
          </p>
        </label>

        <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            disabled={busy}
            className="rounded-xl border border-black/10 px-5 py-3 text-sm font-black text-[#0B2633] hover:bg-black/[0.03] disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={busy}
            className="rounded-xl bg-[#168DB8] px-5 py-3 text-sm font-black text-white hover:bg-[#11799D] disabled:opacity-50"
          >
            {busy
              ? "Saving..."
              : editingMember
                ? "Save Changes"
                : "Create Member"}
          </button>
        </div>
      </div>
    </form>
  );
}