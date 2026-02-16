import { AboutPage, Layout } from "@/components";

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
      <AboutPage 
        companyName="Kjeldsberg Eiendomsforvaltning"
        content="Vi skaper trygghet for eierne og trivsel for leietakerne. Med lang erfaring og bred kompetanse leverer vi skreddersydde løsninger tilpasset den enkelte kundes behov."
        mission="Å være en pålitelig partner som skaper verdi for eiere og leietakere gjennom profesjonell eiendomsforvaltning."
        vision="Å være den ledende totalleverandøren av drift og forvaltning i Midt-Norge."
        values={[
          "Trygghet - Vi tar ansvar og leverer pålitelige løsninger",
          "Kompetanse - Vi har bred erfaring og faglig kunnskap",
          "Bærekraft - Vi fokuserer på miljø og langsiktig verdi",
          "Service - Vi setter kunden i fokus"
        ]}
        heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
        primaryColor={PRIMARY_COLOR}
      />
    </Layout>
  );
}
