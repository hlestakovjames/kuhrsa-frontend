import MiniSitePage from "@/components/site/MiniSitePage";
export default function AcademicPage() {
  return <MiniSitePage title="Academic" intro="Academic updates, opportunities, important dates and support." sections={["Academic Home", "Updates", "Opportunities", "Important Dates", "Academic Resources"]} links={["/blog", "/resources", "/events"]} />;
}
