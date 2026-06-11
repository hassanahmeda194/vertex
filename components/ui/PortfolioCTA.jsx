"use client";

import Link from "next/link";

export default function PortfolioCTA() {
  return (
    <section className="bg-[#F8FAFC] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-4xl font-bold text-[#021B52] md:text-5xl">
          Like what you see?
        </h2>

        <p className="mt-5 text-lg text-slate-500">
          Let us bring your idea to life with the same level of craft.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/order"
            className="inline-flex items-center justify-center rounded-full bg-[#D8A53B] px-10 py-4 text-lg font-semibold text-[#021B52] transition-all duration-300 hover:opacity-90"
          >
            Place an Order
          </Link>

          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-full bg-[#021B52] px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#03286f]"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
