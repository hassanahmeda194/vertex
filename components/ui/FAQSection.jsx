"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the minimum order for visiting cards?",
    answer:
      "Minimum order is 500 cards. Available in matte, gloss, spot UV and premium finishes.",
  },
  {
    question: "Do you offer design services?",
    answer:
      "Yes. Our creative team can design logos, brochures, business cards and complete branding material.",
  },
  {
    question: "How long does printing take?",
    answer:
      "Most jobs are completed within 1-3 working days depending on quantity and finishing requirements.",
  },
  {
    question: "Which file formats do you accept?",
    answer:
      "We accept PDF, AI, PSD, PNG, JPG, SVG and most industry-standard formats.",
  },
  {
    question: "Do you deliver?",
    answer: "Yes, we offer local delivery and nationwide courier services.",
  },
  {
    question: "What payment methods do you support?",
    answer:
      "Bank Transfer, JazzCash, EasyPaisa, Debit/Credit Cards and Cash payments.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#F7F8F5] py-20">
      <div className="mx-auto max-w-4xl px-4">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex rounded-full bg-[#F3E9D7] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#BD9541]">
            FAQ
          </span>

          <h2 className="mt-5 text-4xl font-bold text-[#033C2D] md:text-5xl">
            Frequently asked <span className="text-[#BD9541]">questions</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                className="flex w-full items-center justify-between px-6 py-5 text-left font-medium text-[#033C2D]"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={18}
                />
              </button>

              {openIndex === index && (
                <div className="border-t border-slate-100 px-6 py-4 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative mt-20 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#033C2D] via-[#064635] to-[#1F2429] p-8 md:p-12">
          {/* Glow */}
          <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-[#BD9541]/20 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="max-w-xl text-4xl font-bold leading-tight text-white">
                Ready to print something{" "}
                <span className="text-[#BD9541]">unforgettable?</span>
              </h3>

              <p className="mt-4 text-white/70">
                Book an order now or request a custom quote — we'll get back to
                you within hours.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <button className="whitespace-nowrap text-sm rounded-full bg-[#BD9541] px-8 py-4 font-semibold text-[#033C2D] transition hover:opacity-90">
                Book an Order
              </button>

              <button className="whitespace-nowrap text-sm rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10">
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
