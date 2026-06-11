"use client";

import {
  Palette,
  Megaphone,
  FileText,
  BookOpen,
  CreditCard,
  Shirt,
  Coffee,
  IdCard,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Designing",
    description: "Creative graphic design for any print project.",
    icon: Palette,
  },
  {
    title: "Panaflex Printing",
    description:
      "High-quality panaflex for outdoor banners, standies, rollups, vinyl, one-way vision & backlit.",
    icon: Megaphone,
  },
  {
    title: "UV DTF Sticker",
    description: "Vivid, weather-resistant UV DTF stickers in any shape.",
    icon: FileText,
  },
  {
    title: "Bill Books",
    description: "Carbonless bill books, invoices and receipt pads.",
    icon: BookOpen,
  },
  {
    title: "Visiting Cards",
    description:
      "Matte / shine lamination, spot UV & pasting. Min. order 500 cards.",
    icon: CreditCard,
  },
  {
    title: "T-Shirt Printing",
    description: "Custom t-shirts: sublimation, DTF, vinyl & screen.",
    icon: Shirt,
  },
  {
    title: "Mug Printing",
    description: "Personalised photo & logo mugs.",
    icon: Coffee,
  },
  {
    title: "ID Cards",
    description: "Staff, student and event ID cards with lanyards.",
    icon: IdCard,
  },
];

export default function FeaturedServices() {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#E9DDC3] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#D8A53B]">
            What We Print
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#021B52] md:text-5xl">
            Featured <span className="text-[#D8A53B]">Services</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            A full spectrum of printing — from sharp business stationery to
            giant outdoor banners.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D8A53B]/30 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#021B52]">
                  <Icon size={24} className="text-[#D8A53B]" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#021B52]">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-slate-600">
                  {service.description}
                </p>

                <button className="mt-6 flex items-center gap-2 font-semibold text-[#021B52] transition-all group-hover:text-[#D8A53B]">
                  Learn more
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-3 rounded-full bg-[#021B52] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#03296f]">
            View all 22 services
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
