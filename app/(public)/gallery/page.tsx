import MiniSitePage from "@/components/site/MiniSitePage";
export default function GalleryPage() {
  return <MiniSitePage title="Gallery" intro="A visual archive of KUHRSA events, activities, people and moments." sections={["Gallery Home", "Albums", "Photos", "Videos"]} links={["/events", "/activities", "/departments", "/blog"]} />;
}
