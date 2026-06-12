"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Star,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#033C2D]">
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#BD9541]/40 bg-[#BD9541]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#BD9541]">
              <Sparkles size={14} />
              Premium Printing Studio
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-5xl font-bold leading-none text-white md:text-6xl lg:text-7xl">
              Printing <span className="text-[#BD9541]">Excellence.</span>
              <br />
              Delivering{" "}
              <span className="bg-gradient-to-r from-[#BD9541] via-[#D6B36A] to-[#F3E9D7] bg-clip-text text-transparent">
                Impact.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80">
              From visiting cards to giant panaflex banners — Vertex delivers
              sharp, vibrant, on-time printing for businesses, schools and
              creators.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/order"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#BD9541] px-8 py-4 font-semibold text-black transition hover:opacity-90"
              >
                Book an Order
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Request a Quote
              </Link>

              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#4CAF50] px-8 py-4 font-semibold text-white transition hover:bg-[#449d48]"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>

            {/* Features */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#BD9541]" />
                22+ Services
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#BD9541]" />
                Same-day available
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#BD9541]" />
                Free design consult
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative mx-auto w-full max-w-xl">
            {/* Rating Card */}
            <div className="absolute -right-4 top-4 z-20 rounded-3xl bg-white px-5 py-4 shadow-xl">
              <div className="flex gap-1 text-[#BD9541]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="mt-1 text-sm text-gray-600">Trusted quality</p>
            </div>

            {/* Happy Clients */}
            <div className="absolute -bottom-4 -left-4 z-20 rounded-3xl bg-white px-6 py-5 shadow-xl">
              <div className="text-4xl font-bold text-[#BD9541]">500+</div>

              <div className="text-sm text-gray-500">Happy clients</div>
            </div>

            {/* Image Card */}
            <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="overflow-hidden rounded-[32px] bg-white p-6">
                <Image
                  src="/vertex-logo..png"
                  alt="Vertex Print Solutions"
                  width={700}
                  height={700}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
