"use client";

import { 
  Hero, 
  Services, 
  About, 
  Contact, 
  Footer, 
  Header,
  CTASection,
  Features,
  Process,
  Layout
} from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X } from "lucide-react";
import { useState } from "react";

// Branding from Firecrawl
const PRIMARY_COLOR = "#F3D030";
const ACCENT_COLOR = "#3D4459";

const NAV_LINKS = [
  { label: "Tjenester", href: "/tjenester" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      title: "Eiendomsforvaltning",
      description: "Vi skreddersyr våre forvaltningsløsninger til din eiendom, slik at du kan være trygg på at alt ivaretas på en hensiktsmessig måte."
    },
    {
      title: "Energi, miljø og bærekraft",
      description: "Vi bistår i prosjekter innenfor energi, miljø og bærekraft. Vår brede erfaring gir deg de beste løsningene."
    },
    {
      title: "Brann og sikkerhet",
      description: "Vi har bred kunnskap og erfaring innenfor brann og sikkerhet, og har jobbet med en stor variasjon av virksomheter."
    },
    {
      title: "ITB og teknisk prosjektledelse",
      description: "Vårt tekniske team har lang erfaring med hele fasen til ulike typer byggprosjekt, fra prosjektering til ferdig levert prosjekt."
    },
    {
      title: "Rådgivning og prosjektledelse",
      description: "Våre prosjektledere bistår deg i forbindelse med endringsprosjekt, og vi har erfaring med alle ledd i prosessene."
    },
    {
      title: "Økonomisk og administrativ forvaltning",
      description: "Alt innen budsjett og regnskapsførsel av felleskostnader."
    }
  ];

  const features = [
    { title: "Erfaring", description: "Lang erfaring i bransjen" },
    { title: "Trygghet", description: "Vi skaper trygghet for eierne" },
    { title: "Trivsel", description: "Trivsel for leietakerne" },
    { title: "Bærekraft", description: "Fokus på miljø og bærekraft" },
    { title: "Kompetanse", description: "Bred kompetanse innenfor alle fagområder" },
    { title: "Lokal", description: "Lokal tilstedeværelse i Trondheim" }
  ];

  const processSteps = [
    { title: "Kontakt oss", description: "Ta kontakt så setter vi opp et møte" },
    { title: "Behovsanalyse", description: "Vi kartlegger dine behov" },
    { title: "Løsning", description: "Vi utarbeider en skreddersydd løsning" },
    { title: "Gjennomføring", description: "Vi setter løsningen i drift" }
  ];

  return (
    <Layout
      headerProps={{
        companyName: "Kjeldsberg",
        navLinks: NAV_LINKS,
        ctaText: "Kontakt oss",
        ctaHref: "/kontakt",
        primaryColor: PRIMARY_COLOR,
        transparent: true,
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
      {/* Hero */}
      <Hero
        subtitle="Kjeldsberg Eiendomsforvaltning"
        headline="Vi skaper <span style='color:#F3D030'>trygghet</span> for eierne og <span style='color:#F3D030'>trivsel</span> for leietakerne"
        description="Totalleverandør av drift og forvaltning innen eiendom. Vi leverer skreddersydde løsninger for din eiendom."
        ctaText="Kontakt oss"
        ctaHref="/kontakt"
        ctaSecondary="Les mer om oss"
        ctaSecondaryHref="/om-oss"
        primaryColor={PRIMARY_COLOR}
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
      />

      {/* Services */}
      <section id="tjenester" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Våre tjenester</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vi tilbyr et bredt spekter av tjenester innen eiendomsforvaltning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <Features
        title="Hvorfor velge Kjeldsberg?"
        features={features}
        primaryColor={PRIMARY_COLOR}
        layout="grid"
      />

      {/* Process */}
      <Process
        title="Slik jobber vi"
        steps={processSteps}
        primaryColor={PRIMARY_COLOR}
      />

      {/* About */}
      <section id="om-oss" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Om oss</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kjeldsberg Eiendomsforvaltning er en totalleverandør av drift og forvaltning innen eiendom. 
                Vi skaper trygghet for eierne og trivsel for leietakerne.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Med lang erfaring og bred kompetanse leverer vi skreddersydde løsninger tilpasset 
                den enkelte kundes behov. Vårt fokus er alltid på kvalitet, trygghet og bærekraft.
              </p>
              <a 
                href="/kontakt" 
                className="inline-flex items-center gap-2 font-medium"
                style={{ color: ACCENT_COLOR }}
              >
                Ta kontakt med oss →
              </a>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=80" 
                alt="Kjeldsberg"
                className="rounded-xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Trenger du hjelp med eiendomsforvaltning?"
        description="Ta kontakt med oss i dag så hjelper vi deg med dine behov."
        ctaText="Kontakt oss"
        ctaHref="/kontakt"
        ctaSecondary="Les om våre tjenester"
        ctaSecondaryHref="/tjenester"
        primaryColor={PRIMARY_COLOR}
      />
    </Layout>
  );
}
