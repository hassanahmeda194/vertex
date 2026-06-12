"use client";

export default function OurStory() {
  return (
    <section className="bg-[#F7F8F5] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-[#033C2D] md:text-5xl">
              Our Story
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                What started as a small offset press has grown into a complete
                printing destination — combining traditional offset craft with
                modern digital and large-format technology under one roof.
              </p>

              <p>
                From a single visiting card to a 30-foot panaflex, the Vertex
                team treats every job with the same care: clean files,
                calibrated colour, premium materials, and on-time delivery.
              </p>

              <p>
                Today we serve businesses, schools, startups and brands across
                Pakistan — and ship custom merchandise to clients abroad.
              </p>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="relative">
            {/* Main Box */}
            <div className="relative h-[400px] overflow-hidden rounded-[40px] bg-gradient-to-br from-[#033C2D] via-[#BD9541] to-[#1F2429] shadow-2xl md:h-[550px]">
              {/* Real Image */}
              {/* <Image
                src="/about-story.jpg"
                alt="Our Story"
                fill
                className="object-cover"
              /> */}
            </div>

            {/* Decorative Shape */}
            <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-[28px] bg-gradient-to-br from-[#BD9541] to-[#D6B36A] md:h-36 md:w-36" />
          </div>
        </div>
      </div>
    </section>
  );
}
