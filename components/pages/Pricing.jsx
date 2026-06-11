"use client";

import Link from "next/link";
import { ArrowLeft, BadgePercent } from "lucide-react";

export default function PricingPage() {
  return (
    <section className="min-h-[70vh] bg-[#F8FAFC]">
      <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-4">
        <div className="text-center">
          {/* Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[28px] bg-[#F5EFE1]">
            <BadgePercent
              size={38}
              className="text-[#D8A53B]"
            />
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-4xl font-bold text-[#021B52] md:text-5xl">
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
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#021B52] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#03286f]"
          >
            <ArrowLeft size={20} />
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}