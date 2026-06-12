"use client";

import { Printer, Shield, Target, Palette, Zap } from "lucide-react";

const pillars = [
  {
    title: "Print",
    description: "State-of-the-art digital, offset and large-format machines.",
    icon: Printer,
    iconColor: "text-slate-800",
  },
  {
    title: "Quality",
    description: "Premium paper stock, true colour and crisp finishing.",
    icon: Shield,
    iconColor: "text-[#BD9541]",
  },
  {
    title: "Precision",
    description: "Pixel-perfect alignment, accurate cuts, exact dimensions.",
    icon: Target,
    iconColor: "text-[#033C2D]",
  },
  {
    title: "Creativity",
    description: "Free design consultation by our in-house creative team.",
    icon: Palette,
    iconColor: "text-[#BD9541]",
  },
  {
    title: "Reliability",
    description: "Same-day options available. We deliver on the date promised.",
    icon: Zap,
    iconColor: "text-slate-800",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[#F7F8F5] py-16 md:py-24">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(#dbe4f0 1px, transparent 1px),
            linear-gradient(90deg, #dbe4f0 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#EFE6D4] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#BD9541]">
            Why Vertex
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#033C2D] md:text-5xl lg:text-6xl">
            Built on five <span className="text-[#BD9541]">pillars</span>
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Everything we print is judged against the standards baked into our
            name.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <div
                key={index}
                className="rounded-[30px] border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                  <Icon size={30} className={pillar.iconColor} />
                </div>

                <h3 className="mt-6 text-3xl font-bold text-[#033C2D]">
                  {pillar.title}
                </h3>

                <p className="mt-4 text-slate-600">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
