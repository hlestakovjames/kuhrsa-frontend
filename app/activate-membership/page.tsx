"use client";

import Link from "next/link";
import {
  FormEvent,
  Suspense,
  useState,
} from "react";
import { useSearchParams } from "next/navigation";

type ActivationStage =
  | "verification"
  | "password"
  | "success";

type LookupResponse = {
  exists: boolean;
  eligible: boolean;
  code:
    | "ELIGIBLE"
    | "ALREADY_ACTIVE"
    | "ACTIVATION_NOT_AVAILABLE";
  message: string;
  member: {
    id: string;
    memberNumber: string;
    category: string;
    activationStatus: string;
  };
};

type VerificationResponse = {
  verified: boolean;
  code: "VERIFIED" | "ALREADY_ACTIVE";
  message: string;
  member: {
    id: string;
    memberNumber: string;
    category: string;
    activationStatus: string;
  };
};

type ActivationResponse = {
  message: string;
  member: {
    id: string;
    organizationId: string;
    category: string;
    registrationNumber: string | null;
    admissionNumber: string | null;
    memberNumber: string;
    yearOfStudy: number | null;
    graduationYear: number | null;
    staffNumber: string | null;
    position: string | null;
    programme: string | null;
    faculty: string | null;
    department: string | null;
    status: string;
    source: string;
    activationStatus: string;
    email: string | null;
    phone: string | null;
    address: string | null;
    county: string | null;
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
};

type ApiErrorResponse = {
  message?: string | string[] | Record<string, unknown>;
  error?: string;
  code?: string;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(
    /\/+$/,
    "",
  ) ?? "http://localhost:3001";

function mapErrorCode(code: string) {
  switch (code) {
    case "MEMBER_NOT_FOUND":
      return "We could not find a KUHRSA membership record matching the details provided.";

    case "MEMBER_ACCOUNT_NOT_LINKED":
      return "This KUHRSA membership has not yet been linked to a user account.";

    case "ALREADY_ACTIVE":
      return "Your KUHRSA account is already active. Please use the login page.";

    case "VERIFICATION_FAILED":
      return "The details provided do not match the KUHRSA membership record.";

    case "ACTIVATION_NOT_AVAILABLE":
      return "Activation is not available for this membership.";

    default:
      return "We could not complete the request. Please check your details and try again.";
  }
}

function getErrorMessage(
  payload: ApiErrorResponse,
) {
  if (
    payload &&
    typeof payload.message === "object" &&
    !Array.isArray(payload.message)
  ) {
    const nestedMessage =
      typeof payload.message.message === "string"
        ? payload.message.message
        : undefined;

    const nestedCode =
      typeof payload.message.code === "string"
        ? payload.message.code
        : undefined;

    if (nestedCode) {
      return mapErrorCode(nestedCode);
    }

    if (nestedMessage) {
      return nestedMessage;
    }
  }

  if (typeof payload.code === "string") {
    return mapErrorCode(payload.code);
  }

  if (Array.isArray(payload.message)) {
    return payload.message.join(" ");
  }

  if (typeof payload.message === "string") {
    return payload.message;
  }

  if (typeof payload.error === "string") {
    return payload.error;
  }

  return "We could not complete the request. Please check your details and try again.";
}

function getReadableCategory(category: string) {
  switch (category) {
    case "STUDENT":
      return "Student";

    case "ALUMNI":
      return "Alumni";

    case "LECTURER":
      return "Lecturer";

    default:
      return category;
  }
}

function ActivateMembershipContent() {
  const searchParams = useSearchParams();

  const tokenFromUrl =
    searchParams.get("token") ?? "";

  const [stage, setStage] =
    useState<ActivationStage>(
      "verification",
    );

  const [token, setToken] =
    useState(tokenFromUrl);

  const [memberNumber, setMemberNumber] =
    useState("");

  const [firstName, setFirstName] =
    useState("");

  const [lastName, setLastName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [lookup, setLookup] =
    useState<LookupResponse | null>(
      null,
    );

  const [verification, setVerification] =
    useState<VerificationResponse | null>(
      null,
    );

  const [activation, setActivation] =
    useState<ActivationResponse | null>(
      null,
    );

  const [submitting, setSubmitting] =
    useState(false);

  const [error, setError] =
    useState("");

  function resetError() {
    if (error) {
      setError("");
    }
  }

  function validateVerification() {
    setError("");

    if (!token.trim()) {
      setError(
        "Your activation token is required.",
      );
      return false;
    }

    if (!memberNumber.trim()) {
      setError(
        "Your KUHRSA member number is required.",
      );
      return false;
    }

    if (!firstName.trim()) {
      setError("First name is required.");
      return false;
    }

    if (!lastName.trim()) {
      setError("Last name is required.");
      return false;
    }

    if (!email.trim()) {
      setError("Email address is required.");
      return false;
    }

    if (
      !/^\S+@\S+\.\S+$/.test(
        email.trim(),
      )
    ) {
      setError(
        "Please provide a valid email address.",
      );
      return false;
    }

    return true;
  }

  function validatePassword() {
    setError("");

    if (password.length < 8) {
      setError(
        "Password must be at least 8 characters long.",
      );
      return false;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }

    return true;
  }

  async function lookupMembership() {
    if (!validateVerification()) {
      return false;
    }

    setSubmitting(true);
    setError("");
    setLookup(null);
    setVerification(null);

    try {
      const lookupResponse =
        await fetch(
          `${API_BASE_URL}/membership-activation/lookup`,
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              memberNumber:
                memberNumber
                  .trim()
                  .toUpperCase(),

              email:
                email
                  .trim()
                  .toLowerCase(),
            }),
          },
        );

      const lookupPayload =
        (await lookupResponse.json()) as
          | LookupResponse
          | ApiErrorResponse;

      if (!lookupResponse.ok) {
        throw new Error(
          getErrorMessage(
            lookupPayload as ApiErrorResponse,
          ),
        );
      }

      const lookupResult =
        lookupPayload as LookupResponse;

      setLookup(lookupResult);

      if (!lookupResult.exists) {
        setError(
          "We could not find a KUHRSA membership record matching the details provided.",
        );

        return false;
      }

      if (
        lookupResult.code ===
        "ALREADY_ACTIVE"
      ) {
        setError(
          "Your KUHRSA account is already active. Please use the login page.",
        );

        return false;
      }

      if (!lookupResult.eligible) {
        setError(
          lookupResult.message ||
            "This KUHRSA membership is not currently eligible for activation.",
        );

        return false;
      }

      return true;
    } catch (lookupError) {
      setError(
        lookupError instanceof Error
          ? lookupError.message
          : "KUHRSA membership lookup could not be completed.",
      );

      return false;
    } finally {
      setSubmitting(false);
    }
  }

  async function verifyMembership() {
    const lookupSucceeded =
      await lookupMembership();

    if (!lookupSucceeded) {
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const response =
        await fetch(
          `${API_BASE_URL}/membership-activation/verify`,
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              token:
                token.trim(),

              memberNumber:
                memberNumber.trim(),

              firstName:
                firstName.trim(),

              lastName:
                lastName.trim(),

              email:
                email
                  .trim()
                  .toLowerCase(),
            }),
          },
        );

      const payload =
        (await response.json()) as
          | VerificationResponse
          | ApiErrorResponse;

      if (!response.ok) {
        throw new Error(
          getErrorMessage(
            payload as ApiErrorResponse,
          ),
        );
      }

      const result =
        payload as VerificationResponse;

      if (
        result.code ===
        "ALREADY_ACTIVE"
      ) {
        setError(
          "Your KUHRSA account is already active. Please use the login page.",
        );
        return;
      }

      if (!result.verified) {
        setError(
          result.message ||
            "Membership verification failed.",
        );
        return;
      }

      setVerification(result);
      setStage("password");
    } catch (verificationError) {
      setError(
        verificationError instanceof Error
          ? verificationError.message
          : "Membership verification could not be completed.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  async function activateMembership() {
    if (!validatePassword()) {
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const response =
        await fetch(
          `${API_BASE_URL}/membership-activation`,
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              token:
                token.trim(),

              password,
            }),
          },
        );

      const payload =
        (await response.json()) as
          | ActivationResponse
          | ApiErrorResponse;

      if (!response.ok) {
        throw new Error(
          getErrorMessage(
            payload as ApiErrorResponse,
          ),
        );
      }

      setActivation(
        payload as ActivationResponse,
      );

      setPassword("");
      setConfirmPassword("");

      setStage("success");
    } catch (activationError) {
      setError(
        activationError instanceof Error
          ? activationError.message
          : "Membership activation could not be completed.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (
      stage ===
      "verification"
    ) {
      await verifyMembership();
      return;
    }

    if (
      stage ===
      "password"
    ) {
      await activateMembership();
    }
  }

  return (
    <main className="min-h-screen bg-[#F4FAFC] px-5 py-10 text-[#0B2633] sm:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
          <Link
            href="/"
            className="text-xs font-black uppercase tracking-wide text-[#168DB8] transition hover:text-[#0B2633]"
          >
            ← Back to KUHRSA
          </Link>
        </div>

        <div className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm">
          <div className="bg-[#0B2633] px-6 py-7 text-white sm:px-8">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5CC7E6]">
              Membership activation
            </p>

            <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Activate Your Membership
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">
              Verify your KUHRSA membership first,
              then create the password you will use
              to access your member portal.
            </p>
          </div>

          {stage !== "success" && (
            <div className="border-b border-black/5 px-6 py-5 sm:px-8">
              <div className="grid gap-3 sm:grid-cols-3">
                <ProgressStep
                  number="1"
                  title="Verify"
                  active={
                    stage ===
                    "verification"
                  }
                  completed={
                    stage ===
                    "password"
                  }
                />

                <ProgressStep
                  number="2"
                  title="Password"
                  active={
                    stage ===
                    "password"
                  }
                  completed={false}
                />

                <ProgressStep
                  number="3"
                  title="Complete"
                  active={false}
                  completed={false}
                />
              </div>
            </div>
          )}

          {stage ===
            "verification" && (
            <form
              onSubmit={handleSubmit}
              className="px-6 py-7 sm:px-8 sm:py-8"
            >
              {error && (
                <div className="mb-6 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {error}
                </div>
              )}

              {lookup?.eligible && (
                <div className="mb-6 rounded-2xl border border-[#168DB8]/10 bg-[#EAF7FB] px-4 py-3 text-sm font-semibold text-[#0B2633]">
                  KUHRSA membership record found.
                  Your membership is eligible for
                  activation. We are now verifying
                  the remaining details.
                </div>
              )}

              <div className="mb-7">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#168DB8]">
                  Step 1
                </p>

                <h2 className="mt-1 text-2xl font-black">
                  Verify Membership
                </h2>

                <p className="mt-2 text-sm leading-6 text-black/50">
                  Enter the details associated with
                  your KUHRSA activation request. The
                  system will first check whether your
                  membership exists before allowing you
                  to continue.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Field
                    label="Activation Token"
                    required
                    value={token}
                    onChange={(value) => {
                      setToken(value);
                      resetError();
                    }}
                    placeholder="Your activation token"
                    helper={
                      tokenFromUrl
                        ? "Your activation token was loaded from the activation link."
                        : "Enter the activation token provided by KUHRSA."
                    }
                  />
                </div>

                <Field
                  label="KUHRSA Member Number"
                  required
                  value={memberNumber}
                  onChange={(value) => {
                    setMemberNumber(
                      value,
                    );
                    resetError();
                    setLookup(null);
                  }}
                  placeholder="e.g. KUHRSA-STD-0006"
                />

                <Field
                  label="Email Address"
                  required
                  type="email"
                  value={email}
                  onChange={(value) => {
                    setEmail(value);
                    resetError();
                    setLookup(null);
                  }}
                  placeholder="you@example.com"
                />

                <Field
                  label="First Name"
                  required
                  value={firstName}
                  onChange={(value) => {
                    setFirstName(
                      value,
                    );
                    resetError();
                  }}
                  placeholder="Enter first name"
                />

                <Field
                  label="Last Name"
                  required
                  value={lastName}
                  onChange={(value) => {
                    setLastName(
                      value,
                    );
                    resetError();
                  }}
                  placeholder="Enter last name"
                />
              </div>

              <div className="mt-7 rounded-2xl bg-[#F4FAFC] p-5">
                <p className="text-sm font-black">
                  Why do we verify these details?
                </p>

                <p className="mt-2 text-sm leading-6 text-black/50">
                  KUHRSA first checks the membership
                  number and email against its membership
                  database. Only an existing and eligible
                  membership can proceed to identity
                  verification and password creation.
                </p>
              </div>

              <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href="/login"
                  className="text-center text-xs font-black uppercase tracking-wide text-black/45 transition hover:text-[#168DB8]"
                >
                  Already active? Login
                </Link>

                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-full bg-[#0B2633] px-7 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:bg-[#168DB8] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting
                    ? "Checking Membership..."
                    : "Verify Membership"}
                </button>
              </div>
            </form>
          )}

          {stage === "password" &&
            verification && (
              <form
                onSubmit={handleSubmit}
                className="px-6 py-7 sm:px-8 sm:py-8"
              >
                {error && (
                  <div className="mb-6 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                    {error}
                  </div>
                )}

                <div className="mb-7">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#168DB8]">
                    Step 2
                  </p>

                  <h2 className="mt-1 text-2xl font-black">
                    Create Your Password
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-black/50">
                    Your membership has been verified.
                    Create a password to activate your
                    KUHRSA member account.
                  </p>
                </div>

                <div className="rounded-3xl border border-[#168DB8]/10 bg-[#F4FAFC] p-6">
                  <div className="grid gap-4 sm:grid-cols-3">
                    <SummaryItem
                      label="Member Number"
                      value={
                        verification
                          .member
                          .memberNumber
                      }
                    />

                    <SummaryItem
                      label="Category"
                      value={getReadableCategory(
                        verification
                          .member
                          .category,
                      )}
                    />

                    <SummaryItem
                      label="Status"
                      value="VERIFIED"
                    />
                  </div>
                </div>

                <div className="mt-7 grid gap-5">
                  <Field
                    label="Create Password"
                    required
                    type="password"
                    value={password}
                    onChange={(value) => {
                      setPassword(
                        value,
                      );
                      resetError();
                    }}
                    placeholder="At least 8 characters"
                  />

                  <Field
                    label="Confirm Password"
                    required
                    type="password"
                    value={
                      confirmPassword
                    }
                    onChange={(value) => {
                      setConfirmPassword(
                        value,
                      );
                      resetError();
                    }}
                    placeholder="Re-enter your password"
                  />
                </div>

                <div className="mt-6 rounded-2xl border border-[#168DB8]/10 bg-white p-5">
                  <p className="text-sm font-black">
                    Account activation
                  </p>

                  <p className="mt-2 text-sm leading-6 text-black/50">
                    Submitting this form will activate
                    your user account and mark the
                    membership activation as completed.
                    The backend will perform one final
                    eligibility check before activation.
                  </p>
                </div>

                <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    disabled={submitting}
                    onClick={() => {
                      setError("");
                      setLookup(null);
                      setVerification(
                        null,
                      );
                      setStage(
                        "verification",
                      );
                    }}
                    className="text-center text-xs font-black uppercase tracking-wide text-black/45 transition hover:text-[#168DB8] disabled:opacity-40"
                  >
                    ← Back to Verification
                  </button>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="rounded-full bg-[#0B2633] px-7 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:bg-[#168DB8] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting
                      ? "Activating..."
                      : "Activate Membership"}
                  </button>
                </div>
              </form>
            )}

          {stage === "success" &&
            activation && (
              <div className="px-6 py-8 sm:px-8 sm:py-10">
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF7FB] text-2xl text-[#168DB8]">
                    ✓
                  </div>

                  <p className="mt-5 text-[10px] font-black uppercase tracking-[0.2em] text-[#168DB8]">
                    Activation complete
                  </p>

                  <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                    Your Membership Is Activated
                  </h2>

                  <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-black/50">
                    Your KUHRSA account is now active.
                    You can use your registered email
                    address and the password you just
                    created to sign in.
                  </p>
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <StatusCard
                    label="Member Number"
                    value={
                      activation.member
                        .memberNumber
                    }
                  />

                  <StatusCard
                    label="Category"
                    value={getReadableCategory(
                      activation.member
                        .category,
                    )}
                  />

                  <StatusCard
                    label="Account Status"
                    value={
                      activation.member.user
                        ?.status ??
                      "ACTIVE"
                    }
                  />

                  <StatusCard
                    label="Activation Status"
                    value={
                      activation.member
                        .activationStatus
                    }
                  />
                </div>

                <div className="mt-6 rounded-3xl bg-[#F4FAFC] p-6">
                  <p className="text-sm font-black">
                    You can now access the member
                    portal.
                  </p>

                  <p className="mt-2 text-sm leading-6 text-black/50">
                    Sign in to manage your KUHRSA
                    membership and access member
                    services.
                  </p>

                  <div className="mt-5">
                    <Link
                      href="/login"
                      className="inline-flex rounded-full bg-[#0B2633] px-6 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:bg-[#168DB8]"
                    >
                      Continue to Login
                    </Link>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </main>
  );
}

export default function ActivateMembershipPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#F4FAFC] px-5 py-20 text-[#0B2633]">
          <div className="mx-auto max-w-xl rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Membership activation
            </p>

            <h1 className="mt-3 text-3xl font-black">
              Loading activation...
            </h1>
          </div>
        </main>
      }
    >
      <ActivateMembershipContent />
    </Suspense>
  );
}

function Field({
  label,
  required = false,
  value,
  onChange,
  placeholder,
  type = "text",
  helper,
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  helper?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-black uppercase tracking-wide text-black/55">
        {label}

        {required && (
          <span className="ml-1 text-[#168DB8]">
            *
          </span>
        )}
      </span>

      <input
        type={type}
        value={value}
        onChange={(event) =>
          onChange(
            event.target.value,
          )
        }
        placeholder={placeholder}
        autoComplete={
          type === "password"
            ? "new-password"
            : undefined
        }
        className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3.5 text-sm text-[#0B2633] outline-none transition placeholder:text-black/25 focus:border-[#168DB8] focus:ring-4 focus:ring-[#168DB8]/10"
      />

      {helper && (
        <span className="mt-2 block text-xs leading-5 text-black/40">
          {helper}
        </span>
      )}
    </label>
  );
}

function ProgressStep({
  number,
  title,
  active,
  completed,
}: {
  number: string;
  title: string;
  active: boolean;
  completed: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl px-3 py-3 ${
        active
          ? "bg-[#0B2633] text-white"
          : completed
            ? "bg-[#EAF7FB] text-[#0B2633]"
            : "bg-black/[0.025] text-black/40"
      }`}
    >
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-black ${
          active || completed
            ? "bg-[#168DB8] text-white"
            : "bg-black/5 text-black/40"
        }`}
      >
        {completed
          ? "✓"
          : number}
      </span>

      <span className="text-sm font-black">
        {title}
      </span>
    </div>
  );
}

function SummaryItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-black/35">
        {label}
      </p>

      <p className="mt-1 text-sm font-black text-[#0B2633]">
        {value}
      </p>
    </div>
  );
}

function StatusCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-black/35">
        {label}
      </p>

      <p className="mt-2 text-lg font-black text-[#0B2633]">
        {value}
      </p>
    </div>
  );
}