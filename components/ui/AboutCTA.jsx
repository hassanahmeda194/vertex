"use client";

import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="bg-gradient-to-r from-[#021B52] via-[#0B2457] to-[#2B3B59] py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Ready to print with Vertex?
        </h2>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/services"
            className="rounded-full bg-[#D8A53B] px-8 py-4 font-semibold text-[#021B52]"
          >
            Explore Services
          </Link>

          <Link
            href="/contact"
            className="rounded-full bg-[#D8A53B] px-8 py-4 font-semibold text-[#021B52]"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
