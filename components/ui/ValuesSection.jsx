"use client";

import { Sparkles, Target, Heart, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Quality First",
    description:
      "Premium paper stocks, sharp inks, and exacting finishing on every job.",
  },
  {
    icon: Target,
    title: "On-Time Delivery",
    description:
      "We respect your deadlines — production lines are scheduled, not promised.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description:
      "Real humans on WhatsApp, ready to help you choose, design and approve.",
  },
  {
    icon: ShieldCheck,
    title: "Honest Pricing",
    description:
      "Transparent quotes, no hidden charges, bulk discounts that actually save.",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-[#F7F8F5] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#033C2D]">
            What We Stand For
          </h2>

          <p className="mt-4 text-slate-500">
            The principles behind every print that leaves our floor.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#033C2D]">
                  <Icon size={24} className="text-[#BD9541]" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#033C2D]">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-500">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
