export type PortalType =
  | "member"
  | "executive"
  | "administration";

export type AuthUser = {
  id: string;
  organizationId: string;
  email: string;
  status: string;
  isSystemOwner: boolean;
  lastLoginAt?: string | null;
  organization?: {
    id: string;
    name: string;
    code: string;
  } | null;
  member?: {
    id: string;
    registrationNumber?: string | null;
    memberNumber: string;
    status: string;
  } | null;
  roles: Array<{
    id: string;
    name: string;
    code: string;
  }>;
};

export type LoginResponse = {
  accessToken: string;
  user: AuthUser;
};

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://localhost:3001";

const TOKEN_KEY = "kuhrsa_access_token";

export async function login(
  identifier: string,
  password: string,
): Promise<LoginResponse> {
  const response = await fetch(
    `${API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: identifier.trim(),
        password,
      }),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.message ||
        "Unable to sign in. Please check your credentials.",
    );
  }

  if (!data?.accessToken) {
    throw new Error(
      "Authentication succeeded but no access token was returned.",
    );
  }

  setToken(data.accessToken);

  return data as LoginResponse;
}

export async function getMe(): Promise<AuthUser> {
  const token = getToken();

  if (!token) {
    throw new Error("You are not authenticated.");
  }

  const response = await fetch(
    `${API_URL}/auth/me`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    },
  );

  const data = await response.json();

  if (!response.ok) {
    clearToken();

    throw new Error(
      data?.message ||
        "Your session is no longer valid.",
    );
  }

  return data as AuthUser;
}

export function setToken(
  token: string,
) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    TOKEN_KEY,
    token,
  );
}

export function getToken(): string | null {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage.getItem(
    TOKEN_KEY,
  );
}

export function clearToken() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(
    TOKEN_KEY,
  );
}

export function logout() {
  clearToken();
}

export function canAccessPortal(
  user: AuthUser,
  portal: PortalType,
): boolean {
  if (user.isSystemOwner) {
    return true;
  }

  const roles = user.roles.map(
    (role) => role.code,
  );

  switch (portal) {
    case "member":
      return roles.includes("MEMBER");

    case "executive":
      return roles.includes("EXECUTIVE");

    case "administration":
      return (
        roles.includes("ADMINISTRATOR") ||
        roles.includes("SUPER_ADMINISTRATOR")
      );

    default:
      return false;
  }
}