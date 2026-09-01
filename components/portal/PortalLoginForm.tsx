"use client";

type PortalLoginFormProps = {
  emailId: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  buttonLabel?: string;
  accent?: "blue" | "pink";
};

export default function PortalLoginForm({
  emailId,
  emailLabel = "Email Address",
  emailPlaceholder = "Enter your email address",
  buttonLabel = "Sign In",
  accent = "blue",
}: PortalLoginFormProps) {
  const isPink = accent === "pink";

  return (
    <form
      className="mt-8 grid gap-5"
      onSubmit={(event) => event.preventDefault()}
    >
      <div>
        <label
          htmlFor={emailId}
          className="text-sm font-bold text-[#0B2633]"
        >
          {emailLabel}
        </label>

        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="username"
          placeholder={emailPlaceholder}
          className={`mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-black/35 ${
            isPink
              ? "focus:border-[#F700BA] focus:ring-2 focus:ring-[#F700BA]/15"
              : "focus:border-[#168DB8] focus:ring-2 focus:ring-[#168DB8]/15"
          }`}
        />
      </div>

      <div>
        <label
          htmlFor={`${emailId}-password`}
          className="text-sm font-bold text-[#0B2633]"
        >
          Password
        </label>

        <input
          id={`${emailId}-password`}
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          className={`mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-black/35 ${
            isPink
              ? "focus:border-[#F700BA] focus:ring-2 focus:ring-[#F700BA]/15"
              : "focus:border-[#168DB8] focus:ring-2 focus:ring-[#168DB8]/15"
          }`}
        />
      </div>

      <button
        type="submit"
        className={`mt-1 rounded-full px-5 py-3.5 text-sm font-bold text-white transition ${
          isPink
            ? "bg-[#F700BA] hover:bg-[#CE26A4]"
            : "bg-[#168DB8] hover:bg-[#11799D]"
        }`}
      >
        {buttonLabel}
      </button>
    </form>
  );
}