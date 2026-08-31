import MiniSitePage from "@/components/site/MiniSitePage";
export default function ContactPage() {
  return <MiniSitePage title="Contact" intro="Find KUHRSA contact information and ways to reach the association." sections={["Contact Home", "Contact Information", "Locations", "Contact Form"]} links={["/about", "/membership"]} />;
}
