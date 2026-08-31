import MiniSitePage from "@/components/site/MiniSitePage";
export default function EventsPage() {
  return <MiniSitePage title="Events" intro="Discover upcoming, current and past KUHRSA events." sections={["Events Home", "Upcoming", "Calendar", "Past"]} links={["/activities", "/blog", "/news", "/gallery"]} />;
}
