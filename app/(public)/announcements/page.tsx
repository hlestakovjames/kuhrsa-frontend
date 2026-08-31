import MiniSitePage from "@/components/site/MiniSitePage";
export default function AnnouncementsPage() {
  return <MiniSitePage title="Announcements" intro="Important KUHRSA notices, updates and time-sensitive information." sections={["Announcements Home", "Important", "Latest", "Archived"]} links={["/events", "/membership", "/resources"]} />;
}
