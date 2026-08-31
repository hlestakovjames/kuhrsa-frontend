import MiniSitePage from "@/components/site/MiniSitePage";
export default function NewsPage() {
  return <MiniSitePage title="News" intro="Official KUHRSA reporting and organizational stories." sections={["News Home", "Featured", "Latest", "Categories", "Archive"]} links={["/events", "/activities", "/blog", "/departments"]} />;
}
