"use client";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#033C2D] via-[#064635] to-[#1F2429]">
      {/* Top Border */}
      <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#033C2D] via-[#BD9541] to-[#1F2429]" />

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <span className="inline-flex rounded-full bg-[#BD9541]/15 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#BD9541]">
            Our Services
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Everything You Can Print With Vertex
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-3xl text-sm text-white/70 md:text-base">
            From visiting cards to giant panaflex banners — explore our complete
            print catalog.
          </p>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="h-px bg-white/10" />
    </section>
  );
}
