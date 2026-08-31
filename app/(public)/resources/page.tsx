import MiniSitePage from "@/components/site/MiniSitePage";
export default function ResourcesPage() {
  return <MiniSitePage title="Resources" intro="Documents, forms, downloads, guidelines and reference material." sections={["Resources Home", "Documents", "Forms", "Downloads", "Guidelines", "Policies"]} links={["/academic", "/departments", "/membership", "/events"]} />;
}
