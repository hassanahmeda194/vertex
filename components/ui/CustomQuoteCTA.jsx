"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function CustomQuoteCTA() {
  return (
    <section className="bg-gradient-to-r from-[#021B52] via-[#0B2457] to-[#2B3B59] py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Don't see what you need?
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg text-white/75">
          We do custom print jobs of all kinds. Send us your requirement and
          we'll quote it.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center rounded-full bg-[#D8A53B] px-8 py-4 text-lg font-semibold text-[#021B52] transition hover:opacity-90"
          >
            Request a Custom Quote
          </Link>

          <a
            href="https://wa.me/923182287473"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#59C45A] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#4CB44D]"
          >
            <MessageCircle size={22} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
