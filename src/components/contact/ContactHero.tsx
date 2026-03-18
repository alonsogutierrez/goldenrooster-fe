import AboutHero from "@/components/about/AboutHero";

export default function ContactHero() {
  return (
    <AboutHero
      title="Get in Touch"
      subtitle="Have a project in mind? Our team is ready to provide a free, detailed estimate and answer any questions you have."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Contact" },
      ]}
    />
  );
}
