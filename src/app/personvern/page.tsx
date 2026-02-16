import { PrivacyPage, Layout } from "@/components";

const PRIMARY_COLOR = "#F3D030";

const NAV_LINKS = [
  { label: "Tjenester", href: "/tjenester" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Page() {
  return (
    <Layout
      headerProps={{
        companyName: "Kjeldsberg",
        navLinks: NAV_LINKS,
        ctaText: "Kontakt oss",
        ctaHref: "/kontakt",
        primaryColor: PRIMARY_COLOR,
      }}
      footerProps={{
        companyName: "Kjeldsberg Eiendomsforvaltning",
        description: "Vi skaper trygghet for eierne og trivsel for leietakerne.",
        contact: {
          phone: "45 85 90 00",
          email: "kundeservice@kjeldsberg.no",
          address: "Sluppenvegen 19, 7037 Trondheim"
        },
        primaryColor: PRIMARY_COLOR,
        columns: [
          {
            title: "Tjenester",
            links: [
              { label: "Eiendomsforvaltning", href: "/tjenester" },
              { label: "Energi og miljø", href: "/tjenester" },
              { label: "Brann og sikkerhet", href: "/tjenester" },
              { label: "Prosjektledelse", href: "/tjenester" },
            ]
          },
          {
            title: "Om oss",
            links: [
              { label: "Om Kjeldsberg", href: "/om-oss" },
              { label: "Kontakt", href: "/kontakt" },
              { label: "FAQ", href: "/faq" },
              { label: "Personvern", href: "/personvern" },
            ]
          }
        ]
      }}
    >
      <PrivacyPage 
        companyName="Kjeldsberg Eiendomsforvaltning AS"
        email="kundeservice@kjeldsberg.no"
        effectiveDate="16. februar 2026"
        primaryColor={PRIMARY_COLOR}
      />
    </Layout>
  );
}
