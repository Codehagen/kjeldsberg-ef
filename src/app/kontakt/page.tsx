import { ContactPage, Layout } from "@/components";

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
              { label: "Ledige stillinger", href: "#" },
            ]
          }
        ]
      }}
    >
      <ContactPage 
        companyName="Kjeldsberg Eiendomsforvaltning"
        contact={{
          email: "kundeservice@kjeldsberg.no",
          phone: "45 85 90 00",
          address: "Sluppenvegen 19, 7037 Trondheim",
          postalAddress: "Postboks 4284 Torgarden, 7436 Trondheim"
        }}
        openingHours="08:00 - 15:00 mandag til fredag"
        primaryColor={PRIMARY_COLOR}
      />
    </Layout>
  );
}
