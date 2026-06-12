"use client";

import { Users, Briefcase, Award, Clock3 } from "lucide-react";

export default function AboutHero() {
  const stats = [
    {
      icon: Users,
      value: "5,000+",
      label: "HAPPY CLIENTS",
    },
    {
      icon: Briefcase,
      value: "50,000+",
      label: "JOBS PRINTED",
    },
    {
      icon: Award,
      value: "10+ Yrs",
      label: "EXPERIENCE",
    },
    {
      icon: Clock3,
      value: "24-48h",
      label: "AVG TURNAROUND",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#033C2D] via-[#064635] to-[#1F2429] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 text-center">
          {/* Badge */}
          <span className="inline-flex rounded-full bg-[#BD9541]/15 px-5 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#BD9541]">
            About Us
          </span>

          {/* Heading */}
          <h1 className="mx-auto mt-8 max-w-5xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Crafting Print That Means Business
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-white/80 md:text-2xl">
            Vertex Print Solutions is a full-service printing company built on a
            simple idea: every print should make the brand look better than it
            did before.
          </p>
        </div>
      </div>

      {/* Stats Card */}
      <div className="relative z-10 mx-auto -mt-16 max-w-7xl px-4 pb-12">
        <div className="rounded-[32px] bg-white shadow-xl">
          <div className="grid grid-cols-1 divide-y md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center px-8 py-10 text-center"
                >
                  <Icon size={34} className="mb-5 text-[#BD9541]" />

                  <h3 className="text-4xl font-bold text-[#033C2D]">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm font-medium tracking-widest text-slate-500">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
