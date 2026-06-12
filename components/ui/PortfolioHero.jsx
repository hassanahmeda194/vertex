"use client";

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#033C2D] via-[#064635] to-[#1F2429]">
      {/* Top CMYK Line */}
      <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#033C2D] via-[#BD9541] to-[#1F2429]" />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_65%)]" />

      <div className="relative mx-auto flex min-h-[360px] max-w-7xl items-center justify-center px-4 py-20 md:min-h-[420px]">
        <div className="max-w-4xl text-center">
          {/* Badge */}
          <span className="inline-flex rounded-full bg-[#BD9541]/15 px-5 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#BD9541]">
            Portfolio
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            Work We're Proud Of
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
            A glimpse into recent projects we've printed for
            businesses, schools, and brands across Pakistan.
          </p>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="h-px bg-white/10" />
    </section>
  );
}