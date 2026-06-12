"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahsan R.",
    role: "Restaurant Owner",
    quote:
      "Bill books and menu prints delivered next day. Colours were exactly on brand.",
  },
  {
    name: "Sara K.",
    role: "School Principal",
    quote: "Our shields and ID cards looked premium. Students loved them.",
  },
  {
    name: "Bilal M.",
    role: "Startup Founder",
    quote: "Visiting cards with spot UV came out beautifully. Will reorder.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F7F8F5] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#F3E9D7] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#BD9541]">
            Loved By Clients
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#033C2D] md:text-5xl lg:text-6xl">
            What our <span className="text-[#BD9541]">customers</span> say
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#BD9541" stroke="#BD9541" />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-6 text-lg leading-relaxed text-slate-700">
                "{item.quote}"
              </p>

              {/* User */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#033C2D] text-lg font-bold text-[#BD9541]">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-[#033C2D]">{item.name}</h4>

                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
