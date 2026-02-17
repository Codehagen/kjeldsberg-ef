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
  Process
} from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

// Branding from Firecrawl
const PRIMARY_COLOR = "#F3D030";
const ACCENT_COLOR = "#3D4459";

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg"
              style={{ backgroundColor: PRIMARY_COLOR, color: ACCENT_COLOR }}
            >
              K
            </div>
            <span className="text-lg font-semibold text-gray-800">Kjeldsberg</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#tjenester" className="text-sm font-medium text-gray-600 hover:text-gray-900">Tjenester</a>
            <a href="#om-oss" className="text-sm font-medium text-gray-600 hover:text-gray-900">Om oss</a>
            <a href="#kontakt" className="text-sm font-medium text-gray-600 hover:text-gray-900">Kontakt</a>
            <Button 
              style={{ backgroundColor: ACCENT_COLOR }}
              className="text-white"
            >
              Kontakt oss
            </Button>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
            <a href="#tjenester" className="text-gray-600">Tjenester</a>
            <a href="#om-oss" className="text-gray-600">Om oss</a>
            <a href="#kontakt" className="text-gray-600">Kontakt</a>
            <Button style={{ backgroundColor: ACCENT_COLOR }} className="w-full text-white">
              Kontakt oss
            </Button>
          </div>
        )}
      </header>

      {/* Hero */}
      <Hero
        subtitle="Kjeldsberg Eiendomsforvaltning"
        headline="Vi skaper <span style='color:#F3D030'>trygghet</span> for eierne og <span style='color:#F3D030'>trivsel</span> for leietakerne"
        description="Totalleverandør av drift og forvaltning innen eiendom. Vi leverer skreddersydde løsninger for din eiendom."
        ctaText="Kontakt oss"
        ctaHref="#kontakt"
        ctaSecondary="Les mer om oss"
        ctaSecondaryHref="#om-oss"
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
                href="#kontakt" 
                className="inline-flex items-center gap-2 font-medium"
                style={{ color: ACCENT_COLOR }}
              >
                Ta kontakt med oss <ArrowRight className="w-4 h-4" />
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
        ctaHref="#kontakt"
        ctaSecondary="Les om våre tjenester"
        ctaSecondaryHref="#tjenester"
        primaryColor={PRIMARY_COLOR}
      />

      {/* Contact */}
      <Contact
        title="Kontakt oss"
        contact={{
          email: "kundeservice@kjeldsberg.no",
          phone: "45 85 90 00",
          address: "Sluppenvegen 19, 7037 Trondheim"
        }}
        primaryColor={PRIMARY_COLOR}
      />

      {/* Footer */}
      <Footer
        companyName="Kjeldsberg Eiendomsforvaltning"
        primaryColor={PRIMARY_COLOR}
        socials={[
          { label: "LinkedIn", href: "https://www.linkedin.com/company/kjeldsberg-eiendomsforvaltning" }
        ]}
      />
    </div>
  );
}
