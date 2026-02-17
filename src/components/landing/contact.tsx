"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
}

export interface ContactProps {
  title?: string;
  subtitle?: string;
  contact?: ContactInfo;
  contactInfo?: ContactInfo;
  primaryColor?: string;
}

export function Contact({
  title = "Kontakt oss",
  subtitle,
  contact,
  contactInfo,
  primaryColor = "#2B7FFF",
}: ContactProps) {
  const info = contact || contactInfo || {};
  const email = info.email || "";
  const phone = info.phone || "";
  const address = info.address || "";

  return (
    <section id="contact" className="py-20 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#101828] mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-[#6B7280]">{subtitle}</p>}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-[#101828] mb-6">Ta kontakt</h3>
            <div className="space-y-4">
              {email && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${primaryColor}15` }}>
                    <Mail className="w-5 h-5" style={{ color: primaryColor }} />
                  </div>
                  <a href={`mailto:${email}`} className="text-[#6B7280] hover:text-[#101828]">{email}</a>
                </div>
              )}
              {phone && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${primaryColor}15` }}>
                    <Phone className="w-5 h-5" style={{ color: primaryColor }} />
                  </div>
                  <a href={`tel:${phone}`} className="text-[#6B7280] hover:text-[#101828]">{phone}</a>
                </div>
              )}
              {address && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${primaryColor}15` }}>
                    <MapPin className="w-5 h-5" style={{ color: primaryColor }} />
                  </div>
                  <span className="text-[#6B7280]">{address}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
