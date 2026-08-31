import MiniSitePage from "@/components/site/MiniSitePage";
export default function DepartmentsPage() {
  return <MiniSitePage title="Departments" intro="Explore KUHRSA departments and the work happening across them." sections={["Departments Home", "Department Profiles", "Leadership", "Activities", "Events", "News", "Blog", "Resources", "Gallery"]} links={["/activities", "/events", "/news", "/blog", "/gallery"]} />;
}
