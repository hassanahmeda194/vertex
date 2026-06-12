"use client";

import Link from "next/link";

export default function PortfolioCTA() {
  return (
    <section className="bg-[#F7F8F5] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-4xl font-bold text-[#033C2D] md:text-5xl">
          Like what you see?
        </h2>

        <p className="mt-5 text-lg text-slate-500">
          Let us bring your idea to life with the same level of craft.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/order"
            className="inline-flex items-center justify-center rounded-full bg-[#BD9541] px-10 py-4 text-lg font-semibold text-[#033C2D] transition-all duration-300 hover:opacity-90"
          >
            Place an Order
          </Link>

          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-full bg-[#033C2D] px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#04513D]"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
