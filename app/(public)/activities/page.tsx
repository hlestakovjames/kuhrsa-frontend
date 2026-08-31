import MiniSitePage from "@/components/site/MiniSitePage";
export default function ActivitiesPage() {
  return <MiniSitePage title="Activities" intro="Explore KUHRSA initiatives, programs and ongoing engagement." sections={["Activities Home", "Ongoing", "Completed"]} links={["/events", "/blog", "/departments", "/resources"]} />;
}
