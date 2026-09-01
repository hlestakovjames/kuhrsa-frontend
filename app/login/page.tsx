"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type AccessMode = "login" | "activate";
type ActivationStep = 1 | 2 | 3 | 4 | 5;

type MembershipPaymentStatus =
  | "PAID"
  | "DUE";

const activationSteps = [
  { number: 1, label: "Identify" },
  { number: 2, label: "Verify" },
  { number: 3, label: "Account" },
  { number: 4, label: "Payment" },
  { number: 5, label: "Complete" },
] as const;

export default function LoginPage() {
  const [mode, setMode] =
    useState<AccessMode>("login");

  const [activationStep, setActivationStep] =
    useState<ActivationStep>(1);

  const [activationError, setActivationError] =
    useState("");

  /*
   * Frontend-only placeholder for the future backend result.
   *
   * The backend will eventually determine:
   * - whether the member exists
   * - whether the record is migrated
   * - whether the account is already activated
   * - whether membership is already paid
   * - the exact amount due
   *
   * For now, "DUE" allows the full payment path
   * to be tested. Backend integration will replace
   * this value dynamically.
   */
  const [membershipPaymentStatus, setMembershipPaymentStatus] =
    useState<MembershipPaymentStatus>("DUE");

  const [activation, setActivation] = useState({
    identifier: "",
    email: "",
    phone: "",

    registrationNumber: "",
    membershipNumber: "",

    firstName: "",
    lastName: "",
    admissionNumber: "",

    password: "",
    confirmPassword: "",
    acceptTerms: false,

    paymentMethod: "M-Pesa",
    mpesaNumber: "",
  });

  const updateActivation = <
    K extends keyof typeof activation
  >(
    field: K,
    value: (typeof activation)[K],
  ) => {
    setActivation((current) => ({
      ...current,
      [field]: value,
    }));

    setActivationError("");
  };

  const changeMode = (nextMode: AccessMode) => {
    setMode(nextMode);
    setActivationError("");
    setActivationStep(1);
  };

  const validateActivationStep = (
    currentStep: ActivationStep,
  ) => {
    if (currentStep === 1) {
      if (
        !activation.identifier ||
        !activation.email ||
        !activation.phone
      ) {
        return "Enter your registration or membership number, email address and phone number.";
      }
    }

    if (currentStep === 2) {
      if (
        !activation.firstName ||
        !activation.lastName ||
        !activation.admissionNumber
      ) {
        return "Please confirm the required membership details.";
      }
    }

    if (currentStep === 3) {
      if (
        !activation.password ||
        !activation.confirmPassword
      ) {
        return "Please create and confirm your password.";
      }

      if (activation.password.length < 8) {
        return "Your password must contain at least 8 characters.";
      }

      if (
        activation.password !==
        activation.confirmPassword
      ) {
        return "Your passwords do not match.";
      }

      if (!activation.acceptTerms) {
        return "Please accept the KUHRSA terms and privacy statement.";
      }
    }

    if (
      currentStep === 4 &&
      membershipPaymentStatus === "DUE"
    ) {
      if (!activation.paymentMethod) {
        return "Please select a payment method.";
      }

      if (
        activation.paymentMethod === "M-Pesa" &&
        !activation.mpesaNumber
      ) {
        return "Please enter the M-Pesa number to use for payment.";
      }
    }

    return "";
  };

  const nextActivationStep = () => {
    const error = validateActivationStep(
      activationStep,
    );

    if (error) {
      setActivationError(error);
      return;
    }

    setActivationError("");

    /*
     * If membership is already paid, skip the payment
     * step and complete activation.
     */
    if (
      activationStep === 3 &&
      membershipPaymentStatus === "PAID"
    ) {
      setActivationStep(5);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    if (activationStep < 5) {
      setActivationStep(
        (current) => (current + 1) as ActivationStep,
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const previousActivationStep = () => {
    setActivationError("");

    if (activationStep > 1) {
      setActivationStep(
        (current) => (current - 1) as ActivationStep,
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const completeActivation = () => {
    const error = validateActivationStep(4);

    if (error) {
      setActivationError(error);
      return;
    }

    setActivationError("");
    setMembershipPaymentStatus("PAID");
    setActivationStep(5);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const fullName = useMemo(
    () =>
      [activation.firstName, activation.lastName]
        .filter(Boolean)
        .join(" "),
    [activation.firstName, activation.lastName],
  );

  const paymentRequired =
    membershipPaymentStatus === "DUE";

  return (
    <main className="min-h-screen bg-[#F4FAFC] px-5 py-12 sm:py-16">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-black/5 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Brand Panel */}
          <section
            className={`relative hidden overflow-hidden p-10 text-white lg:flex lg:flex-col lg:justify-between ${
              mode === "login"
                ? "bg-[#2BB9EC]"
                : "bg-[#F700BA]"
            }`}
          >
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-3"
              >
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

                  <div
                    className={`text-[10px] font-bold uppercase tracking-[0.16em] ${
                      mode === "login"
                        ? "text-[#0B2633]"
                        : "text-white/80"
                    }`}
                  >
                    Student Association
                  </div>
                </div>
              </Link>

              <div className="mt-16 max-w-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-white/70">
                  {mode === "login"
                    ? "Member Portal"
                    : "Membership Activation"}
                </p>

                <h2 className="mt-4 text-4xl font-black leading-tight">
                  {mode === "login"
                    ? "Your KUHRSA access point."
                    : "Activate your KUHRSA membership."}
                </h2>

                <p className="mt-5 leading-7 text-white/80">
                  {mode === "login"
                    ? "Sign in using your email address or registration number to access your KUHRSA member account."
                    : "Verify your migrated membership record, create your account and complete any membership payment required before activation."}
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
              <Link
                href="/"
                className="flex items-center gap-3"
              >
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

                  <div
                    className={`text-[9px] font-bold uppercase tracking-[0.15em] ${
                      mode === "login"
                        ? "text-[#168DB8]"
                        : "text-[#CE26A4]"
                    }`}
                  >
                    Student Association
                  </div>
                </div>
              </Link>
            </div>

            <div className="mx-auto max-w-md">
              <p
                className={`text-sm font-black uppercase tracking-[0.2em] ${
                  mode === "login"
                    ? "text-[#168DB8]"
                    : "text-[#CE26A4]"
                }`}
              >
                Member Access
              </p>

              <h1 className="mt-3 text-4xl font-black tracking-tight text-[#0B2633]">
                {mode === "login"
                  ? "Welcome back."
                  : activationStep === 5
                    ? "Activation complete."
                    : "Activate your membership."}
              </h1>

              <p className="mt-4 leading-7 text-black/60">
                {mode === "login"
                  ? "Sign in to access your KUHRSA member account."
                  : activationStep === 5
                    ? "Your migrated membership activation process has been completed."
                    : "Use your existing KUHRSA membership details to activate access to the new Member Portal."}
              </p>

              {/* Mode Switcher */}
              <div className="mt-8 grid grid-cols-2 rounded-full bg-[#F4FAFC] p-1">
                <button
                  type="button"
                  onClick={() => changeMode("login")}
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
                  onClick={() =>
                    changeMode("activate")
                  }
                  className={`rounded-full px-4 py-3 text-sm font-bold transition ${
                    mode === "activate"
                      ? "bg-[#F700BA] text-white shadow-sm"
                      : "text-black/55 hover:text-[#CE26A4]"
                  }`}
                >
                  Activate
                </button>
              </div>

              {/* Login */}
              {mode === "login" && (
                <>
                  <form
                    className="mt-8 grid gap-5"
                    onSubmit={(event) =>
                      event.preventDefault()
                    }
                  >
                    <div>
                      <label
                        htmlFor="login-identifier"
                        className="text-sm font-bold text-[#0B2633]"
                      >
                        Email or Registration Number
                      </label>

                      <input
                        id="login-identifier"
                        name="identifier"
                        type="text"
                        autoComplete="username"
                        placeholder="Email or registration number"
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

                  <div className="mt-5 text-center">
                    <Link
                      href="/"
                      className="text-sm font-semibold text-black/40 transition hover:text-[#168DB8]"
                    >
                      ← Back to KUHRSA
                    </Link>
                  </div>
                </>
              )}

              {/* Activation */}
              {mode === "activate" && (
                <>
                  {/* Activation Progress */}
                  {activationStep < 5 && (
                    <div className="mt-7">
                      <div className="flex items-center gap-2">
                        {activationSteps.map((item) => (
                          <div
                            key={item.number}
                            className={`h-1.5 flex-1 rounded-full ${
                              item.number <= activationStep
                                ? "bg-[#F700BA]"
                                : "bg-black/10"
                            }`}
                          />
                        ))}
                      </div>

                      <div className="mt-3 flex items-center justify-between text-xs text-black/40">
                        <span>
                          Step {activationStep} of 4
                        </span>

                        <span>
                          {activationSteps[
                            activationStep - 1
                          ]?.label}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Step 1 */}
                  {activationStep === 1 && (
                    <div className="mt-8">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#CE26A4]">
                        Step 1
                      </p>

                      <h2 className="mt-2 text-2xl font-black text-[#0B2633]">
                        Identify your membership.
                      </h2>

                      <p className="mt-3 text-sm leading-6 text-black/55">
                        Enter either your registration number or membership
                        number, together with the email address and phone
                        number associated with your KUHRSA record.
                      </p>

                      <div className="mt-6 grid gap-5">
                        <Field
                          label="Registration or Membership Number"
                          value={activation.identifier}
                          onChange={(value) =>
                            updateActivation(
                              "identifier",
                              value,
                            )
                          }
                          placeholder="Registration or membership number"
                        />

                        <Field
                          label="Email Address"
                          type="email"
                          value={activation.email}
                          onChange={(value) =>
                            updateActivation(
                              "email",
                              value,
                            )
                          }
                          placeholder="Registered email address"
                        />

                        <Field
                          label="Phone Number"
                          type="tel"
                          value={activation.phone}
                          onChange={(value) =>
                            updateActivation(
                              "phone",
                              value,
                            )
                          }
                          placeholder="Registered phone number"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2 */}
                  {activationStep === 2 && (
                    <div className="mt-8">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#CE26A4]">
                        Step 2
                      </p>

                      <h2 className="mt-2 text-2xl font-black text-[#0B2633]">
                        Verify your details.
                      </h2>

                      <div className="mt-6 rounded-2xl bg-[#F9F4FC] p-5">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#CE26A4]">
                          Membership Record
                        </p>

                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                          <InfoItem
                            label="Identifier"
                            value={
                              activation.identifier ||
                              "Awaiting verification"
                            }
                          />

                          <InfoItem
                            label="Email"
                            value={
                              activation.email ||
                              "Awaiting verification"
                            }
                          />

                          <InfoItem
                            label="Phone"
                            value={
                              activation.phone ||
                              "Awaiting verification"
                            }
                          />

                          <InfoItem
                            label="Status"
                            value="Migrated member record"
                          />
                        </div>
                      </div>

                      <div className="mt-6 grid gap-5 sm:grid-cols-2">
                        <Field
                          label="First Name"
                          value={activation.firstName}
                          onChange={(value) =>
                            updateActivation(
                              "firstName",
                              value,
                            )
                          }
                          placeholder="First name"
                        />

                        <Field
                          label="Last Name"
                          value={activation.lastName}
                          onChange={(value) =>
                            updateActivation(
                              "lastName",
                              value,
                            )
                          }
                          placeholder="Last name"
                        />

                        <Field
                          label="Admission Number"
                          value={
                            activation.admissionNumber
                          }
                          onChange={(value) =>
                            updateActivation(
                              "admissionNumber",
                              value,
                            )
                          }
                          placeholder="Admission number"
                        />
                      </div>

                      <div className="mt-6 rounded-2xl border border-black/10 p-4">
                        <p className="text-sm leading-6 text-black/55">
                          In the connected system, these details will be
                          matched against the migrated KUHRSA database before
                          you are allowed to continue.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Step 3 */}
                  {activationStep === 3 && (
                    <div className="mt-8">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#CE26A4]">
                        Step 3
                      </p>

                      <h2 className="mt-2 text-2xl font-black text-[#0B2633]">
                        Create your account.
                      </h2>

                      <p className="mt-3 text-sm leading-6 text-black/55">
                        Create the credentials you will use to access the KUHRSA
                        Member Portal.
                      </p>

                      <div className="mt-6 grid gap-5">
                        <Field
                          label="Email Address"
                          type="email"
                          value={activation.email}
                          onChange={(value) =>
                            updateActivation(
                              "email",
                              value,
                            )
                          }
                          placeholder="Your registered email"
                        />

                        <Field
                          label="Create Password"
                          type="password"
                          value={activation.password}
                          onChange={(value) =>
                            updateActivation(
                              "password",
                              value,
                            )
                          }
                          placeholder="At least 8 characters"
                        />

                        <Field
                          label="Confirm Password"
                          type="password"
                          value={
                            activation.confirmPassword
                          }
                          onChange={(value) =>
                            updateActivation(
                              "confirmPassword",
                              value,
                            )
                          }
                          placeholder="Confirm your password"
                        />
                      </div>

                      <label className="mt-7 flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={
                            activation.acceptTerms
                          }
                          onChange={(event) =>
                            updateActivation(
                              "acceptTerms",
                              event.target.checked,
                            )
                          }
                          className="mt-1 h-4 w-4 rounded border-black/20 accent-[#F700BA]"
                        />

                        <span className="text-sm leading-6 text-black/60">
                          I confirm that the information provided is accurate
                          and agree to the KUHRSA terms, privacy statement and
                          membership rules.
                        </span>
                      </label>

                      {/* Payment Status Preview */}
                      <div className="mt-7 rounded-2xl bg-[#F9F4FC] p-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#CE26A4]">
                          Membership Status
                        </p>

                        <p className="mt-2 text-sm leading-6 text-black/55">
                          {paymentRequired
                            ? "The system has identified a membership amount that must be paid before activation can be completed."
                            : "Your membership payment is already up to date. No additional payment is required."}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Step 4 */}
                  {activationStep === 4 &&
                    paymentRequired && (
                      <div className="mt-8">
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#CE26A4]">
                          Step 4
                        </p>

                        <h2 className="mt-2 text-2xl font-black text-[#0B2633]">
                          Complete membership payment.
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-black/55">
                          Your migrated membership requires payment before
                          activation can be completed.
                        </p>

                        <div className="mt-6 grid gap-4">
                          <PaymentOption
                            title="M-Pesa"
                            description="Pay using your mobile number."
                            selected={
                              activation.paymentMethod ===
                              "M-Pesa"
                            }
                            onClick={() =>
                              updateActivation(
                                "paymentMethod",
                                "M-Pesa",
                              )
                            }
                          />

                          <PaymentOption
                            title="Other Method"
                            description="Additional payment methods can be connected later."
                            selected={
                              activation.paymentMethod ===
                              "Other"
                            }
                            pink
                            onClick={() =>
                              updateActivation(
                                "paymentMethod",
                                "Other",
                              )
                            }
                          />
                        </div>

                        {activation.paymentMethod ===
                          "M-Pesa" && (
                          <div className="mt-6">
                            <Field
                              label="M-Pesa Number"
                              type="tel"
                              value={
                                activation.mpesaNumber
                              }
                              onChange={(value) =>
                                updateActivation(
                                  "mpesaNumber",
                                  value,
                                )
                              }
                              placeholder="07XX XXX XXX"
                            />
                          </div>
                        )}

                        <div className="mt-6 rounded-2xl bg-[#0B2633] p-5 text-white">
                          <p className="text-xs font-black uppercase tracking-[0.16em] text-white/50">
                            Payment Summary
                          </p>

                          <div className="mt-4 space-y-3">
                            <PaymentRow
                              label="Registration Fee"
                              value="KSh 0"
                            />

                            <PaymentRow
                              label="Membership Amount Due"
                              value="KSh 200"
                            />

                            <div className="border-t border-white/15 pt-3">
                              <PaymentRow
                                label="Total"
                                value="KSh 200"
                                strong
                              />
                            </div>
                          </div>

                          <p className="mt-5 text-xs leading-5 text-white/50">
                            The backend will determine the actual amount due
                            from the member&apos;s membership and payment
                            record.
                          </p>
                        </div>
                      </div>
                    )}

                  {/* Paid Status */}
                  {activationStep === 4 &&
                    !paymentRequired && (
                      <div className="mt-8">
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#CE26A4]">
                          Membership Status
                        </p>

                        <h2 className="mt-2 text-2xl font-black text-[#0B2633]">
                          Your membership is already paid.
                        </h2>

                        <div className="mt-6 rounded-2xl bg-[#E9FFF4] p-5">
                          <p className="text-sm font-bold text-[#148F5A]">
                            No payment is required.
                          </p>

                          <p className="mt-2 text-sm leading-6 text-black/55">
                            Your membership payment has already been confirmed
                            by the KUHRSA system. You can continue without
                            making another payment.
                          </p>
                        </div>
                      </div>
                    )}

                  {/* Step 5 */}
                  {activationStep === 5 && (
                    <div className="mt-10 text-center">
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F9F4FC] text-3xl font-black text-[#CE26A4]">
                        ✓
                      </div>

                      <p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-[#CE26A4]">
                        Activation Complete
                      </p>

                      <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B2633]">
                        Welcome back.
                      </h2>

                      <p className="mx-auto mt-5 max-w-md leading-7 text-black/60">
                        Your migrated membership activation has been completed.
                        Your account can now be connected to the KUHRSA Member
                        Portal.
                      </p>

                      <div className="mt-7 rounded-2xl bg-[#F9F4FC] p-5 text-left">
                        <InfoItem
                          label="Member"
                          value={
                            fullName ||
                            "KUHRSA Member"
                          }
                        />

                        <div className="mt-4">
                          <InfoItem
                            label="Membership / Registration Number"
                            value={
                              activation.identifier ||
                              "—"
                            }
                          />
                        </div>

                        <div className="mt-4">
                          <InfoItem
                            label="Email"
                            value={
                              activation.email || "—"
                            }
                          />
                        </div>

                        <div className="mt-4">
                          <InfoItem
                            label="Membership Status"
                            value="Activated"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Error */}
                  {activationError && (
                    <div className="mt-7 rounded-2xl border border-[#F700BA]/20 bg-[#FFF4FB] px-4 py-3 text-sm font-semibold text-[#AF218D]">
                      {activationError}
                    </div>
                  )}

                  {/* Navigation */}
                  {activationStep < 5 && (
                    <div className="mt-8 flex flex-col-reverse gap-3 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        type="button"
                        onClick={
                          activationStep === 1
                            ? () => changeMode("login")
                            : previousActivationStep
                        }
                        className="rounded-full border border-black/10 px-6 py-3.5 text-sm font-bold text-[#0B2633] transition hover:bg-[#F9F4FC]"
                      >
                        {activationStep === 1
                          ? "Back to Login"
                          : "← Back"}
                      </button>

                      {activationStep === 4 &&
                      paymentRequired ? (
                        <button
                          type="button"
                          onClick={completeActivation}
                          className="rounded-full bg-[#F700BA] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#CE26A4]"
                        >
                          Pay & Activate
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={nextActivationStep}
                          className="rounded-full bg-[#F700BA] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#CE26A4]"
                        >
                          Continue →
                        </button>
                      )}
                    </div>
                  )}

                  {activationStep === 5 && (
                    <div className="mt-8 text-center">
                      <Link
                        href="/"
                        className="text-sm font-semibold text-black/40 transition hover:text-[#CE26A4]"
                      >
                        ← Back to KUHRSA
                      </Link>
                    </div>
                  )}
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-sm font-bold text-[#0B2633]">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-black/35 focus:border-[#F700BA] focus:ring-2 focus:ring-[#F700BA]/15"
      />
    </div>
  );
}

function PaymentOption({
  title,
  description,
  selected,
  onClick,
  pink = false,
}: {
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
  pink?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-2xl border p-5 text-left transition ${
        selected
          ? pink
            ? "border-[#F700BA] bg-[#FFF4FB]"
            : "border-[#CE26A4] bg-[#F9F4FC]"
          : "border-black/10 bg-white hover:bg-[#F9F4FC]"
      }`}
    >
      <span className="block text-sm font-black text-[#0B2633]">
        {title}
      </span>

      <span className="mt-2 block text-xs leading-5 text-black/50">
        {description}
      </span>
    </button>
  );
}

function PaymentRow({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span
        className={
          strong
            ? "text-sm font-black text-white"
            : "text-sm text-white/60"
        }
      >
        {label}
      </span>

      <span
        className={
          strong
            ? "text-sm font-black text-white"
            : "text-sm font-semibold text-white"
        }
      >
        {value}
      </span>
    </div>
  );
}

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-black/35">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-[#0B2633]">
        {value}
      </p>
    </div>
  );
}