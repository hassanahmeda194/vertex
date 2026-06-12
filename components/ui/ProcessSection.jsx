"use client";

import {
  MousePointerClick,
  Upload,
  FileCheck,
  CreditCard,
  Truck,
} from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Choose Service",
    description: "Pick what you need from 22+ printing options.",
    icon: MousePointerClick,
  },
  {
    number: 2,
    title: "Upload Design",
    description: "Send your artwork or let us design it for you.",
    icon: Upload,
  },
  {
    number: 3,
    title: "Confirm Details",
    description: "Approve size, paper, finishing and quantity.",
    icon: FileCheck,
  },
  {
    number: 4,
    title: "Pay Online",
    description: "Secure card, JazzCash, Easypaisa or bank transfer.",
    icon: CreditCard,
  },
  {
    number: 5,
    title: "Receive Delivery",
    description: "Pickup, local delivery or courier — your call.",
    icon: Truck,
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#F3E9D7] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#BD9541]">
            How It Works
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#033C2D] md:text-5xl lg:text-6xl">
            From idea to <span className="text-[#BD9541]">delivery</span>
          </h2>

          <p className="mt-5 text-lg text-slate-500">
            A simple five-step process designed to be fast, transparent and
            stress-free.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Desktop Line */}
          <div className="absolute left-0 right-0 top-7 hidden h-[2px] bg-[#BD9541]/30 lg:block" />

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative text-center">
                  {/* Icon */}
                  <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#033C2D]">
                    <Icon size={24} className="text-[#BD9541]" />

                    {/* Number Badge */}
                    <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#BD9541] text-xs font-bold text-[#033C2D]">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mt-5 text-xl font-bold text-[#033C2D]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    {step.description}
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
