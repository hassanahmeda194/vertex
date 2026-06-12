"use client";

import Link from "next/link";
import { ArrowLeft, BadgePercent } from "lucide-react";

export default function PricingPage() {
  return (
    <section className="min-h-[70vh] bg-[#F7F8F5]">
      <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-4">
        <div className="text-center">
          {/* Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[28px] bg-[#F3E9D7]">
            <BadgePercent
              size={38}
              className="text-[#BD9541]"
            />
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-4xl font-bold text-[#033C2D] md:text-5xl">
            Pricing & Quotes
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
            Request a custom quote — pricing depends on
            size, quantity and material.
          </p>

          <p className="mt-3 text-lg text-slate-500">
            Coming in the next build wave.
          </p>

          {/* Button */}
          <Link
            href="/"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#033C2D] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#04513D]"
          >
            <ArrowLeft size={20} />
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}