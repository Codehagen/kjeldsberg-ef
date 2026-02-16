import { FAQPage, Layout } from "@/components";

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
      <FAQPage 
        title="Ofte stilte spørsmål"
        subtitle="Finn svar på vanlige spørsmål om våre tjenester"
        faqs={[
          {
            question: "Hva koster eiendomsforvaltning?",
            answer: "Prisen avhenger av størrelsen på eiendommen og hvilke tjenester du trenger. Kontakt oss for et uforpliktende tilbud."
          },
          {
            question: "Hvilke tjenester inkluderer eiendomsforvaltning?",
            answer: "Vi tilbyr fullservice eiendomsforvaltning inkludert teknisk drift, økonomisk forvaltning, vedlikehold, HMS og kontakt med leietakere."
          },
          {
            question: "Hvordan komme i gang?",
            answer: "Ta kontakt med oss så setter vi opp et møte hvor vi går gjennom dine behov og lager et tilbud tilpasset din eiendom."
          },
          {
            question: "Hvilke områder dekker dere?",
            answer: "Vi holder til i Trondheim og dekker hele Trøndelag og omkringliggende områder."
          },
          {
            question: "Kan dere hjelpe med bærekraft og energi?",
            answer: "Ja! Vi har spesialisert kompetanse innen energi, miljø og bærekraft, og kan hjelpe deg med alt fra energioptimering til BREEAM-sertifisering."
          },
          {
            question: "Hvordan rapporterer dere til eiere?",
            answer: "Vi leverer regelmessige rapporter med oversikt over drift, økonomi og vedlikehold. Du får også tilgang til vårt online dashboard."
          }
        ]}
        contactEmail="kundeservice@kjeldsberg.no"
        primaryColor={PRIMARY_COLOR}
      />
    </Layout>
  );
}
