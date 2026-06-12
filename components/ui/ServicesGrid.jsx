"use client";

import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

const tabs = ["All", "Business", "Large", "Branding", "Gift", "School"];

export default function ServicesGrid() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  const filteredServices = services.filter((service) => {
    const categoryMatch = activeTab === "All" || service.category === activeTab;

    const searchMatch =
      service.title.toLowerCase().includes(search.toLowerCase()) ||
      service.description.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <section className="bg-[#F7F8F5] py-10">
      <div className="mx-auto max-w-7xl px-4">
        {/* Search + Tabs */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative w-full lg:max-w-sm">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 outline-none"
            />
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition
                ${
                  activeTab === tab
                    ? "bg-[#033C2D] text-white"
                    : "border bg-white text-slate-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-lg"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#033C2D]">
                    <Icon size={20} className="text-[#BD9541]" />
                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase text-slate-500">
                    {service.category}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#033C2D]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm text-slate-500">
                  {service.description}
                </p>

                {/* Buttons */}
                <div className="mt-6 flex gap-2">
                  <button className="flex-1 rounded-full bg-[#033C2D] py-3 text-sm font-medium text-white">
                    <span className="flex items-center justify-center gap-2">
                      Order
                      <ArrowRight size={14} />
                    </span>
                  </button>

                  <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5CC260] text-white">
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
