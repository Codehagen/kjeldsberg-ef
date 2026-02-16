import { ServicesPage, Layout } from "@/components";

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
      <ServicesPage 
        title="Våre tjenester"
        subtitle="Totalleverandør av drift og forvaltning"
        intro="Vi tilbyr et bredt spekter av tjenester innen eiendomsforvaltning. Våre erfarne medarbeidere sørger for at din eiendom er i trygge hender."
        services={[
          {
            title: "Eiendomsforvaltning",
            description: "Vi skreddersyr våre forvaltningsløsninger til din eiendom, slik at du kan være trygg på at alt ivaretas på en hensiktsmessig måte, med fokus på kvalitet og trygghet.",
            features: [
              "Daglig drift og vedlikehold",
              "Teknisk forvaltning",
              "Økonomisk forvaltning",
              "HMS og internkontroll"
            ]
          },
          {
            title: "Energi, miljø og bærekraft",
            description: "Vi bistår i prosjekter innenfor energi, miljø og bærekraft. Vår brede erfaring og kompetanse gjør at vi kan tilby de beste og mest lønnsomme løsningene.",
            features: [
              "Energieffektivisering",
              "BREEAM-rådgivning",
              "Miljøsertifisering",
              "Klimatilpasning"
            ]
          },
          {
            title: "Brann og sikkerhet",
            description: "Kjeldsberg Eiendomsforvaltning har bred kunnskap og erfaring innenfor brann og sikkerhet, og vi har jobbet med en stor variasjon av virksomheter og prosjekter.",
            features: [
              "Brannsikkerhet",
              "HMS-rådgivning",
              "Risikoanalyse",
              "Kurs og opplæring"
            ]
          },
          {
            title: "ITB og teknisk prosjektledelse",
            description: "Vårt tekniske team har lang og bred erfaring med hele fasen til ulike typer byggprosjekt, gjennom prosjekteringsfasene til utførelse og ferdig levert prosjekt.",
            features: [
              "Prosjektledelse",
              "ITB-koordinering",
              "Teknisk rådgivning",
              "Kvalitetskontroll"
            ]
          },
          {
            title: "Rådgivning og prosjektledelse",
            description: "Våre prosjektledere bistår deg i forbindelse med endringsprosjekt, og vi har erfaring med alle ledd i prosessene.",
            features: [
              "Prosjektutvikling",
              "Budsjett og oppfølging",
              "Anbudsprosesser",
              "Overlevering"
            ]
          },
          {
            title: "Økonomisk og administrativ forvaltning",
            description: "Alt innen budsjett og regnskapsførsel av felleskostnader.",
            features: [
              "Regnskapsførsel",
              "Budsjettering",
              "Årsregnskap",
              "Forsikringsoppfølging"
            ]
          }
        ]}
        primaryColor={PRIMARY_COLOR}
      />
    </Layout>
  );
}
