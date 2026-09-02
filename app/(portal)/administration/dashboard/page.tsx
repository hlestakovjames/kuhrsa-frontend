import ProtectedDashboard from "@/components/auth/ProtectedDashboard";

export default function AdministrationDashboardPage() {
  return (
    <ProtectedDashboard
      portal="administration"
      title="Administration Dashboard"
      description="Manage KUHRSA records, users, roles, permissions and administrative operations."
    />
  );
}