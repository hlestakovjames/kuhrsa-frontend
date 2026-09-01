"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7;

type RegistrationData = {
  firstName: string;
  lastName: string;

  admissionNumber: string;
  yearOfStudy: string;
  programme: string;
  faculty: string;
  department: string;

  email: string;
  phone: string;
  address: string;
  county: string;

  membershipCategory: string;
  membershipType: string;

  password: string;
  confirmPassword: string;
  acceptTerms: boolean;

  paymentMethod: string;
  mpesaNumber: string;
};

const steps = [
  { number: 1, label: "Personal" },
  { number: 2, label: "Academic" },
  { number: 3, label: "Contact" },
  { number: 4, label: "Membership" },
  { number: 5, label: "Account" },
  { number: 6, label: "Review" },
  { number: 7, label: "Payment" },
] as const;

const initialData: RegistrationData = {
  firstName: "",
  lastName: "",

  admissionNumber: "",
  yearOfStudy: "",
  programme: "",
  faculty: "",
  department: "",

  email: "",
  phone: "",
  address: "",
  county: "",

  membershipCategory: "Student Member",
  membershipType: "Annual Membership",

  password: "",
  confirmPassword: "",
  acceptTerms: false,

  paymentMethod: "M-Pesa",
  mpesaNumber: "",
};

const registrationFee = 250;
const annualMembershipFee = 200;
const totalAmount = registrationFee + annualMembershipFee;

export default function RegisterPage() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<RegistrationData>(initialData);
  const [error, setError] = useState("");
  const [completed, setCompleted] = useState(false);

  const updateField = <K extends keyof RegistrationData>(
    field: K,
    value: RegistrationData[K],
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setError("");
  };

  const validateStep = (currentStep: Step) => {
    if (currentStep === 1) {
      if (!form.firstName || !form.lastName) {
        return "Please enter your first and last name.";
      }
    }

    if (currentStep === 2) {
      if (
        !form.admissionNumber ||
        !form.yearOfStudy ||
        !form.programme ||
        !form.faculty ||
        !form.department
      ) {
        return "Please complete all required academic details.";
      }
    }

    if (currentStep === 3) {
      if (
        !form.email ||
        !form.phone ||
        !form.address ||
        !form.county
      ) {
        return "Please complete all required contact details.";
      }
    }

    if (currentStep === 4) {
      if (!form.membershipCategory || !form.membershipType) {
        return "Please select your membership details.";
      }
    }

    if (currentStep === 5) {
      if (!form.password || !form.confirmPassword) {
        return "Please create and confirm your password.";
      }

      if (form.password.length < 8) {
        return "Your password must contain at least 8 characters.";
      }

      if (form.password !== form.confirmPassword) {
        return "Your passwords do not match.";
      }

      if (!form.acceptTerms) {
        return "Please accept the KUHRSA terms and privacy statement.";
      }
    }

    if (currentStep === 7) {
      if (!form.paymentMethod) {
        return "Please select a payment method.";
      }

      if (
        form.paymentMethod === "M-Pesa" &&
        !form.mpesaNumber
      ) {
        return "Please enter the M-Pesa number to use for payment.";
      }
    }

    return "";
  };

  const nextStep = () => {
    const validationError = validateStep(step);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");

    if (step < 7) {
      setStep((current) => (current + 1) as Step);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const previousStep = () => {
    setError("");

    if (step > 1) {
      setStep((current) => (current - 1) as Step);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const completePayment = () => {
    const validationError = validateStep(7);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setCompleted(true);
  };

  const fullName = useMemo(
    () =>
      [form.firstName, form.lastName]
        .filter(Boolean)
        .join(" "),
    [form.firstName, form.lastName],
  );

  if (completed) {
    return (
      <main className="min-h-screen bg-[#F4FAFC] px-5 py-12 sm:py-16">
        <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-4xl items-center justify-center">
          <div className="w-full rounded-[2rem] bg-white p-8 text-center shadow-xl ring-1 ring-black/5 sm:p-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#E9FFF4] text-3xl font-black text-[#148F5A]">
              ✓
            </div>

            <p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-[#168DB8]">
              Registration Complete
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight text-[#0B2633]">
              Welcome to KUHRSA.
            </h1>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-black/60">
              Your registration process has been completed successfully.
              Your payment and membership status will be confirmed through
              the KUHRSA membership system.
            </p>

            <div className="mx-auto mt-8 max-w-md rounded-2xl bg-[#F4FAFC] p-5 text-left">
              <SummaryLine
                label="Member"
                value={fullName || "KUHRSA Member"}
              />

              <SummaryLine
                label="Admission Number"
                value={form.admissionNumber || "—"}
              />

              <SummaryLine
                label="Amount"
                value={`KSh ${totalAmount.toLocaleString()}`}
                last
              />
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/login"
                className="rounded-full bg-[#168DB8] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#11799D]"
              >
                Go to Member Portal
              </Link>

              <Link
                href="/"
                className="rounded-full border border-black/10 px-6 py-3.5 text-sm font-bold text-[#0B2633] transition hover:bg-[#F4FAFC]"
              >
                Back to KUHRSA
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F4FAFC] px-5 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3"
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

            <div className="text-left">
              <div className="text-xl font-black tracking-tight text-[#0B2633]">
                KUHRSA
              </div>

              <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#168DB8]">
                Student Association
              </div>
            </div>
          </Link>

          <p className="mt-8 text-xs font-black uppercase tracking-[0.2em] text-[#168DB8]">
            Membership Registration
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight text-[#0B2633] sm:text-5xl">
            Join KUHRSA.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-black/60">
            Complete your membership registration step by step, review your
            information, and finish by completing payment.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8 rounded-[2rem] bg-white p-4 shadow-lg ring-1 ring-black/5 sm:p-6">
          <div className="flex items-start justify-between gap-2 overflow-x-auto">
            {steps.map((item, index) => {
              const active = item.number === step;
              const complete = item.number < step;

              return (
                <div
                  key={item.number}
                  className="flex min-w-[72px] flex-1 items-start"
                >
                  <div className="w-full">
                    <div className="flex items-center">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-black ${
                          complete
                            ? "bg-[#168DB8] text-white"
                            : active
                              ? "bg-[#0B2633] text-white"
                              : "bg-[#F4FAFC] text-black/35 ring-1 ring-black/10"
                        }`}
                      >
                        {complete ? "✓" : item.number}
                      </div>

                      {index < steps.length - 1 && (
                        <div
                          className={`mx-2 h-0.5 min-w-4 flex-1 ${
                            complete
                              ? "bg-[#168DB8]"
                              : "bg-black/10"
                          }`}
                        />
                      )}
                    </div>

                    <p
                      className={`mt-2 text-[10px] font-black uppercase tracking-[0.08em] ${
                        active
                          ? "text-[#0B2633]"
                          : complete
                            ? "text-[#168DB8]"
                            : "text-black/35"
                      }`}
                    >
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5 flex items-center justify-between text-xs text-black/45">
            <span>Step {step} of 7</span>
            <span>{steps[step - 1].label}</span>
          </div>
        </div>

        {/* Main Registration Card */}
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-black/5">
          <div className="p-6 sm:p-10 lg:p-12">
            {/* STEP 1 */}
            {step === 1 && (
              <section>
                <StepHeading
                  eyebrow="Step 1"
                  title="Personal Details"
                  description="Start your KUHRSA registration with your basic personal information."
                />

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <Field
                    label="First Name"
                    value={form.firstName}
                    onChange={(value) =>
                      updateField("firstName", value)
                    }
                    placeholder="First name"
                    required
                    autoComplete="given-name"
                  />

                  <Field
                    label="Last Name"
                    value={form.lastName}
                    onChange={(value) =>
                      updateField("lastName", value)
                    }
                    placeholder="Last name"
                    required
                    autoComplete="family-name"
                  />
                </div>
              </section>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <section>
                <StepHeading
                  eyebrow="Step 2"
                  title="Academic Details"
                  description="Provide the university information used to identify your KUHRSA membership."
                />

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Admission Number"
                    value={form.admissionNumber}
                    onChange={(value) =>
                      updateField("admissionNumber", value)
                    }
                    placeholder="Admission number"
                    required
                  />

                  <SelectField
                    label="Year of Study"
                    value={form.yearOfStudy}
                    onChange={(value) =>
                      updateField("yearOfStudy", value)
                    }
                    options={[
                      "Year 1",
                      "Year 2",
                      "Year 3",
                      "Year 4",
                      "Year 5",
                      "Year 6",
                    ]}
                    required
                  />

                  <Field
                    label="Programme"
                    value={form.programme}
                    onChange={(value) =>
                      updateField("programme", value)
                    }
                    placeholder="Your academic programme"
                    required
                  />

                  <Field
                    label="Faculty / School"
                    value={form.faculty}
                    onChange={(value) =>
                      updateField("faculty", value)
                    }
                    placeholder="Faculty or school"
                    required
                  />

                  <Field
                    label="Department"
                    value={form.department}
                    onChange={(value) =>
                      updateField("department", value)
                    }
                    placeholder="Your department"
                    required
                  />
                </div>
              </section>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <section>
                <StepHeading
                  eyebrow="Step 3"
                  title="Contact Details"
                  description="Provide contact information that KUHRSA can use to communicate with you."
                />

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Email Address"
                    value={form.email}
                    onChange={(value) =>
                      updateField("email", value)
                    }
                    type="email"
                    placeholder="Enter your email address"
                    required
                    autoComplete="email"
                  />

                  <Field
                    label="Phone Number"
                    value={form.phone}
                    onChange={(value) =>
                      updateField("phone", value)
                    }
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                    autoComplete="tel"
                  />

                  <Field
                    label="Address / Residence"
                    value={form.address}
                    onChange={(value) =>
                      updateField("address", value)
                    }
                    placeholder="Current address or residence"
                    required
                  />

                  <Field
                    label="County"
                    value={form.county}
                    onChange={(value) =>
                      updateField("county", value)
                    }
                    placeholder="County"
                    required
                  />
                </div>
              </section>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <section>
                <StepHeading
                  eyebrow="Step 4"
                  title="Membership"
                  description="Confirm the membership category and membership type applicable to you."
                />

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <SelectField
                    label="Membership Category"
                    value={form.membershipCategory}
                    onChange={(value) =>
                      updateField(
                        "membershipCategory",
                        value,
                      )
                    }
                    options={[
                      "Student Member",
                      "Alumni Member",
                      "Lecturer / Academic Member",
                    ]}
                    required
                  />

                  <SelectField
                    label="Membership Type"
                    value={form.membershipType}
                    onChange={(value) =>
                      updateField(
                        "membershipType",
                        value,
                      )
                    }
                    options={["Annual Membership"]}
                    required
                  />
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <SummaryCard
                    label="Registration Fee"
                    value={`KSh ${registrationFee.toLocaleString()}`}
                  />

                  <SummaryCard
                    label="Annual Membership"
                    value={`KSh ${annualMembershipFee.toLocaleString()}`}
                  />

                  <SummaryCard
                    label="Total"
                    value={`KSh ${totalAmount.toLocaleString()}`}
                    dark
                  />
                </div>

                <div className="mt-6 rounded-2xl bg-[#F4FAFC] p-5">
                  <p className="text-sm leading-6 text-black/55">
                    The displayed fees are the current frontend
                    configuration. During backend integration, the payable
                    amount should be retrieved and validated from the KUHRSA
                    membership and finance system.
                  </p>
                </div>
              </section>
            )}

            {/* STEP 5 */}
            {step === 5 && (
              <section>
                <StepHeading
                  eyebrow="Step 5"
                  title="Account Setup"
                  description="Create the credentials you will use to access your KUHRSA Member Portal."
                />

                <div className="mt-8 grid gap-5 sm:max-w-xl">
                  <Field
                    label="Login Email"
                    value={form.email}
                    onChange={(value) =>
                      updateField("email", value)
                    }
                    type="email"
                    placeholder="Your registration email"
                    required
                  />

                  <Field
                    label="Create Password"
                    value={form.password}
                    onChange={(value) =>
                      updateField("password", value)
                    }
                    type="password"
                    placeholder="At least 8 characters"
                    required
                    autoComplete="new-password"
                  />

                  <Field
                    label="Confirm Password"
                    value={form.confirmPassword}
                    onChange={(value) =>
                      updateField("confirmPassword", value)
                    }
                    type="password"
                    placeholder="Confirm your password"
                    required
                    autoComplete="new-password"
                  />
                </div>

                <label className="mt-8 flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={form.acceptTerms}
                    onChange={(event) =>
                      updateField(
                        "acceptTerms",
                        event.target.checked,
                      )
                    }
                    className="mt-1 h-4 w-4 rounded border-black/20 accent-[#168DB8]"
                  />

                  <span className="text-sm leading-6 text-black/60">
                    I confirm that the information provided is accurate and
                    agree to the KUHRSA terms, privacy statement and
                    membership rules.
                  </span>
                </label>
              </section>
            )}

            {/* STEP 6 */}
            {step === 6 && (
              <section>
                <StepHeading
                  eyebrow="Step 6"
                  title="Review & Confirm"
                  description="Review your registration information before proceeding to payment."
                />

                <div className="mt-8 grid gap-5">
                  <ReviewSection
                    title="Personal Details"
                    onEdit={() => setStep(1)}
                    items={[
                      ["Full Name", fullName || "—"],
                    ]}
                  />

                  <ReviewSection
                    title="Academic Details"
                    onEdit={() => setStep(2)}
                    items={[
                      [
                        "Admission Number",
                        form.admissionNumber || "—",
                      ],
                      [
                        "Year of Study",
                        form.yearOfStudy || "—",
                      ],
                      [
                        "Programme",
                        form.programme || "—",
                      ],
                      [
                        "Faculty / School",
                        form.faculty || "—",
                      ],
                      [
                        "Department",
                        form.department || "—",
                      ],
                    ]}
                  />

                  <ReviewSection
                    title="Contact Details"
                    onEdit={() => setStep(3)}
                    items={[
                      ["Email", form.email || "—"],
                      ["Phone", form.phone || "—"],
                      ["Address", form.address || "—"],
                      ["County", form.county || "—"],
                    ]}
                  />

                  <ReviewSection
                    title="Membership"
                    onEdit={() => setStep(4)}
                    items={[
                      [
                        "Category",
                        form.membershipCategory || "—",
                      ],
                      [
                        "Type",
                        form.membershipType || "—",
                      ],
                      [
                        "Payable",
                        `KSh ${totalAmount.toLocaleString()}`,
                      ],
                    ]}
                  />

                  <ReviewSection
                    title="Account"
                    onEdit={() => setStep(5)}
                    items={[
                      ["Login Email", form.email || "—"],
                      ["Password", "••••••••"],
                      [
                        "Terms Accepted",
                        form.acceptTerms ? "Yes" : "No",
                      ],
                    ]}
                  />
                </div>
              </section>
            )}

            {/* STEP 7 */}
            {step === 7 && (
              <section>
                <StepHeading
                  eyebrow="Step 7"
                  title="Payment"
                  description="Complete the final step of your KUHRSA registration by paying the applicable amount."
                />

                <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
                  <div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <PaymentMethod
                        title="M-Pesa"
                        description="Pay using your mobile number."
                        selected={
                          form.paymentMethod === "M-Pesa"
                        }
                        onClick={() =>
                          updateField(
                            "paymentMethod",
                            "M-Pesa",
                          )
                        }
                      />

                      <PaymentMethod
                        title="Other Method"
                        description="Additional payment methods can be connected later."
                        selected={
                          form.paymentMethod === "Other"
                        }
                        pink
                        onClick={() =>
                          updateField(
                            "paymentMethod",
                            "Other",
                          )
                        }
                      />
                    </div>

                    {form.paymentMethod === "M-Pesa" && (
                      <div className="mt-6">
                        <Field
                          label="M-Pesa Number"
                          value={form.mpesaNumber}
                          onChange={(value) =>
                            updateField(
                              "mpesaNumber",
                              value,
                            )
                          }
                          type="tel"
                          placeholder="07XX XXX XXX"
                          required
                        />
                      </div>
                    )}
                  </div>

                  <div className="rounded-[1.5rem] bg-[#0B2633] p-6 text-white">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-white/55">
                      Payment Summary
                    </p>

                    <div className="mt-6 space-y-4">
                      <PaymentRow
                        label="Registration Fee"
                        value={`KSh ${registrationFee.toLocaleString()}`}
                      />

                      <PaymentRow
                        label="Annual Membership"
                        value={`KSh ${annualMembershipFee.toLocaleString()}`}
                      />

                      <div className="border-t border-white/15 pt-4">
                        <PaymentRow
                          label="Total"
                          value={`KSh ${totalAmount.toLocaleString()}`}
                          strong
                        />
                      </div>
                    </div>

                    <div className="mt-6 rounded-2xl bg-white/10 p-4">
                      <p className="text-xs leading-5 text-white/65">
                        Payment processing will be connected to the KUHRSA
                        backend and payment service during system integration.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Error */}
            {error && (
              <div className="mt-8 rounded-2xl border border-[#F700BA]/20 bg-[#FFF4FB] px-4 py-3 text-sm font-semibold text-[#AF218D]">
                {error}
              </div>
            )}

            {/* Navigation */}
            <div className="mt-10 flex flex-col-reverse gap-3 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={previousStep}
                    className="rounded-full border border-black/10 px-6 py-3.5 text-sm font-bold text-[#0B2633] transition hover:bg-[#F4FAFC]"
                  >
                    ← Back
                  </button>
                ) : (
                  <Link
                    href="/"
                    className="inline-block rounded-full border border-black/10 px-6 py-3.5 text-sm font-bold text-[#0B2633] transition hover:bg-[#F4FAFC]"
                  >
                    Cancel
                  </Link>
                )}
              </div>

              <div>
                {step < 7 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full rounded-full bg-[#168DB8] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#11799D] sm:w-auto"
                  >
                    {step === 6
                      ? "Continue to Payment →"
                      : "Continue →"}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={completePayment}
                    className="w-full rounded-full bg-[#F700BA] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#CE26A4] sm:w-auto"
                  >
                    Pay & Complete Registration
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 text-center">
          <p className="text-xs leading-5 text-black/40">
            KUHRSA registration is subject to membership requirements,
            verification and the association&apos;s applicable rules.
          </p>
        </div>
      </div>
    </main>
  );
}

function StepHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#168DB8]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0B2633] sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 max-w-2xl leading-7 text-black/60">
        {description}
      </p>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="text-sm font-bold text-[#0B2633]">
        {label}
        {required && (
          <span className="ml-1 text-[#F700BA]">*</span>
        )}
      </label>

      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-black/35 focus:border-[#168DB8] focus:ring-2 focus:ring-[#168DB8]/15"
      />
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-bold text-[#0B2633]">
        {label}
        {required && (
          <span className="ml-1 text-[#F700BA]">*</span>
        )}
      </label>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm text-black/70 outline-none transition focus:border-[#168DB8] focus:ring-2 focus:ring-[#168DB8]/15"
      >
        <option value="">
          Select {label.toLowerCase()}
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  dark = false,
}: {
  label: string;
  value: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-5 ${
        dark
          ? "bg-[#0B2633] text-white"
          : "bg-[#F4FAFC] text-[#0B2633]"
      }`}
    >
      <p
        className={`text-xs font-black uppercase tracking-[0.16em] ${
          dark ? "text-white/50" : "text-black/40"
        }`}
      >
        {label}
      </p>

      <p className="mt-2 text-xl font-black">{value}</p>
    </div>
  );
}

function ReviewSection({
  title,
  items,
  onEdit,
}: {
  title: string;
  items: [string, string][];
  onEdit: () => void;
}) {
  return (
    <div className="rounded-2xl border border-black/10 p-5">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-sm font-black uppercase tracking-[0.14em] text-[#0B2633]">
          {title}
        </h3>

        <button
          type="button"
          onClick={onEdit}
          className="text-xs font-bold text-[#168DB8] transition hover:text-[#11799D]"
        >
          Edit
        </button>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map(([label, value]) => (
          <div key={label}>
            <p className="text-xs font-semibold uppercase tracking-wide text-black/35">
              {label}
            </p>

            <p className="mt-1 text-sm font-semibold text-[#0B2633]">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PaymentMethod({
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
      className={`rounded-2xl border p-5 text-left transition ${
        selected
          ? pink
            ? "border-[#F700BA] bg-[#FFF4FB]"
            : "border-[#168DB8] bg-[#F4FAFC]"
          : "border-black/10 bg-white hover:bg-[#F4FAFC]"
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

function SummaryLine({
  label,
  value,
  last = false,
}: {
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-4 ${
        last ? "" : "border-b border-black/10 pb-3"
      } ${last ? "" : "mb-3"}`}
    >
      <span className="text-sm text-black/55">
        {label}
      </span>

      <span className="text-sm font-bold text-[#0B2633]">
        {value}
      </span>
    </div>
  );
}